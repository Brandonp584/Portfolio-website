export default function Footer() {
    return (
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left side */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    © 2026 Brandon Powell. All rights reserved.
                </div>

                {/* Right side */}
                <div className="flex gap-4 text-sm">

                    <a
                        href="https://github.com/Brandonp584"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="mailto:Brandon.powell98@outlook.com"
                        className="hover:text-blue-500 transition"
                    >
                        Email
                    </a>

                    <a
                        href="#top"
                        className="hover:text-blue-500 transition"
                    >
                        Back to Top
                    </a>

                </div>
            </div>
        </footer>
    );
}