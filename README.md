# Maarif Sajjadiya - landing page

Standalone, conversion-focused landing page for the **معارف سجادية / Maarif
Sajjadiya** mobile app - a companion for the **ziyarat walk**: an ordered route
of stations (pinned to the numbered poles + GPS), each with its own adhkar and
du'as (read and recited), roadside services, an audio recitations library, and a
points-based knowledge competition. Published by the **Imam Zayn al-Abidin (as)
Foundation**.

- **Live (intended):** https://maarif.imamzain.org
- **Trilingual:** Arabic at `/` · English at `/en` · Persian at `/fa`
- **Status:** the app is **pre-launch** - the store CTAs render as
  "coming soon" (no dead links). See _Launch checklist_ below.

## Stack

- **Astro 5**, static output, near-zero JS (one inline device-detection script).
- **i18n**: Arabic (default, RTL), English (LTR), Persian (RTL). One stylesheet
  serves RTL + LTR via CSS logical properties.
- **Fonts**: self-hosted `@fontsource-variable/vazirmatn` (Arabic + Latin
  subsets) - covers all three scripts.
- **SEO**: per-locale `<title>`/description/keywords, canonical, hreflang
  (+ x-default), Open Graph + Twitter, i18n sitemap, JSON-LD
  (SoftwareApplication / MobileApplication, Organization, WebSite,
  BreadcrumbList, FAQPage). No fabricated rating.
- **Brand**: the app's own palette, sampled from its screenshots - teal leads
  (logo `#0c747c`, buttons `#148480`, deep background `#10504e`), tan `#c0a281`
  is the accent, mint `#c8e0e0` for round icon chips, over neutral off-white
  surfaces. Dark scheme = the app's own deep-teal look.

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
refresh the cover - `<PhoneFrame>` wraps them in a CSS device bezel. Optimized to
AVIF/WebP at build time.

## Launch state

Everything is wired through [`src/site.config.ts`](src/site.config.ts):

- **Google Play: live.** `launch.live = true`, so the Play badge is a real link,
  the QR auto-forward (`/app`, `?go=1`) routes Android visitors to the listing,
  and JSON-LD reports `InStock`. Each locale links to its own listing language
  via `androidStoreUrl(locale)` → `…&hl=ar|en|fa`; `/app` has no locale of its
  own and reads `hl` from the browser instead.
- **App Store: pending.** `stores.ios` is `null`, so that badge alone still
  renders as a "coming soon" chip and iOS visitors bounce to the homepage. Fill
  `stores.ios` and `app.iosAppId` when the build is approved, then rebuild and
  redeploy - nothing else needs touching.

## Deploy (Vercel)

Import the folder as an **Astro** project (`vercel.json` is included:
`cleanUrls`, `trailingSlash: false`, security + cache headers). Set the canonical
origin with the **`SITE_URL`** env var (`https://maarif.imamzain.org`), then add
the subdomain in Vercel → Domains.
