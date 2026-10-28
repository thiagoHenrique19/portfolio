const base = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const icon = (name: string, variant = 'original') => `${base}/${name}/${name}-${variant}.svg`;

export interface Tech {
  name: string;
  src: string;
}

export const tech = {
  // back-end
  java: { name: 'Java', src: icon('java') },
  spring: { name: 'Spring', src: icon('spring') },
  hibernate: { name: 'Hibernate', src: icon('hibernate') },
  maven: { name: 'Maven', src: icon('maven') },
  junit: { name: 'JUnit5', src: icon('junit') },
  // front-end
  html: { name: 'HTML5', src: icon('html5') },
  css: { name: 'CSS3', src: icon('css3') },
  js: { name: 'JavaScript', src: icon('javascript') },
  ts: { name: 'TypeScript', src: icon('typescript') },
  react: { name: 'React', src: icon('react') },
  tailwind: { name: 'Tailwind CSS', src: icon('tailwindcss') },
  // banco de dados
  mysql: { name: 'MySQL', src: icon('mysql') },
  postgres: { name: 'PostgreSQL', src: icon('postgresql') },
  oracle: { name: 'Oracle', src: icon('oracle') },
  dbeaver: { name: 'DBeaver', src: icon('dbeaver') },
  // cloud
  aws: { name: 'AWS', src: icon('amazonwebservices') },
  docker: { name: 'Docker', src: icon('docker') },
  // ferramentas e sistemas
  git: { name: 'Git', src: icon('git') },
  github: { name: 'GitHub', src: icon('github') },
  intellij: { name: 'IntelliJ IDEA', src: icon('intellij') },
  windows: { name: 'Windows', src: icon('windows11') },
  linux: { name: 'Linux', src: icon('linux') },
  apple: { name: 'Apple', src: icon('apple') },
} satisfies Record<string, Tech>;

const order: string[] = Object.values(tech).map((t) => t.name);

export const sortTech = (items: Tech[]) =>
  [...items].sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

export function TechIcon({ t }: { t: Tech }) {
  return (
    <span className="chip">
      <img src={t.src} alt="" loading="lazy" />
      {t.name}
    </span>
  );
}
