import { Code2, Github, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/5 py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-mono text-sm font-semibold">
                <span className="gradient-text">TH</span>
                <span className="text-white/60">.dev</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Desenvolvedor web apaixonado por construir experiencias digitais incriveis.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4">Navegacao</h4>
            <ul className="space-y-2">
              {[
                { id: 'sobre', label: 'Sobre mim' },
                { id: 'habilidades', label: 'Habilidades' },
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'projetos', label: 'Projetos' },
                { id: 'contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/70 mb-4">Contato</h4>
            <div className="space-y-2">
              <a
                href="mailto:thiagohenriquedeoliveira015@gmail.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Gmail</span>
              </a>
              <a
                href="https://github.com/thiagoHenrique19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30 flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary-400" /> por Thiago Henrique &mdash; {new Date().getFullYear()}
          </p>
          <p className="text-xs font-mono text-white/20">
            React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
