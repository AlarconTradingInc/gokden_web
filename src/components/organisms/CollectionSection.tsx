"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { featuredGowns } from "@/lib/gowns";

/* ── Single featured card ────────────────────────────────── */
function FeaturedCard({
  gown,
  index,
  inView,
}: {
  gown: (typeof featuredGowns)[number];
  index: number;
  inView: boolean;
}) {
  const { t, locale } = useLanguage();
  const name     = locale === "en" ? gown.nameEn     : gown.name;
  const category = locale === "en" ? gown.categoryEn : gown.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/koleksiyon/${gown.slug}`} className="block">
        {/* Image container */}
        <div
          className="relative overflow-hidden bg-silk aspect-[9/16]"
        >
          <Image
            src={gown.cover}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Corner bracket on hover */}
          <div className="absolute top-4 right-4 w-0 h-0 border-t-2 border-r-2 border-black opacity-0 group-hover:w-7 group-hover:h-7 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute bottom-4 left-4 w-0 h-0 border-b-2 border-l-2 border-black opacity-0 group-hover:w-7 group-hover:h-7 group-hover:opacity-100 transition-all duration-500" />

          {/* Photo count badge */}
          {gown.images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2.5 py-1">
              <span className="font-sans text-[9px] tracking-[0.2em] text-white/70 uppercase">
                {gown.images.length} {t.showcase.photos}
              </span>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted block mb-1">
              {category}
            </span>
            <p className="font-serif text-xl text-charcoal">{name}</p>
          </div>
          <ArrowRight
            size={16}
            className="text-charcoal/30 group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-300 mb-1 shrink-0"
          />
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Main organism ──────────────────────────────────────── */
export default function CollectionSection() {
  const { t } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="collection" className="py-28 md:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-14">

        {/* ── Header ─────────────────────────────────────── */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted block mb-5">
            {t.collectionSection.label}
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-charcoal leading-tight">
              {t.collectionSection.headline}{" "}
              <em className="not-italic">{t.collectionSection.headlineAccent}</em>
            </h2>
            <p className="font-sans text-sm font-light text-muted max-w-sm leading-loose">
              {t.collectionSection.sub}
            </p>
          </div>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            className="mt-8 w-full h-px bg-stone/60 origin-left"
          />
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────
            First card spans 2 columns on md, the other 2
            stack in the remaining single column.
        ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start">
          {featuredGowns.slice(0, 3).map((gown, i) => (
            <FeaturedCard key={gown.slug} gown={gown} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/koleksiyon"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-charcoal border border-charcoal px-10 py-4 hover:bg-charcoal hover:text-pearl transition-colors duration-300"
          >
            {t.collectionSection.viewAll}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
