import { useEffect, useRef, useState } from 'react';
import { Github, Mail, ArrowDown } from 'lucide-react';

type Entry = [key: string, value: string];

const endpoints: Record<string, Entry[]> = {
  '/dev/thiago': [
    ['nome', '"Thiago Henrique"'],
    ['cargo', '"Desenvolvedor de Software Jr"'],
    ['empresa', '"Segala\'s Alimentos"'],
    ['desde', '2023'],
    ['back', '["Java", "Spring", "MySQL", "PostgreSQL"]'],
    ['front', '["React", "TypeScript", "Tailwind"]'],
    ['status', '"disponível"'],
  ],
  '/stack': [
    ['back-end', '["Java", "Spring", "Hibernate", "Maven", "JUnit5"]'],
    ['front-end', '["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind"]'],
    ['dados', '["MySQL", "PostgreSQL", "Oracle", "DBeaver"]'],
    ['cloud', '["AWS", "Docker"]'],
    ['ferramentas', '["Git", "GitHub", "IntelliJ", "Windows", "Linux", "Apple"]'],
  ],
  '/experiencia': [
    ['atual', '"Desenvolvedor de Software Jr"'],
    ['2024-2025', '"Assistente de Desenvolvimento"'],
    ['2024', '"Estagiário de Desenvolvimento"'],
    ['2023', '"Aprendiz de Desenvolvimento"'],
  ],
  '/projetos': [
    ['ecommerce-segalas', '"privado"'],
    ['painel-backoffice', '"privado"'],
    ['von-zu-hause', '"github"'],
    ['animated-border-login', '"github"'],
  ],
};

const paths = Object.keys(endpoints);
const maxLines = Math.max(...Object.values(endpoints).map((e) => e.length)) + 2;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Console() {
  const [path, setPath] = useState(paths[0]);
  const [shown, setShown] = useState(endpoints[paths[0]].length + 2);
  const [loading, setLoading] = useState(false);
  const timer = useRef<number>();
  const entries = endpoints[path];
  const total = entries.length + 2;

  const select = (p: string) => {
    window.clearInterval(timer.current);
    setPath(p);
    if (reduced()) {
      setShown(endpoints[p].length + 2);
      return;
    }
    setShown(0);
    setLoading(true);
    const n = endpoints[p].length + 2;
    let i = 0;
    timer.current = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= n) {
        window.clearInterval(timer.current);
        setLoading(false);
      }
    }, 70);
  };

  useEffect(() => () => window.clearInterval(timer.current), []);

  const line = (i: number, node: React.ReactNode) => (
    <span key={i} style={{ visibility: i < shown ? 'visible' : 'hidden' }}>
      {node}
      {'\n'}
    </span>
  );

  return (
    <figure className="border border-line bg-card/90 backdrop-blur rounded-xl overflow-hidden font-mono text-[0.8rem] sm:text-sm">
      <figcaption className="border-b border-line">
        <div role="tablist" aria-label="Endpoints" className="flex overflow-x-auto text-xs">
          {paths.map((p) => (
            <button
              key={p}
              role="tab"
              aria-selected={p === path}
              onClick={() => select(p)}
              className={`shrink-0 px-4 py-3 border-r border-line transition-colors ${
                p === path ? 'text-ink bg-bg' : 'text-mute hover:text-ink'
              }`}
            >
              <span className={p === path ? 'text-accent' : ''}>GET</span> {p}
            </button>
          ))}
        </div>
      </figcaption>
      <pre
        className="p-4 sm:p-5 leading-7 overflow-x-auto whitespace-pre-wrap break-words"
        style={{ minHeight: `calc(${maxLines} * 1.75rem + 2.5rem)` }}
        aria-live="polite"
      >
        <code>
          {line(0, <span className="text-mute">{'{'}</span>)}
          {entries.map(([k, v], i) =>
            line(
              i + 1,
              <>
                {'  '}
                <span className="text-mute">"{k}":</span>{' '}
                <span className={k === 'status' ? 'text-accent' : 'text-ink'}>{v}</span>
                {i < entries.length - 1 && <span className="text-mute">,</span>}
              </>
            )
          )}
          {line(total - 1, <span className="text-mute">{'}'}</span>)}
          <span className="caret" aria-hidden="true" />
        </code>
      </pre>
      <p className="flex items-center justify-between px-4 py-2.5 border-t border-line text-xs text-mute">
        <span>{loading ? 'carregando…' : '200 OK'}</span>
        <span className="hidden sm:inline">clique em um endpoint</span>
      </p>
    </figure>
  );
}

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  return (
    <section id="hero" className="spot relative overflow-hidden" onPointerMove={onMove}>
      <div className="relative w-[90%] max-w-6xl mx-auto pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs text-mute border border-line rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              Aberto a propostas full-time e freelance
            </p>

            <h1 className="display text-[clamp(3.25rem,11vw,7.5rem)] font-bold mt-8">
              Thiago
              <br />
              <span className="text-mute">Henrique</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium mt-8 max-w-xl leading-snug">
              Desenvolvedor full stack. Java e Spring, React e TypeScript
            </p>
            <p className="text-mute mt-4 max-w-lg leading-relaxed">
              Trabalho no e-commerce da Segala's Alimentos: funcionalidades, correções e integrações usadas pelos clientes todos os dias.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <button
                onClick={() => go('projetos')}
                className="group inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-6 h-12 rounded-full hover:brightness-110 transition"
              >
                Ver projetos <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="mailto:thiagohenriquedeoliveira015@gmail.com"
                className="inline-flex items-center gap-2 border border-line text-sm px-5 h-12 rounded-full hover:border-ink transition-colors"
              >
                <Mail className="w-4 h-4" /> E-mail
              </a>
              <a
                href="https://github.com/thiagoHenrique19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line text-sm px-5 h-12 rounded-full hover:border-ink transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <Console />
        </div>
      </div>
    </section>
  );
}
