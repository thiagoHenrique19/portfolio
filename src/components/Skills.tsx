import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech, sortTech } from './icons';

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
    desc: 'Modelagem, consultas e manutenção de bancos relacionais: MySQL, PostgreSQL e Oracle.',
    items: [tech.mysql, tech.postgres, tech.oracle, tech.dbeaver],
  },
  {
    title: 'Cloud e Infraestrutura',
    desc: 'Containers com Docker e serviços de nuvem na AWS.',
    items: [tech.aws, tech.docker],
  },
  {
    title: 'Ferramentas e Sistemas',
    desc: 'Versionamento, ambiente de desenvolvimento e sistemas operacionais do dia a dia.',
    items: [tech.git, tech.github, tech.intellij, tech.windows, tech.linux, tech.apple],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="w-[90%] max-w-6xl mx-auto py-16 md:py-24 border-t border-line">
      <SectionTitle index="02" desc="As tecnologias que uso no dia a dia e nos meus projetos.">
        Stack
      </SectionTitle>

      <div className="border-t border-line [&>div:last-child]:border-b-0">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 50} className="row grid md:grid-cols-[14rem_1fr] gap-x-10 gap-y-4 py-7 border-b border-line">
            <div>
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="text-xl font-semibold mt-1">{g.title}</h3>
            </div>
            <div>
              <p className="text-mute text-sm leading-relaxed mb-4 max-w-lg">{g.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {sortTech(g.items).map((t) => (
                  <li key={t.name}>
                    <TechIcon t={t} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
