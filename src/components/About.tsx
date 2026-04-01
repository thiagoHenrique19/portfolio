import { useInView } from '../hooks/useInView';
import { User, Coffee, Code, Target } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';

const stats = [
  { label: 'Anos de Experiencia', value: '2+', icon: Code },
  { label: 'Projetos Desenvolvidos', value: '10+', icon: Target },
  { label: 'Cafes Tomados', value: '∞', icon: Coffee },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="py-24 bg-dark-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <User className="w-4 h-4" />
            sobre_mim
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Quem sou <span className="gradient-text">eu</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-primary-500/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-accent-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-purple border-2 border-primary-500/40">
                <img
                  src={profilePhoto}
                  alt="Thiago Henrique"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #6366f1, #10b981)';
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-7xl font-bold">TH</div>';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10 shadow-xl animate-float">
                <span className="text-sm font-mono text-accent-400">
                  &lt;Developer /&gt;
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p className="text-lg">
                Sou um desenvolvedor web focado na criacao de{' '}
                <span className="text-white font-medium">experiencias digitais eficientes e de qualidade</span>.
                Iniciei minha trajetoria na tecnologia atraves do programa de aprendiz na{' '}
                <span className="text-primary-400 font-medium">Segala's Alimentos</span>,
                onde desenvolvi uma base solida e direcionei minha carreira para o desenvolvimento de software.
              </p>
              <p>
                Atuo diretamente no{' '}
                <span className="text-accent-400 font-medium">e-commerce da empresa</span>,
                participando da implementacao e evolucao de funcionalidades que impactam diretamente
                a experiencia dos clientes. Possuo experiencia no desenvolvimento back-end com{' '}
                <span className="text-accent-400 font-medium">Java e Spring Framework</span>,
                alem de atuacao com bancos de dados{' '}
                <span className="text-accent-400 font-medium">MySQL e PostgreSQL</span>,
                testes com <span className="text-accent-400 font-medium">JUnit 5</span>{' '}
                e versionamento com <span className="text-accent-400 font-medium">GitHub</span>.
              </p>
              <p>
                No front-end, trabalho com{' '}
                <span className="text-primary-400 font-medium">React, TypeScript, HTML e CSS</span>,
                desenvolvendo interfaces e contribuindo na construcao de novas funcionalidades.
                Atualmente, estou me aprofundando cada vez mais no desenvolvimento{' '}
                <span className="text-white font-medium">full-stack</span>,
                com foco em entregar solucoes completas, performaticas e alinhadas as necessidades do negocio.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="glass p-4 rounded-xl border border-white/10 text-center card-hover"
                >
                  <Icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-white/50 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/thiagoHenrique19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span>Ver GitHub</span>
                <span className="text-primary-500/50">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
