export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="flex justify-between items-center p-4 border-b border-gray-700">
            <h1 className="font-bold">Brandon Powell</h1>

            <div className="flex gap-4 items-center">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-3 py-1 border rounded"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    );
}