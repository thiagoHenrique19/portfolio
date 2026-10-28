import { tech } from './icons';

const all = Object.values(tech);

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {all.map((t) => (
        <li key={t.name} className="flex items-center gap-3 shrink-0">
          <img src={t.src} alt="" className="w-7 h-7 object-contain bg-ink rounded-full p-1" loading="lazy" />
          <span className="font-mono text-sm text-soft whitespace-nowrap">{t.name}</span>
          <span className="text-line mx-3" aria-hidden="true">/</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee border-y border-line py-5" aria-label="Tecnologias que utilizo">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
