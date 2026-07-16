import { languages, profile, services, stats } from "@/app/_lib/data";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">02. About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who I am
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Reveal variant="up" className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
            <TiltCard maxTilt={3} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8">
                <div>
                  <p className="font-mono text-xs tracking-wider text-muted uppercase">Bio</p>
                  <p className="mt-4 font-serif text-xl leading-snug text-foreground sm:text-2xl">
                    {profile.bio}
                  </p>
                </div>
                <p className="mt-6 font-mono text-xs text-muted">
                  — Ayoub, {profile.location}
                </p>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={80} className="lg:col-span-2">
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-center gap-5 rounded-3xl border border-border bg-surface p-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-[11px] tracking-wider text-muted uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={140} className="lg:col-span-2">
            <TiltCard className="h-full">
              <div className="h-full rounded-3xl border border-border bg-surface p-6">
                <p className="font-mono text-xs tracking-wider text-muted uppercase">Languages</p>
                <ul className="mt-4 space-y-2.5">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-muted">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={200} className="sm:col-span-2 lg:col-span-6">
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <p className="font-mono text-xs tracking-wider text-muted uppercase">What I Do</p>
              <div className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div key={service.title}>
                    <p className="font-medium text-foreground">{service.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
