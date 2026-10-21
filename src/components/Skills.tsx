import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech } from './icons';

const groups: { title: string; desc: string; items: Tech[] }[] = [
  {
    title: 'Back-End',
    desc: 'Aplicações robustas com Java e Spring, testadas com JUnit e organizadas com Maven.',
    items: [tech.java, tech.spring, tech.maven, tech.junit, tech.hibernate],
  },
  {
    title: 'Front-End',
    desc: 'Interfaces responsivas e bem estruturadas, construídas com React e TypeScript.',
    items: [tech.html, tech.css, tech.js, tech.ts, tech.react, tech.tailwind],
  },
  {
    title: 'Banco de Dados',
    desc: 'Modelagem, consultas e manutenção de bancos relacionais.',
    items: [tech.mysql, tech.postgres, tech.dbeaver],
  },
  {
    title: 'Cloud e Infraestrutura',
    desc: 'Containers com Docker e serviços de nuvem na AWS.',
    items: [tech.aws, tech.docker],
  },
  {
    title: 'Ferramentas',
    desc: 'Versionamento, ambiente de desenvolvimento e sistema operacional do dia a dia.',
    items: [tech.git, tech.github, tech.linux, tech.apple, tech.intellij],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="w-[90%] max-w-3xl mx-auto py-10 md:py-12">
      <SectionTitle desc="Confira as tecnologias que utilizo no dia a dia e nos meus projetos.">
        Habilidades
      </SectionTitle>

      <div className="border-t border-line">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60} className="group py-6 border-b border-line">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-xs text-mute">0{i + 1}</span>
              <h3 className="title text-xl font-bold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              {g.items.map((t) => (
                <TechIcon key={t.name} t={t} />
              ))}
            </div>
            <p className="font-light text-mute text-sm">{g.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
