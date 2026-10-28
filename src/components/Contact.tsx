import { useState } from 'react';
import { Github, Mail, Copy, Check } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';

const EMAIL = 'thiagohenriquedeoliveira015@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contato" className="w-[90%] max-w-6xl mx-auto py-16 md:py-24 border-t border-line">
      <SectionTitle index="05">Vamos conversar</SectionTitle>

      <Reveal>
        <p className="text-mute max-w-xl leading-relaxed">
          Estou aberto a propostas full-time e freelance. O e-mail é o caminho mais rápido.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="block display font-semibold text-[clamp(1.35rem,4.6vw,3.5rem)] mt-8 break-all hover:text-accent transition-colors"
          style={{ lineHeight: 1.1 }}
        >
          {EMAIL}
        </a>

        <div className="flex flex-wrap gap-3 mt-10">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-sm px-6 h-12 rounded-full hover:brightness-110 transition">
            <Mail className="w-4 h-4" /> Enviar mensagem
          </a>
          <button onClick={copy} className="inline-flex items-center gap-2 border border-line text-sm px-5 h-12 rounded-full hover:border-ink transition-colors">
            {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            {copied ? 'E-mail copiado' : 'Copiar e-mail'}
          </button>
          <a
            href="https://github.com/thiagoHenrique19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line text-sm px-5 h-12 rounded-full hover:border-ink transition-colors"
          >
            <Github className="w-4 h-4" /> github.com/thiagoHenrique19
          </a>
        </div>
        <p className="sr-only" role="status" aria-live="polite">{copied ? 'E-mail copiado' : ''}</p>
      </Reveal>
    </section>
  );
}
