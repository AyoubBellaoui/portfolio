import { profile } from "@/app/_lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p className="flex items-center gap-2">
          <span className="font-serif text-base text-foreground italic">{profile.name}</span>
          <span aria-hidden="true">·</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </p>
        <a
          href="#home"
          data-cursor-hover
          className="font-mono text-xs tracking-wider text-muted uppercase transition-colors hover:text-accent"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
