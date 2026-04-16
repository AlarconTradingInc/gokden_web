"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Gown } from "@/lib/gowns";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface Props {
  gown: Gown;
}

/* ── Lightbox ───────────────────────────────────────────── */
function Lightbox({
  images,
  initial,
  onClose,
}: {
  images: string[];
  initial: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initial);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Kapat"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <span className="absolute top-7 left-1/2 -translate-x-1/2 font-sans text-[10px] tracking-[0.3em] uppercase text-white/30">
        {current + 1} / {images.length}
      </span>

      {/* Image */}
      <div
        className="relative w-full max-w-3xl max-h-[80vh] mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[3/4] max-h-[75vh]"
          >
            <Image
              src={images[current]}
              alt={`Fotoğraf ${current + 1}`}
              fill
              sizes="(max-width: 768px) 90vw, 768px"
              className="object-contain"
              priority
              unoptimized={images[current].endsWith(".jfif")}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full px-4 text-white/40 hover:text-white transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-4 text-white/40 hover:text-white transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main detail page ───────────────────────────────────── */
export default function GownDetailClient({ gown }: Props) {
  const { t, locale } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const name        = locale === "tr" ? gown.name        : gown.nameEn;
  const category    = locale === "tr" ? gown.category    : gown.categoryEn;
  const description = locale === "tr" ? gown.description : gown.descriptionEn;

  return (
    <>
      <main className="min-h-screen bg-pearl">

        {/* ── Back nav ─────────────────────────────────────── */}
        <div className="pt-32 pb-0 max-w-7xl mx-auto px-6 md:px-14">
          <Link
            href="/koleksiyon"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] uppercase text-muted hover:text-charcoal transition-colors duration-200"
          >
            <ArrowLeft size={13} />
            {t.detail.backLabel}
          </Link>
        </div>

        {/* ── Hero split ───────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Cover image ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden cursor-zoom-in group"
              onClick={() => setLightboxIndex(0)}
            >
              <Image
                src={gown.cover}
                alt={name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                unoptimized={gown.cover.endsWith(".jfif")}
              />
              <div className="absolute inset-4 border border-black/5 pointer-events-none" />
            </motion.div>

            {/* ── Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 lg:pt-8"
            >
              <div>
                <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted block mb-3">
                  {category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-normal text-charcoal leading-tight">
                  {name}
                </h1>
              </div>

              <div className="w-10 h-px bg-black/20" />

              <p className="font-sans text-base font-light text-muted leading-loose">
                {description}
              </p>

              {/* Appointment CTA */}
              <div className="mt-6 p-8 border border-stone/50 bg-ivory">
                <p className="font-serif text-xl text-charcoal mb-2">
                  {t.detail.appointmentTitle}
                </p>
                <p className="font-sans text-sm font-light text-muted leading-loose mb-6">
                  {t.detail.appointmentSub}
                </p>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 bg-black text-white hover:bg-charcoal-soft transition-colors duration-300"
                >
                  {t.detail.appointmentCta}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────── */}
        {gown.images.length > 1 && (
          <section className="max-w-7xl mx-auto px-6 md:px-14 pb-24">
            <div className="mb-10">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted">
                {t.detail.galleryLabel}
              </span>
              <div className="mt-3 h-px bg-stone/40" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {gown.images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  onClick={() => setLightboxIndex(i)}
                  className="relative aspect-[3/4] overflow-hidden cursor-zoom-in group bg-silk"
                >
                  <Image
                    src={src}
                    alt={`${name} — fotoğraf ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    unoptimized={src.endsWith(".jfif")}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
                  <div className="absolute bottom-2 right-2">
                    <span className="font-sans text-[8px] tracking-[0.2em] text-white/0 group-hover:text-white/60 transition-colors duration-300 uppercase">
                      {i + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* ── Lightbox ─────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={gown.images}
            initial={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
