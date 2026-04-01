import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

const experiences: Experience[] = [
    {
    role: 'Desenvolvedor de Software Jr',
    company: "Segala's Alimentos",
    period: 'Atual',
    description:
      'Como Desenvolvedor Jr, trabalho na criação e evolução de aplicações web utilizando Java e React. Minha atuação envolve o desenvolvimento de novas funcionalidades, ajustes em sistemas existentes e colaboração com a equipe durante o processo de construção e entrega das soluções.',
    tags: ['Java', 'Spring', 'React', 'TypeScript', 'HTML5', 'CSS3', 'MySQL'],
    highlight: true,
  },
  {
    role: 'Assistente de Desenvolvimento',
    company: "Segala's Alimentos",
    period: '2024 - 2025',
    description:
      'Aplicando todas as habilidades adquiridas no desenvolvimento de solucoes full-stack. Trabalhando com HTML5, CSS3, JavaScript e React no front-end, mantendo projetos back-end com Java e Spring.',
    tags: ['Java', 'Spring', 'React', 'TypeScript', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    role: 'Estagiario de Desenvolvimento',
    company: "Segala's Alimentos",
    period: '2024',
    description:
      'Desenvolvimento de aplicacoes com Java + Spring Framework. Criacao e manutencao de bancos de dados MySQL e PostgreSQL. Implementacao de testes unitarios com JUnit5. Uso do DBeaver, Linux e controle de versao com GitHub.',
    tags: ['Java', 'Spring Framework', 'MySQL', 'PostgreSQL', 'JUnit5', 'GitHub'],
  },
  {
    role: 'Aprendiz de Desenvolvimento',
    company: "Segala's Alimentos",
    period: '2023',
    description:
      'Inicio da jornada profissional com aprendizado de Java e logica de programacao. Primeiros contatos com banco de dados MySQL e PostgreSQL. Desenvolvimento dos primeiros testes unitarios com JUnit5.',
    tags: ['Java', 'MySQL', 'PostgreSQL', 'JUnit5', 'Logica de Programacao'],
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experiencia" className="py-24 bg-dark-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <Briefcase className="w-4 h-4" />
            experiencia
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Trajetoria <span className="gradient-text">Profissional</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="relative space-y-8 pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary-500/80 before:via-accent-500/50 before:to-transparent"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                inView
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[2.15rem] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.highlight
                    ? 'bg-primary-500 border-primary-400 shadow-lg shadow-primary-500/50'
                    : 'bg-dark-700 border-white/20'
                }`}
              />

              <div
                className={`glass p-6 rounded-2xl border transition-all duration-300 card-hover ${
                  exp.highlight
                    ? 'border-primary-500/40 bg-primary-500/5'
                    : 'border-white/10'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      {exp.highlight && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30">
                          Atual
                        </span>
                      )}
                    </div>
                    <p className="text-primary-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-sm flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-white/50 border border-white/10 hover:text-white/80 hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
