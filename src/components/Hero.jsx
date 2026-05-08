import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}            
            className="flex flex-col items-center justify-center text-center py-20 px-6">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Brandon Powell
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-400 dark:text-gray-300 mb-6">
                IT Graduate | Aspiring Cybersecurity Professional
            </h2>

            <p className="max-w-2xl text-gray-500 dark:text-gray-300 mb-8">
                Full-stack Web developer with experience in HTML, CSS, Node.js, React, Python, JavaScript, and databases.
                Currently building cybersecurity skills through structured leraning and hands-on projects.
            </p>

            <div className="flex gap-4">
                <a
                    href="https://github.com/Brandonp584"
                    target="_blank"
                    className="px-6 py-2 bg-blue-600 text-white rounded-xl"
                >
                    GitHub
                </a>

                <a
                    href="#projects"
                    className="px-6 py-2 border rounded-xl"
                >
                    View Projects
                </a>
            </div>
            
        </motion.section>
    );
}