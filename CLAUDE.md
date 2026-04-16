@AGENTS.md

# Proje: Gökden Modaevi

## İşletme Bilgileri
- **İsim:** Gökden Modaevi
- **Kurucu:** Tenzile Keskin (Bolu Kız Meslek Lisesi mezunu, ilk adımı kendi gelinliğini tasarlayarak attı)
- **Kuruluş:** 1986
- **Adres:** Atatürk Bulvarı 67/143 Büyük Çarşı Kızılay, Ankara
- **Telefon:** (0312) 432 29 45 | +90 542 775 94 85
- **E-posta:** iletisim@gokdenmodaevi.com
- **Web:** gokdenmodaevi.com
- **Instagram:** @gokdenmodaevi

## Teknik Altyapı
- **Framework:** Next.js 16.2.3 (App Router, Turbopack)
- **CSS:** Tailwind CSS v4 — özel `@theme` token'ları `globals.css` içinde
- **Bileşenler:** Framer Motion, Lucide React, `next/image`, `next/link`
- **Renk paleti:** Premium siyah-beyaz; `pearl`, `ivory`, `silk`, `stone`, `silver`, `gray`, `muted`, `charcoal`, `black` token'ları. `gold` = `#A8A8A6` (gümüş aksent)
- **Fotoğraf efekti:** `.photo-mono` CSS sınıfı — hover'da renk açılıyor

## Anahtar Dosyalar
- `src/lib/gowns.ts` — tüm gelinlik verisi (slug, isim TR/EN, cover, images[], featured)
- `src/lib/i18n.ts` — TR/EN çeviri sözlükleri + `Translations` arayüzü
- `src/components/providers/LanguageProvider.tsx` — React context; `useLanguage()` hook'u
- `src/app/layout.tsx` — tüm sayfaları LanguageProvider + Navbar + Footer ile sarar

## Sayfalar
| URL | Dosya | Açıklama |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero + Hakkımızda + 3 öne çıkan model |
| `/koleksiyon` | `src/app/koleksiyon/page.tsx` | Tüm gelinlik koleksiyonu grid'i |
| `/koleksiyon/[slug]` | `src/app/koleksiyon/[slug]/page.tsx` | Detay sayfası — lightbox galeri |
| `/iletisim` | `src/app/iletisim/page.tsx` | İletişim formu + adres bilgileri |

## Gelinlik Slug'ları (görsel prefix'e göre)
| Slug | Görsel(ler) | Featured |
|---|---|---|
| `nokturno` | nok1–6 | ✓ |
| `la-belle` | la1–3 | ✓ |
| `dolce` | do1–2 | ✓ |
| `kamelya` | ka1 | — |
| `zeytin-cicegi` | zey | — |

## i18n
Dil değişimi `useLanguage()` hook'u ile yapılır. Yeni çeviri anahtarı eklenirken hem `src/lib/i18n.ts` içindeki `Translations` arayüzüne hem de `tr` ve `en` sözlüklerine eklenmeli.
