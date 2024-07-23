
import React, { useEffect, useState } from 'react';
import { CardType } from '../@types/types';
import { useCards } from '../hooks/useCards';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import defaultImage from "../assets/user-regular-new.png";
import { Button } from 'flowbite-react';
import { useAuth } from '../hooks/useAuth';
import { deleteCard, getCards, likeCard } from '../services/cards';
import { showErrorDialog } from '../ui/dialogs';
import { AiOutlineLike } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';



const NewCards: React.FC = () => {
    const { searchQuery, handleCardSelect, selectedCard, isPlaying } = useOutletContext<{
        searchQuery: string,
        handleCardSelect: (card: CardType) => void,
        selectedCard: CardType | null,
        isPlaying: boolean
    }>();
    const { cards, error, setCards } = useCards();

    const { isAdmin } = useAuth();

    const filteredCards = cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [likedCards, setLikedCards] = useState<string[]>(() => {


        const saved = localStorage.getItem("likedCards");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("likedCards", JSON.stringify(likedCards));
    }, [likedCards]);


    const handleLike = (id: string) => {
        likeCard(id)
            .then((res) => {
                const updatedCard = res.data;
                const updatedCards = cards.map((card) => {
                    if (card._id === updatedCard._id) {
                        const updatedCard = { ...card, likes: [...card.likes, 'user_id'] };
                        return updatedCard;
                    }
                    return card;
                });
                setLikedCards((prevLikedCards) => [...prevLikedCards, id]);
                setCards(updatedCards);

            })
            .catch((error) => {
                console.error("Error adding like:", error);
            });
    };

    const deleteCardHandler = (id: string) => {
        deleteCard(id)
            .then((res) => {
                console.log(res);
                showErrorDialog("Delete", "Card deleted");
                getCards().then((res) => setCards(res.data));
            })
            .catch((err) => console.log(err));
    };


    return (
        <div className="flex flex-wrap justify-center items-center gap-6 pt-3 dark:text-white">

            {error && <div>{error}</div>}
            {filteredCards.map((c) => (
                <div
                    key={c._id}
                    className="flex flex-col w-96 justify-center items-center p-5 rounded-md text-center m-2 relative drop-shadow-md border hover:-translate-y-4 transition-all duration-300"
                >
                    <Link to={`/cards/${c._id}`} className="flex flex-col items-center">
                        <motion.img
                            variants={fadeIn("down", 0.25)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.4 }}
                            src={c.image && c.image.url ? c.image.url : defaultImage}
                            alt={c.image && c.image.alt ? c.image.alt : "No image available"}
                            className="w-84 h-64 object-cover mt-3 rounded-md drop-shadow-md"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = defaultImage;
                            }}
                        />
                        <div className="m-2 mt-5">
                            <h2 className="text-xl px-1 py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.2rem' }}>
                                {c.title}
                            </h2>
                            <p className="mb-3 mt-2 text-base">{c.subtitle}</p>
                        </div>
                        <div className="rounded-md drop-shadow-md dark:text-white w-80 text-left border p-2">
                            <h3 className="text-l py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.1rem' }}>Creator Info:</h3>
                            <p className="text-sm"><span className='text-blue-600'>Mail: </span>{c.email}</p>
                            <p className="text-sm"><span className='text-blue-600'>Web: </span>{c.web}</p>
                            <p className="text-sm"><span className='text-blue-600'>Country: </span>{c.address.country}</p>
                            <span className="absolute bottom-0 right-0 px-4 py-2 rounded-md text-sm dark:text-white text-blue-800 flex flex-row gap-4 justify-center items-center ">
                                <AiOutlineLike />{c.likes ? c.likes.length : 0}
                            </span>

                        </div>
                    </Link>


                    <Button onClick={() => handleCardSelect(c)} gradientDuoTone="purpleToPink" className='px-8 my-10'>
                        {selectedCard?._id === c._id && isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    {isAdmin && (

                        <RiDeleteBin5Line
                            onClick={() => deleteCardHandler(c._id)}
                            style={{
                                cursor: "pointer",
                                fontSize: "28px",
                                position: "absolute",
                                left: 33,
                                bottom: 22,
                                color: "blue"
                            }}

                        />

                    )}


                    <AiOutlineLike
                        onClick={() => handleLike(c._id)}
                        style={{
                            cursor: "pointer",
                            fontSize: "28px",
                            color: likedCards.includes(c._id) ? "red" : "blue",
                            pointerEvents: likedCards.includes(c._id) ? "none" : "auto",
                            opacity: likedCards.includes(c._id) ? 0.5 : 1,
                            position: "absolute",
                            bottom: 22,
                            right: 33,
                        }}
                    />


                </div>

            ))}

        </div>
    );
};

export default NewCards;
