import { projects } from "@/app/_lib/data";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";

export function Projects() {
  const [ecommerce, clinicPro, facebookClone, studentApp, deluxeApp, contractManager] = projects;

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">04. Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <Reveal variant="scale" className="sm:col-span-2 lg:col-span-6">
            <TiltCard maxTilt={2}>
              <ProjectCard project={clinicPro} priority />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={60} className="lg:col-span-3">
            <TiltCard>
              <ProjectCard project={ecommerce} />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={120} className="lg:col-span-3">
            <TiltCard>
              <ProjectCard project={facebookClone} />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={60} className="lg:col-span-2">
            <TiltCard>
              <ProjectCard project={studentApp} />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={120} className="lg:col-span-2">
            <TiltCard>
              <ProjectCard project={deluxeApp} />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={180} className="lg:col-span-2">
            <TiltCard>
              <ProjectCard project={contractManager} />
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
