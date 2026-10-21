# Maarif Sajjadiya — Landing Page

The marketing landing page for the **Maarif Sajjadiya** mobile app
(معارف سجادية), a companion for the **ziyarat walk** published by the
**Imam Zayn al-Abidin (as) Foundation**. It lives on its own subdomain,
[maarif.imamzain.org](https://maarif.imamzain.org), and exists to convert
visitors into app downloads.

## About the app it promotes

Maarif Sajjadiya guides pilgrims along an ordered route of stations — pinned to
the numbered poles and GPS — each with its own adhkar and duʿas (read and
recited), nearby roadside services, an audio recitations library, and a
points-based knowledge competition.

## What the page offers

- **Device-aware download CTA** that detects the visitor's platform and surfaces
  the right store, with a scan-to-download QR for desktop.
- **Trilingual** — Arabic at `/` (RTL), English at `/en`, and Persian at `/fa`.
- **Faithful brand identity** sampled from the app's own screenshots (teal-led
  palette with tan accents), in both light and dark themes.
- **Full SEO** — per-locale metadata, `hreflang`, canonicals, Open Graph &
  Twitter cards, an i18n sitemap, and JSON-LD structured data.

## Scope & architecture

- A static site built with **Astro 5**, shipping near-zero JavaScript.
- Self-hosted variable fonts covering Arabic, Latin, and Persian scripts; a
  single stylesheet serves both RTL and LTR via CSS logical properties.
- Imagery optimized to AVIF/WebP at build time; deployed as static output
  (Vercel).
