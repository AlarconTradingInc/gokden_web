export type Locale = "tr" | "en" | "de" | "fr";

/* ─────────────────────────────────────────────────────────── */
/*  Shared shape — all string values                           */
/* ─────────────────────────────────────────────────────────── */

export interface Translations {
  nav: {
    collection: string;
    about: string;
    contact: string;
    appointment: string;
  };
  hero: {
    label: string;
    headline1: string;
    headline2: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  about: {
    label: string;
    headline: string;
    headlineAccent: string;
    founder: string;
    founderTitle: string;
    established: string;
    body1: string;
    body2: string;
    body3: string;
    machinesLabel: string;
  };
  collectionSection: {
    label: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    viewAll: string;
    category: string;
    detail: string;
  };
  showcase: {
    title: string;
    subtitle: string;
    description: string;
    viewDetail: string;
    photos: string;
  };
  detail: {
    backLabel: string;
    galleryLabel: string;
    appointmentTitle: string;
    appointmentSub: string;
    appointmentCta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      errorFallback: string;
    };
    info: {
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      hoursLabel: string;
      hours: string;
    };
  };
  footer: {
    tagline: string;
    explore: string;
    atelier: string;
    contactLabel: string;
    copyright: string;
    madeWith: string;
    links: {
      collection: string;
      about: string;
      appointment: string;
      contact: string;
    };
  };
  inspirational: {
    title: string;
    subtitle: string;
  };
}

/* ─────────────────────────────────────────────────────────── */
/*  Translation dictionaries                                   */
/* ─────────────────────────────────────────────────────────── */

const tr: Translations = {
  /* ── Navbar ── */
  nav: {
    collection: "Koleksiyon",
    about: "Hakkımızda",
    contact: "İletişim",
    appointment: "Randevu Al",
  },

  /* ── Hero ── */
  hero: {
    label: "Ankara · Kuruluş 1986",
    headline1: "Zamanın Ötesinde",
    headline2: "Bir Güzellik",
    sub: "Türkiye'nin önde gelen modaevlerinden biri olarak, zarafet, kalite ve özgün tasarımı bir araya getirerek her gelinin hayalini gerçeğe dönüştürüyoruz.",
    cta1: "Koleksiyonu Keşfet",
    cta2: "Bize Ulaşın",
  },

  /* ── About ── */
  about: {
    label: "Hikayemiz",
    headline: "Tenzile Keskin'in",
    headlineAccent: "38 Yıllık Ustalığı",
    founder: "Tenzile Keskin",
    founderTitle: "Kurucu",
    established: "Est. 1986",
    body1:
      "Türkiye'nin önde gelen modaevlerinden biri olarak, köklü geçmişimiz ve güçlü tasarım anlayışımızla gelinlik sektöründe fark yaratıyoruz. 1986 yılında kurucumuz Tenzile Keskin tarafından temelleri atılan modaevimiz, yıllar içinde hem Türkiye'de hem de yurtdışında geniş bir müşteri kitlesine ulaşarak güvenilir ve prestijli bir marka haline gelmiştir. Zarafet, kalite ve özgün tasarımı bir araya getiren anlayışımızla her gelinin hayalini gerçeğe dönüştürmeyi hedefliyoruz.",
    body2:
      "Kuruluşumuzdan bu yana binlerce gelinimizin en özel günlerinde yanlarında bulunduk, onlara özel tasarım gelinlikler hazırladık. Atatürk Bulvarı 67/143 Kızılay Ankara Büyük Çarşı'da bulunan modaevimiz hem yurt içi hem yurt dışı pazarlara ürün sunarak Türk modasını dünyaya taşımaktadır. Deneyimli ekibimiz ve titiz işçiliğimizle her detayda mükemmelliği yakalamayı amaçlıyoruz.",
    body3:
      "Kurucumuz Tenzile Keskin, Bolu Kız Meslek Lisesi'nden mezun olmuş ve moda yolculuğuna kendi gelinliğini tasarlayarak ilk adımını atmıştır. Bu özel başlangıç, yıllar içinde büyük bir başarı hikâyesine dönüşmüş ve Gökden Modaevi'nin bugünkü konumuna ulaşmasına ilham vermiştir.",
    machinesLabel: "Atölyemizden",
  },

  /* ── Collection section (homepage) ── */
  collectionSection: {
    label: "Seçili Modeller",
    headline: "Her Parça Bir",
    headlineAccent: "Sanat Eseri",
    sub: "Koleksiyonumuzdan özenle seçilmiş modeller; her biri el yapımı işçilik ve özgün tasarımın buluşmasıdır.",
    viewAll: "Tüm Koleksiyonu Görüntüle",
    category: "Kategori",
    detail: "İncele",
  },

  /* ── Showcase page ── */
  showcase: {
    title: "Gelinlik Koleksiyonu",
    subtitle: "Gökden Modaevi — Ankara · 1986'dan bu yana",
    description:
      "Her biri özgün bir tasarım olan gelinliklerimizi keşfedin. Deneyimli ekibimiz ve titiz işçiliğimizle her detayda mükemmelliği yakalıyoruz.",
    viewDetail: "Detayları Gör",
    photos: "fotoğraf",
  },

  /* ── Gown detail page ── */
  detail: {
    backLabel: "Koleksiyona Dön",
    galleryLabel: "Fotoğraf Galerisi",
    appointmentTitle: "Bu Modeli Beğendiniz mi?",
    appointmentSub:
      "Atölyemizi ziyaret ederek modeli canlı incelemenizi ve size özel uyarlama seçeneklerini konuşmamızı öneririz.",
    appointmentCta: "Randevu Al",
  },

  /* ── Contact page ── */
  contact: {
    title: "İletişim",
    subtitle: "Bizimle İletişime Geçin",
    description:
      "Randevu almak, modellerimiz hakkında bilgi almak veya her türlü sorunuz için bize ulaşın.",
    form: {
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesajınız",
      messagePlaceholder:
        "Merhaba, gelinlik modelleri hakkında bilgi almak istiyorum...",
      submit: "Gönder",
      sending: "Gönderiliyor…",
      success:
        "Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.",
      errorFallback: "Bir hata oluştu. Lütfen tekrar deneyin.",
    },
    info: {
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      hoursLabel: "Çalışma Saatleri",
      hours: "Hafta içi 09:00 – 18:00 · Cumartesi 10:00 – 17:00",
    },
  },

  /* ── Footer ── */
  footer: {
    tagline: "1986'dan bu yana Ankara'dan dünyaya uzanan bir ustalık hikâyesi.",
    explore: "Keşfet",
    atelier: "Atölye",
    contactLabel: "İletişim",
    copyright: "© 2026 Gökden Modaevi. Tüm hakları saklıdır.",
    madeWith: "Sevgiyle yapıldı",
    links: {
      collection: "Koleksiyon",
      about: "Hakkımızda",
      appointment: "Randevu Al",
      contact: "İletişim",
    },
  },

  /* ── Inspirational ── */
  inspirational: {
    title: "İlham Galerisi",
    subtitle: "Atölyemizden ilham veren çalışmalar ve tasarım notları",
  },
};

const en: Translations = {
  nav: {
    collection: "Collection",
    about: "About Us",
    contact: "Contact",
    appointment: "Book Appointment",
  },

  hero: {
    label: "Ankara · Est. 1986",
    headline1: "A Beauty",
    headline2: "Beyond Time",
    sub: "As one of Turkey's leading fashion houses, we bring together elegance, quality and original design to turn every bride's dream into reality.",
    cta1: "Explore Collection",
    cta2: "Contact Us",
  },

  about: {
    label: "Our Story",
    headline: "38 Years of",
    headlineAccent: "Tenzile Keskin's Mastery",
    founder: "Tenzile Keskin",
    founderTitle: "Founder & Head Designer",
    established: "Est. 1986",
    body1:
      "As one of Turkey's leading fashion houses, we make a difference in the bridal industry with our long history and strong design philosophy. Founded in 1986 by our founder Tenzile Keskin, our fashion house has become a reliable and prestigious brand over the years, reaching a wide customer base both in Turkey and abroad. With our approach that combines elegance, quality, and original design, we aim to turn every bride's dream into reality.",
    body2:
      "Since our establishment, we have been by the side of thousands of brides on their most special day, creating custom-designed wedding dresses for them. Located at Atatürk Boulevard 67/143 Kızılay, Ankara Grand Bazaar, our fashion house supplies products to both domestic and international markets, bringing Turkish fashion to the world. Thanks to our experienced team and meticulous craftsmanship, we aim to achieve perfection in every detail.",
    body3:
      "Our founder, Tenzile Keskin, graduated from Bolu Girls' Vocational High School and took her first step on her fashion journey by designing her own wedding dress. This special beginning has transformed and inspired Gökden Modaevi to reach where it is today.",
    machinesLabel: "From Our Atelier",
  },

  collectionSection: {
    label: "Selected Pieces",
    headline: "Each Piece a",
    headlineAccent: "Work of Art",
    sub: "Carefully selected pieces from our collection; each one is the meeting of handcrafted workmanship and original design.",
    viewAll: "View Full Collection",
    category: "Category",
    detail: "View Details",
  },

  showcase: {
    title: "Bridal Collection",
    subtitle: "Gökden Modaevi — Ankara · since 1986",
    description:
      "Discover our bridal gowns, each an original design. With our experienced team and meticulous craftsmanship, we achieve perfection in every detail.",
    viewDetail: "View Details",
    photos: "photos",
  },

  detail: {
    backLabel: "Back to Collection",
    galleryLabel: "Photo Gallery",
    appointmentTitle: "Did You Like This Design?",
    appointmentSub:
      "We recommend visiting our atelier to view the piece in person and discuss personalisation options.",
    appointmentCta: "Book Appointment",
  },

  contact: {
    title: "Contact",
    subtitle: "Get in Touch",
    description:
      "Contact us to book an appointment, learn about our designs, or for any enquiry.",
    form: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Your Message",
      messagePlaceholder:
        "Hello, I would like to learn about your bridal gown collection...",
      submit: "Send",
      sending: "Sending…",
      success: "Your message has been received. We will contact you shortly.",
      errorFallback: "Something went wrong. Please try again.",
    },
    info: {
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Working Hours",
      hours: "Weekdays 09:00 – 18:00 · Saturday 10:00 – 17:00",
    },
  },

  footer: {
    tagline: "A story of craftsmanship from Ankara to the world since 1986.",
    explore: "Explore",
    atelier: "Atelier",
    contactLabel: "Contact",
    copyright: "© 2026 Gökden Modaevi. All rights reserved.",
    madeWith: "Made with love",
    links: {
      collection: "Collection",
      about: "About Us",
      appointment: "Book Appointment",
      contact: "Contact",
    },
  },

  inspirational: {
    title: "Inspiration Gallery",
    subtitle: "Inspiring works and design notes from our atelier",
  },
};

/* ─────────────────────────────────────────────────────────── */
/*  German                                                      */
/* ─────────────────────────────────────────────────────────── */

const de: Translations = {
  nav: {
    collection: "Kollektion",
    about: "Über uns",
    contact: "Kontakt",
    appointment: "Termin buchen",
  },

  hero: {
    label: "Ankara · Gegr. 1986",
    headline1: "Eine Schönheit",
    headline2: "Jenseits der Zeit",
    sub: "Als eines der führenden Modehäuser der Türkei vereinen wir Eleganz, Qualität und originelles Design, um den Traum jeder Braut Wirklichkeit werden zu lassen.",
    cta1: "Kollektion entdecken",
    cta2: "Kontakt aufnehmen",
  },

  about: {
    label: "Unsere Geschichte",
    headline: "38 Jahre",
    headlineAccent: "Meisterschaft von Tenzile Keskin",
    founder: "Tenzile Keskin",
    founderTitle: "Gründerin & Chefdesignerin",
    established: "Gegr. 1986",
    body1:
      "Als eines der führenden Modehäuser der Türkei setzen wir mit unserer langen Geschichte und starken Designphilosophie Maßstäbe in der Brautmodebranche. 1986 von unserer Gründerin Tenzile Keskin ins Leben gerufen, hat sich unser Modehaus zu einer angesehenen Marke entwickelt, die sowohl in der Türkei als auch international eine breite Kundschaft erreicht.",
    body2:
      "Seit unserer Gründung begleiten wir Tausende von Bräuten an ihrem besonderen Tag und entwerfen für jede von ihnen ein individuelles Brautkleid. Unser Modehaus am Atatürk-Boulevard 67/143, Kızılay, Ankara, beliefert sowohl den inländischen als auch den internationalen Markt.",
    body3:
      "Unsere Gründerin Tenzile Keskin absolvierte die Berufsschule für Mädchen in Bolu und machte mit dem Entwurf ihres eigenen Brautkleides ihren ersten Schritt in der Modewelt. Dieser besondere Beginn hat sich zu einer großen Erfolgsgeschichte entwickelt.",
    machinesLabel: "Aus unserem Atelier",
  },

  collectionSection: {
    label: "Ausgewählte Modelle",
    headline: "Jedes Stück ein",
    headlineAccent: "Kunstwerk",
    sub: "Sorgfältig ausgewählte Stücke aus unserer Kollektion — jedes eine Verbindung von Handwerkskunst und originalem Design.",
    viewAll: "Gesamte Kollektion ansehen",
    category: "Kategorie",
    detail: "Details ansehen",
  },

  showcase: {
    title: "Brautkleid-Kollektion",
    subtitle: "Gökden Modaevi — Ankara · seit 1986",
    description:
      "Entdecken Sie unsere Brautkleider, jedes ein originales Design. Mit unserem erfahrenen Team und sorgfältiger Handwerkskunst streben wir in jedem Detail nach Perfektion.",
    viewDetail: "Details ansehen",
    photos: "Fotos",
  },

  detail: {
    backLabel: "Zurück zur Kollektion",
    galleryLabel: "Fotogalerie",
    appointmentTitle: "Gefällt Ihnen dieses Design?",
    appointmentSub:
      "Wir empfehlen einen Besuch in unserem Atelier, um das Stück persönlich zu besichtigen und Anpassungsoptionen zu besprechen.",
    appointmentCta: "Termin buchen",
  },

  contact: {
    title: "Kontakt",
    subtitle: "Kontaktieren Sie uns",
    description:
      "Kontaktieren Sie uns für einen Termin, Informationen zu unseren Designs oder bei sonstigen Fragen.",
    form: {
      name: "Vollständiger Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Ihre Nachricht",
      messagePlaceholder:
        "Hallo, ich möchte mehr über Ihre Brautkleid-Kollektion erfahren ...",
      submit: "Senden",
      sending: "Wird gesendet…",
      success: "Ihre Nachricht wurde erhalten. Wir werden uns in Kürze bei Ihnen melden.",
      errorFallback: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
    },
    info: {
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      hoursLabel: "Öffnungszeiten",
      hours: "Werktags 09:00 – 18:00 · Samstag 10:00 – 17:00",
    },
  },

  footer: {
    tagline: "Eine Geschichte des Handwerks von Ankara in die Welt seit 1986.",
    explore: "Entdecken",
    atelier: "Atelier",
    contactLabel: "Kontakt",
    copyright: "© 2026 Gökden Modaevi. Alle Rechte vorbehalten.",
    madeWith: "Mit Liebe gemacht",
    links: {
      collection: "Kollektion",
      about: "Über uns",
      appointment: "Termin buchen",
      contact: "Kontakt",
    },
  },

  inspirational: {
    title: "Inspirationsgalerie",
    subtitle: "Inspirierende Arbeiten und Designnotizen aus unserem Atelier",
  },
};

/* ─────────────────────────────────────────────────────────── */
/*  French                                                      */
/* ─────────────────────────────────────────────────────────── */

const fr: Translations = {
  nav: {
    collection: "Collection",
    about: "À propos",
    contact: "Contact",
    appointment: "Prendre rendez-vous",
  },

  hero: {
    label: "Ankara · Fondée en 1986",
    headline1: "Une Beauté",
    headline2: "Hors du Temps",
    sub: "En tant que l'une des maisons de couture les plus réputées de Turquie, nous allions élégance, qualité et design original pour concrétiser le rêve de chaque mariée.",
    cta1: "Découvrir la collection",
    cta2: "Nous contacter",
  },

  about: {
    label: "Notre histoire",
    headline: "38 ans de",
    headlineAccent: "Maîtrise de Tenzile Keskin",
    founder: "Tenzile Keskin",
    founderTitle: "Fondatrice & Directrice artistique",
    established: "Fondée en 1986",
    body1:
      "En tant que l'une des maisons de couture les plus réputées de Turquie, nous nous distinguons dans l'industrie de la robe de mariée grâce à notre longue histoire et à notre philosophie de design forte. Fondée en 1986 par Tenzile Keskin, notre maison de couture est devenue une marque fiable et prestigieuse, atteignant une large clientèle en Turquie et à l'étranger.",
    body2:
      "Depuis notre création, nous avons accompagné des milliers de mariées lors de leur jour le plus spécial, en créant pour chacune une robe de mariée sur mesure. Située au Boulevard Atatürk 67/143, Kızılay, Ankara, notre maison de couture approvisionne les marchés nationaux et internationaux.",
    body3:
      "Notre fondatrice, Tenzile Keskin, a obtenu son diplôme du lycée professionnel de filles de Bolu et a fait ses premiers pas dans la mode en concevant sa propre robe de mariée. Ce début si particulier s'est transformé en une grande histoire de succès.",
    machinesLabel: "De notre atelier",
  },

  collectionSection: {
    label: "Pièces sélectionnées",
    headline: "Chaque pièce, une",
    headlineAccent: "Œuvre d'art",
    sub: "Des pièces soigneusement sélectionnées dans notre collection — chacune est la rencontre de l'artisanat et du design original.",
    viewAll: "Voir toute la collection",
    category: "Catégorie",
    detail: "Voir les détails",
  },

  showcase: {
    title: "Collection de Robes de Mariée",
    subtitle: "Gökden Modaevi — Ankara · depuis 1986",
    description:
      "Découvrez nos robes de mariée, chacune un design original. Grâce à notre équipe expérimentée et à notre artisanat minutieux, nous atteignons la perfection dans chaque détail.",
    viewDetail: "Voir les détails",
    photos: "photos",
  },

  detail: {
    backLabel: "Retour à la collection",
    galleryLabel: "Galerie photos",
    appointmentTitle: "Vous aimez ce modèle ?",
    appointmentSub:
      "Nous vous recommandons de visiter notre atelier pour voir la pièce en personne et discuter des options de personnalisation.",
    appointmentCta: "Prendre rendez-vous",
  },

  contact: {
    title: "Contact",
    subtitle: "Contactez-nous",
    description:
      "Contactez-nous pour prendre rendez-vous, en savoir plus sur nos créations ou pour toute autre question.",
    form: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone",
      message: "Votre message",
      messagePlaceholder:
        "Bonjour, je souhaite en savoir plus sur votre collection de robes de mariée...",
      submit: "Envoyer",
      sending: "Envoi en cours…",
      success: "Votre message a bien été reçu. Nous vous contacterons sous peu.",
      errorFallback: "Une erreur s'est produite. Veuillez réessayer.",
    },
    info: {
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      hoursLabel: "Heures d'ouverture",
      hours: "En semaine 09:00 – 18:00 · Samedi 10:00 – 17:00",
    },
  },

  footer: {
    tagline: "Une histoire d'artisanat d'Ankara vers le monde depuis 1986.",
    explore: "Explorer",
    atelier: "Atelier",
    contactLabel: "Contact",
    copyright: "© 2026 Gökden Modaevi. Tous droits réservés.",
    madeWith: "Fait avec amour",
    links: {
      collection: "Collection",
      about: "À propos",
      appointment: "Prendre rendez-vous",
      contact: "Contact",
    },
  },

  inspirational: {
    title: "Galerie d'Inspiration",
    subtitle: "Travaux inspirants et notes de design de notre atelier",
  },
};

export const translations: Record<Locale, Translations> = { tr, en, de, fr };
