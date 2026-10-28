import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import profilePhoto from '../assets/profile.jpg';

const stats = [
  { label: 'Anos de experiência', value: '2+' },
  { label: 'Projetos feitos', value: '10+' },
  { label: "Na Segala's desde", value: '2023' },
];

export function About() {
  return (
    <section id="sobre" className="w-[90%] max-w-6xl mx-auto py-16 md:py-24 border-t border-line">
      <SectionTitle index="01">Sobre mim</SectionTitle>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <img
            src={profilePhoto}
            alt="Retrato de Thiago Henrique"
            className="w-full max-w-sm aspect-[4/5] object-cover rounded-xl border border-line"
          />
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="text-xl sm:text-2xl leading-snug font-medium">
              Entrei na Segala's Alimentos como aprendiz, em 2023, e fui crescendo lá dentro até virar desenvolvedor.
            </p>
            <p className="text-soft leading-relaxed mt-6 max-w-xl">
              Hoje trabalho direto no e-commerce da empresa: novas funcionalidades, correções e integrações que os clientes usam todos os dias.
            </p>
            <p className="text-soft leading-relaxed mt-4 max-w-xl">
              No back-end escrevo Java com Spring, com MySQL e PostgreSQL por baixo. No front-end, React e TypeScript. Quanto mais eu faço dos dois lados, mais me interesso pelo sistema inteiro.
            </p>
          </Reveal>

          <dl className="grid grid-cols-3 border-t border-line mt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 80} className={`py-5 flex flex-col-reverse justify-end ${i > 0 ? 'pl-4 sm:pl-6 border-l border-line' : ''}`}>
                <dt className="text-xs text-mute mt-2">{s.label}</dt>
                <dd className="font-mono text-3xl sm:text-4xl font-medium text-accent">{s.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
