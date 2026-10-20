import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { tech, TechIcon, Tech } from './icons';

const experiences: { role: string; period: string; description: string; items: Tech[]; current?: boolean }[] = [
  {
    role: 'Desenvolvedor de Software Jr',
    period: 'Atual',
    description:
      'Criação e evolução de aplicações web com Java e React. Novas funcionalidades, ajustes em sistemas existentes e trabalho em equipe da construção à entrega.',
    items: [tech.java, tech.spring, tech.react, tech.ts, tech.mysql],
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
    <section id="experiencia" className="w-[90%] max-w-3xl mx-auto py-10 md:py-12">
      <SectionTitle desc="Minha trajetória na Segala's Alimentos, de aprendiz a desenvolvedor.">
        Experiência
      </SectionTitle>

      <div className="relative pl-8 border-l border-line space-y-6">
        {experiences.map((e, i) => (
          <Reveal key={e.role} delay={i * 80}>
          <div className="card-lift relative bg-card border border-line rounded-2xl p-6">
            <span
              className={`absolute -left-[2.45rem] top-8 w-3 h-3 rounded-full border-2 border-bg ${
                e.current ? 'bg-white' : 'bg-mute'
              }`}
            >
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-bold text-lg">{e.role}</h3>
              <span className={`text-xs rounded-full px-3 py-1 border ${e.current ? 'bg-white text-black border-white font-medium' : 'text-mute border-line font-light'}`}>
                {e.period}
              </span>
            </div>
            <p className="font-light text-sm text-soft leading-relaxed mb-4">{e.description}</p>
            <div className="flex flex-wrap gap-2">
              {e.items.map((t) => (
                <TechIcon key={t.name} t={t} />
              ))}
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
