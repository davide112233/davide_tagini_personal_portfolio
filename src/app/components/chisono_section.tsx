import { TypeAnimation } from "react-type-animation";

export const ChiSonoSection = () => {
    return (
        <div id="chiSono" className="revealedSection flex flex-col flex-grow">
            <div className="bg-slate-300 dark:bg-slate-700 p-4 flex flex-col gap-3">
                <div className="bg-transparent">
                    <h1 className="text-4xl text-black dark:text-white font-semibold lg:text-start text-center">Chi sono</h1>
                </div>
                <div className="flex lg:justify-between flex-wrap lg:flex-row flex-col justify-center p-4 lg:gap-0 gap-5">
                    <div className="lg:w-1/3 w-full h-fit bg-slate-100 dark:bg-slate-900 p-4 border-4 border-black dark:border-white rounded-lg shadow-lg flex justify-center">
                        <img src="/images/Davide.jpg" className="object-cover rounded-lg w-1/2 lg:w-fit" alt="Un'immagine di me" />
                    </div>
                    <div className="lg:w-3/5 w-full bg-slate-100 dark:bg-slate-900 p-4 rounded-lg shadow-lg border-4 border-black dark:border-white">
                        <p className="text-start lg:text-lg text-xl text-wrap text-black dark:text-white dark:font-thin">
                            <TypeAnimation
                                sequence={[
                                    "Ciao a tutti, sono Davide Tagini. Sono disoccupato, ma ho la passione per lo sviluppo. Principalmente in ambito web, cerco sempre di essere aggiornato sulle nuove tecnologie. Sto cercando di lavorare nel campo, ma siccome non ho avuto modo precedentemente, ne da qualifiche od occasioni presentatesi nel curriculum, di fare esperienza in delle aziende che trattino questo ambito, allora ho pensato di realizzare questo sito web, per iniziare a mettere in calce le mie abilità di design. L'idea è nata principalmente causa il fatto che tutti i colloqui conoscitivi andavano a vuoto, probabilmente non avendo un background solido non ero convincente al momento della presentazione. Ho 25 anni e come esperienze lavorative ne ho fatte solo un paio da sistemista help desk, ma vedendo che non faceva per me, decisii di voltare pagina ed entrare in questo ramo molto sfumato dell'informatica"
                                ]}
                                speed={70}
                                wrapper="span"
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}