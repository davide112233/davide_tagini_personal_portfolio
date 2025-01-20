import { TypeAnimation } from "react-type-animation";

export const CosaFaccioSection = () => {
    return (
        <div id="cosaFaccio" className="revealedSection flex flex-col flex-grow bg-slate-300 dark:bg-slate-700">
            <div className="p-4 bg-slate-300 dark:bg-slate-700">
                <h1 className="text-4xl text-black dark:text-white font-bold">Cosa faccio</h1>
            </div>
            <div className="p-4 lg:p-7">
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border-4 border-black dark:border-white">
                    <p className="text-black dark:text-white dark:font-thin lg:text-lg text-xl">
                        <TypeAnimation
                            sequence={[
                                "Realizzo principalmente siti web con un bel design, fluidi, responsivi. Posso fare un sito vetrina, dove l'utente può semplicemente scorrere la pagina, vedere testi, immagini, video e cliccarci sopra, quindi dalle minime funzionalità. Magari con una feature presente che cambia il tema da chiaro a scuro e viceversa, come quella presente in questo sito. Parlando di particolari grafici, ancora, un elemento che contraddistingue una pagina sono le animazioni, che danno un contesto visibile maggiormente piacevole all'esperienza utente. Un sito vetrina non è solo statico, vale a dire, come questo, può essere collegato ad un database per fare diventare alcuni flussi di dati meno tediosi e lavorarci su più facilmente. Non solo front-end, vale a dire che posso implementare anche delle funzionalità su un pulsante Login per esempio, o fare funzionare un modulo di contatto per dei potenziali clienti. Posso realizzare dei gestionali o semplicemente dei siti dove vengono visualizzate grandi quantità di dati grazie all'implementazione e alla gestione di un'API 'Application Programming Interface'. Per la maggiore, uso le tecnologie indicate sotto, ma penso di riuscire a fare anche qualcosa con: Laravel, Angular... Ultimamente, mi sto approcciando al gestore dei database Prisma e ad altri NoSQL diversificati come MongoDB",
                            ]}
                            wrapper="span"
                            speed={70}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}