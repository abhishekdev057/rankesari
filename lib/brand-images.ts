/**
 * Brand image registry — single source of truth.
 * The 9 hero photos + transparent logo get uploaded to /public/brand/
 * and are reused strategically across every page / section of the site.
 */
export const BRAND = {
  // Transparent PNG. White-background variant lives at /brand/logo-white.png as a fallback.
  logo: "/brand/logo.png",

  // 1. Tent city — long row at blue-orange twilight (THE hero shot).
  tentCity: "/brand/tent-city.jpg",

  // 2. Single royal Swiss tent under dramatic sunset clouds, red carpet entry.
  royalTent: "/brand/royal-tent.jpg",

  // 3. Aerial of circular tent arrangement with central fountain — festival/concert scale.
  festivalAerial: "/brand/festival.jpg",

  // 4. Maharaja suite interior — chandelier, wooden bed, lanterns.
  maharajaInterior: "/brand/maharaja-suite.jpg",

  // 5. Wedding camp row with red curtains — dusk / blue-sky version.
  weddingLit: "/brand/wedding-lit.jpg",

  // 6. Dining marquee — round tables, lanterns, draped canopy.
  dining: "/brand/dining.jpg",

  // 7. Premium canopy lounge — white wrought-iron furniture at golden-hour sunset.
  canopy: "/brand/canopy.jpg",

  // 8. Wedding camp row with red curtains — full-dark night version.
  weddingNight: "/brand/wedding-night.jpg",

  // 9. Twin-bed luxury tent interior — block-printed walls, lanterns, dressing area.
  twinInterior: "/brand/twin-interior.jpg"
} as const;
