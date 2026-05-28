import { useInView } from '../hooks/useInView';
import { MessageSquare, Mail, Github } from 'lucide-react';

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contato" className="py-14 bg-dark-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <MessageSquare className="w-4 h-4" />
            contato
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Entre em <span className="gradient-text">contato</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Estou disponivel para novos projetos e oportunidades. Entre em contato pelos canais abaixo!
          </p>
        </div>

        <div
          ref={ref}
          className={`flex flex-col gap-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass p-6 rounded-2xl border border-white/10 card-hover">
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a
              href="mailto:thiagohenriquedeoliveira015@gmail.com"
              className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors text-sm"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>thiagohenriquedeoliveira015@gmail.com</span>
            </a>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/10 card-hover">
            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
            <a
              href="https://github.com/thiagoHenrique19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-primary-400 transition-colors text-sm"
            >
              <Github className="w-5 h-5 flex-shrink-0" />
              <span>github.com/thiagoHenrique19</span>
            </a>
          </div>

          <div className="glass p-6 rounded-2xl border border-accent-500/30 bg-accent-500/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent-400 animate-pulse" />
              <div>
                <p className="text-white font-medium text-sm">Disponivel para oportunidades</p>
                <p className="text-white/40 text-xs mt-1">Aberto a propostas full-time ou freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
