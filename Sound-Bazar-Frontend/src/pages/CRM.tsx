import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { deleteUser, getUsers } from "../services/auth";
import { RegisterUser } from "../@types/types";
import { motion } from 'framer-motion';
import { fadeIn } from './veriants';
import defaultImage from "../assets/user-regular-new.png";
import { useAuth } from "../hooks/useAuth";
import { RiDeleteBin5Line } from "react-icons/ri";
import { showErrorDialog } from "../ui/dialogs";

const CRM: React.FC = () => {
    const [users, setUsers] = useState<RegisterUser[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { searchQuery } = useOutletContext<{ searchQuery: string }>();
    const { isAdmin } = useAuth();
    const [userCount, setUserCount] = useState<number>(0);
    const [businessUserCount, setBusinessUserCount] = useState<number>(0);
    const [clientUserCount, setClientUserCount] = useState<number>(0);

    useEffect(() => {
        if (isAdmin) {
            getUsers()
                .then(response => {
                    setUsers(response.data);
                    calculateUserCounts(response.data);
                })
                .catch(error => {
                    setError(error.message);
                });
        }
    }, [isAdmin]);

    const calculateUserCounts = (users: RegisterUser[]) => {
        const totalUsers = users.length;
        const totalBusinessUsers = users.filter(user => user.isBusiness).length;
        const totalClientUsers = totalUsers - totalBusinessUsers; // Calculate client users
        setUserCount(totalUsers);
        setBusinessUserCount(totalBusinessUsers);
        setClientUserCount(totalClientUsers);
    };

    if (!isAdmin) {
        return <div>You are not authorized to view this page.</div>;
    }

    const filteredUsers = users.filter(user =>
        user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const deleteCardHandler = (id: string) => {
        deleteUser(id)
            .then((res) => {
                console.log(res);
                showErrorDialog("Delete", "User deleted");
                getUsers().then((res) => {
                    setUsers(res.data);
                    calculateUserCounts(res.data);
                });
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-col items-center gap-6 pt-3 dark:text-white">
            <div className="flex justify-center gap-10">
                <div>
                    Total Users: {userCount}
                </div>
                <div>
                    Creators Users: {businessUserCount}
                </div>
                <div>
                    Client Users: {clientUserCount}
                </div>
            </div>
            {error && <div>{error}</div>}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-3 dark:text-white">
                {filteredUsers.map((user) => (
                    <div
                        key={user._id}
                        className="flex flex-col w-96 justify-center items-center p-5 rounded-md text-center drop-shadow-md border hover:-translate-y-4 transition-all duration-300"
                    >
                        <motion.img
                            variants={fadeIn("down", 0.25)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.4 }}
                            src={user.image && user.image.url ? user.image.url : defaultImage}
                            alt={user.image && user.image.alt ? user.image.alt : "No image available"}
                            className="w-14 h-14 rounded-full drop-shadow-md mb-4"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = defaultImage;
                            }}
                        />
                        <div>
                            <h2 className="text-xl py-0.5 font-bold mb-2" style={{ letterSpacing: '0.2rem' }}>
                                {user.name.first} {user.name.last}
                            </h2>
                        </div>
                        <div className=" dark:text-white w-80 text-left">
                            <h3 className="text-l py-0.5 font-bold text-blue-600" style={{ letterSpacing: '0.1rem' }}>Creator Info:</h3>
                            <p className="text-sm"><span className='text-blue-600'>Business: </span>{user.isBusiness ? 'Yes' : 'No'}</p>
                            <p className="text-sm"><span className='text-blue-600'>Mail: </span>{user.email}</p>
                            <p className="text-sm"><span className='text-blue-600'>Phone: </span>{user.phone}</p>
                            <p className="text-sm"><span className='text-blue-600'>City: </span>{user.address.city}</p>
                            <p className="text-sm"><span className='text-blue-600'>Country: </span>{user.address.country}</p>
                            <p className="text-sm"><span className='text-blue-600'>Street: </span>{user.address.street}</p>
                            <p className="text-sm"><span className='text-blue-600'>House Number: </span>{user.address.houseNumber}</p>
                            <p className="text-sm"><span className='text-blue-600'>State: </span>{user.address.state}</p>
                            <p className="text-sm"><span className='text-blue-600'>Zip: </span>{user.address.zip}</p>
                        </div>
                        <RiDeleteBin5Line
                            onClick={() => deleteCardHandler(user._id)}
                            style={{
                                cursor: "pointer",
                                fontSize: "28px",
                                position: "absolute",
                                right: 33,
                                bottom: 22,
                                color: "blue"
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CRM;
