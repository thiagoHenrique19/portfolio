import { useEffect, useState } from 'react';
import { ArrowDown, Github, Mail, Sparkles } from 'lucide-react';

const roles = [
  'Desenvolvedor Web',
  'Full Stack Developer'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden animated-gradient"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-800/10 rounded-full blur-3xl" />

      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/70 mb-5 animate-fade-in border border-white/10">
          <Sparkles className="w-4 h-4 text-accent-400 animate-spin-slow" />
          <span>Disponivel para novas oportunidades</span>
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
        </div>

        <h1 className="text-5xl sm:text-7xl font-black mb-3 leading-tight animate-slide-up">
          <span className="text-white">Ola, eu sou</span>
          <br />
          <span className="gradient-text">Thiago Henrique</span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-2xl sm:text-3xl font-light text-white/70">
            <span className="font-mono text-primary-300">{displayed}</span>
            <span className="cursor" />
          </p>
        </div>

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-7 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Desenvolvedor apaixonado por criar experiencias web incriveis.
          Explorando o universo de Java, Spring, React e muito mais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button
            onClick={() => scrollTo('projetos')}
            className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>Ver Projetos</span>
            <span className="group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-4 h-4" />
            </span>
          </button>

          <button
            onClick={() => scrollTo('contato')}
            className="group px-8 py-4 glass border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contato</span>
          </button>
        </div>

        <div className="flex gap-4 justify-center mt-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <a
            href="https://github.com/thiagoHenrique19"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 glass rounded-full flex items-center justify-center text-white/60 hover:text-white hover:scale-110 hover:border-white/30 border border-white/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:thiagohenriquedeoliveira015@gmail.com"
            className="w-11 h-11 glass rounded-full flex items-center justify-center text-white/60 hover:text-white hover:scale-110 hover:border-white/30 border border-white/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-8 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          {['Java', 'Spring', 'React', 'TypeScript', 'MySQL', 'Linux'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-accent-400 border border-accent-500/30 rounded-full bg-accent-500/5 hover:bg-accent-500/10 hover:border-accent-500/50 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors animate-float"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
}
