"use client";

import { motion } from "framer-motion";

interface NavItemProps {
  label: string;
  href: string;
  /** Use light colours (on dark navbar background) */
  isLight?: boolean;
}

export default function NavItem({ label, href, isLight = false }: NavItemProps) {
  return (
    <motion.a
      href={href}
      className={`relative font-sans text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${
        isLight ? "text-pearl/70 hover:text-pearl" : "text-charcoal/70 hover:text-charcoal"
      }`}
      whileHover="hover"
      initial="initial"
    >
      {label}
      {/* Animated underline */}
      <motion.span
        className={`absolute -bottom-1 left-0 h-px ${isLight ? "bg-gold" : "bg-charcoal"}`}
        variants={{
          initial: { scaleX: 0, originX: 0 },
          hover:   { scaleX: 1, originX: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ width: "100%" }}
      />
    </motion.a>
  );
}
