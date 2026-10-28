import { useEffect, useMemo, useRef, useState } from 'react';
import { CornerDownLeft, Copy, Github, Mail, Hash } from 'lucide-react';

const EMAIL = 'thiagohenriquedeoliveira015@gmail.com';

type Item = { label: string; hint: string; icon: React.ElementType; run: () => void };

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [done, setDone] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const items: Item[] = useMemo(
    () => [
      { label: 'Sobre mim', hint: 'ir para', icon: Hash, run: () => go('sobre') },
      { label: 'Stack', hint: 'ir para', icon: Hash, run: () => go('habilidades') },
      { label: 'Experiência', hint: 'ir para', icon: Hash, run: () => go('experiencia') },
      { label: 'Projetos', hint: 'ir para', icon: Hash, run: () => go('projetos') },
      { label: 'Contato', hint: 'ir para', icon: Hash, run: () => go('contato') },
      {
        label: 'Copiar e-mail',
        hint: 'ação',
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(EMAIL).catch(() => (window.location.href = `mailto:${EMAIL}`));
        },
      },
      { label: 'Enviar e-mail', hint: 'ação', icon: Mail, run: () => (window.location.href = `mailto:${EMAIL}`) },
      { label: 'Abrir GitHub', hint: 'link', icon: Github, run: () => window.open('https://github.com/thiagoHenrique19', '_blank', 'noopener') },
    ],
    []
  );

  const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const results = items.filter((i) => norm(i.label).includes(norm(query)));

  useEffect(() => {
    if (open) {
      opener.current = document.activeElement as HTMLElement;
      setQuery('');
      setActive(0);
      setDone('');
      setTimeout(() => input.current?.focus(), 0);
    } else {
      opener.current?.focus?.();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  const choose = (i: Item) => {
    i.run();
    if (i.label === 'Copiar e-mail') {
      setDone('E-mail copiado');
      setTimeout(onClose, 700);
    } else {
      onClose();
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      choose(results[active]);
    } else if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[12vh] px-4" onKeyDown={onKey}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label="Paleta de comandos" className="relative w-full max-w-lg bg-card border border-line rounded-xl overflow-hidden shadow-2xl">
        <input
          ref={input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ir para… ou executar uma ação"
          role="combobox"
          aria-expanded="true"
          aria-controls="cmd-list"
          aria-activedescendant={results[active] ? `cmd-${active}` : undefined}
          className="w-full bg-transparent px-5 py-4 text-base outline-none border-b border-line placeholder:text-mute"
        />
        <ul id="cmd-list" role="listbox" className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-mute">Nada encontrado</li>}
          {results.map((r, i) => (
            <li
              key={r.label}
              id={`cmd-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseMove={() => setActive(i)}
              onClick={() => choose(r)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-sm ${i === active ? 'bg-bg text-accent' : 'text-soft'}`}
            >
              <r.icon className="w-4 h-4 shrink-0" />
              <span className="flex-1">{r.label === 'Copiar e-mail' && done ? done : r.label}</span>
              <span className="font-mono text-xs text-mute">{r.hint}</span>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-4 px-4 py-2.5 border-t border-line font-mono text-xs text-mute">
          <span>↑↓ navegar</span>
          <span className="flex items-center gap-1"><CornerDownLeft className="w-3 h-3" /> abrir</span>
          <span>esc fechar</span>
        </p>
      </div>
    </div>
  );
}
