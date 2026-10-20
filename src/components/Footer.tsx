import { ArrowUp } from 'lucide-react';

const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contatos' },
];

export function Footer() {
  return (
    <footer className="bg-white text-black rounded-t-2xl p-8 mt-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <p className="text-xs font-light">Website feito por:</p>
          <p className="text-3xl font-bold">Thiago Henrique</p>
          <p className="text-xs font-light mt-2 max-w-md">
            Website pessoal de portfólio, feito com React, TypeScript e Tailwind CSS.
          </p>
        </div>
        <div className="flex md:justify-end items-start gap-6">
          <ul className="text-sm space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:underline underline-offset-4"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:-translate-y-1 transition-transform"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="max-w-5xl mx-auto text-xs font-light mt-8 pt-4 border-t border-black/15">
        © {new Date().getFullYear()} Thiago Henrique
      </p>
    </footer>
  );
}
