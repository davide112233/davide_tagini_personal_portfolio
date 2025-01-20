"use client"

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme")

        if(theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])

    return (
        <div className="relative w-16 h-8 flex items-center dark:bg-yellow-500 bg-blue-900 cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
            <FaMoon className="text-black dark:text-blue-900 absolute" size={18} />
            <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ? {right: "2px"} : {left: "2px"}}></div>
            <BsSunFill className="ml-auto text-yellow-400" size={18} />
        </div>
    );
}