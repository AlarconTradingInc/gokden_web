"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const LOCALES: { locale: Locale; flag: string; code: string; label: string }[] = [
  { locale: "tr", flag: "🇹🇷", code: "TR", label: "Türkçe"   },
  { locale: "en", flag: "🇬🇧", code: "EN", label: "English"  },
  { locale: "de", flag: "🇩🇪", code: "DE", label: "Deutsch"  },
  { locale: "fr", flag: "🇫🇷", code: "FR", label: "Français" },
];

/* ── Language dropdown ───────────────────────────────────── */
function LangDropdown({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.locale === locale) ?? LOCALES[0];

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (loc: Locale) => {
    setLocale(loc);
    setOpen(false);
  };

  if (mobile) {
    /* Mobile: show all buttons in a row */
    return (
      <div className="flex items-center gap-1">
        {LOCALES.map(({ locale: loc, flag, code, label }) => (
          <button
            key={loc}
            onClick={() => select(loc)}
            aria-label={label}
            className={`flex items-center gap-1.5 px-3 py-2 rounded transition-all duration-200 ${
              locale === loc
                ? "bg-white/15 text-white"
                : "text-white/35 hover:text-white/60 hover:bg-white/8"
            }`}
          >
            <span className="text-xl leading-none">{flag}</span>
            <span className="font-sans text-[10px] tracking-[0.15em] font-medium">{code}</span>
          </button>
        ))}
      </div>
    );
  }

  /* Desktop: dropdown */
  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-200"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-sans text-[9px] tracking-[0.15em] font-medium">{current.code}</span>
        <ChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: 4, scaleY: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute right-0 top-full mt-2 w-36 bg-black/95 backdrop-blur-md border border-white/10 overflow-hidden z-50"
          >
            {LOCALES.map(({ locale: loc, flag, code, label }) => (
              <button
                key={loc}
                onClick={() => select(loc)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150 ${
                  locale === loc
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-base leading-none">{flag}</span>
                <span className="font-sans text-[10px] tracking-[0.15em] font-medium flex-1">{code}</span>
                {locale === loc && (
                  <span className="w-1 h-1 rounded-full bg-white/60 shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.collection, href: "/koleksiyon" },
    { label: t.nav.about,      href: "/#about" },
    { label: t.nav.contact,    href: "/iletisim" },
  ];

  const baseLinkClass =
    "relative font-sans text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-300";

  return (
    <>
      {/* ── Main bar ─────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || !isHomepage
            ? "py-3 bg-black/95 backdrop-blur-md border-b border-white/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="relative flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Gökden Modaevi"
              width={120}
              height={52}
              className="object-contain h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* ── Desktop links ── */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${baseLinkClass} text-pearl/70 hover:text-pearl group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px bg-silver w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* ── Right controls ── */}
          <div className="hidden md:flex items-center gap-4">
            <LangDropdown />

            <Link
              href="/iletisim"
              className="font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border border-pearl/50 text-pearl hover:bg-pearl hover:text-black transition-colors duration-300"
            >
              {t.nav.appointment}
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-pearl p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile fullscreen menu ────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          >
            <Image
              src="/logo.png"
              alt="Gökden Modaevi"
              width={60}
              height={60}
              className="object-contain mb-4"
            />

            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.08, duration: 0.45 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-pearl hover:text-silver transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <Link
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-pearl/50 text-pearl hover:bg-pearl hover:text-black transition-colors duration-300"
              >
                {t.nav.appointment}
              </Link>

              <LangDropdown mobile />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
