import { Reveal } from './Reveal';

export function SectionTitle({ index, children, desc }: { index: string; children: string; desc?: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-xs text-accent tracking-wider mb-4">{index} /</p>
      <h2 className="display text-4xl sm:text-6xl font-bold">{children}</h2>
      {desc && <p className="text-mute mt-5 max-w-xl leading-relaxed">{desc}</p>}
    </Reveal>
  );
}
