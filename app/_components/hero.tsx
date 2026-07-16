import Image from "next/image";
import { profile, socials } from "@/app/_lib/data";
import { ArrowRightIcon, ChevronDownIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./icons";
import { LocalClock } from "./local-clock";
import { RoleTypewriter } from "./role-typewriter";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 overflow-hidden select-none lg:block"
      >
        <p className="text-stroke leading-none font-black tracking-tighter whitespace-nowrap text-center text-[20vw]">
          BACKEND
        </p>
      </div>
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-2 font-mono text-sm text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            Open to opportunities · {profile.location}
          </p>

          <h1 className="mt-6 text-6xl leading-[0.95] font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {profile.firstName}
          </h1>
          <h1 className="font-serif text-6xl leading-[0.95] text-accent italic sm:text-7xl lg:text-8xl">
            {profile.lastName}
          </h1>

          <div className="mt-6 h-6">
            <RoleTypewriter />
          </div>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            I love blending creativity with logic to craft digital experiences that
            truly stand out — a self-taught, backend-first developer who changed
            careers to build software for a living.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#journey"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Read My Journey
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                  aria-label={social.name}
                  data-cursor-hover
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-xs lg:max-w-none">
            <div className="relative aspect-[4/5] w-full -rotate-2 overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-black/10">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 360px, 300px"
                className="object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
            </div>

            <div className="absolute -right-4 -bottom-6 w-56 rotate-2 rounded-2xl border border-border bg-surface/95 p-4 shadow-xl shadow-black/10 backdrop-blur-md sm:-right-8 sm:w-64">
              <div className="flex items-center justify-between font-mono text-xs text-muted">
                <span>CASABLANCA</span>
                <LocalClock />
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
                </span>
                <span className="text-xs text-foreground">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        data-cursor-hover
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent sm:block"
      >
        <ChevronDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
