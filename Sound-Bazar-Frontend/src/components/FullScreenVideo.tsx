import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../pages/veriants";

const FullScreenVideo: React.FC = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}

            className='flex justify-center items-center max-w-screen-xl mx-auto p-2'>
            <video autoPlay loop muted className=" min-w-80 rounded-lg -z-0 opacity-70 ">
                <source src="/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
    );
};

export default FullScreenVideo;
