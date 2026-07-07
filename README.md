# Maarif Sajjadiya — landing page

Standalone, conversion-focused landing page for the **معارف سجادية / Maarif
Sajjadiya** mobile app — a companion for the **ziyarat walk**: an ordered route
of stations (pinned to the numbered poles + GPS), each with its own adhkar and
du'as (read and recited), roadside services, an audio recitations library, and a
points-based knowledge competition. Published by the **Imam Zayn al-Abidin (as)
Foundation**.

- **Live (intended):** https://maarif.imamzain.org
- **Trilingual:** Arabic at `/` · English at `/en` · Persian at `/fa`
- **Status:** the app is **pre-launch** — the store CTAs render as
  "coming soon" (no dead links). See _Launch checklist_ below.

## Stack

- **Astro 5**, static output, near-zero JS (one inline device-detection script).
- **i18n**: Arabic (default, RTL), English (LTR), Persian (RTL). One stylesheet
  serves RTL + LTR via CSS logical properties.
- **Fonts**: self-hosted `@fontsource-variable/vazirmatn` (Arabic + Latin
  subsets) — covers all three scripts.
- **SEO**: per-locale `<title>`/description/keywords, canonical, hreflang
  (+ x-default), Open Graph + Twitter, i18n sitemap, JSON-LD
  (SoftwareApplication / MobileApplication, Organization, WebSite,
  BreadcrumbList, FAQPage). No fabricated rating.
- **Brand**: the app's own palette — green `#006654` (logo / hero), gold
  `#bb9661` (accent), over warm sand surfaces, with charcoal for the CTA/footer.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview
```

## Assets (committed, not part of the Vercel build)

Generated locally with `sharp`, then committed to `public/` / `src/assets/`:

```bash
npm run og                         # public/og/{ar,en,fa}.jpg + favicon + apple-touch-icon
node scripts/make-placeholders.mjs # branded PLACEHOLDER screenshots in src/assets/screens/
```

**Screenshots:** `src/assets/screens/{home,stations,amenities,recitations,competition}.png`
are branded placeholders. When the real captures are ready, **overwrite those
PNGs (same filenames)** with frameless full-screen shots and run `npm run og` to
refresh the cover — `<PhoneFrame>` wraps them in a CSS device bezel. Optimized to
AVIF/WebP at build time.

## Launch checklist (when the app goes live)

Everything is wired behind one flag in [`src/site.config.ts`](src/site.config.ts):

1. Set `launch.live = true` — the store badges become real links, the QR
   auto-forward activates, and JSON-LD flips `PreOrder` → `InStock`.
2. Fill `stores.ios` with the App Store URL and `app.iosAppId` once the iOS build
   is approved (Android package `org.imamzain.maarif_sajjadyia` is already set).
3. Rebuild and redeploy.

## Deploy (Vercel)

Import the folder as an **Astro** project (`vercel.json` is included:
`cleanUrls`, `trailingSlash: false`, security + cache headers). Set the canonical
origin with the **`SITE_URL`** env var (`https://maarif.imamzain.org`), then add
the subdomain in Vercel → Domains.
