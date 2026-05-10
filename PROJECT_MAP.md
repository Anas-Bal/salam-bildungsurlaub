# Project Map — Salam Bildungsurlaub

## [TECH_STACK]
- Runtime: Node 24.15.0
- Framework: Astro 6.2.2 (static site generation)
- CSS: Tailwind CSS 4.2.4 via @tailwindcss/postcss
- Sitemap: @astrojs/sitemap
- Fonts: Manrope (headlines), Plus Jakarta Sans (body) — CSS @import from Google Fonts
- Icons: Material Symbols Outlined (CDN)
- i18n: URL-prefix pattern (/de/, /ar/) with JSON translation files
- Forms: mailto: submission (works without backend, opens email client)

## [SYSTEM_FLOW]
User Browser → Static HTML pages (pre-rendered at build time)
  ├── /de/              → German pages (LTR)
  ├── /ar/              → Arabic pages (RTL)
  ├── /de/programme     → Program overview from JSON data
  ├── /de/programme/... → Course detail (dynamic route per slug)
  ├── /de/kontakt       → Contact form (mailto: link submission)
  ├── /de/buchung       → Booking form (course-aware date picker, mailto:)
  ├── /de/faq           → FAQ from JSON data
  ├── /de/ueber-uns     → About
  ├── /de/agb           → Terms
  ├── /de/datenschutz   → Privacy
  ├── /de/impressum     → Imprint
  ├── /de/cookies       → Cookie settings page
  └── /de/404           → 404 page

## [ARCHITECTURE]
```
src/
├── layouts/BaseLayout.astro      # Shared HTML shell, SEO meta, RTL support
├── components/
│   ├── Header.astro              # Sticky nav, language toggle, mobile menu
│   ├── Footer.astro              # Footer with legal links
│   └── CookieConsent.astro       # GDPR cookie banner with localStorage
├── pages/[lang]/                 # Dynamic lang routing (de = LTR, ar = RTL)
│   ├── index.astro               # Homepage with hero + featured programs
│   ├── programme.astro           # Course listing grid
│   ├── programme/[slug].astro    # Dynamic course detail
│   ├── ueber-uns.astro           # About page
│   ├── faq.astro                 # FAQ accordion from JSON
│   ├── kontakt.astro             # Contact form (mailto:)
│   ├── buchung.astro             # Booking form with course-aware dates
│   ├── agb.astro                 # Legal terms (placeholder content)
│   ├── datenschutz.astro         # Privacy policy (placeholder content)
│   ├── impressum.astro           # Legal imprint
│   ├── cookies.astro             # Cookie settings page
│   └── 404.astro                 # 404 page
├── pages/index.astro             # Root redirect → /de/
├── i18n/de.json                  # German translations
├── i18n/ar.json                  # Arabic translations
├── data/programs.json            # Course content (bilingual)
├── data/faq.json                 # FAQ entries (bilingual)
├── utils/i18n.ts                 # Translation helper + lang paths
└── styles/global.css             # Tailwind v4 @theme with Salam Harmony palette

public/
├── robots.txt                    # SEO: allow all + sitemap link
└── favicon.svg                   # Simple "S" favicon
```

## [VERIFIABLE_GOALS]
1. All 31 pages render correctly for both DE (LTR) and AR (RTL) languages ✓
2. Header/footer are defined once in components, used across all pages ✓
3. Language toggle switches between /de/ and /ar/ without broken links ✓
4. Cookie consent banner shows on first visit, respects user choice via localStorage ✓
5. Booking form dynamically populates dates based on selected course ✓
6. Contact form validates required fields and opens mailto: on submit ✓
7. Course program page lists all courses from data file ✓
8. Course detail page renders correctly per slug ✓
9. Build produces fully static dist/ with no server dependencies ✓
10. No duplicated code between pages (header, footer, config, translations) ✓
11. Sitemap.xml generated with all 31 URLs ✓
12. robots.txt present at site root ✓

## [ORPHANS_AND_PENDING]
None — all planned features are implemented, connected, and verified.
