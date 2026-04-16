"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

/* ── Fade-in wrapper ─────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Main section ───────────────────────────────────────── */
export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-pearl overflow-hidden">

      {/* ════════════════════════════════════════════════════
          PART 1 — Founder story
      ════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Portrait ── */}
          <FadeIn delay={0} className="relative">
            {/* Main portrait */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/tenzile_keskin.png"
                alt={t.about.founder}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Thin frame offset */}
              <div className="absolute inset-4 border border-black/10 pointer-events-none" />
            </div>

            {/* Floating year badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 w-28 h-28 bg-black flex flex-col items-center justify-center">
              <span className="font-serif text-3xl text-white font-light leading-none">1986</span>
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/50 mt-1.5">est.</span>
            </div>
          </FadeIn>

          {/* ── Text content ── */}
          <div className="flex flex-col gap-8 lg:pl-6">
            <FadeIn delay={0.1}>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gray-400">
                {t.about.label}
              </span>
            </FadeIn>

            <FadeIn delay={0.18}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-normal leading-tight text-charcoal">
                {t.about.headline}{" "}
                <em className="not-italic text-black">{t.about.headlineAccent}</em>
              </h2>
            </FadeIn>

            {/* Thin rule */}
            <FadeIn delay={0.22}>
              <div className="w-12 h-px bg-black/20" />
            </FadeIn>

            <FadeIn delay={0.28}>
              <p className="font-sans text-base font-light text-muted leading-loose">
                {t.about.body1}
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="font-sans text-base font-light text-muted leading-loose">
                {t.about.body2}
              </p>
            </FadeIn>

            <FadeIn delay={0.42}>
              <p className="font-sans text-base font-light text-muted leading-loose">
                {t.about.body3}
              </p>
            </FadeIn>

            {/* Founder name card */}
            <FadeIn delay={0.5}>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-px bg-black/30" />
                <div>
                  <p className="font-serif text-xl text-charcoal">{t.about.founder}</p>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gray-400 mt-0.5">
                    {t.about.founderTitle}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          PART 2 — Sewing machine photos (full-bleed strip)
      ════════════════════════════════════════════════════ */}
      <div className="relative bg-black">
        {/* Label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/30">
            {t.about.machinesLabel}
          </span>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src="/singer_1.png"
              alt="Gökden Modaevi atölyesinden Singer dikiş makinesi"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              quality={90}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Centered quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center px-6">
            <p className="font-serif text-2xl md:text-4xl text-white/70 italic leading-relaxed">
              &ldquo;Her dikiş bir sözdür.&rdquo;
            </p>
            <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/30 mt-3 block">
              — Tenzile Keskin, 1986
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
