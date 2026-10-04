# IRON & INK — Tattoo Shop Site

Immersive concept tattoo studio site (portfolio/demo piece).

- **Design system:** session override (Oct 3, 2026) — dark `#0C0C0F` bg,
  purple `#7C3AED` accent, Inter throughout, 650ms reveals, 200ms hovers.
  See the session DESIGN.md; the standing constitution is overridden for this project only.
- **Stack:** static HTML/CSS/JS, no build step. Deploys on Cloudflare Pages.

## Files

- `index.html` — full page: nav, hero (counters), flash gallery
  (drag-to-scroll), parallax quote divider, artists, booking form, visit, footer.
- `css/style.css` — the session token system.
- `js/main.js` — Elijah's interaction script (counters, drag gallery,
  parallax, smooth nav; counter observer head reconstructed from a fragment).
  Untouched by the page build — page hooks (`.count`, `.gallery-track`,
  `.parallax-*`, nav links) were built to match it.
- `privacy.html` — footer-linked privacy page (demo copy).

## Sections

Hero → flash (6 original SVG flash designs) → parallax → artists →
booking (demo form, sends nothing) → visit → footer.

## Notes

- All content is illustrative: shop name, artist names/bios, flash prices,
  stats, hours, address. Replace with real client details before any real use.
- No photos — all artwork is original inline SVG linework.
- No reviews/testimonials (none invented).
