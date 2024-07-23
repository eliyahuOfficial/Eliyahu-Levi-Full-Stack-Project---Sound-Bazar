import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { FaXmark, FaBars } from "react-icons/fa6";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import "./NavBar.scss";
import { NavBarType } from "../../@types/types";
import logo from '../../assets/logo.png';


const NavBar: React.FC<NavBarType> = ({ searchQuery, setSearchQuery }) => {

    const { isLoggedIn, isBusiness, isAdmin, logout } = useAuth();

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 2000);
        }

    }






    return (

        <nav className="site-navbar max-w-screen-xl mx-auto text-xl font-normal leading-6 tracking-tight text-gray-900   dark:text-gray-100 py-6 border-b-4 rounded-lg border-blue-300 ">
            <div className=" flex flex-row  justify-items-center items-center " >

                <NavLink to="/">
                    <div className="flex flex-row gap-6">
                        <img src={logo} alt="logo" className='w-14 hidden-at-1264' />
                        <h1 className="md:text-5xl font-semibold  mainlogo">Sound Bazar</h1>
                    </div>
                </NavLink>



                {
                    isMenuOpen && (
                        <div className="space-y-4 px-4 pt-3 pb-5 mx-2 rounded-md drop-shadow-md bg-stone-100 dark:bg-slate-700 fixed top-32 right-0 left-0 flex flex-col z-50 ">
                            {isLoggedIn && <NavLink to="/newcards" className="nav-link">Sounds</NavLink>}
                            {isLoggedIn && <NavLink to="/likecards" className="nav-link">Liked</NavLink>}
                            {isLoggedIn && isBusiness && (
                                <>
                                    <NavLink to="/mycards" className="nav-link">My</NavLink>
                                    <NavLink to="/createcard" className="nav-link">Create</NavLink>

                                    <NavLink to="/profile" className="nav-link">Profile</NavLink>
                                </>
                            )}
                            {!isLoggedIn && <NavLink to="/register" className="nav-link">Register</NavLink>}
                            {!isLoggedIn && <NavLink to="/login" className="nav-link">Login</NavLink>}
                            {isLoggedIn && <button onClick={() => {
                                logout();
                                navigate("/login")
                            }} className="nav-link">Logout</button>}
                        </div>
                    )
                }
            </div>

            <input
                type="text"
                placeholder="Search Sounds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-14 w-72 border-violet-400 border-2 rounded-md hidden md:flex  shadow-md text-blue-600"
            />

            <div className="nav-right w-full lg:w-1/3 justify-end">
                <div className="hidden lg:flex lg:flex-row  gap-4 justify-center items-center ">
                    {isLoggedIn &&
                        <NavLink to="/cards" className="nav-link text-sm md:text-base lg:text-lg slate">Sounds</NavLink>}

                    {isLoggedIn && <NavLink to="/likecards" className="nav-link text-sm md:text-base lg:text-lg slate">Liked</NavLink>}

                    {isLoggedIn && isBusiness && <NavLink to="/mycards" className="nav-link text-sm md:text-base lg:text-lg slate">My</NavLink>}

                    {isLoggedIn && isBusiness && <NavLink to="/createcard" className="nav-link text-sm md:text-base lg:text-lg slate">Create</NavLink>}

                    {!isLoggedIn && <NavLink to="/register" className="nav-link text-sm md:text-base lg:text-lg slate">Register</NavLink>}

                    {!isLoggedIn && <NavLink to="/login" className="nav-link text-sm md:text-base lg:text-lg slate">Login</NavLink>}

                    {isLoggedIn && (
                        <button onClick={() => {
                            logout();
                            navigate("/login");
                        }} className="nav-link text-sm md:text-base lg:text-lg slate">Logout</button>
                    )}



                </div>

                <div className="flex lg:flex-row gap-4 justify-center items-center">
                    {isLoggedIn && <NavLink to="/profile" ><FaUser className="icon" /></NavLink>}

                    <DarkModeToggle />
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                        {isMenuOpen ? (<FaXmark className="w-6 h-6 text-black dark:text-white" />) : (<FaBars className="w-6 h-6 text-black dark:text-white" />)}
                    </button>
                </div>

            </div>


        </nav >

    );
};

export default NavBar;