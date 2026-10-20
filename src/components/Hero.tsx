import { useEffect, useState } from 'react';
import { Github, Mail, ArrowDown } from 'lucide-react';

const roles = ['Desenvolvedor Web', 'Full Stack Developer'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(role.slice(0, text.length + 1));
          if (text.length + 1 === role.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(role.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 90
    );
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative">
      <div className="relative flex flex-col items-center text-center w-[85%] max-w-3xl mx-auto pt-36 pb-6">
      <p className="text-sm font-light text-mute">Olá, mundo! Eu sou</p>
      <h1 className="text-5xl sm:text-7xl font-bold mt-2">
        Thiago <span className="text-mute">Henrique</span>
      </h1>
      <p className="text-2xl sm:text-3xl font-semibold mt-4 h-10">
        {text}
        <span className="cursor" />
      </p>

      <p className="font-light text-mute max-w-xl mx-auto mt-6 leading-relaxed">
        Desenvolvedor focado em Java, Spring e React. Transformo ideias em aplicações web
        completas, do banco de dados à interface.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://github.com/thiagoHenrique19"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-lg bg-card border border-line flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="mailto:thiagohenriquedeoliveira015@gmail.com"
          className="w-14 h-14 rounded-lg bg-card border border-line flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
          aria-label="E-mail"
        >
          <Mail className="w-6 h-6" />
        </a>
        <button
          onClick={() => go('projetos')}
          className="group px-6 rounded-lg bg-white text-black font-semibold text-sm flex items-center gap-2 hover:bg-soft hover:-translate-y-1 transition-all duration-300"
        >
          Ver projetos <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
      </div>
    </section>
  );
}
