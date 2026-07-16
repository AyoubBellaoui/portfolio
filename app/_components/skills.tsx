import { skillsRowA, skillsRowB } from "@/app/_lib/data";
import { Reveal } from "./reveal";

function MarqueeRow({ items, direction }: { items: readonly string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];

  return (
    <div className="group marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-3 group-hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="shrink-0 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">03. Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Technologies I work with
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-12 space-y-4">
        <MarqueeRow items={skillsRowA} direction="left" />
        <MarqueeRow items={skillsRowB} direction="right" />
      </Reveal>
    </section>
  );
}
