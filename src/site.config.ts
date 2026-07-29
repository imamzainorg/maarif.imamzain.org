/**
 * Single source of truth for non-copy configuration: canonical origin, store
 * links, publisher identity and brand colours. Copy/translations live in
 * `src/i18n/content.ts`.
 */

export const SITE = {
	/** Canonical production origin (no trailing slash). Mirror in astro.config `site`. */
	origin: "https://maarif.imamzain.org",

	/**
	 * App store destinations. Google Play is LIVE; iOS is still in review, so
	 * `stores.ios` stays null and that badge alone keeps rendering as "coming
	 * soon" (no dead link ships). Fill `stores.ios` + `app.iosAppId` when the iOS
	 * build is approved and the second badge lights up with no other edits.
	 */
	stores: {
		ios: "https://maarif-web.imamzain.org" as string | null, // App Store URL - null until the iOS app is published
		android:
			"https://play.google.com/store/apps/details?id=org.imamzain.maarif_sajjadyia" as
				| string
				| null,
	},
	launch: {
		/** Master switch: are the stores accepting downloads yet? */
		live: true,
	},

	/** App identifiers used in structured data. */
	app: {
		iosAppId: null as string | null,
		androidPackage: "org.imamzain.maarif_sajjadyia",
		category: "TravelApplication",
		operatingSystems: ["iOS", "Android"],
		priceCurrency: "USD",
		price: "0",
	},

	/** Publisher / parent organisation. */
	org: {
		url: "https://imamzain.org",
		logo: "https://imamzain.org/logo.png",
	},

	/**
	 * The app's own inbox. Google Play's Data safety form requires a public URL
	 * where users can *request* account/data deletion without installing the app,
	 * so `/delete-account` turns this into a prefilled mailto.
	 */
	contact: {
		email: "maarif@imamzain.org",
	},

	/**
	 * Brand palette sampled from the app itself: the logo glyph is teal #0c747c,
	 * the app's screens sit on deep teal #10504e with #148480 pill buttons, tan
	 * #c0a281 is the accent (selected chips / prize bands) over neutral off-white
	 * surfaces. `primary` drives the QR colour and theme-color. Mirrors
	 * src/styles/global.css.
	 */
	brand: {
		primary: "#0c747c", // logo teal - QR + theme-color
		teal: "#148480", // app buttons / headers
		tealDeep: "#10504e", // the app's page background
		gold: "#c0a281", // tan accent
		mint: "#c8e0e0", // round icon chips
		surface: "#f3f4f2", // off-white surfaces
	},

	/** Ordered locales; `ar` is the default (served at "/"). */
	locales: ["ar", "en", "fa"] as const,
	defaultLocale: "ar" as const,
} as const

export type Locale = (typeof SITE.locales)[number]

/**
 * The store links that are actually downloadable right now: only when the app
 * has launched AND that platform has a real URL. Used by the CTAs (to pick
 * "coming soon" vs real links) and the JSON-LD (downloadUrl/installUrl) - the
 * latter deliberately gets the canonical, param-free URL so all three locale
 * pages point at one identical entity.
 */
export function activeStoreLinks(): string[] {
	if (!SITE.launch.live) return []
	return [SITE.stores.ios, SITE.stores.android].filter(
		(u): u is string => typeof u === "string" && u.length > 0,
	)
}

/**
 * Google Play listing in the visitor's language. Play reads the `hl` query
 * param, and our locale codes (ar/en/fa) are exactly the values it expects, so
 * an Arabic reader lands on the Arabic listing instead of Play's own guess.
 * Returns null while the Android URL is unset or pre-launch, which is what the
 * "coming soon" chip checks for.
 */
export function androidStoreUrl(locale: Locale): string | null {
	if (!SITE.launch.live || !SITE.stores.android) return null
	const sep = SITE.stores.android.includes("?") ? "&" : "?"
	return `${SITE.stores.android}${sep}hl=${locale}`
}
