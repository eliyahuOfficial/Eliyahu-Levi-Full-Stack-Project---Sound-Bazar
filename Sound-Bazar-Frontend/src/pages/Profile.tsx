import { useEffect, useState } from "react";
import { userDetails } from "../services/auth";
import { RegisterUser } from "../@types/types";
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import logo from '../assets/logo.png'
import defaultImage from "../assets/user-regular-new.png";
import { useAuth } from "../hooks/useAuth";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {

    const [user, setUser] = useState<RegisterUser>();
    const [error, setError] = useState<string | null>(null);
    const { isAdmin } = useAuth();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/crm');
    };


    useEffect(() => {
        const userId = localStorage.getItem("user_id");

        if (userId) {
            userDetails(userId)
                .then((res) => {
                    setUser(res.data);
                    setError(null);
                })
                .catch((e) => {
                    console.error(e);
                    setError("Failed to fetch user details.");
                });
        } else {
            setError("User ID not found in local storage.");
        }
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="shadow-md mb-5 flex flex-col md:flex-row md:px-28  md:gap-44 border rounded-md drop-shadow-md mt-5">
            <div>
                <h2 className="mt-8 text-center text-2xl  leading-9 tracking-tight text-gray-900 dark:text-white">
                    Creator Profile
                </h2>
                <div className=" flex  flex-col justify-end items-center  px-6 py-8 lg:px-8 gap-4">
                    <img
                        src={user?.image ? user.image.url : defaultImage}
                        alt={user?.image ? user.image.alt : "No image available"}
                        className="w-24 h-24 object-cover mb-3 rounded-full shadow-md "
                        onError={(e: any) => {
                            e.target.onError = null;
                            e.target.src = defaultImage;
                        }}
                    />
                    <h3 className="text-l py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.1rem' }}>Creator Info:
                    </h3>
                    <p className="dark:text-white">{user?.name.first} {user?.name.middle} {user?.name.last}</p>

                    <div className="dark:text-white w-80 text-left   p-6 my-4">
                        <p><span className='text-blue-600'>Phone: </span>{user?.phone}</p>
                        <p><span className='text-blue-600'>Mail: </span>{user?.email}</p>
                        <p><span className='text-blue-600'>State: </span>{user?.address.state}</p>
                        <p><span className='text-blue-600'>Country: </span>{user?.address.country}</p>
                        <p><span className='text-blue-600'>City: </span>{user?.address.city}</p>
                        <p><span className='text-blue-600'>Street: </span>{user?.address.street}</p>
                        <p><span className='text-blue-600'>House Number: </span>{user?.address.houseNumber}</p>
                        <p><span className='text-blue-600'>Zip: </span>{user?.address.zip}</p>
                    </div>


                </div>
            </div>


            <div className="flex flex-col justify-center items-center mt-3">
                <img
                    src={logo}
                    className="mx-auto w-72  slide-in-fwd-center mt-3"
                    style={{ height: 'auto' }}
                    alt="User Image"
                />
                <p className="mt-6 text-center text-2xl  font-mono leading-9 tracking-tight text-gray-900  dark:text-white">Ready To Get Access</p>
                <p className=" text-center text-sm text-gray-500 mb-5 dark:text-white">
                    World of Sound!{' '}
                </p>
                {isAdmin && (
                    <Button
                        gradientDuoTone="purpleToPink"
                        className='px-8 my-10'
                        onClick={handleNavigate}
                    >
                        CRM Dashboard
                    </Button>
                )}
                <Button
                    className="mb-4"
                    gradientDuoTone="purpleToPink"
                    onClick={() => navigate(`/useredit/${user?.id}`, { state: { user } })}
                >
                    Update User
                </Button>
            </div>

        </motion.div>
    );
};

export default Profile;
