import { Link } from "react-router-dom";

function CyberDetectiveCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link
        to="/"
        className="inline-block mb-8 text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Portfolio
      </Link>

      <section className="mb-12">
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-blue-600 text-white">
          Case Study
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Cyber Detective Academy
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          An interactive cybersecurity learning platform built with React that
          teaches users through investigation-based cyber cases, quizzes,
          achievements, XP progression, and study content.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://cyber-detective-academy.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Brandonp584/cyber-detective-game"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      <section className="space-y-8">
        <CaseSection title="Problem">
          <p>
            Many cybersecurity learning resources focus on passive reading and
            memorisation. I wanted to create a more engaging learning experience
            that allowed users to learn through investigation and problem
            solving.
          </p>
        </CaseSection>

        <CaseSection title="Solution">
          <p>
            Cyber Detective Academy combines cybersecurity case studies,
            quizzes, study notes, achievements, and progression systems into a
            single browser-based learning platform.
          </p>
        </CaseSection>

        <CaseSection title="Key Features">
          <ul>
            <li>15 interactive investigation cases</li>
            <li>Learning Centre with structured study notes</li>
            <li>Quick Quiz revision system</li>
            <li>XP and level progression</li>
            <li>Achievement system</li>
            <li>Case search and filtering</li>
            <li>Category progress tracking</li>
            <li>Responsive design</li>
            <li>Netlify deployment</li>
          </ul>
        </CaseSection>

        <CaseSection title="Challenges">
          <p>
            One challenge was creating a progression system that rewarded users
            without allowing them to repeatedly earn XP from the same completed
            case.
          </p>

          <p>
            Another challenge was separating investigation questions from quiz
            questions so that revision content provided additional learning
            value rather than simply repeating answers from the cases.
          </p>
        </CaseSection>

        <CaseSection title="What I Learned">
          <ul>
            <li>React state management</li>
            <li>Component architecture</li>
            <li>Local Storage persistence</li>
            <li>Gamification design</li>
            <li>Frontend application design</li>
            <li>Netlify deployment</li>
            <li>Building larger React applications</li>
          </ul>
        </CaseSection>

        <CaseSection title="Future Improvements">
          <ul>
            <li>Advanced investigation scenarios</li>
            <li>Additional cybersecurity topics</li>
            <li>User accounts</li>
            <li>Cloud data storage</li>
            <li>Analytics dashboard</li>
            <li>Blue Team SOC modules</li>
          </ul>
        </CaseSection>
      </section>
    </main>
  );
}

function CaseSection({ title, children }) {
  return (
    <section className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        {title}
      </h2>

      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default CyberDetectiveCaseStudy;