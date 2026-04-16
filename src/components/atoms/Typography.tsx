import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/** Giant serif display heading — used in Hero */
export function DisplayHeading({ children, className = "" }: Props) {
  return (
    <h1
      className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.08] tracking-tight ${className}`}
    >
      {children}
    </h1>
  );
}

/** Section-level heading */
export function SectionHeading({ children, className = "" }: Props) {
  return (
    <h2
      className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

/** Sub-heading, typically italic */
export function SubHeading({ children, className = "" }: Props) {
  return (
    <h3
      className={`font-serif text-xl md:text-2xl font-normal italic ${className}`}
    >
      {children}
    </h3>
  );
}

/** Standard paragraph text */
export function BodyText({ children, className = "" }: Props) {
  return (
    <p className={`font-sans text-base leading-relaxed font-light ${className}`}>
      {children}
    </p>
  );
}

/** All-caps spaced label — years, categories, section markers */
export function Label({ children, className = "" }: Props) {
  return (
    <span
      className={`font-sans text-[11px] tracking-[0.3em] uppercase font-medium ${className}`}
    >
      {children}
    </span>
  );
}

/** Small caption */
export function Caption({ children, className = "" }: Props) {
  return (
    <p className={`font-sans text-sm leading-relaxed font-light ${className}`}>
      {children}
    </p>
  );
}
