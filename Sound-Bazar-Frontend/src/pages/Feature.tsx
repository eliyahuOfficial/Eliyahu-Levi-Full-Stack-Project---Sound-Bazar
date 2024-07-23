import feature from '../assets/sound1.jpg';
import feature3 from '../assets/sound2.jpg';
import feature2 from '../assets/sound3.jpg';
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import { NavLink } from 'react-router-dom';


const Feature = () => {
    return (
        <div className="mt-10 p-6  max-w-screen-xl mx-auto dark:text-white">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div
                    variants={fadeIn("right", 0.15)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="lg:w-1/4">
                    <h3 className="text-3xl font-bold lg:w-1/2 mb-3">Dynamic Sound Community.</h3>
                    <p className="text-lg">
                        Innovative soundscape community, interactive sound-sharing, empowering musical collaborations.
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    className="w-full lg:w-3/4">
                    <NavLink to="/about">
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8 ">
                            <div className=" rounded-md h-96 shadow-md flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer border px-2">
                                <div>
                                    <img src={feature} alt="Organized study plan" className="w-72 rounded-lg mb-4" />
                                    <h5 className="text-2xl  px-5 text-center">Discover New Sounds</h5>
                                </div>
                            </div>
                            <div className=" rounded-md  h-96 shadow-md  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer border px-2">
                                <div>
                                    <img src={feature3} alt="Structured study routine" className="w-72 rounded-lg mb-4" />
                                    <h5 className="text-2xl px-5 text-center">Engage with Creators</h5>
                                </div>
                            </div>
                            <div className="rounded-md  h-96 shadow-md  flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer border px-2">

                                <div>
                                    <img src={feature2} alt="Streamlined study schedule" className="w-72 rounded-lg mb-4" />
                                    <h5 className="text-2xl px-5 text-center">Share Your Favorites</h5>
                                </div>

                            </div>
                        </div>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};

export default Feature;
