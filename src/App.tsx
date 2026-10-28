import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Marquee } from './components/Marquee';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-full text-sm font-medium">
        Pular para o conteúdo
      </a>
      <Header onOpenPalette={() => setPalette(true)} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
