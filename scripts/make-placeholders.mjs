/**
 * Generate branded PLACEHOLDER app screenshots into src/assets/screens/ so the
 * page builds and previews before the real captures arrive. Each is a green
 * brand splash with the logo + a screen label. When the real screenshots are
 * ready, just overwrite these PNGs (same filenames) and rebuild - delete this
 * script once they're all real if you like.
 *
 *   node scripts/make-placeholders.mjs
 */
import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const P = (p) => resolve(root, p)

const GREEN = '#006654'
const GREEN_HI = '#0a7c6a'
const GREEN_900 = '#04352d'
const GOLD = '#d8b878'

const LOGO = P('src/assets/logo.png')
const W = 1080
const H = 2340

const SCREENS = [
  { file: 'home.png', label: 'Home' },
  { file: 'stations.png', label: 'Stations' },
  { file: 'amenities.png', label: 'Services' },
  { file: 'recitations.png', label: 'Library' },
  { file: 'competition.png', label: 'Competition' },
]

function bgSvg(label) {
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0" stop-color="${GREEN_HI}"/>
        <stop offset="0.5" stop-color="${GREEN}"/>
        <stop offset="1" stop-color="${GREEN_900}"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#e6c88f"/>
        <stop offset="1" stop-color="#b98f4f"/>
      </linearGradient>
      <pattern id="rub" width="120" height="120" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="${GOLD}" stroke-width="1.4" opacity="0.10">
          <rect x="36" y="36" width="48" height="48"/>
          <rect x="36" y="36" width="48" height="48" transform="rotate(45 60 60)"/>
        </g>
      </pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#rub)"/>
    <rect width="${W}" height="${H}" rx="0" fill="none"/>
    <!-- logo tile -->
    <rect x="340" y="720" width="400" height="400" rx="96" fill="#ffffff" opacity="0.96"/>
    <!-- wordmark -->
    <text x="${W / 2}" y="1320" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="72" font-weight="800" fill="#f5f2ea" letter-spacing="-1">Maarif Sajjadiya</text>
    <rect x="${W / 2 - 60}" y="1360" width="120" height="6" rx="3" fill="url(#gold)"/>
    <text x="${W / 2}" y="1450" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="46" font-weight="600" fill="#e6d3ac">${label}</text>
    <!-- bottom tab hint -->
    <g opacity="0.9">
      <rect x="240" y="2130" width="600" height="96" rx="48" fill="rgba(255,255,255,0.10)" stroke="rgba(230,211,172,0.25)"/>
      <circle cx="360" cy="2178" r="12" fill="${GOLD}"/>
      <circle cx="480" cy="2178" r="12" fill="rgba(245,242,234,0.55)"/>
      <circle cx="600" cy="2178" r="12" fill="rgba(245,242,234,0.55)"/>
      <circle cx="720" cy="2178" r="12" fill="rgba(245,242,234,0.55)"/>
    </g>
  </svg>`)
}

async function build() {
  await mkdir(P('src/assets/screens'), { recursive: true })
  const meta = await sharp(LOGO).metadata()
  const logoH = 236
  const logoW = Math.round(logoH * (meta.width / meta.height))
  const logo = await sharp(LOGO).resize({ height: logoH }).png().toBuffer()
  // centre of the white tile: (540, 920)
  const left = Math.round(540 - logoW / 2)
  const top = Math.round(920 - logoH / 2)

  for (const s of SCREENS) {
    const png = await sharp(bgSvg(s.label))
      .composite([{ input: logo, top, left }])
      .png({ compressionLevel: 9 })
      .toBuffer()
    await writeFile(P(`src/assets/screens/${s.file}`), png)
    console.log(`placeholder → src/assets/screens/${s.file} (${(png.length / 1024).toFixed(0)} kB)`)
  }
}

await build()
