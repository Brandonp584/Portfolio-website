import Reveal from "./Reveal";

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "React + Tailwind portfolio site showcasing my skills and experience.",
            tech: ["React", "Tailwind"],
            link: "https://github.com/Brandonp584"
        },
        {
            title: "To-Do App",
            description: "Full-stack task manager with authentication and database storage.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://taskflow-by-brandon.netlify.app/"
        },
        {
            title: "Cybersecurity Tool (Coming Soon)",
            description: "Python-based tool for security analysis and password strength testing.",
            tech: ["Python"],
            link: "#"
        },
    ];

    return (
        <Reveal>
            <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Projects</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.title} 
                            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 transform hover:scale-105 hover:shadow-lg">

                            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-300 mb-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-sm border border-gray-300 dark:border-gray-700 px-2 py-1 rounded text-black dark:text-white">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                className="text-blue-600 dark:text-blue-400"
                            >
                                View Projects
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}