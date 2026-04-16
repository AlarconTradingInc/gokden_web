"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

export type ButtonVariant = "solid" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold";

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-charcoal text-pearl border border-charcoal hover:bg-charcoal-soft",
  ghost:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-pearl",
  outline:
    "bg-transparent text-pearl border border-pearl/60 hover:bg-pearl/10",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-5 text-sm",
};

export default function Button({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
