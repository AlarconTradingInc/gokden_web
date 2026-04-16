"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import GownCard from "@/components/molecules/GownCard";
import { gowns } from "@/lib/gowns";

export default function ShowcaseClient() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-pearl">

      {/* ── Page hero ─────────────────────────────────────── */}
      <section className="relative bg-black pt-40 pb-20 overflow-hidden">
        {/* Decorative lines */}
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/6 to-transparent" />
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/4 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-6">
              {t.showcase.subtitle}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
              {t.showcase.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="mt-10 w-full h-px bg-white/10 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 font-sans text-sm font-light text-white/40 max-w-lg leading-loose"
          >
            {t.showcase.description}
          </motion.p>
        </div>
      </section>

      {/* ── Gown grid ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-20 md:py-28">

        {/* Category filter labels (decorative) */}
        <div className="flex gap-6 mb-14 overflow-x-auto pb-2">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-charcoal border-b border-charcoal pb-1 shrink-0">
            {t.showcase.title}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {gowns.map((gown, i) => (
            <GownCard key={gown.slug} gown={gown} index={i} />
          ))}
        </div>
      </section>

    </main>
  );
}
