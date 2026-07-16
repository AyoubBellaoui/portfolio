import Image from "next/image";
import type { Project } from "@/app/_lib/data";
import { BrowserFrame } from "./browser-frame";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

export function ProjectCard({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  const label = project.demoUrl
    ? new URL(project.demoUrl).hostname
    : new URL(project.codeUrl).pathname.slice(1);

  return (
    <div className="group h-full">
      <BrowserFrame label={label}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority}
          quality={90}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/15 px-2.5 py-1 text-xs text-white backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
              >
                <ArrowUpRightIcon className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </BrowserFrame>

      <div className="mt-4">
        <h3 className="font-medium text-foreground">{project.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
        {project.builtAt && (
          <p className="mt-2 font-mono text-[11px] tracking-wider text-muted uppercase">
            Built at {project.builtAt}
          </p>
        )}
      </div>
    </div>
  );
}
