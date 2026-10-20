import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { Github } from 'lucide-react';
import gmail from '../assets/gmail.png';

export function Contact() {
  return (
    <section id="contato" className="w-[90%] max-w-3xl mx-auto py-10 md:py-12">
      <SectionTitle desc="Saiba mais sobre meu trabalho ou fale comigo pelos canais abaixo. Estou aberto a propostas full-time e freelance.">
        Contatos
      </SectionTitle>

      <div className="border-t border-line">
        <Reveal className="py-6 border-b border-line">
          <div className="flex items-center gap-3 mb-2">
            <img src={gmail} alt="Gmail" className="w-8 h-8 object-contain bg-[#ececec] rounded-md p-1" />
            <h3 className="font-bold text-xl">Email</h3>
          </div>
          <p className="font-light text-mute text-sm mb-4">thiagohenriquedeoliveira015@gmail.com</p>
          <a
            href="mailto:thiagohenriquedeoliveira015@gmail.com"
            className="inline-block bg-white text-black rounded-lg px-6 py-3 text-sm font-medium hover:bg-soft transition-colors"
          >
            Enviar mensagem
          </a>
        </Reveal>

        <Reveal delay={100} className="py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[#ececec] text-black rounded-md flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-xl">GitHub</h3>
          </div>
          <p className="font-light text-mute text-sm mb-4">github.com/thiagoHenrique19</p>
          <a
            href="https://github.com/thiagoHenrique19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black rounded-lg px-6 py-3 text-sm font-medium hover:bg-soft transition-colors"
          >
            Ver perfil
          </a>
        </Reveal>
      </div>
    </section>
  );
}
