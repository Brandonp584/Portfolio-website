import Reveal from "./Reveal";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            title: "Secure Code Scanner",
            description:
                "Python-based Static Application Security Testing (SAST) tool that detects hardcoded credentials, exposed secrets, insecure functions, weak hashing algorithms, SQL injection patterns, and command injection risks.",
            tech: ["Python", "Regex", "JSON", "HTML"],
            link: "https://github.com/Brandonp584/secure-code-scanner"
        },
        {
            title: "Web Vulnerability Scanner",
            description:
                "Python web security scanner that identifies missing security headers, insecure web configurations, HTTPS issues, and server information disclosure. Includes security scoring and real-world remediation testing.",
            tech: ["Python", "Requests", "JSON", "HTML"],
            link: "https://github.com/Brandonp584/web-vulnerability-scanner"
        },
        {
            title: "Task Manager App",
            description:
                "Full-stack MERN task manager with user authentication, protected routes, MongoDB storage, priority levels, filtering, and drag-and-drop task ordering.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://taskflow-by-brandon.netlify.app/"
        },
        {
            title: "Cyber Detective Academy",
            description:
                "Interactive cybersecurity learning platform featuring investigation-based case studies, quizzes, XP progression, achievements, learning paths, and study content covering networking, databases, secure coding, operating systems, and security fundamentals.",
            tech: ["React", "JavaScript", "Vite", "Netlify"],
            link: "https://cyber-detective-academy.netlify.app/",
            caseStudy: "/case-study/cyber-detective-academy"
        }
    ];

    return (
        <Reveal>
            <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 transform hover:scale-105 hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-300 mb-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm border border-gray-300 dark:border-gray-700 px-2 py-1 rounded text-black dark:text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    View Project
                                </a>

                                {project.caseStudy && (
                                    <Link 
                                        to={project.caseStudy}
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Case Study
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}