import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import defaultImage from "../assets/user-regular-new.png";
import { useCards } from "../hooks/useCards";
import { Button } from 'flowbite-react';
import '../pages/Cards.scss';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import { CardType } from "../@types/types";

const LikeCards = () => {

    const { searchQuery, handleCardSelect, selectedCard, isPlaying } = useOutletContext<{
        searchQuery: string,
        handleCardSelect: (card: CardType) => void,
        selectedCard: CardType | null,
        isPlaying: boolean
    }>();

    const { cards } = useCards();
    const [likes] = useState<string[]>(() => {
        const storedLikes = localStorage.getItem("likedCards");
        return storedLikes ? JSON.parse(storedLikes) : [];
    });

    useEffect(() => {
        localStorage.setItem("likedCards", JSON.stringify(likes));
    }, [likes]);


    const likedCards = cards.filter(card => likes.includes(card._id));

    return (
        <div className="flex flex-col">

            <div className="flex flex-wrap justify-center items-center gap-6 pt-3 dark:text-white">
                {likedCards.map((c) => (
                    <div key={c._id}
                        className="flex flex-col w-96 justify-center items-center p-5 rounded-md text-center m-2 relative drop-shadow-md border hover:-translate-y-4 transition-all duration-300">
                        <Link to={`/cards/${c._id}`} className="flex flex-col items-center ">
                            <motion.img
                                variants={fadeIn("down", 0.25)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                src={c.image ? c.image.url : defaultImage}
                                alt={c.image ? c.image.alt : "No image available"}
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
                                <h3 className="text-l py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.1rem' }}>Creator Info :</h3>
                                <p className="text-sm"><span className='text-blue-600'>Mail: </span>{c.email}</p>
                                <p className="text-sm"><span className='text-blue-600'>Web: </span>{c.web}</p>
                                <p className="text-sm"><span className='text-blue-600'>Country: </span>{c.address.country}</p>
                            </div>
                        </Link>
                        <Button onClick={() => handleCardSelect(c)} gradientDuoTone="purpleToPink" className='px-8 my-10'>
                            {selectedCard?._id === c._id && isPlaying ? 'Pause' : 'Play'}
                        </Button>
                    </div>

                ))}

            </div >
        </div >
    );
};

export default LikeCards;