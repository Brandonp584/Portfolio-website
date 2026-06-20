import { Link } from "react-router-dom";

function BlueTeamSocAnalystSimulatorCaseStudy() {
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
          Blue Team SOC Analyst Simulator
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          A full-stack Security Operations Center (SOC) analyst training platform
          designed to simulate real-world alert triage, threat analysis, incident
          investigation, and response workflows.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://blue-team-soc-analyst-simulator.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Brandonp584/Blue-Team-Lab-Design"
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
            Most cybersecurity learning resources focus on theory and multiple
            choice questions, but provide limited opportunities to practice the
            investigative workflow performed by real SOC analysts.
          </p>

          <p>
            I wanted to build a platform that would allow users to investigate
            alerts, review evidence, analyse threat intelligence, document
            findings, and make incident response decisions in a structured
            environment.
          </p>
        </CaseSection>

        <CaseSection title="Solution">
          <p>
            I designed and built a full-stack SOC Analyst Simulator that combines
            realistic security investigations with user authentication,
            persistent data storage, investigation history, and analyst profile
            tracking.
          </p>

          <p>
            Users can create accounts, investigate alerts, classify incidents,
            assign severity levels, record investigation notes, make escalation
            decisions, and review completed investigations.
          </p>
        </CaseSection>

        <CaseSection title="Key Features">
          <ul className="list-disc pl-6 space-y-2">
            <li>15 realistic SOC investigation scenarios</li>
            <li>Beginner, Intermediate, and Advanced alert categories</li>
            <li>MITRE ATT&CK framework integration</li>
            <li>Threat intelligence and IOC analysis</li>
            <li>Incident classification workflows</li>
            <li>Escalation decision tracking</li>
            <li>Investigation reporting and documentation</li>
            <li>JWT-based authentication system</li>
            <li>Protected API routes</li>
            <li>MongoDB-backed investigation persistence</li>
            <li>User profile statistics and rank progression</li>
            <li>Full cloud deployment using Netlify, Render, and MongoDB Atlas</li>
          </ul>
        </CaseSection>

        <CaseSection title="Technical Architecture">
          <p>
            The application follows a full-stack architecture with a React
            frontend communicating with a Node.js and Express backend through
            REST APIs.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Frontend: React, Vite, React Router, Axios</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB Atlas, Mongoose</li>
            <li>Authentication: JWT, bcrypt</li>
            <li>Hosting: Netlify and Render</li>
          </ul>
        </CaseSection>

        <CaseSection title="Challenges">
          <p>
            One of the biggest challenges was implementing secure authentication
            between the frontend and backend using JWT tokens and protected API
            routes.
          </p>

          <p>
            Another challenge was moving profile statistics and investigation
            history from local browser storage into MongoDB so that user progress
            remained persistent across sessions.
          </p>

          <p>
            Deployment introduced additional challenges involving CORS,
            environment variables, MongoDB Atlas connectivity, and integration
            between Netlify, Render, and Atlas.
          </p>
        </CaseSection>

        <CaseSection title="What I Learned">
          <ul className="list-disc pl-6 space-y-2">
            <li>JWT authentication</li>
            <li>Protected API route design</li>
            <li>MongoDB Atlas integration</li>
            <li>REST API development</li>
            <li>Express backend development</li>
            <li>Database design with Mongoose</li>
            <li>Threat intelligence analysis</li>
            <li>MITRE ATT&CK mapping</li>
            <li>SOC investigation workflows</li>
            <li>Cloud deployment and production troubleshooting</li>
          </ul>
        </CaseSection>

        <CaseSection title="Outcome">
          <p>
            The project evolved from a frontend-only SOC training simulator into
            a fully deployed full-stack cybersecurity application.
          </p>

          <p>
            Users can securely register, authenticate, investigate alerts, save
            results to MongoDB, review investigation history, and track their
            analyst performance through a persistent profile system.
          </p>

          <p>
            The final application demonstrates both cybersecurity knowledge and
            modern full-stack development skills relevant to SOC analyst,
            cybersecurity graduate, and blue team roles.
          </p>
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

export default BlueTeamSocAnalystSimulatorCaseStudy;