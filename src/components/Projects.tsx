import { Github, ArrowUpRight, Lock } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech, sortTech } from './icons';

const projects: { title: string; kind: string; description: string; items: Tech[]; github?: string }[] = [
  {
    title: "E-commerce Segala's Alimentos",
    kind: 'Produção · Empresa',
    description:
      'Loja virtual usada pelos clientes da empresa. Atuo na evolução da plataforma: funcionalidades novas, correção de bugs e comunicação com os sistemas internos.',
    items: [tech.java, tech.spring, tech.mysql, tech.react, tech.ts],
  },
  {
    title: 'Painel Backoffice',
    kind: 'Produção · Interno',
    description:
      'Painel interno que as equipes usam para gerenciar a operação. Ajudo a construí-lo e mantê-lo: recursos novos, bugs resolvidos e integrações com outros sistemas da casa.',
    items: [tech.java, tech.spring, tech.mysql, tech.react, tech.ts],
  },
  {
    title: 'Von Zu Hause',
    kind: 'Landing page',
    description:
      'Landing page da marca de produtos coloniais de Blumenau (SC), com identidade inspirada nas tradições alemãs.',
    items: [tech.react, tech.ts, tech.tailwind],
    github: 'https://github.com/thiagoHenrique19',
  },
  {
    title: 'Animated Border Login',
    kind: 'Estudo de interface',
    description: 'Tela de login com luzes percorrendo as bordas dos campos, feita com animações CSS e efeito neon.',
    items: [tech.html, tech.css, tech.js],
    github: 'https://github.com/thiagoHenrique19',
  },
];

export function Projects() {
  return (
    <section id="projetos" className="w-[90%] max-w-6xl mx-auto py-16 md:py-24 border-t border-line">
      <SectionTitle index="04" desc="Os dois primeiros são sistemas privados da empresa. Os outros estão no GitHub.">
        Projetos
      </SectionTitle>

      <ul className="border-t border-line [&>div:last-child>li]:border-b-0">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <li className="row group grid md:grid-cols-[4rem_1fr_12rem] gap-x-8 gap-y-4 py-8 border-b border-line">
              <span className="font-mono text-sm text-mute group-hover:text-accent transition-colors">0{i + 1}</span>
              <div>
                <p className="font-mono text-xs text-mute">{p.kind}</p>
                <h3 className="text-2xl sm:text-3xl font-semibold mt-1 display group-hover:translate-x-1 transition-transform duration-300" style={{ lineHeight: 1.1 }}>
                  {p.title}
                </h3>
                <p className="text-soft text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">{p.description}</p>
                <ul className="flex flex-wrap gap-2 mt-5">
                  {sortTech(p.items).map((t) => (
                    <li key={t.name}>
                      <TechIcon t={t} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border border-line rounded-full px-4 h-10 hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" /> Código <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-mute h-10">
                    <Lock className="w-4 h-4" /> Projeto privado
                  </span>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
