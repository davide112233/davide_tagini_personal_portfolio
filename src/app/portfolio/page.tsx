"use client"

import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "../components/footer";
import { PortfolioProjectsCard } from "../components/portfolioprojects_card";
import { ThemeToggle } from "../components/themetoggle";

export default function Portfolio() {
    return (
        <main className="dark:bg-[#232424] bg-white">
            <div className="p-4 flex justify-between bg-red-700 dark:bg-slate-700">
                <div className="flex flex-col justify-center">
                    <motion.a initial={{ opacity: 0, x: -1000 }} transition={{ type: "spring", stiffness: 100, delay: 2, duration: 2 }} animate={{ opacity: 100, x: 0 }} href="/" className="lg:text-2xl text-lg font-semibold text-white hover:text-black dark:hover:text-red-700">Davide Tagini</motion.a>
                </div>
                <AnimatePresence>
                    <motion.div initial={{ opacity: 0 }} transition={{ ease: "easeOut", delay: 1, duration: 2, stiffness: 100 }} animate={{ opacity: 100 }}>
                        <ThemeToggle />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex flex-col min-h-screen p-4">
                <div className="p-4">
                    <h1 className="text-4xl text-black dark:text-white font-bold lg:text-start text-center">I miei lavori</h1>
                </div>
                <PortfolioProjectsCard />
            </div>
            <Footer />
        </main>
    );
}