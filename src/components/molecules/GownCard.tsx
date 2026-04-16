"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Gown } from "@/lib/gowns";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface GownCardProps {
  gown: Gown;
  index: number;
}

export default function GownCard({ gown, index }: GownCardProps) {
  const { t, locale } = useLanguage();
  const name     = locale === "tr" ? gown.name     : gown.nameEn;
  const category = locale === "tr" ? gown.category : gown.categoryEn;
  const isInspirational = gown.inspirational === true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/koleksiyon/${gown.slug}`} className="block">

        {/* Image wrapper */}
        <div
          className="relative overflow-hidden bg-silk aspect-[9/16]"
        >
          <Image
            src={gown.cover}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized={gown.cover.endsWith(".jfif")}
          />

          {/* Hover veil */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />

          {/* Inspirational tag */}
          {isInspirational && (
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1">
              <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-white/80">
                {t.inspirational.title}
              </span>
            </div>
          )}

          {/* Corner brackets */}
          <div className="absolute top-4 left-4">
            <div className="w-5 h-px bg-white/0 group-hover:bg-white/70 group-hover:w-7 transition-all duration-400" />
            <div className="w-px h-5 bg-white/0 group-hover:bg-white/70 group-hover:h-7 transition-all duration-400" />
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col items-end">
            <div className="w-5 h-px bg-white/0 group-hover:bg-white/70 group-hover:w-7 transition-all duration-400" />
            <div className="w-px h-5 bg-white/0 group-hover:bg-white/70 group-hover:h-7 ml-auto transition-all duration-400" />
          </div>

          {/* View label — appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white bg-black/60 backdrop-blur-sm px-4 py-2">
              {t.collectionSection.detail}
            </span>
          </div>

          {/* Photo count */}
          {gown.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-0.5">
              <span className="font-sans text-[8px] tracking-[0.2em] text-white/60 uppercase">
                {gown.images.length} {t.showcase.photos}
              </span>
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted block mb-1 truncate">
              {category}
            </span>
            <p className="font-serif text-lg text-charcoal truncate">{name}</p>
          </div>
          <ArrowRight
            size={14}
            className="text-charcoal/25 group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-300 mb-1 shrink-0"
          />
        </div>
      </Link>
    </motion.div>
  );
}
