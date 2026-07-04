import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-base min-h-screen overflow-x-hidden">
      <Preloader onFinish={() => setLoaded(true)} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}