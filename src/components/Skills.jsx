import Reveal from "./Reveal";

export default function Skills() {
    const skills = [
        "React",
        "Python",
        "JavaScript",
        "HTML/CSS",
        "Node.js",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Git / Github",
        "Problem Solving"
    ];

    return (
        <Reveal>
            <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="border border-gray-300 dark:border-gray-700rounded-xl p-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white transform hover:scale-105 hover:shadow-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </section>
        </Reveal>
    );
}