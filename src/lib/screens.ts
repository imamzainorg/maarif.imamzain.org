/**
 * Central map of app screenshots → keyed by the place they appear. Imported as
 * ImageMetadata so `astro:assets` can emit optimized, responsive AVIF/WebP.
 * Source PNGs are frameless full-screen captures (their own status bar, no
 * bezel); they are wrapped in a CSS device bezel by <PhoneFrame>.
 *
 * Real app screenshots, per locale: Arabic UI for ar, English UI for en.
 * No Persian captures exist yet, so fa falls back to the Arabic set (same
 * script family). The full raw set lives in `app-screenshots/`.
 */
import type { Locale } from "@/site.config"
import type { ImageMetadata } from "astro"

import homeAr from "@/assets/screens/home.png"
import stationsAr from "@/assets/screens/stations.png"
import rightsAr from "@/assets/screens/rights.png"
import recitationsAr from "@/assets/screens/recitations.png"
import competitionAr from "@/assets/screens/competition.png"

import homeEn from "@/assets/screens/en/home.png"
import stationsEn from "@/assets/screens/en/stations.png"
import rightsEn from "@/assets/screens/en/rights.png"
import recitationsEn from "@/assets/screens/en/recitations.png"
import competitionEn from "@/assets/screens/en/competition.png"

export interface ScreenSet {
	hero: ImageMetadata // home - "امشِ وتعلّم", the walk to Karbala + prizes
	stations: ImageMetadata // journey map: the route to the shrine with numbered station pins
	rights: ImageMetadata // reading a station's Rights (Risalat al-Huquq) + audio + self-test
	recitations: ImageMetadata // audio library: Quran, Sahifa, Arbaeen latmiyat by reciters
	competition: ImageMetadata // a per-station quiz question
}

const AR: ScreenSet = {
	hero: homeAr,
	stations: stationsAr,
	rights: rightsAr,
	recitations: recitationsAr,
	competition: competitionAr,
}

const EN: ScreenSet = {
	hero: homeEn,
	stations: stationsEn,
	rights: rightsEn,
	recitations: recitationsEn,
	competition: competitionEn,
}

/** Screenshot set matching the page's locale (fa → Arabic captures for now). */
export function screensFor(locale: Locale): ScreenSet {
	return locale === "en" ? EN : AR
}
