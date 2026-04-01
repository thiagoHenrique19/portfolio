import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MessageSquare, Send, Mail, Github, CheckCircle } from 'lucide-react';

export function Contact() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via Portfolio - ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:thiagohenriquedeoliveira015@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 bg-dark-800 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-400 mb-3">
            <span className="w-8 h-px bg-primary-400 inline-block" />
            <MessageSquare className="w-4 h-4" />
            contato
            <span className="w-8 h-px bg-primary-400 inline-block" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Vamos <span className="gradient-text">conversar</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Estou disponivel para novos projetos e oportunidades. Nao hesite em entrar em contato!
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-white/60 mb-2 font-medium">Nome</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2 font-medium">Mensagem</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Sua mensagem..."
                className="w-full px-4 py-3 glass rounded-xl border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                sent
                  ? 'bg-accent-500 text-white'
                  : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:scale-[1.02]'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Enviado com sucesso!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
