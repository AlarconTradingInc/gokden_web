"use client";

import { motion } from "framer-motion";

interface ImageCardProps {
  /** Tailwind gradient classes for the background */
  gradient: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function ImageCard({
  gradient,
  title,
  subtitle,
  className = "",
}: ImageCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Background gradient — scales on hover (parallax-lite) */}
      <motion.div
        className={`absolute inset-0 ${gradient}`}
        variants={{
          rest:  { scale: 1 },
          hover: { scale: 1.06 },
        }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Dark veil */}
      <motion.div
        className="absolute inset-0 bg-charcoal/0"
        variants={{
          rest:  { opacity: 0 },
          hover: { opacity: 1, backgroundColor: "rgba(30,26,22,0.25)" },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Corner accent — top-right */}
      <motion.div
        className="absolute top-4 right-4 border-t border-r border-gold"
        variants={{
          rest:  { width: 0,   height: 0,   opacity: 0 },
          hover: { width: 24,  height: 24,  opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Glassmorphism info panel — slides up on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-charcoal/55 backdrop-blur-md"
        variants={{
          rest:  { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-serif text-pearl text-lg leading-tight">{title}</p>
        {subtitle && (
          <p className="font-sans text-pearl/65 text-[10px] tracking-[0.25em] uppercase mt-1">
            {subtitle}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
