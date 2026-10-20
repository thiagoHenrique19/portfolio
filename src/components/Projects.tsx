import { Github, Store, ShoppingCart, LogIn } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech } from './icons';

const projects: { title: string; description: string; items: Tech[]; icon: React.ElementType; github?: string }[] = [
  {
    title: "E-commerce Segala's Alimentos",
    description:
      'Desenvolvimento e manutenção do e-commerce da empresa: novas features, correção de bugs e integração com sistemas internos.',
    items: [tech.java, tech.spring, tech.mysql, tech.react, tech.ts],
    icon: ShoppingCart,
  },
  {
    title: 'Von Zu Hause',
    description:
      'Landing page da marca de produtos coloniais de Blumenau (SC), com identidade inspirada nas tradições alemãs.',
    items: [tech.react, tech.ts, tech.tailwind],
    icon: Store,
    github: 'https://github.com/thiagoHenrique19',
  },
  {
    title: 'Animated Border Login',
    description: 'Tela de login com luzes percorrendo as bordas dos campos, feita com animações CSS e efeito neon.',
    items: [tech.html, tech.css, tech.js],
    icon: LogIn,
    github: 'https://github.com/thiagoHenrique19',
  },
];

export function Projects() {
  return (
    <section id="projetos" className="w-[90%] max-w-5xl mx-auto py-10 md:py-12">
      <SectionTitle desc="Veja alguns dos projetos que desenvolvi.">Projetos</SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="h-full">
          <article className="card-lift group bg-card border border-line rounded-2xl p-5 flex flex-col text-center h-full">
            <div className="h-28 rounded-xl bg-[#0f0f0f] border border-line mb-5 flex items-end justify-between p-4">
              <span className="text-6xl font-bold leading-none text-line group-hover:text-mute transition-colors duration-300">
                0{i + 1}
              </span>
              <p.icon className="w-5 h-5 text-mute" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold mb-2">{p.title}</h3>
            <p className="font-light text-xs text-mute leading-relaxed mb-4">{p.description}</p>
            <div className="flex justify-center flex-wrap gap-2 mb-5 mt-auto">
              {p.items.map((t) => (
                <TechIcon key={t.name} t={t} />
              ))}
            </div>
            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-md py-2 text-sm font-medium hover:bg-soft transition-colors"
              >
                <Github className="w-4 h-4" /> Github
              </a>
            ) : (
              <span className="text-xs text-mute font-light py-2">Projeto privado</span>
            )}
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
