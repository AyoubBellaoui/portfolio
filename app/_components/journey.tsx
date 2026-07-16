import { journey } from "@/app/_lib/data";
import { Reveal } from "./reveal";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">01. Journey</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Not the usual path
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            From a technician diploma in Larache to a full-time detour outside
            tech, to shipping real backend systems in Casablanca — here&apos;s how
            it actually went.
          </p>
        </Reveal>

        <div className="relative mt-16 space-y-12 border-l border-border pl-8 sm:pl-10">
          {journey.map((item, index) => (
            <Reveal key={item.period} variant="left" delay={index * 60} className="relative">
              <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center sm:-left-12">
                {item.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                )}
                <span
                  className={`relative inline-flex h-4 w-4 rounded-full border-2 ${
                    item.current
                      ? "border-accent bg-accent"
                      : "border-border bg-surface"
                  }`}
                />
              </span>

              <p className="font-mono text-xs tracking-wider text-accent uppercase">
                {item.period}
                {item.current ? " · Now" : ""}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.place}</p>
              <p className="mt-2 max-w-xl leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
