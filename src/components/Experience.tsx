import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech, sortTech } from './icons';

const experiences: { role: string; period: string; description: string; items: Tech[]; current?: boolean }[] = [
  {
    role: 'Desenvolvedor de Software Jr',
    period: 'Atual',
    description:
      'Criação e evolução de aplicações web com Java e React. Novas funcionalidades, ajustes em sistemas existentes e trabalho em equipe da construção à entrega.',
    items: [tech.java, tech.spring, tech.react, tech.ts, tech.mysql, tech.aws],
    current: true,
  },
  {
    role: 'Assistente de Desenvolvimento',
    period: '2024 — 2025',
    description:
      'Soluções full-stack: HTML5, CSS3, JavaScript e React no front-end, e manutenção de projetos back-end com Java e Spring.',
    items: [tech.java, tech.spring, tech.react, tech.js, tech.mysql],
  },
  {
    role: 'Estagiário de Desenvolvimento',
    period: '2024',
    description:
      'Aplicações com Java e Spring Framework. Bancos MySQL e PostgreSQL, testes unitários com JUnit5, DBeaver, Linux e GitHub.',
    items: [tech.java, tech.spring, tech.postgres, tech.junit, tech.github],
  },
  {
    role: 'Aprendiz de Desenvolvimento',
    period: '2023',
    description:
      'Início da carreira com Java e lógica de programação. Primeiros contatos com bancos de dados e testes unitários.',
    items: [tech.java, tech.mysql, tech.postgres, tech.junit],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="w-[90%] max-w-6xl mx-auto py-16 md:py-24 border-t border-line">
      <SectionTitle index="03" desc="Minha trajetória na Segala's Alimentos, de aprendiz a desenvolvedor.">
        Experiência
      </SectionTitle>

      <p className="font-mono text-xs text-mute mb-6">
        <span className="text-accent">$</span> git log --career
      </p>

      <ol>
        {experiences.map((e, i) => (
          <Reveal key={e.role} delay={i * 60}>
            <li className="grid md:grid-cols-[10rem_1fr]">
              <p className={`font-mono text-sm pt-8 md:py-8 ${e.current ? 'text-accent' : 'text-mute'}`}>{e.period}</p>
              <div className="relative md:border-l border-line md:pl-10 pt-3 pb-8 md:py-8">
                <span
                  className={`hidden md:block absolute -left-[6px] top-[2.55rem] w-[11px] h-[11px] rounded-full border-2 ${
                    e.current ? 'bg-accent border-accent' : 'bg-bg border-mute'
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold">{e.role}</h3>
                </div>
                <p className="text-soft text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">{e.description}</p>
                <ul className="flex flex-wrap gap-2 mt-5">
                  {sortTech(e.items).map((t) => (
                    <li key={t.name}>
                      <TechIcon t={t} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
