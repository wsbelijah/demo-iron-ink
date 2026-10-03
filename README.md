# IRON & INK — Tattoo Shop Site (in build)

Concept tattoo shop website for Elijah's portfolio/client outreach.

- **Design system:** dark immersive (`#0C0C0F` bg, `#7C3AED` accent) — see the
  session DESIGN.md (overrides the standing constitution for this project).
- **Stack:** static HTML/CSS/JS, no build step. Will deploy on Cloudflare Pages.

## Current state

- `js/main.js` — interaction script (Elijah's code, saved Oct 3, 2026):
  animated counters (`.count` + `data-target`), drag-to-scroll gallery
  (`.gallery-track`), touch support, parallax (`.parallax-bg` /
  `.parallax-section`), smooth nav links.
- HTML/CSS still to build — the script expects: `.count` elements with
  `data-target`, a `.gallery-track` section, `.parallax-bg` inside
  `.parallax-section`, and `nav a[href^="#"]` links.

## Notes

- Counter observer head was reconstructed from a pasted fragment; logic matches.
- Gallery/parallax blocks are null-guarded so the script runs clean on pages
  where those sections don't exist yet.
