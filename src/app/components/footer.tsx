import Link from "next/link";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="bg-gradient-to-tr from-red-600 via-red-500 to-red-700 dark:from-slate-600 dark:via-slate-500 dark:to-slate-700">
            <div className="flex p-4 lg:justify-between flex-col lg:flex-row">
                    <div className="flex flex-col gap-5 p-4 lg:w-2/4">
                        <h2 className="text-3xl text-white font-bold lg:text-start text-center">Ecco per cosa sono disponibile</h2>
                        <p className="text-slate-200 font-light italic lg:text-start text-center lg:pl-4">Sono disponibile a lavorare per delle aziende che si occupano di sviluppo web, oppure, a coprire posizioni di teaching per dei corsi online che trattano sempre la medesima materia. Se la tua richiesta si dirige verso questi due ambiti selezionati, allora non esitare a contattarmi dall'<span className="hover:text-black font-bold underline underline-offset-4"><Link href="/contattami">apposito modulo</Link></span></p>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                    <div className="flex lg:justify-end justify-center lg:gap-3 gap-5">
                        <h2 className="text-lg text-white font-bold">Seguimi sui social:</h2>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row justify-center gap-3">
                                <Link href="https://www.instagram.com/davide.tagini1?igsh=em1mM3VzeWYwMHVp" target="_blank"><FiInstagram className="text-slate-200" /></Link>
                                <Link href="https://www.linkedin.com/in/davide-tagini-a564a72b2/" target="_blank"><FiLinkedin className="text-slate-200" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-t-slate-200">
                        <h6 className="text-center text-lg font-light text-slate-200 italic mt-3">
                            Realizzato da <span className="text-white font-bold underline underline-offset-4 hover:cursor-pointer hover:text-gray-300">Davide Tagini</span>: <span className="text-white font-bold">&copy;</span> {year}
                        </h6>
                    </div>
                </div>
        </footer>
    );
}