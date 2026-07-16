"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/_lib/data";

export function RoleTypewriter() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const pauseMs = 1400;
    const speedMs = deleting ? 35 : 65;

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      }
    }, speedMs);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, roles]);

  const text = roles[index % roles.length].slice(0, subIndex);

  return (
    <span className="inline-flex items-center font-mono text-sm text-muted sm:text-base">
      {text}
      <span
        className="animate-blink ml-0.5 inline-block w-px bg-accent"
        style={{ height: "1em" }}
        aria-hidden="true"
      />
    </span>
  );
}
