import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CyberDetectiveCaseStudy from "./pages/CyberDetectiveCaseStudy";
import BlueTeamSocAnalystSimulatorCaseStudy from "./pages/BlueTeamSocAnalystSimulatorCaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "dark bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <div className="transition-all duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/case-study/cyber-detective-academy"
            element={<CyberDetectiveCaseStudy />}
          />
          <Route
            path="/case-study/blue-team-soc-analyst-simulator"
            element={<BlueTeamSocAnalystSimulatorCaseStudy />}
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;