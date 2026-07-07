/**
 * Generate static social/share assets with sharp (run once, committed to
 * /public — NOT part of the Vercel build, so no font/runtime fragility there):
 *   - public/og/{ar,en,fa}.jpg    — 1200x630 Open Graph cover
 *   - public/apple-touch-icon.png — 180x180 iOS home-screen icon
 *   - public/favicon.png          — 64x64 browser tab icon
 *
 *   node scripts/make-og.mjs
 *
 * Uses the app logo (src/assets/logo.png, transparent) and the current home
 * screenshot (src/assets/screens/home.png). Re-run after dropping in the real
 * screenshots to refresh the OG cover.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const P = (p) => resolve(root, p);

const GREEN = '#006654';
const GREEN_HI = '#0a7c6a';
const GREEN_900 = '#04352d';
const SAND = '#f4f0e7';
const GOLD_A = '#d8b878';
const GOLD_B = '#a97f45';

const LOGO = P('src/assets/logo.png');
const HOME = P('src/assets/screens/home.png');

const roundedRectSvg = (w, h, r, fill) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}"/></svg>`);

/** Screenshot with rounded corners (via a dest-in mask). */
async function roundedImage(src, targetH, radius) {
  const img = await sharp(src).resize({ height: targetH }).png().toBuffer();
  const { width, height } = await sharp(img).metadata();
  return {
    buffer: await sharp(img)
      .composite([{ input: roundedRectSvg(width, height, radius, '#fff'), blend: 'dest-in' }])
      .png()
      .toBuffer(),
    width,
    height,
  };
}

function ogBackground() {
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${GREEN_HI}"/>
        <stop offset="0.55" stop-color="${GREEN}"/>
        <stop offset="1" stop-color="${GREEN_900}"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${GOLD_A}"/>
        <stop offset="1" stop-color="${GOLD_B}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.78" cy="0.15" r="0.6">
        <stop offset="0" stop-color="${GOLD_A}" stop-opacity="0.34"/>
        <stop offset="1" stop-color="${GOLD_A}" stop-opacity="0"/>
      </radialGradient>
      <pattern id="rub" width="70" height="70" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="${GOLD_A}" stroke-width="1" opacity="0.13">
          <rect x="21" y="21" width="28" height="28"/>
          <rect x="21" y="21" width="28" height="28" transform="rotate(45 35 35)"/>
        </g>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#rub)"/>
    <rect width="1200" height="630" fill="url(#glow)"/>
    <rect x="0" y="0" width="1200" height="8" fill="url(#gold)"/>

    <text x="92" y="322" font-family="Segoe UI, Arial, sans-serif" font-size="88" font-weight="800" fill="#f5f2ea" letter-spacing="-1">Maarif Sajjadiya</text>
    <text x="94" y="382" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="500" fill="#e6d3ac">Your companion on the ziyarat walk, station by station</text>

    <g transform="translate(94, 436)">
      <rect x="0" y="0" width="452" height="60" rx="30" fill="rgba(255,255,255,0.09)" stroke="rgba(230,211,172,0.30)"/>
      <circle cx="34" cy="30" r="9" fill="url(#gold)"/>
      <text x="60" y="39" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="#f5f2ea">Coming soon · App Store &amp; Google Play</text>
    </g>
  </svg>`);
}

async function buildOg() {
  await mkdir(P('public/og'), { recursive: true });
  const bg = await sharp(ogBackground()).png().toBuffer();

  const logo = await sharp(LOGO).resize({ height: 96 }).png().toBuffer();
  const phone = await roundedImage(HOME, 566, 42);
  const bezel = roundedRectSvg(phone.width + 16, phone.height + 16, 50, GREEN_900);
  const phoneLeft = 1200 - phone.width - 96;
  const phoneTop = Math.round((630 - phone.height) / 2);

  const cover = await sharp(bg)
    .composite([
      { input: bezel, top: phoneTop - 8, left: phoneLeft - 8 },
      { input: phone.buffer, top: phoneTop, left: phoneLeft },
      { input: logo, top: 66, left: 92 },
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  for (const locale of ['ar', 'en', 'fa']) {
    await writeFile(P(`public/og/${locale}.jpg`), cover);
  }
  console.log(`OG cover written (${(cover.length / 1024).toFixed(0)} kB) → public/og/{ar,en,fa}.jpg`);
}

async function buildIcon(size, out) {
  const logoH = Math.round(size * 0.66);
  const logo = await sharp(LOGO).resize({ height: logoH }).png().toBuffer();
  const tile = sharp({ create: { width: size, height: size, channels: 4, background: SAND } })
    .composite([{ input: logo, gravity: 'center' }])
    .png();
  await writeFile(P(out), await tile.toBuffer());
  console.log(`${out} written (${size}x${size})`);
}

await buildOg();
await buildIcon(180, 'public/apple-touch-icon.png');
await buildIcon(64, 'public/favicon.png');
