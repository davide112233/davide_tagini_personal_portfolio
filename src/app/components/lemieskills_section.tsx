"use client"

export const LeMieSkillsSection = () => {
    return (
        <div id="leMieSkills" className="flex flex-col flex-grow">
            <div className="bg-slate-300 dark:bg-slate-700 p-4 flex flex-col gap-3">
                <h1 className="text-4xl text-black dark:text-white font-semibold md:text-start text-center">Le mie skills</h1>

                <div className="flex lg:flex-row lg:justify-start justify-center items-center flex-wrap flex-col lg:gap-10 gap-5 lg:pl-5 lg:pt-5 lg:pb-5 p-2">
                    <div className="w-64 border-4 border-black rounded-lg bg-slate-100 dark:shadow-md dark:shadow-white">
                        <img src="./images/NextJS logo.png" alt="NextJS logo" />
                    </div>
                    <div className="w-64 border-4 border-black rounded-lg bg-slate-100 dark:shadow-md dark:shadow-white">
                        <img src="./images/Tailwind CSS logo.png" alt="Tailwind CSS logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}