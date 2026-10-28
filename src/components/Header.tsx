import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Stack' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];

export function Header({ onOpenPalette }: { onOpenPalette: () => void }) {
  const mac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform);
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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-bg/85 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="relative w-[90%] max-w-6xl mx-auto h-16 flex items-center justify-between border-b border-line">
        <span className="absolute -bottom-px left-0 h-px bg-accent" style={{ width: `${progress}%` }} />

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-mono text-sm font-medium" aria-label="Voltar ao topo">
          th<span className="text-accent">/</span>dev
        </button>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`font-mono text-xs transition-colors ${active === l.id ? 'text-accent' : 'text-mute hover:text-ink'}`}
                >
                  <span className="opacity-60">0{i + 1}</span> {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={onOpenPalette}
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-mute border border-line rounded-md px-2.5 py-1.5 hover:text-ink hover:border-ink transition-colors"
          aria-label="Abrir paleta de comandos"
        >
          {mac ? '⌘' : 'Ctrl'} K
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden w-[90%] mx-auto border-x border-b border-line bg-bg/95">
          {navLinks.map((l, i) => (
            <li key={l.id} className="border-b border-line last:border-b-0">
              <button onClick={() => go(l.id)} className="w-full text-left px-4 py-4 flex gap-4 items-baseline">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="text-lg">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
