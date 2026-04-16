"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Parallax: photo drifts slower than viewport */
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  /* Content fades out on scroll */
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY       = useTransform(scrollYProgress, [0, 0.5], ["0%", "-7%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* ── Parallax hero photo ───────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/hero.png"
          alt="Gökden Modaevi bridal atelier"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* ── Dark overlay ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Subtle grid texture ───────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 80px
          ), repeating-linear-gradient(
            90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 80px
          )`,
        }}
      />

      {/* ── Vertical accent lines ─────────────────────────── */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent" />
        <div className="absolute top-0 right-[18%] w-px h-full bg-gradient-to-b from-transparent via-white/6 to-transparent" />
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12"
      >
        {/* Establishment label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="font-sans text-[11px] tracking-[0.35em] uppercase text-white/55 mb-8 block">
            {t.hero.label}
          </span>
        </motion.div>

        {/* Display headline */}
        <motion.div
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.06] tracking-tight text-white">
            {t.hero.headline1}{" "}
            <em className="not-italic text-white/80 font-light">{t.hero.headline2}</em>
          </h1>
        </motion.div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-8 w-16 h-px bg-white/30 origin-left"
        />

        {/* Sub-copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-6 max-w-md"
        >
          <p className="font-sans text-base font-light text-white/50 leading-loose">
            {t.hero.sub}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/koleksiyon"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-white text-black hover:bg-white/90 transition-colors duration-300"
          >
            {t.hero.cta1}
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 border border-white/50 text-white hover:bg-white/10 transition-colors duration-300"
          >
            {t.hero.cta2}
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Bottom brand stamp ───────────────────────────── */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/20 [writing-mode:vertical-rl]">
          Gökden Modaevi — Ankara · Est. 1986
        </span>
      </div>
    </section>
  );
}
