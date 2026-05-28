import { useInView } from '../hooks/useInView';
import { Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  color: string;
}

const skills: Skill[] = [
  { name: 'Java', level: 85, category: 'backend', color: '#f89820' },
  { name: 'Spring Framework', level: 75, category: 'backend', color: '#6db33f' },
  { name: 'Maven', level: 70, category: 'backend', color: '#c71a36' },
  { name: 'JUnit5', level: 72, category: 'backend', color: '#25a162' },
  { name: 'Hibernate', level: 65, category: 'backend', color: '#59666c' },
  { name: 'HTML5', level: 88, category: 'frontend', color: '#e34f26' },
  { name: 'CSS3', level: 82, category: 'frontend', color: '#264de4' },
  { name: 'JavaScript', level: 75, category: 'frontend', color: '#f7df1e' },
  { name: 'React', level: 65, category: 'frontend', color: '#61dafb' },
  { name: 'MySQL', level: 80, category: 'database', color: '#00758f' },
  { name: 'PostgreSQL', level: 75, category: 'database', color: '#336791' },
  { name: 'DBeaver', level: 78, category: 'database', color: '#5b7dc8' },
  { name: 'Git / GitHub', level: 78, category: 'tools', color: '#f05032' },
  { name: 'Linux', level: 72, category: 'tools', color: '#fcc624' },
];

const categoryLabels = {
  backend: 'Back-End',
  frontend: 'Front-End',
  database: 'Banco de Dados',
  tools: 'Ferramentas',
};

const categories = ['backend', 'frontend', 'database', 'tools'] as const;

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="habilidades" className="py-14 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <Layers className="w-4 h-4" />
            habilidades
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo no dia a dia para construir solucoes robustas.
          </p>
        </div>

        <div ref={ref} className="space-y-8">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span className="w-4 h-px bg-white/20" />
                  {categoryLabels[cat]}
                  <span className="flex-1 h-px bg-white/5" />
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {catSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`glass p-5 rounded-2xl border border-white/10 card-hover group transition-all duration-700 ${
                        inView
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-8'
                      }`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}60` }}
                          />
                          <span className="font-medium text-white/90 text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-white/40 group-hover:text-primary-400 transition-colors">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                            transitionDelay: `${index * 80 + 300}ms`,
                            boxShadow: `0 0 8px ${skill.color}40`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
