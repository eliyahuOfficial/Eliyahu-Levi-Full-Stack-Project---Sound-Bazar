import React from "react";
import NavBar from "../Navbar/Navbar";

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {

    return (
        <header className="bg-stone-100 p-5 dark:bg-slate-700 text-black  text-center rounded-b-2xl ">
            <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        </header>
    );
};

export default Header;
