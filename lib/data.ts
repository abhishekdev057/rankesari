import { BRAND } from "./brand-images";

export const services = [
  {
    slug: "swiss-cottage",
    title: "Luxury Swiss Cottage Tents",
    blurb:
      "Hand-tailored Swiss tents with hardwood floors, attached washrooms and hotel-grade interiors.",
    image: BRAND.canopy,
    points: ["Inbuilt washroom", "Air conditioning", "Hardwood flooring"]
  },
  {
    slug: "wedding-tents",
    title: "Wedding Tent Infrastructure",
    blurb:
      "Complete royal wedding camps — guest suites, dining marquees, mandap and bridal lounges.",
    image: BRAND.weddingLit,
    points: ["Bridal suite tents", "Dining marquees", "Decor & lighting"]
  },
  {
    slug: "event-tents",
    title: "Event Tent Infrastructure",
    blurb:
      "Modular tent cities for concerts, festivals and large-scale destination events.",
    image: BRAND.dining,
    points: ["Modular layouts", "Backstage & VIP camps", "Power backup"]
  },
  {
    slug: "corporate-retreats",
    title: "Corporate Retreat Camps",
    blurb:
      "Confidential desert retreats — luxury accommodation paired with meeting pavilions.",
    image: BRAND.twinInterior,
    points: ["Conference pavilions", "Executive suite tents", "Private dining"]
  },
  {
    slug: "festival-stay",
    title: "Festival & Concert Stay",
    blurb:
      "Scalable luxury accommodation for hundreds of guests at remote festival locations.",
    image: BRAND.festivalAerial,
    points: ["Tent cities at scale", "Hospitality teams", "24/7 operations"]
  },
  {
    slug: "royal-desert",
    title: "Royal Desert Camps",
    blurb:
      "Signature Rajasthani heritage camps in the Thar — built around dunes, sunsets and stars.",
    image: BRAND.royalTent,
    points: ["Dune-side setups", "Royal Rajasthani decor", "Cultural experiences"]
  }
];

export const packages = [
  {
    name: "Classic Luxury Tent",
    tagline: "Refined comfort. Effortless elegance.",
    image: BRAND.twinInterior,
    size: "16 × 16 ft",
    capacity: "2 Guests",
    ac: true,
    washroom: "Attached",
    bed: "King bed",
    amenities: [
      "Air conditioning",
      "Attached washroom",
      "Luxury bedding",
      "Premium lighting",
      "Wooden furniture",
      "Carpeted flooring"
    ],
    bestFor: ["Tourism", "Couples retreats", "Boutique camps"]
  },
  {
    name: "Royal Swiss Cottage",
    tagline: "The Ran Kesari signature.",
    image: BRAND.maharajaInterior,
    size: "20 × 20 ft",
    capacity: "2 – 3 Guests",
    ac: true,
    washroom: "Attached Premium",
    bed: "King bed + day bed",
    amenities: [
      "Inverter AC",
      "Premium attached washroom",
      "Dressing area",
      "Sofa & seating",
      "Designer lighting",
      "Hardwood flooring",
      "Power backup"
    ],
    bestFor: ["Destination weddings", "Luxury travelers", "Heritage stays"],
    featured: true
  },
  {
    name: "Maharaja Suite Tent",
    tagline: "Royalty, in canvas.",
    image: BRAND.royalTent,
    size: "24 × 28 ft",
    capacity: "Up to 4 Guests",
    ac: true,
    washroom: "Twin Attached",
    bed: "King bed + living lounge",
    amenities: [
      "Living lounge",
      "Twin attached washrooms",
      "Walk-in dressing",
      "Private veranda",
      "Royal Rajasthani decor",
      "Butler service ready",
      "Power backup"
    ],
    bestFor: ["Bridal suites", "VIP guests", "Government dignitaries"]
  },
  {
    name: "Event Stay Infrastructure",
    tagline: "Modular hospitality at scale.",
    image: BRAND.weddingNight,
    size: "Custom",
    capacity: "50 – 500 Guests",
    ac: true,
    washroom: "Attached / Shared blocks",
    bed: "Single / Twin / King",
    amenities: [
      "Modular layouts",
      "Dining & banquet marquees",
      "Backstage & green rooms",
      "24/7 operations team",
      "Power & water infrastructure",
      "Décor & branding"
    ],
    bestFor: ["Concerts", "Corporate retreats", "Festivals"]
  },
  {
    name: "Tent City Package",
    tagline: "An entire city of luxury, on demand.",
    image: BRAND.tentCity,
    size: "Multi-acre",
    capacity: "500+ Guests",
    ac: true,
    washroom: "Attached suites",
    bed: "All categories",
    amenities: [
      "Reception lobby tents",
      "Multiple dining halls",
      "Spa & wellness pavilions",
      "Recreation zones",
      "Helipad coordination",
      "End-to-end hospitality",
      "Full security & ops"
    ],
    bestFor: ["Destination weddings at scale", "Government tourism", "Large festivals"]
  }
];

export const whyUs = [
  {
    title: "End-to-End Setup",
    body: "From site survey to teardown — a single team handles design, build, hospitality and operations."
  },
  {
    title: "Luxury Infrastructure",
    body: "Hotel-grade tents, washrooms, climate control and finishes. Nothing improvised."
  },
  {
    title: "Fast Installation",
    body: "Mobilised teams that build a tent city in days, anywhere you need it."
  },
  {
    title: "Custom Configurations",
    body: "Every layout, every interior, every touchpoint — designed around your event."
  },
  {
    title: "Rajasthan Expertise",
    body: "Decades of desert know-how — weather, terrain, logistics, heritage aesthetics."
  },
  {
    title: "Premium Hospitality",
    body: "Trained crews delivering five-star service in the middle of the dunes."
  }
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We understand the vision — guests, location, ambience, scale and timeline."
  },
  {
    step: "02",
    title: "Planning & Design",
    body: "Layout drawings, mood boards, tent selection and a transparent quotation."
  },
  {
    step: "03",
    title: "Site Inspection",
    body: "On-ground survey, terrain assessment and logistics mapping."
  },
  {
    step: "04",
    title: "Installation",
    body: "Tents, flooring, washrooms, power, water and decor — built to spec."
  },
  {
    step: "05",
    title: "Hospitality Setup",
    body: "Trained crew, F&B partners, housekeeping and 24/7 guest experience."
  },
  {
    step: "06",
    title: "Experience Delivery",
    body: "We run operations through your event, then dismantle without a trace."
  }
];

export const testimonials = [
  {
    quote:
      "Ran Kesari transformed a remote dune into a five-star city for our wedding. Every guest was speechless.",
    name: "Aanya & Rohan",
    role: "Destination Wedding, Jaisalmer"
  },
  {
    quote:
      "Flawless execution at scale. Two hundred luxury tents, twelve dining marquees — they didn't miss a detail.",
    name: "Vikram Singh",
    role: "Festival Director"
  },
  {
    quote:
      "Our leadership offsite felt like an Aman in the middle of the Thar. We're already booking the next one.",
    name: "Megha Reddy",
    role: "CHRO, Fortune 500"
  },
  {
    quote:
      "Royal aesthetics done right — no kitsch, no compromise. The Maharaja Suite tents stunned our dignitaries.",
    name: "Govt. Tourism Board",
    role: "State Cultural Festival"
  }
];

/**
 * Gallery — every brand photo gets a slot, arranged for visual rhythm
 * (big · normal · wide · tall · normal · wide · normal · tall · big).
 */
export const galleryImages: {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "big";
}[] = [
  { src: BRAND.tentCity, alt: "Luxury tent city at twilight", span: "big" },
  { src: BRAND.maharajaInterior, alt: "Maharaja suite interior with chandelier" },
  { src: BRAND.festivalAerial, alt: "Aerial festival camp with fountain", span: "wide" },
  { src: BRAND.royalTent, alt: "Royal Swiss tent at dramatic sunset", span: "tall" },
  { src: BRAND.weddingLit, alt: "Wedding camp row at dusk" },
  { src: BRAND.dining, alt: "Royal dining marquee", span: "wide" },
  { src: BRAND.canopy, alt: "Premium canopy lounge at golden hour" },
  { src: BRAND.weddingNight, alt: "Wedding camps lit at night", span: "tall" },
  { src: BRAND.twinInterior, alt: "Luxury tent interior with twin beds", span: "big" }
];

export const stats = [
  { value: "200+", label: "Luxury Camps Installed" },
  { value: "15+", label: "Years of Desert Expertise" },
  { value: "50,000+", label: "Guests Hosted" },
  { value: "Pan-India", label: "Deployment Reach" }
];

export const tentFeatures = [
  "Inbuilt Washroom",
  "Air Conditioning",
  "Luxury Beds",
  "Sofa & Seating",
  "Premium Lighting",
  "Fans",
  "Carpets",
  "Wooden Furniture",
  "Attached Bathrooms",
  "Dressing Area",
  "Power Backup",
  "Decor & Ambience"
];
