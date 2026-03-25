import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticleField from './components/ParticleField';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Always land on the home section after the boot sequence
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('home')?.scrollIntoView({ behavior: 'instant' });
      }, 50);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Background layers */}
          <div className="galaxy-bg" />
          <div className="grid-overlay" />
          <div className="scanline" />
          <ParticleField />

          <div className="relative z-10 text-white selection:bg-[#00d4ff]/20 selection:text-white">
            <Navbar />

            <main>
              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="terminal">
                <Terminal />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="certificates">
                <Certificates />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;
