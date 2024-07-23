
import React from 'react';
import FullScreenVideo from '../components/FullScreenVideo';
import Feature from './Feature';

const Home: React.FC = () => {
    return (
        <div>
            <div className="relative">
                <FullScreenVideo />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="md:text-7xl text-lg font-bold mb-4 ">Welcome to Sound Bazar</h1>
                    <p className="text-lg">Unleashing Creativity, Empowering Artists, Connecting Music Lovers Worldwide, Celebrating Musical Excellence Together.</p>
                </div>
            </div>
            <Feature />
        </div>
    );
};

export default Home;