import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-[90%] max-w-6xl mx-auto border-t border-line py-8 flex flex-wrap items-center justify-between gap-4">
      <p className="font-mono text-xs text-mute">
        © {new Date().getFullYear()} Thiago Henrique · React, TypeScript e Tailwind CSS
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="inline-flex items-center gap-2 font-mono text-xs text-mute hover:text-accent transition-colors"
      >
        Voltar ao topo <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
