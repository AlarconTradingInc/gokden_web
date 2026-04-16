"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PromoVideoSection() {
  const { locale } = useLanguage();
  const videoRef  = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying]   = useState(false);
  const [muted,   setMuted]     = useState(true);

  const handleMouseEnter = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.play().catch(() => {/* autoplay blocked – ignore */});
    setPlaying(true);
  }, [muted]);

  const handleMouseLeave = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setPlaying(false);
  }, []);

  /* Mobil: dokunuşla oynat/durdur */
  const handleClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = muted;
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [muted]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
  }, [muted]);

  return (
    <section className="relative bg-black py-24 md:py-36 overflow-hidden">

      {/* ── Decorative vertical lines ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/4 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-18 text-center"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/40 block mb-4">
            {locale === "tr" ? "Tanıtım" : "Showreel"}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white leading-tight">
            {locale === "tr" ? (
              <>Gökden <em className="not-italic text-white/60 font-light">Modaevi</em></>
            ) : (
              <>Gökden <em className="not-italic text-white/60 font-light">Atelier</em></>
            )}
          </h2>
          <div className="mt-6 w-12 h-px bg-white/20 mx-auto" />
        </motion.div>

        {/* ── Video card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          {/* 9:16 container */}
          <div
            className="relative aspect-[9/16] overflow-hidden cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <video
              ref={videoRef}
              src="/0406.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark veil — fades out when playing */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                playing ? "opacity-10" : "opacity-40"
              }`}
            />

            {/* Play hint — shown when not playing */}
            {!playing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none"
              >
                <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center">
                  <Play size={20} className="text-white/80 ml-1" fill="currentColor" />
                </div>
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50">
                  {locale === "tr" ? "Oynat" : "Play"}
                </span>
              </motion.div>
            )}

            {/* Sound toggle — visible on hover */}
            <button
              onClick={toggleMute}
              aria-label={muted ? "Sesi aç" : "Sesi kapat"}
              className={`absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center border border-white/30 bg-black/60 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/60 transition-all duration-200 z-10 ${
                playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {muted
                ? <VolumeX size={14} />
                : <Volume2 size={14} />
              }
            </button>
          </div>

          {/* Caption below video */}
          <div className="mt-5 flex items-center justify-between">
            <div>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/35 block mb-1">
                {locale === "tr" ? "Ankara · 1986'dan bu yana" : "Ankara · Since 1986"}
              </span>
              <p className="font-serif text-lg text-white/80">
                {locale === "tr" ? "Koleksiyon Filmi" : "Collection Film"}
              </p>
            </div>
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/25">
              2024
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
