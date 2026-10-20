import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';
import profilePhoto from '../assets/profile.jpg';

const stats: { label: string; value: React.ReactNode }[] = [
  { label: 'Anos de experiência', value: <CountUp to={2} suffix="+" /> },
  { label: 'Projetos feitos', value: <CountUp to={10} suffix="+" /> },
  { label: 'Cafés tomados', value: '∞' },
];

export function About() {
  return (
    <section id="sobre" className="w-[90%] max-w-5xl mx-auto py-10 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-mute/50 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />
            <img
              src={profilePhoto}
              alt="Thiago Henrique"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border border-line"
            />
            <span className="absolute -bottom-4 -left-4 bg-white text-black text-xs font-semibold rounded-full px-4 py-2 shadow-lg">
              &lt;Full Stack /&gt;
            </span>
          </div>
        </Reveal>

        <div>
          <SectionTitle>Sobre Mim</SectionTitle>
          <Reveal delay={100}>
            <p className="font-light leading-relaxed text-soft">
              Eu sou <strong className="font-semibold text-white">Thiago Henrique</strong>, desenvolvedor web
              focado em criar experiências digitais eficientes. Comecei como aprendiz na{' '}
              <strong className="font-semibold text-white">Segala's Alimentos</strong> e hoje atuo direto no
              e-commerce da empresa, entregando funcionalidades que os clientes usam todos os dias.
            </p>
            <p className="font-light leading-relaxed text-soft mt-4">
              No <strong className="font-semibold text-white">Back-End</strong> trabalho com Java e Spring,
              MySQL e PostgreSQL. No <strong className="font-semibold text-white">Front-End</strong>, com React,
              TypeScript, HTML e CSS. Cada vez mais full-stack.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={200 + i * 100}>
                <div className="card-lift bg-card border border-line rounded-xl p-4 h-full">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs font-light text-mute mt-1">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
