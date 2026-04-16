"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const exploreLinks = [
    { label: t.footer.links.collection,  href: "/koleksiyon" },
    { label: t.footer.links.about,       href: "/#about" },
    { label: t.footer.links.appointment, href: "/iletisim" },
    { label: t.footer.links.contact,     href: "/iletisim" },
  ];

  const contactItems = [
    {
      icon: MapPin,
      text: "Atatürk Bulvarı 67/143 Büyük Çarşı Kızılay, Ankara",
    },
    { icon: Phone, text: "(0312) 432 29 45 | +90 542 775 94 85" },
    { icon: Mail,  text: "iletisim@gokdenmodaevi.com" },
    {
      icon: Clock,
      text: t.contact.info.hours,
    },
  ];

  const socials = [
    {
      label: "Instagram",
      href: "https://instagram.com/gokdenmodaevi",
      svg: (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      svg: (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer id="footer" className="bg-black text-white">

      {/* ── Top divider ──────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* ── Brand column ── */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Gökden Modaevi"
                width={120}
                height={52}
                className="object-contain h-12 w-auto brightness-0 invert"
              />
            </Link>

            <p className="font-sans text-sm font-light text-white/70 leading-loose max-w-xs mb-8">
              {t.footer.tagline}
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socials.map(({ svg, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors duration-200"
                >
                  {svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Explore links ── */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6 font-medium">
              {t.footer.explore}
            </p>
            <ul className="space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm font-light text-white/70 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-white/60 group-hover:w-3 transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="md:col-span-5">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/60 mb-6 font-medium">
              {t.footer.contactLabel}
            </p>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={14} className="text-white/50 mt-0.5 shrink-0" />
                  <span className="font-sans text-sm font-light text-white/70 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs font-light text-white/60">
            {t.footer.copyright}
          </span>
          <div className="flex items-center gap-4">
            
            <a
              href="https://artydigital.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-light text-white/60 hover:text-white transition-colors duration-200"
            >
              Made by Arty Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
