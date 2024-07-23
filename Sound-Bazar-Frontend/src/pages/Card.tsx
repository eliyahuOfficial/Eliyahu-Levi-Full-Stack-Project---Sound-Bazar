import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { CardType, ErrorType } from "../@types/types";
import { getCardById } from "../services/cards";
import defaultImage from "../assets/user-regular-new.png";
import "./Cards.scss";
import Comments from "./Comments";
import axios from "axios";
import { Button } from "flowbite-react";

const Card = () => {
    const { searchQuery, handleCardSelect, selectedCard, isPlaying } = useOutletContext<{
        searchQuery: string,
        handleCardSelect: (card: CardType) => void,
        selectedCard: CardType | null,
        isPlaying: boolean
    }>();
    const { id } = useParams<{ id: string }>();
    const [card, setCard] = useState<CardType>();
    const [error, setError] = useState<ErrorType>();

    useEffect(() => {
        getCardById(id ?? "")
            .then((res) => {
                setCard(res.data);
            })
            .catch((e) => {
                const status = e.response ? e.response.status : null;
                const message = e.message;
                const details = e.response ? e.response.data : null;
                setError({ status, message, details });
            });
    }, [id]);

    const handleDownload = async (url: string, filename: string) => {
        try {
            const response = await axios.get(url, {
                responseType: 'blob',
            });
            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    };

    return (
        <div className="p-4 dark:text-white" >
            {card && (
                <div>
                    <img
                        src={card.image ? card.image.url : defaultImage}
                        alt={card.image ? card.image.alt : "No image available"}
                        className="object-cover my-3 rounded-md shadow-md"
                        onError={(e: any) => {
                            e.target.onError = null;
                            e.target.src = defaultImage;
                        }}
                    />
                    <div className="mt-1">
                        <h2 className="text-2xl py-0.5 font-bold">{card.title}</h2>
                        <p className="mb-2">{card.subtitle}</p>
                        <h3 className="font-bold">Creator Info: </h3>
                        <p>Phone: {card.phone}</p>
                        <p>Mail: {card.email}</p>
                        <p className="mb-2">Web: {card.web}</p>
                        <div >
                            {card && card.address && (
                                <div >
                                    <h3 className="font-bold">
                                        Address :
                                    </h3>
                                    <p className="text-sm">
                                        City : {card.address.city}
                                    </p>
                                    <p className="text-sm">
                                        Street : {card.address.street}
                                    </p>
                                    <p className="text-sm">
                                        House Number : {card.address.houseNumber}
                                    </p>
                                    <p className="text-sm">State : {card.address.state}</p>
                                    <p className="text-sm">Zip : {card.address.zip}</p>
                                    <p className="text-sm mb-2 ">Country : {card.address.country}</p>
                                </div>
                            )}
                            <div>
                                <h3 className="text-l  py-0.5 font-bold">
                                    Description :
                                </h3>{" "}
                                {card?.description}
                            </div>

                        </div>
                        <div className="flex md:flex-row my-5 gap-5">
                            <Button onClick={() => handleCardSelect(card)} gradientDuoTone="purpleToPink" >
                                {selectedCard?._id === card._id && isPlaying ? 'Pause' : 'Play'}
                            </Button>
                            <Button
                                gradientDuoTone="purpleToPink"
                            >
                                <Link to={`/cardedit/${id}`}>
                                    Update Card
                                </Link>
                            </Button>
                            {card.sound && (
                                <Button
                                    onClick={() => handleDownload(card.sound.url, `${card.title}.mp3`)}
                                    gradientDuoTone="purpleToPink"

                                >
                                    Download Sound
                                </Button>
                            )}

                        </div>
                    </div>
                </div>
            )}

            {card && <Comments cardId={card._id} />}
        </div >
    );
};

export default Card;
