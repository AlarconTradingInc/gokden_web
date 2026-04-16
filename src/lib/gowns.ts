export interface Gown {
  slug: string;
  /** Turkish display name */
  name: string;
  /** English display name */
  nameEn: string;
  /** Turkish category label */
  category: string;
  /** English category label */
  categoryEn: string;
  /** Turkish description */
  description: string;
  /** English description */
  descriptionEn: string;
  /** Cover image path (first photo shown in grids) */
  cover: string;
  /** All photos for the detail page */
  images: string[];
  /** Whether to feature on the homepage */
  featured: boolean;
  /** Mood-board / inspirational image — shown with a special tag in the grid */
  inspirational?: boolean;
}

export const gowns: Gown[] = [
  /* ── Mevcut koleksiyon ── */
  {
    slug: "nokturno",
    name: "Nokturno",
    nameEn: "Nocturne",
    category: "Haute Couture",
    categoryEn: "Haute Couture",
    description:
      "Gecelerin büyüsünden ilham alan Nokturno koleksiyonu, derin işlemeli dantel detayları ve uzun kuyruklu silueti ile zamanın ötesine geçen bir zarafet sunuyor. El yapımı her dikiş, özel gününüzün sonsuzluğa taşınması için atılmış bir sözdür.",
    descriptionEn:
      "Inspired by the magic of nights, the Nocturne collection offers an elegance beyond time with its deeply embroidered lace details and long-trained silhouette. Every hand-crafted stitch is a vow to carry your special day into eternity.",
    cover: "/nok1.png",
    images: ["/nok1.png", "/nok2.png", "/nok3.png"],
    featured: true,
  },
  {
    slug: "resturaction",
    name: "Resturaction",
    nameEn: "Resturaction",
    category: "Haute Couture",
    categoryEn: "Haute Couture",
    description:
      "Resturaction koleksiyonu, derin işlemeli dantel detayları ve uzun kuyruklu silueti ile zamanın ötesine geçen bir zarafet sunuyor. El yapımı her dikiş, özel gününüzün sonsuzluğa taşınması için atılmış bir sözdür.",
    descriptionEn:
      "The Resturaction collection offers an elegance beyond time with its deeply embroidered lace details and long-trained silhouette. Every hand-crafted stitch is a vow to carry your special day into eternity.",
    cover: "/res1.png",
    images: ["/res1.png", "/res2.png", "/res3.png"],
    featured: true,
  },
  {
    slug: "la-belle",
    name: "La Belle",
    nameEn: "La Belle",
    category: "Klasik",
    categoryEn: "Classic",
    description:
      "Fransız couture geleneğinden ilham alan La Belle koleksiyonu, temiz hatları ve zamansız silüetiyle modern gelinin ruhunu yansıtıyor. Doğal ipek ve Fransız danteliyle oluşturulan her parça, sofistike zarafetin mükemmel ifadesidir.",
    descriptionEn:
      "Inspired by the French couture tradition, the La Belle collection reflects the spirit of the modern bride with its clean lines and timeless silhouette. Each piece crafted from natural silk and French lace is a perfect expression of sophisticated elegance.",
    cover: "/la1.png",
    images: ["/la1.png", "/la2.png", "/la3.png"],
    featured: true,
  },
  {
    slug: "dolce",
    name: "Dolce",
    nameEn: "Dolce",
    category: "Romantik",
    categoryEn: "Romantic",
    description:
      "İtalyan romantizminin özünü taşıyan Dolce koleksiyonu, volanlı etekleri ve narin omuz detaylarıyla masalsı bir düğün günü hayal eden gelinler için tasarlandı. Hafif şifon ve organze kumaşların dansı, her adımda büyülü bir görünüm yaratır.",
    descriptionEn:
      "Carrying the essence of Italian romanticism, the Dolce collection is designed for brides who dream of a fairy-tale wedding day with its ruffled skirts and delicate shoulder details. The dance of light chiffon and organza fabrics creates a magical look with every step.",
    cover: "/do1.png",
    images: ["/do1.png", "/do2.png"],
    featured: true,
  },
  {
    slug: "kamelya",
    name: "Kamelya",
    nameEn: "Camellia",
    category: "Modern",
    categoryEn: "Modern",
    description:
      "Kamelya çiçeğinin saf güzelliğinden ilham alan bu koleksiyon, minimalist çizgiler ve saf beyaz tonlarıyla çağdaş gelinin zevkine hitap ediyor. Tek parça yapısı ve beden hatlarını öne çıkaran kesimi, güçlü ve zarif bir duruş için yaratıldı.",
    descriptionEn:
      "Inspired by the pure beauty of the camellia flower, this collection appeals to the taste of the contemporary bride with its minimalist lines and pure white tones. Its one-piece structure and body-flattering cut were created for a powerful and elegant posture.",
    cover: "/ka1.png",
    images: ["/ka1.png", "/ka2.png"],
    featured: false,
  },
  {
    slug: "zeytin-cicegi",
    name: "Zeytin Çiçeği",
    nameEn: "Olive Blossom",
    category: "Minimalist",
    categoryEn: "Minimalist",
    description:
      "Anadolu'nun köklü zeytin ağaçlarından ve kırsal zarafetinden ilham alan Zeytin Çiçeği, sade güzelliği yüceltiyor. Ağır süslemelerden arınmış bu tasarım, gelinin kendi güzelliğini ön plana çıkarmak için hazırlanmıştır.",
    descriptionEn:
      "Inspired by Anatolia's rooted olive trees and rustic elegance, Olive Blossom exalts simple beauty. This design, free from heavy ornamentation, was created to highlight the bride's own beauty.",
    cover: "/zey.png",
    images: ["/zey.png", "/zey1.png", "/zey2.png"],
    featured: false,
  },

  /* ── wed1 ── */
  {
    slug: "serenata",
    name: "Serenata",
    nameEn: "Serenata",
    category: "Haute Couture",
    categoryEn: "Haute Couture",
    description:
      "Serenata, işlenmiş tüller ve kristal aksesuarlarıyla bezeli yapısıyla sahneye çıktığı anda büyüleyen bir koleksiyondur. Her detay, özel gününüzü eşsiz kılmak için titizlikle tasarlanmıştır.",
    descriptionEn:
      "Serenata is a collection that enchants the moment it takes the stage, adorned with embroidered tulles and crystal accessories. Every detail is meticulously designed to make your special day one of a kind.",
    cover: "/wed1_2.png",
    images: ["/wed1_1.png", "/wed1_2.png", "/wed1_3.png"],
    featured: false,
  },

  /* ── wed2 ── */
  {
    slug: "lumiere",
    name: "Lumière",
    nameEn: "Lumière",
    category: "Romantik",
    categoryEn: "Romantic",
    description:
      "Fransızca'da ışık anlamına gelen Lumière, yumuşak tonları ve zarif kesimi ile gelinin doğal ışıltısını ön plana çıkarıyor. Saten ve şifon katmanlarının uyumuyla ortaya çıkan bu tasarım, masalsı bir düğün atmosferi yaratır.",
    descriptionEn:
      "Meaning 'light' in French, Lumière highlights the bride's natural radiance with its soft tones and elegant cut. Harmonising satin and chiffon layers, this design creates a fairy-tale wedding atmosphere.",
    cover: "/wed2_2.png",
    images: ["/wed2_1.png", "/wed2_2.png", "/wed2_3.png"],
    featured: false,
  },

  /* ── wed3 ── */
  {
    slug: "allegra",
    name: "Allegra",
    nameEn: "Allegra",
    category: "Modern",
    categoryEn: "Modern",
    description:
      "İtalyanca'da neşeli anlamına gelen Allegra, temiz çizgileri ve çağdaş silueti ile modern gelinin cesaretini yansıtıyor. Sadeliğin güç olduğunu kanıtlayan bu tasarım, kendine güvenen gelinler için yaratılmıştır.",
    descriptionEn:
      "Meaning 'joyful' in Italian, Allegra reflects the confidence of the modern bride with its clean lines and contemporary silhouette. Proving that simplicity is strength, this design was created for self-assured brides.",
    cover: "/wed3_1.png",
    images: ["/wed3_1.png", "/wed3_2.png"],
    featured: false,
  },

  /* ── wed4 ── */
  {
    slug: "bianca",
    name: "Bianca",
    nameEn: "Bianca",
    category: "Klasik",
    categoryEn: "Classic",
    description:
      "Saf beyazın zarafetini temsil eden Bianca, zamansız bir klasik olarak öne çıkıyor. Derin V yaka ve düz kuyruklu siluetiyle her bedene uyum sağlayan bu tasarım, gelinin zarafetini en saf haliyle yansıtır.",
    descriptionEn:
      "Representing the elegance of pure white, Bianca stands out as a timeless classic. With its deep V-neck and straight-trained silhouette that flatters every figure, this design reflects the bride's grace in its purest form.",
    cover: "/wed4_3.png",
    images: ["/wed4_1.png", "/wed4_2.png", "/wed4_3.png"],
    featured: false,
  },

  /* ── wed5 ── */
  {
    slug: "aurora",
    name: "Aurora",
    nameEn: "Aurora",
    category: "Romantik",
    categoryEn: "Romantic",
    description:
      "Şafak vaktinin büyüsünden ilham alan Aurora, pembe ve krem tonlarının dans ettiği narin bir koleksiyondur. Omuz detayları ve fırfırlı etek uçlarıyla romantizmin en saf ifadesini sunar.",
    descriptionEn:
      "Inspired by the magic of dawn, Aurora is a delicate collection where rose and cream tones dance together. With its shoulder details and ruffled hem, it presents the purest expression of romance.",
    cover: "/wed5_2.png",
    images: ["/wed5_1.png", "/wed5_2.png", "/wed5_3.png"],
    featured: false,
  },

  /* ── İlham Galerisi ── */
  {
    slug: "ilham",
    name: "İlham Galerisi",
    nameEn: "Inspiration Gallery",
    category: "İlham Galerisi",
    categoryEn: "Inspiration Gallery",
    description: "Atölyemizden ilham veren tasarım notları ve ruh hâli görselleri.",
    descriptionEn: "Inspirational design notes and mood-board images from our atelier.",
    cover: "/pin.jfif",
    images: ["/pin.jfif", "/pin1.jfif", "/pin2.jfif", "/pin3.png"],
    featured: false,
    inspirational: true,
  },
];

/** Returns the featured gowns for the homepage. */
export const featuredGowns = gowns.filter((g) => g.featured);

/** Looks up a gown by its slug. Returns undefined if not found. */
export const getGownBySlug = (slug: string): Gown | undefined =>
  gowns.find((g) => g.slug === slug);
