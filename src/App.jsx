import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative min-h-screen text-white selection:bg-[#a3ff00]/30 selection:text-white">
      <div className="grid-background"></div>
      <div className="glow-overlay"></div>

      <div className="relative z-10">
        <Navbar introFinished={introFinished} />

        <main>
          <section id="home">
            <Hero setIntroFinished={setIntroFinished} />
          </section>

          <section id="about" className="min-h-screen opacity-0" style={{ display: 'none' }}>
            {/* Placeholder for About if needed later, merged with Hero/Skills for now */}
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

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
