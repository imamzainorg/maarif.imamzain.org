/**
 * Central map of app screenshots → keyed by the place they appear. Imported as
 * ImageMetadata so `astro:assets` can emit optimized, responsive AVIF/WebP.
 * Source PNGs are frameless full-screen captures (their own status bar, no
 * bezel); they are wrapped in a CSS device bezel by <PhoneFrame>.
 *
 * Real app screenshots (Arabic UI, used across all locales). The full raw set
 * the user provided lives in the gitignored `app-screenshots/` folder.
 */
import home from '@/assets/screens/home.png';
import stations from '@/assets/screens/stations.png';
import rights from '@/assets/screens/rights.png';
import recitations from '@/assets/screens/recitations.png';
import competition from '@/assets/screens/competition.png';

export const SCREENS = {
  hero: home, // home — "امشِ وتعلّم", the walk to Karbala + prizes
  stations, // journey map: the route to the shrine with numbered station pins (Showcase flagship)
  rights, // reading a station's Rights (Risalat al-Huquq) + audio + "اختبر نفسك"
  recitations, // audio library: Quran, Sahifa, Arbaeen latmiyat by reciters
  competition, // a per-station quiz question
} as const;
