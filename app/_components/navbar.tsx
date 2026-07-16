"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/app/_lib/data";
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";

const sectionIds = ["home", ...nav.map((item) => item.href.replace("#", ""))];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable — theme just won't persist
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
        <nav className="flex w-full max-w-fit items-center gap-1 rounded-full border border-border bg-surface/85 p-1.5 shadow-lg shadow-black/[0.03] backdrop-blur-md">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            aria-label={`${profile.name} — back to top`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-lg font-bold text-background"
            data-cursor-hover
          >
            A
          </a>

          <div className="hidden items-center md:flex">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "bg-accent-soft text-accent" : "text-muted hover:text-foreground"
                  }`}
                  data-cursor-hover
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-1 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              data-cursor-hover
            >
              <SunIcon className="hidden h-4 w-4 dark:block" />
              <MoonIcon className="block h-4 w-4 dark:hidden" />
            </button>
            <a
              href={profile.resumeUrl}
              download
              aria-label="Download résumé"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
              data-cursor-hover
            >
              <DownloadIcon className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 bg-background md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 font-serif text-4xl italic text-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
            >
              <SunIcon className="hidden h-4 w-4 dark:block" />
              <MoonIcon className="block h-4 w-4 dark:hidden" />
              Theme
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background"
            >
              <DownloadIcon className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
