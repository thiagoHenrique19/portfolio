import { Reveal } from './Reveal';

export function SectionTitle({ children, desc }: { children: string; desc?: string }) {
  return (
    <Reveal className="mb-6">
      <h2 className="title text-3xl sm:text-4xl font-bold">{children}</h2>
      <div className="w-12 h-[3px] bg-white rounded-full mt-3" />
      {desc && <p className="font-light text-mute mt-4 max-w-xl">{desc}</p>}
    </Reveal>
  );
}
