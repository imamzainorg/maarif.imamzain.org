/**
 * i18n helpers: locale direction, URL building and hreflang alternates.
 * Arabic is the default locale and lives at the site root ("/"); English and
 * Farsi are prefixed ("/en/", "/fa/").
 */
import { SITE, type Locale } from '@/site.config';

export const LOCALES = SITE.locales;
export const DEFAULT_LOCALE = SITE.defaultLocale;

/** Text direction per locale (English is LTR; Arabic & Farsi are RTL). */
export const DIR: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
  fa: 'rtl',
};

/** BCP-47 language tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  ar: 'ar',
  en: 'en',
  fa: 'fa',
};

/** Human label for each locale, shown in the language switcher (endonyms). */
export const LOCALE_LABEL: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fa: 'فارسی',
};

/**
 * Root-relative path for a locale's landing page. Non-default locales are
 * slashless (`/en`, `/fa`) to match the Vercel serving config
 * (`trailingSlash: false` + `cleanUrls`), so canonical/hreflang/sitemap URLs
 * are the final, non-redirecting form.
 */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`;
}

/** Absolute canonical URL for a locale. */
export function canonicalUrl(locale: Locale): string {
  return `${SITE.origin}${localePath(locale)}`;
}

/**
 * Root-relative path of a locale's privacy-policy page. The Arabic page keeps
 * the unprefixed `/privacy-policy` — it predates the localized variants and is
 * the stable URL the store listings point at.
 */
export function privacyPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/privacy-policy' : `/${locale}/privacy-policy`;
}

/**
 * Root-relative path of a locale's account-deletion request page. The Arabic
 * one is the URL submitted to Google Play's Data safety form, so — like the
 * privacy policy — it stays unprefixed and stable.
 */
export function deleteAccountPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/delete-account' : `/${locale}/delete-account`;
}

/** hreflang alternates for one localized route (+ x-default → its Arabic URL). */
function alternatesFor(path: (locale: Locale) => string): { hreflang: string; href: string }[] {
  const list = LOCALES.map((l) => ({ hreflang: HTML_LANG[l], href: `${SITE.origin}${path(l)}` }));
  return [...list, { hreflang: 'x-default', href: `${SITE.origin}${path(DEFAULT_LOCALE)}` }];
}

/** hreflang alternates for the privacy pages (+ x-default → Arabic). */
export function privacyAlternates(): { hreflang: string; href: string }[] {
  return alternatesFor(privacyPath);
}

/** hreflang alternates for the account-deletion pages (+ x-default → Arabic). */
export function deleteAccountAlternates(): { hreflang: string; href: string }[] {
  return alternatesFor(deleteAccountPath);
}

/**
 * hreflang alternates for every locale plus x-default (points at Arabic root).
 * Emitted in <head> and consumed by the sitemap for maximal SEO coverage.
 */
export function alternates(): { hreflang: string; href: string }[] {
  return alternatesFor(localePath);
}
