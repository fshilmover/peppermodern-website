# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peppermodern is a millwork + casework company in Mooresville, NC (GC-first positioning; CNC-for-hire as a service line). This repo is the production website — a static site in the "blueprint / drafting" design language (paper cream, drafting blue `#1558d6`, mono labels, margin rules), hand-ported from Scott's Next.js draft (`../PepperWood-Website-v2`) with no build step.

Deployed August 2026, replacing the original CNC-for-hire site (preserved as git tag `v2-archive` and branch `archive/v2`).

## Architecture

- **Static HTML/CSS**: no build process; edit files, push to `master`, Netlify auto-deploys peppermodern.com
- `css/site.css` — the design system: an inline reset (replaces Tailwind preflight from the original Next draft) + Scott's `globals.css` verbatim + v3 additions (announce bar, page-hero, menu table, role/track cards, gallery, contact blocks, pepper-mark). Reuse existing classes before adding new ones.
- Pages: `index.html` (single-scroll home: hero, buyer strip, capabilities, markets, gallery, process, about, Netlify bid form), `services.html` (CNC menu, published pricing — the SEO-ranking page), `careers.html` (Working Shop Lead role + two-track hiring), `values.html` (the seven values, verbatim), `about.html`, `contact.html`, `thanks.html` (form success, noindex)
- `files/Peppermodern-Sample-Submittal.pdf` — public redacted sample of a real shop-drawing set (rasterized; regenerate from source via the session scratchpad script, never re-redact by hand)
- `_redirects` — Netlify clean URLs (`/careers` → `/careers.html` etc.); add a rule for every new page
- Forms: Netlify Forms (`bid-request` with file upload, `contact`) — activate on deploy; submissions in the Netlify dashboard
- `7minutecabs.html` + folder — legacy, untouched, pending a keep/retire decision
- Old `css/styles.css` and `js/` belong to the archived v2 pages only

## Brand rules (from Peppermodern-Brand-Strategy-2026.md, one level up)

- One brand: **Peppermodern** (single word, single cap). Header/nav use the blue registration-mark square; the footer brand slot and favicon use the Pepper dog badge (white on dark / white-on-blue plate). Brand assets in `../brand/`.
- Voice: engineer-plain, specific, no craft romance, no tech hype, never hungry. No unmeasured stats, no unearned market claims, no portfolio-status language ("documentation in progress" is banned — silence beats apology).
- Never say publicly: vertical integration, self-performing GC, homebuilding ambitions, disintermediation.
- The two clocks never share a sentence: millwork = quoted per project (no lead-time number until Fred confirms one); CNC services = published menu, $75 per typical 4×8 sheet, 7-day turnaround.

## Development

- Local preview: `python -m http.server 8642 -d "peppermodern-website Current"` from the parent folder (or the `peppermodern-v3` entry in `../.claude/launch.json`). Clean URLs 404 locally (no `_redirects` processing) — use `.html` paths.
- Hard-refresh after CSS changes (no cache-busting headers locally).
- SEO: update `sitemap.xml` (and canonicals/OG) when adding pages; LocalBusiness schema lives in `index.html` (founded 2025 — do not regress to 2014).
