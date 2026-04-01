import { useInView } from '../hooks/useInView';
import { FolderOpen, Github, Sparkles, ShoppingCart, Monitor } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  featured?: boolean;
  gradient: string;
  icon: React.ElementType;
  badge?: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Segala\'s Alimentos',
    description: 'Desenvolvimento e manutencao do e-commerce da empresa',
    longDescription:
      'Atuo diretamente no e-commerce da Segala\'s Alimentos, desenvolvendo e mantendo funcionalidades que impactam a experiencia real dos clientes. O trabalho envolve a construcao de novas features, correcao de bugs, integracao com sistemas internos e evolucao continua da plataforma utilizando Java com Spring no back-end.',
    tags: ['Java', 'Spring', 'MySQL', 'PostgreSQL', 'React', 'TypeScript', 'HTML5', 'CSS3'],
    featured: true,
    gradient: 'from-orange-600/30 to-primary-600/30',
    icon: ShoppingCart,
    badge: 'Profissional',
  },
  {
    title: 'Tela de Dispositivos Conectados',
    description: 'Gerenciamento de sessoes ativas no e-commerce',
    longDescription:
      'Funcionalidade desenvolvida dentro do e-commerce da empresa que exibe todos os dispositivos atualmente conectados na conta do usuario. A tela lista cada sessao ativa com informacoes como tipo de dispositivo, navegador e data do ultimo acesso, permitindo que o usuario encerre sessoes remotamente para maior controle e seguranca da conta.',
    tags: ['Java', 'Spring', 'React', 'TypeScript', 'JWT', 'MySQL', 'Seguranca'],
    gradient: 'from-primary-600/30 to-accent-600/30',
    icon: Monitor,
    badge: 'Profissional',
  },
  {
    title: 'Animated Border Login',
    description: 'Tela de login com efeito de borda luminosa',
    longDescription:
      'Tela de login animada com luzes percorrendo ao redor dos campos de username e password. Animacoes CSS avancadas com efeito neon, criando uma experiencia visual imersiva.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/thiagoHenrique19',
    gradient: 'from-purple-600/30 to-primary-600/30',
    icon: FolderOpen,
  },
  {
    title: 'Challenge of My Learning',
    description: 'Desafio pratico das ferramentas aprendidas',
    longDescription:
      'Projeto desafio que consolida os conhecimentos adquiridos durante a jornada de aprendizado. Envolve as principais ferramentas e tecnologias estudadas ao longo da formacao.',
    tags: ['Java', 'Spring', 'MySQL', 'JUnit5'],
    github: 'https://github.com/thiagoHenrique19',
    gradient: 'from-accent-600/30 to-teal-600/30',
    icon: FolderOpen,
  },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projetos" className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <FolderOpen className="w-4 h-4" />
            projetos
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            O que <span className="gradient-text">constru</span>i
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Projetos profissionais e pessoais desenvolvidos ao longo da minha jornada.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isFeatured = project.featured;

            return (
              <div
                key={project.title}
                className={`group relative glass p-6 rounded-2xl border border-white/10 card-hover overflow-hidden transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${isFeatured ? 'md:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className={`relative z-10 ${isFeatured ? 'md:flex md:gap-8 md:items-start' : ''}`}>
                  <div className={isFeatured ? 'md:flex-1' : ''}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      {project.badge && (
                        <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                          <Sparkles className="w-3 h-3" />
                          {project.badge}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/50 text-sm mb-3">{project.description}</p>
                  </div>

                  <div className={isFeatured ? 'md:flex-1' : ''}>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-white/50 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors w-fit"
                      >
                        <Github className="w-4 h-4" />
                        <span>Codigo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/thiagoHenrique19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/20 text-white/70 hover:text-white hover:border-white/40 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>Ver todos os projetos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
