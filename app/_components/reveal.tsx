"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "scale" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

const hidden: Record<Variant, string> = {
  up: "opacity-0 translate-y-6",
  scale: "opacity-0 scale-95",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
};

const shown = "opacity-100 translate-y-0 translate-x-0 scale-100";

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -64px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? shown : hidden[variant]} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
