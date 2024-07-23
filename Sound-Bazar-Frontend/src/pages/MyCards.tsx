
import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import defaultImage from "../assets/user-regular-new.png";
import { myCardById } from "../services/cards";
import { CardType, ErrorType } from "../@types/types";
import '../pages/Cards.scss';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import { Button } from 'flowbite-react';


const MyCards = () => {
    const { searchQuery, handleCardSelect, selectedCard, isPlaying } = useOutletContext<{
        searchQuery: string,
        handleCardSelect: (card: CardType) => void,
        selectedCard: CardType | null,
        isPlaying: boolean
    }>();


    const { id } = useParams();
    const [cards, setCards] = useState<CardType[]>([]);
    const [error, setError] = useState<ErrorType>();


    useEffect(() => {
        userCards();
    }, [id]);

    const userCards = async () => {
        try {
            const response = await myCardById();
            setCards(response.data);
            setError(error);
        } catch (error) {

            console.error("Error Cards:", error);
        }
    };

    return (
        <div className="flex flex-col">

            <div className="flex flex-wrap  justify-center items-center gap-6 pt-3 dark:text-white ">
                {cards.map((card: CardType, index: number) => (
                    <div
                        className="flex flex-col w-96 justify-center items-center p-5 rounded-md text-center m-2 relative drop-shadow-md border hover:-translate-y-4 transition-all duration-300" key={index}>

                        <Link to={`/cards/${card._id}`} className="flex flex-col items-center ">
                            <motion.img
                                variants={fadeIn("down", 0.25)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                src={card.image ? card.image.url : defaultImage}
                                alt={card.image ? card.image.alt : "No image available"}
                                className="w-84 h-64 object-cover mt-3 rounded-md drop-shadow-md"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = defaultImage;
                                }}
                            />
                            <div className="m-2">
                                <h2 className="text-xl px-1 py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.2rem' }}>
                                    {card.title}
                                </h2>
                                <p className="mb-6 mt-2 text-base">{card.subtitle}</p>
                            </div>

                            <div className="rounded-md drop-shadow-md dark:text-white w-80 text-left border p-2">
                                <h3 className="text-l py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.1rem' }}>Creator Info :</h3>
                                <p className="text-sm"><span className='text-blue-600'>Mail: </span>{card.email}</p>
                                <p className="text-sm"><span className='text-blue-600'>Web: </span>{card.web}</p>
                                <p className="text-sm"><span className='text-blue-600'>Country: </span>{card.address.country}</p>

                            </div>
                        </Link>

                        <Button onClick={() => handleCardSelect(card)} gradientDuoTone="purpleToPink" className='px-8 my-10'>
                            {selectedCard?._id === card._id && isPlaying ? 'Pause' : 'Play'}
                        </Button>

                    </div>


                ))}
            </div>

        </div>

    );
};

export default MyCards;