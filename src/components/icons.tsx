const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const icon = (name: string, variant = 'original') => `${base}/${name}/${name}-${variant}.svg`;

export interface Tech {
  name: string;
  src: string;
}

export const tech = {
  java: { name: 'Java', src: icon('java') },
  spring: { name: 'Spring', src: icon('spring') },
  maven: { name: 'Maven', src: icon('maven') },
  junit: { name: 'JUnit5', src: icon('junit') },
  hibernate: { name: 'Hibernate', src: icon('hibernate') },
  html: { name: 'HTML5', src: icon('html5') },
  css: { name: 'CSS3', src: icon('css3') },
  js: { name: 'JavaScript', src: icon('javascript') },
  react: { name: 'React', src: icon('react') },
  ts: { name: 'TypeScript', src: icon('typescript') },
  tailwind: { name: 'Tailwind CSS', src: icon('tailwindcss') },
  mysql: { name: 'MySQL', src: icon('mysql') },
  postgres: { name: 'PostgreSQL', src: icon('postgresql') },
  dbeaver: { name: 'DBeaver', src: icon('dbeaver') },
  git: { name: 'Git', src: icon('git') },
  github: { name: 'GitHub', src: icon('github') },
  linux: { name: 'Linux', src: icon('linux') },
  aws: { name: 'AWS', src: icon('amazonwebservices', 'original-wordmark') },
  docker: { name: 'Docker', src: icon('docker') },
  apple: { name: 'Apple', src: icon('apple') },
  intellij: { name: 'IntelliJ IDEA', src: icon('intellij') },
} satisfies Record<string, Tech>;

export function TechIcon({ t }: { t: Tech }) {
  return (
    <span className="tech" data-tip={t.name}>
      <img src={t.src} alt={t.name} loading="lazy" className="tech-icon" />
    </span>
  );
}

