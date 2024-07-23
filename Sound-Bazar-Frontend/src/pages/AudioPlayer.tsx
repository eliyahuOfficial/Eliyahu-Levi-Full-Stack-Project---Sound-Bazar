
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface AudioPlayerProps {
    src: string;
    onClose: () => void;
    title: string;
    image: string;
}




const AudioPlayerComponent: React.FC<AudioPlayerProps> = ({ src, onClose, title, image }) => {

    if (!onClose) {
        return null;
    }

    return (
        <div className='relative flex justify-center items-center max-w-screen-xl mx-auto px-4 '>

            <img src={image} alt={title} className=" absolute w-10 h-10 object-cover rounded-full logoaudio shadow-xl " />
            <button className="close-button" onClick={onClose}>
                <AiFillCloseCircle />
            </button>

            <AudioPlayer
                src={src}
                header={title}
                autoPlay
                className=" mb-8 custom-audio-player "
            />


        </div>

    );
};

export default AudioPlayerComponent;
