import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

type Projects = {
    id: string;
    title: string;
    image: string;
    description: string;
    linkDestPath: string;
};

export const PortfolioProjectsCard = () => {
    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'portfolio_projects'));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Projects[];
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="flex lg:flex-row flex-col p-4 lg:justify-start justify-center gap-10">
            {projects.map(project => (
                <a key={project.id} href={project.linkDestPath} target="_blank">
                    <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-t-lg shadow-lg dark:shadow-md dark:shadow-white">
                        <div className="p-4">
                            <h3 className="text-xl text-black dark:text-white tracking-wider">{project.title}</h3>
                        </div>
                        <div className="w-full flex flex-col flex-grow">
                            <img className="h-64 w-full object-cover" src={project.image} alt="Immagine del progetto" />
                        </div>
                        <div className="p-4">
                            <p className="text-black dark:text-white dark:font-thin">{project.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
