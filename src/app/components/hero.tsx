"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className="animated-background flex flex-col min-h-screen bg-gradient-to-br from-red-700 via-red-500 to-red-700 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700">
            <div className="min-h-screen flex flex-col justify-center items-center gap-3 p-4">
                <motion.h1 initial={{ y: -1000, opacity: 0 }} transition={{ type: "spring", stiffness: 100, duration: 2, delay: 1 }} animate={{ y: 0, opacity: 100 }} className="text-4xl font-bold text-white text-center">
                    Davide Tagini
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 1000 }} transition={{ type: "spring", stiffness: 100, duration: 2, delay: 2 }} animate={{ opacity: 100, y: 0 }} className="p-4 lg:w-3/5 w-full">
                    <p className="text-lg text-white font-thin lg:text-justify text-center">
                        Sono appassionato di sviluppo e mi piace programmare siti web e applicazioni mobile, uso principalmente <span className="text-black dark:text-slate-200 font-extrabold tracking-wider"><Link href="https://nextjs.org/" target="_blank">NextJS</Link></span>, <span className="text-black dark:text-slate-200 font-extrabold tracking-wider"><Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link></span>, ma mi adatto anche ad altre tecnologie. Dopo questa breve introduzione su di me, ti do il benvenuto nel mio <span className="text-black dark:text-slate-200 font-extrabold capitalize underline underline-offset-4 text-xl hover:cursor-pointer tracking-widest italic">portfolio</span> sperando possa essere di tuo gradimento.
                    </p>
                </motion.div>
                <div className="p-4 flex lg:flex-row md:flex-row flex-col gap-5">
                    <motion.button initial={{ opacity: 0, x: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 3 }} animate={{ opacity: 100, x: 0 }} onClick={() => window.location.href = "/portfolio"} className="w-52 rounded-full outline outline-4 outline-white p-3 text-center text-white text-lg tracking-wider hover:bg-slate-700 dark:hover:bg-red-700 hover:animate-bounce">Il mio portfolio</motion.button>
                    <motion.button initial={{ opacity: 0, x: 1000 }} transition={{ type: "spring", stiffness: 100, delay: 3 }} animate={{ opacity: 100, x: 0 }} onClick={() => window.location.href = "/contattami"} className="w-52 rounded-full outline outline-4 outline-white p-3 text-center text-white text-lg tracking-wider hover:bg-slate-700 dark:hover:bg-red-700 hover:animate-bounce">Contattami</motion.button>
                </div>
            </div>
        </div>
    );
}