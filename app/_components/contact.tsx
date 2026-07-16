"use client";

import { useState } from "react";
import { profile, socials } from "@/app/_lib/data";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./icons";
import { Reveal } from "./reveal";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: MailIcon,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link next to it still works
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-sm text-accent">05. Contact</p>
          <h2 className="mt-4 font-serif text-5xl text-foreground italic sm:text-6xl lg:text-7xl">
            Let&apos;s build
            <br />
            something great.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border px-6 py-4">
            <a
              href={`mailto:${profile.email}`}
              data-cursor-hover
              className="font-mono text-lg text-foreground transition-colors hover:text-accent sm:text-2xl"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              data-cursor-hover
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-hover text-muted transition-colors hover:text-accent"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-accent-2" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="mt-2 text-xs text-muted" aria-live="polite">
            {copied ? "Copied to clipboard" : "Click the icon to copy"}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.icon === "mail" ? undefined : "_blank"}
                  rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {social.handle}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
