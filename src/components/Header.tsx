import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contatos' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md' : 'bg-bg'
      }`}
    >
      <div className="relative w-[90%] max-w-6xl mx-auto h-20 flex items-center justify-between border-b border-line">
        <span className="absolute -bottom-px left-0 h-px bg-white" style={{ width: `${progress}%` }} />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-xl"
          aria-label="Topo"
        >
          <span className="text-mute">T</span>H
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-white after:transition-all after:duration-300 ${
                  active === l.id ? 'text-white after:w-full' : 'text-mute hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden w-[90%] mx-auto bg-card rounded-2xl mt-2 px-4">
          {navLinks.map((l) => (
            <li key={l.id} className="border-b border-line last:border-b-0">
              <button onClick={() => go(l.id)} className="w-full text-left py-4 font-light">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
