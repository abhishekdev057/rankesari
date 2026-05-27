# Ran Kesari — Brand Image Uploads

Drop your final assets in this folder using **exactly** these filenames.
Until they exist the site renders an elegant gold-on-dune SVG placeholder
labelled with the alt text, so nothing breaks during development.

| # | Filename | What it is | Where it shows up |
|---|---|---|---|
| 🪶 | `logo.png` | Brand logo (**transparent PNG**) | Navbar, footer, mobile menu, og:image |
| 1 | `tent-city.jpg` | Long row of luxury tents at blue-orange twilight | Homepage hero, Tent City package card, gallery |
| 2 | `royal-tent.jpg` | Single Swiss tent under dramatic sunset clouds, red carpet | Maharaja Suite card, Royal Desert service, gallery hero, gallery |
| 3 | `festival.jpg` | Aerial of circular tent arrangement with fountain | Festival Stay service, Services page hero, CTA backdrop, gallery |
| 4 | `maharaja-suite.jpg` | Maharaja suite interior — chandelier, wooden bed, lanterns | Royal Swiss Cottage (Signature), About block, Packages page hero, gallery |
| 5 | `wedding-lit.jpg` | Wedding camp row, red curtains, dusk / blue-sky | Wedding Tent service, gallery |
| 6 | `dining.jpg` | Dining marquee — round tables, lanterns, draped canopy | Event Tent service, gallery |
| 7 | `canopy.jpg` | Premium canopy lounge at golden-hour sunset, white furniture | Swiss Cottage service, About page hero, Contact page hero, gallery |
| 8 | `wedding-night.jpg` | Wedding camp row, red curtains, full-dark night | Event Stay package, Experience background, gallery |
| 9 | `twin-interior.jpg` | Twin-bed luxury tent interior — block-printed walls, lanterns | Classic Luxury package, Corporate Retreat service, About inner, gallery |

## Export specs
- **Photos:** JPG, sRGB, ~2400px on the long edge, quality ~80
- **Logo:** PNG with **transparent background**, ~600px tall, gold elements only

## Optional
- `og-cover.jpg` (1200×630) — social share image. Recommended: cropped tent-city or royal-tent shot with logo overlaid.

## Path summary
```
public/
├── favicon.svg
└── brand/
    ├── logo.png            ← transparent
    ├── tent-city.jpg
    ├── royal-tent.jpg
    ├── festival.jpg
    ├── maharaja-suite.jpg
    ├── wedding-lit.jpg
    ├── dining.jpg
    ├── canopy.jpg
    ├── wedding-night.jpg
    └── twin-interior.jpg
```

> Want to swap which photo goes where? Edit a single file: [`lib/brand-images.ts`](../../lib/brand-images.ts).
