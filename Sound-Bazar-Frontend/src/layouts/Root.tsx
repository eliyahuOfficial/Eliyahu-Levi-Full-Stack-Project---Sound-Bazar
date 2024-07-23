
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/Header";
import Footer from "../pages/Footer";
import { CardType } from "../@types/types";
import AudioPlayerComponent from "../pages/AudioPlayer";


const Root = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);





    const handleCardSelect = (card: CardType) => {
        if (selectedCard?._id === card._id) {
            setIsPlaying(!isPlaying);
            if (isPlaying) {
                setSelectedCard(null);
            }
        } else {
            setSelectedCard(card);
            setIsPlaying(true);
        }
    };

    const closeAudioPlayer = () => {
        setSelectedCard(null);
        setIsPlaying(false);
    };

    useEffect(() => {
        if (!selectedCard) {
            setIsPlaying(false);
        }
    }, [selectedCard]);

    return (
        <div className="dark:bg-slate-700 bg-stone-100 flex flex-col min-h-screen main">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main className="flex-1 max-w-screen-2xl mx-auto">
                <Outlet context={{ searchQuery, handleCardSelect, selectedCard, isPlaying }} />
            </main>
            {selectedCard && (
                <div className="fixed bottom-0 left-0 right-0 z-50 custom-audio-player gradientBgAudio">
                    <AudioPlayerComponent
                        src={selectedCard.sound.url}
                        onClose={closeAudioPlayer}
                        title={selectedCard.title}
                        image={selectedCard.image.url}
                        key={selectedCard._id}
                    />
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Root;
