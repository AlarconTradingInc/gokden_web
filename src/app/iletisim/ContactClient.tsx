"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

/* ── Fade-in row ─────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Form field ─────────────────────────────────────────── */
function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  textarea,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClass =
    "w-full bg-transparent border-b border-stone/50 focus:border-charcoal outline-none font-sans text-sm font-light text-charcoal placeholder:text-muted/50 py-3 transition-colors duration-200 resize-none";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted">
        {label}
        {required && <span className="text-charcoal ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}

/* ── Main component ─────────────────────────────────────── */
export default function ContactClient() {
  const { t } = useLanguage();

  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [phone,   setPhone]   = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);
  const [error,   setError]   = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) throw new Error("send_failed");
      setSent(true);
    } catch {
      setError(t.contact.form.errorFallback ?? "Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSending(false);
    }
  };

  const infoItems = [
    {
      icon: MapPin,
      label: t.contact.info.addressLabel,
      text: "Atatürk Bulvarı 67/143 Büyük Çarşı Kızılay, Ankara",
    },
    { icon: Phone, label: t.contact.info.phoneLabel, text: "(0312) 432 29 45 | +90 542 775 94 85" },
    { icon: Mail,  label: t.contact.info.emailLabel, text: "iletisim@gokdenmodaevi.com"            },
    { icon: Clock, label: t.contact.info.hoursLabel,  text: t.contact.info.hours       },
  ];

  return (
    <main className="min-h-screen bg-pearl">

      {/* ── Page hero ─────────────────────────────────────── */}
      <section className="relative bg-black pt-40 pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/6 to-transparent" />
          <div className="absolute top-0 right-[22%] w-px h-full bg-gradient-to-b from-transparent via-white/4 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/30 block mb-6">
              Gökden Modaevi — Est. 1986
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-white leading-tight">
              {t.contact.subtitle}
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
            {t.contact.description}
          </motion.p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-14 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Contact form ── */}
          <div>
            <FadeIn delay={0}>
              <h2 className="font-serif text-2xl text-charcoal mb-10">
                {t.contact.subtitle}
              </h2>
            </FadeIn>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <CheckCircle size={40} className="text-charcoal" />
                <p className="font-serif text-xl text-charcoal">{t.contact.form.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <FadeIn delay={0.08}>
                  <Field
                    label={t.contact.form.name}
                    value={name}
                    onChange={setName}
                    required
                  />
                </FadeIn>
                <FadeIn delay={0.14}>
                  <Field
                    label={t.contact.form.email}
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                  />
                </FadeIn>
                <FadeIn delay={0.20}>
                  <Field
                    label={t.contact.form.phone}
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                  />
                </FadeIn>
                <FadeIn delay={0.26}>
                  <Field
                    label={t.contact.form.message}
                    value={message}
                    onChange={setMessage}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    textarea
                  />
                </FadeIn>

                <FadeIn delay={0.32}>
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="self-start font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 bg-black text-white hover:bg-charcoal-soft transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? t.contact.form.sending : t.contact.form.submit}
                    </button>
                    {error && (
                      <p className="font-sans text-xs text-red-600">{error}</p>
                    )}
                  </div>
                </FadeIn>
              </form>
            )}
          </div>

          {/* ── Info column ── */}
          <div className="flex flex-col gap-10 lg:pt-14">

            {/* Vertical rule + info */}
            {infoItems.map(({ icon: Icon, label, text }, i) => (
              <FadeIn key={label} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-stone/50 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-charcoal/60" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted block mb-1">
                      {label}
                    </span>
                    <p className="font-sans text-sm font-light text-charcoal leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Google Maps embed */}
            <FadeIn delay={0.44}>
              <div className="relative mt-4 overflow-hidden border border-stone/30 aspect-video">
                <iframe
                  title="Gökden Modaevi konum"
                  src="https://www.google.com/maps?q=Cumhuriyet+Mahallesi+Atatürk+Bulvarı+No:67+D:143-144+06230+Çankaya+Ankara&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
