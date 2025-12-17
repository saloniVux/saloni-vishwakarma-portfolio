import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Sketches from './components/Sketches';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-slate-800 selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Sketches />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;