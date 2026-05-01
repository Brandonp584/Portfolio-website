import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const onScroll = () => {
            let current = "about";

            sections.forEach((section) => {
                const top = section.offsetTop - 120;

                if (window.scrollY >= top) {
                    current = section.getAttribute("id");
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 
            bg-white/70 dark:bg-black/70 backdrop-blur-md 
            border-b border-gray-200 dark:border-gray-800
            transition-all duration-300">

            {/* Logo / Name */}
            <h1 className="font-bold text-lg tracking-tight">
                Brandon Powell
            </h1>

            {/* Links */}
            <div className="flex gap-6 items-center text-sm md:text-base">

                <a
                    href="#about"
                    className={`transition ${
                        active === "about"
                            ? "text-blue-600 font-semibold"
                            : "hover:text-blue-500"
                    }`}
                >
                    About
                </a>

                <a
                    href="#skills"
                    className={`transition ${
                        active === "skills"
                            ? "text-blue-600 font-semibold"
                            : "hover:text-blue-500"
                    }`}
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className={`transition ${
                        active === "projects"
                            ? "text-blue-600 font-semibold"
                            : "hover:text-blue-500"
                    }`}
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    className={`transition ${
                        active === "contact"
                            ? "text-blue-600 font-semibold"
                            : "hover:text-blue-500"
                    }`}
                >
                    Contact
                </a>

                {/* Dark mode toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-2 px-3 py-1 border rounded-md text-sm
                    hover:scale-105 transition"
                >
                    {darkMode ? "Light" : "Dark"}
                </button>

            </div>
        </nav>
    );
}