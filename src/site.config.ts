/**
 * Single source of truth for non-copy configuration: canonical origin, store
 * links, publisher identity and brand colours. Copy/translations live in
 * `src/i18n/content.ts`.
 */

export const SITE = {
  /** Canonical production origin (no trailing slash). Mirror in astro.config `site`. */
  origin: 'https://maarif.imamzain.org',

  /**
   * App store destinations. The app is PRE-LAUNCH: neither store is live yet, so
   * `launch.live` is false and the CTAs render as "coming soon" (no dead links
   * ship). On launch day: set `launch.live = true`, and fill `stores.ios` with
   * the real App Store URL once the app is approved. The Android package is the
   * real, intended one (`org.imamzain.maarif_sajjadyia`).
   */
  stores: {
    ios: null as string | null, // App Store URL — null until the iOS app is published
    android:
      'https://play.google.com/store/apps/details?id=org.imamzain.maarif_sajjadyia' as
        | string
        | null,
  },
  launch: {
    /** Master switch: are the stores accepting downloads yet? Flip to true on launch. */
    live: false,
  },

  /** App identifiers used in structured data. */
  app: {
    iosAppId: null as string | null,
    androidPackage: 'org.imamzain.maarif_sajjadyia',
    category: 'TravelApplication',
    operatingSystems: ['iOS', 'Android'],
    priceCurrency: 'USD',
    price: '0',
  },

  /** Publisher / parent organisation. */
  org: {
    url: 'https://imamzain.org',
    logo: 'https://imamzain.org/logo.png',
  },

  /**
   * The app's own inbox. Google Play's Data safety form requires a public URL
   * where users can *request* account/data deletion without installing the app,
   * so `/delete-account` turns this into a prefilled mailto.
   */
  contact: {
    email: 'maarif@imamzain.org',
  },

  /**
   * Brand palette sampled from the app itself: the logo glyph is teal #0c747c,
   * the app's screens sit on deep teal #10504e with #148480 pill buttons, tan
   * #c0a281 is the accent (selected chips / prize bands) over neutral off-white
   * surfaces. `primary` drives the QR colour and theme-color. Mirrors
   * src/styles/global.css.
   */
  brand: {
    primary: '#0c747c', // logo teal — QR + theme-color
    teal: '#148480', // app buttons / headers
    tealDeep: '#10504e', // the app's page background
    gold: '#c0a281', // tan accent
    mint: '#c8e0e0', // round icon chips
    surface: '#f3f4f2', // off-white surfaces
  },

  /** Ordered locales; `ar` is the default (served at "/"). */
  locales: ['ar', 'en', 'fa'] as const,
  defaultLocale: 'ar' as const,
} as const;

export type Locale = (typeof SITE.locales)[number];

/**
 * The store links that are actually downloadable right now: only when the app
 * has launched AND that platform has a real URL. Empty while pre-launch — used
 * by the CTAs (to pick "coming soon" vs real links), the head script (?go=1
 * forwarding), and the JSON-LD (downloadUrl/installUrl).
 */
export function activeStoreLinks(): string[] {
  if (!SITE.launch.live) return [];
  return [SITE.stores.ios, SITE.stores.android].filter(
    (u): u is string => typeof u === 'string' && u.length > 0,
  );
}
