"use client"

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "./themetoggle";
import { AnimatePresence, motion } from "framer-motion";
import { head } from "framer-motion/client";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if(window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);

        return () => {
            window.addEventListener("scroll", scrollHeader);
        }
    }, []);

    return (
        <nav className={`${header ? "bg-red-900 dark:bg-slate-950 lg:fixed w-full" : "bg-red-700 dark:bg-slate-700"} ${isOpen ? "bg-red-700 dark:bg-slate-700 flex justify-between p-4 text-white" : "flex justify-between p-4"}`}>
            <div className="w-full lg:w-52 flex flex-col justify-center">
                <motion.a initial={{ opacity: 0, x: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 12, duration: 2 }} animate={{ opacity: 100, x: 0 }} href="#" className={`${isOpen ? "hidden" : "lg:text-2xl text-lg font-semibold text-white hover:text-black dark:hover:text-red-700"}`}>Davide Tagini</motion.a>
            </div>
            <div className="w-full lg:flex justify-center flex-col items-end mr-5">
                <div className={`${isOpen ? "flex bg-red-700 dark:bg-slate-700 absolute top-12 right-0 w-full h-full" : "hidden lg:flex"} flex-col lg:flex-row`}>
                    <div className={`${isOpen ? "bg-red-700 dark:bg-slate-700 flex flex-col h-full justify-center gap-3" : "flex w-full gap-5"}`}>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 4, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="#" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}> Pagina principale</motion.a>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 5, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="#chiSono" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}> Chi sono</motion.a>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 6, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="#cosaFaccio" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}>Cosa faccio</motion.a>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 7, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="#leMieSkills" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}> Le mie skills</motion.a>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 8, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="/portfolio" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}>Il mio portfolio</motion.a>
                        <motion.a initial={{ opacity: 0, y: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 9, duration: 2 }} animate={{ opacity: 1, y: 0 }} href="/contattami" className={`${isOpen ? "text-center text-lg tracking-wider" : "text-white hover:text-black dark:hover:text-red-700"}`}>Contattami</motion.a>
                    </div>
                </div>
            </div>
            <div className="flex items-center ">
                <AnimatePresence>
                    <motion.div initial={{ opacity: 0 }} transition={{ ease: "easeOut", delay: 11, duration: 2, stiffness: 100 }} animate={{ opacity: 100 }} className={`${isOpen ? "hidden" : "block"}`}>
                        <ThemeToggle />
                    </motion.div>
                </AnimatePresence>
                <button onClick={() => {
                    setIsOpen(!isOpen);
                }} className="text-white ml-5 lg:hidden block">{isOpen ? <FiX size={23.7} /> : <FiMenu size={23.7} />}</button>
            </div>

        </nav>
    );
}