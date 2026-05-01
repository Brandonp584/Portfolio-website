export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b">
            <h1 className="font-bold">Brandon Powell</h1>

            <div className="flex gap-4">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}