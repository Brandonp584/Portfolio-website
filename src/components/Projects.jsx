export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "React + Tailwind portfolio site showcasing my skills and experience.",
            tech: ["React", "Tailwind"],
            link: "https://github.com/Brandonp584"
        },
        {
            title: "To-Do App (Coming Soon)",
            description: "Full-stack task manager with authentication and database storage.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Cybersecurity Tool (Coming Soon)",
            description: "Python-based tool for security analysis and password strength testing.",
            tech: ["Python"],
            link: "#"
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">

            <h2 className="text-3xl font-bold mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.title} className="border rounded-xl p-6">

                        <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h3>

                        <p className="text-gray-500 mb-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                                <span key={t} className="text-sm border px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            className="text-blue-600"
                        >
                            View Projects
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}