import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import profilePhoto from '../assets/profile.jpg';

const stats = [
  { label: 'Anos de experiência', value: '2+' },
  { label: 'Projetos feitos', value: '10+' },
  { label: 'Na Segala\'s desde', value: '2023' },
];

export function About() {
  return (
    <section id="sobre" className="w-[90%] max-w-5xl mx-auto py-10 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-mute/50" />
            <img
              src={profilePhoto}
              alt="Thiago Henrique"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover border border-line"
            />
          </div>
        </Reveal>

        <div>
          <SectionTitle>Sobre Mim</SectionTitle>
          <Reveal delay={100}>
            <p className="font-light leading-relaxed text-soft">
              Eu sou <strong className="font-semibold text-white">Thiago Henrique</strong>. Entrei na{' '}
              <strong className="font-semibold text-white">Segala's Alimentos</strong> como aprendiz, em 2023,
              e fui crescendo lá dentro até virar desenvolvedor. Hoje trabalho direto no e-commerce da empresa:
              novas funcionalidades, correções e integrações que os clientes usam todos os dias.
            </p>
            <p className="font-light leading-relaxed text-soft mt-4">
              No <strong className="font-semibold text-white">back-end</strong> escrevo Java com Spring, com
              MySQL e PostgreSQL por baixo. No <strong className="font-semibold text-white">front-end</strong>,
              React e TypeScript. Quanto mais eu faço dos dois lados, mais me interesso pelo sistema inteiro.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 80}>
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
