import Reveal from "./Reveal";

export default function About() {
    return (
        <Reveal>
            <section id="about" className="py-20 px-6 max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">About Me</h2>

                <p className="text-gray-500 dark:text-gray-300 mb-4">
                    I am an IT Graduate with a Higher Education Diploma in Information Technology (Full-Stack Web Development),
                    from Coder Academy.
                </p>

                <p className="text-gray-500 dark:text-gray-300 mb-4">
                    I have hands-on experience building web applications using React, Python,
                    JavaScript, HTML/CSS, and working with databases such as PostgreSQL and MongoDB.
                    I also use Git and GitHub for version control and project management.
                </p>

                <p className="text-gray-500 dark:text-gray-300 mb-4">
                    I am currently developing my skills in cybersecurity through the Cisco Junior
                    Cybersecurity Analyst pathway, with a focus on networking, threat detection,
                    and system security.
                </p>

                <p className="text-gray-500 dark:text-gray-300">
                    I am seeking entry-level opportunities in IT support, Junior development, or
                    cybersecurity where I can apply my skills and continue growing professionally.
            </p>

            </section>
        </Reveal>
    );
}