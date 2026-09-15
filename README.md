# Shantanu Patil — Portfolio

Single-page portfolio site. Positioning: *an engineer who has already done
operations consulting, moving into strategy consulting, anchored in automotive,
EV and mobility.*

Theme: **Blueprint to Boardroom** — the page opens in an engineering-drawing
aesthetic (faint blueprint grid, dimension brackets, a schematic connector
motif) and, at the Case Studies section, drops the grid for clean consulting
exhibit cards. The transition acts out the career arc.

- **Stack:** Vite + React + TypeScript + Tailwind CSS. No backend, no database.
- **All copy lives in [`src/content.ts`](src/content.ts).** Edit that one file to
  change text; layout components never hard-code copy.
- Light/dark themes via `prefers-color-scheme` + a manual toggle. Every colour is
  a CSS variable in [`src/index.css`](src/index.css); both modes are two value
  sets for the same tokens.
- Numbers/stats render in monospace (JetBrains Mono) as the site's one visual
  tell for "verified fact". Body text is Inter.

---

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (default `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build into dist/
npm run preview   # serve the built dist/ locally
npm run lint      # oxlint
```

---

## Editing content

Everything is in [`src/content.ts`](src/content.ts), grouped by section (hero,
about, experience, recognition, caseStudies, skills, leadership, contact). A
few rules were baked into the copy — they are noted in comments in that file.
In short:

- Keep claims backed by a specific number, named client, competition or
  deliverable. No hype adjectives.
- Do **not** add a "top X% / 1 of N" framing to the ARAI *Best Contract
  Executive* award.
- Do **not** use the notation `p<0.01` anywhere.
- The Treasure Box Club EBITDA / margin figure is intentionally omitted.
- Case studies do **not** carry a closing "why this matters" note to the
  reader — that reasoning is for editing, not the page. The
  Situation/Approach/Result block does the work on its own; don't add one back.
- Nav is deliberately kept to five items (About, Experience, Case Studies,
  Skills, Contact). Achievements live in Experience as a "Recognition" strip;
  the BAJA/motorsport story lives inside the Arc's "Proving ground" beat;
  Leadership & Community is still on the page (between Skills and Contact)
  but isn't in the nav.
- There is no Insights section. It was cut rather than shipped empty — add it
  back only once there's at least one real essay to put in it.

### Regenerating the OG preview image

`public/og-image.png` is rendered from `public/og-image.svg` via
[`@resvg/resvg-js`](https://github.com/thx/resvg-js) (not a project
dependency — installed on demand). If you edit the SVG:

```bash
npm install --no-save @resvg/resvg-js
node scripts/render-og.cjs
```

Font rendering falls back to a system sans-serif (resvg doesn't have
JetBrains Mono/Inter available headless) — close enough for a link-preview
card, not pixel-identical to the live site.

---

## Deploy

### Default path — Vercel (recommended)

Zero configuration; [`vercel.json`](vercel.json) is already set up.

1. Install the CLI once: `npm i -g vercel`
2. From this folder:

   ```bash
   vercel --prod
   ```

   First run asks a few one-time questions (scope, link/create project, keep the
   detected settings — framework **Vite**, build `npm run build`, output
   `dist`). It then prints the public URL. Re-run `vercel --prod` to redeploy.

Alternatively, push this repo to GitHub and "Import Project" at
[vercel.com/new](https://vercel.com/new) — every push then deploys automatically.
The site is fully static and needs no login to view.

### Alternative — GitHub Pages

A workflow is included at
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

1. Create a GitHub repo and push this folder to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow builds with `BASE_PATH=/<repo-name>/` (needed
   because a project site is served from `https://<user>.github.io/<repo>/`) and
   publishes. The URL appears in the workflow run and under Settings → Pages.

For a **user/org site** (`<user>.github.io`) or a **custom domain at the root**,
remove the `BASE_PATH` env line from the workflow so the base stays `/`.

Manual one-off build for Pages without the workflow:

```bash
BASE_PATH=/<repo-name>/ npm run build   # then publish the dist/ folder
```

(`vite.config.ts` reads `BASE_PATH`; it defaults to `/` for Vercel and local
dev.)

---

## ⚠️ Before you publish this

The site builds and looks complete without any of the following (it uses
CSS/SVG placeholders, no broken images). Swap these in before submitting or
sharing:

**Assets**

- [ ] **Resume PDF** — replace `public/resume-shantanu-patil.pdf` (currently a
      one-line placeholder). The filename must stay the same; it's linked from
      the hero, nav and contact section (as a relative href, so it resolves
      under both Vercel and the GitHub Pages `/shantanu-portfolio/` subpath).
- [x] **LinkedIn URL** — set to `https://www.linkedin.com/in/shantanuspatil1/`.
- [x] **OG image** — `public/og-image.png` is a real rendered 1200×630 PNG
      (see "Regenerating the OG preview image" above), referenced as an
      absolute URL in `index.html` so link previews resolve it correctly.
- [ ] **Graduation date** — fill the `TODO(shantanu)` in the Masters' Union
      experience entry in `src/content.ts`; also used to firm up the hero's
      availability line (currently generic - see "Facts to confirm" below).
- [ ] *(Optional)* a headshot — the design doesn't need one, but there's room in
      the hero if you want it. None of the case studies have supporting images
      either (BAJA car, FactoryFlow screenshot, Industry Compendium spread) -
      add any you have via `Read`/an `<img>` in the relevant component; none
      are faked here.

**Facts to confirm (use the safe phrasing already in the copy until confirmed)**

- [ ] **ARAI *Best Contract Executive* 2025** — no recipient-count / "top X%"
      claim is made. Only add one if ARAI HR confirms it in writing.
- [ ] **Prodmax Phase 1 baseline** — "7.12% quarterly revenue increase, 13.4%
      waste reduction, lead time cut by 2 min 35 sec" have no stated base
      (revenue off what starting figure, waste of what, cut from what cycle
      time). Add the baselines if you can share them - flagged in a code
      comment in `content.ts` too.
- [ ] **Prodmax Phase 2** — stated as method + result, "CEO-verified in
      writing". No `p<0.01`. Keep it that way unless a statistician signs off on
      a stronger phrasing.
- [ ] **ARAI optimisation-model bullet** — previously stated as "~14% profit
      improvement"; dropped the number because it collided with Prodmax Phase
      2's 14.4% and read as recycled. Restore a figure only if it's genuinely
      differentiated and you can stand behind it.
- [ ] **Treasure Box Club** — reach / spend / margin / CPV are shown; the
      EBITDA and ~19% margin figure is omitted as stale. Add it back only if
      it's current.
- [ ] **Revenue / headcount figures** in the ARAI entry (~₹8 cr vertical, ~₹110
      cr division, two-engineer team over seven contract staff) — sanity-check
      before this is fully public.
- [ ] **Tesla / VinFast client names** — check these against your ARAI
      confidentiality / NDA terms before this goes further. Homologation
      client identities and test outcomes are frequently covered. This is the
      one item here with real professional/legal downside if it's wrong -
      worth an actual check, not a guess.
- [ ] **Availability line** in the hero is intentionally generic ("Open to
      summer internship and full-time roles...") rather than a guessed date.
      Replace it with real dates once you have them.

---

## Responsive check

Verified with no horizontal scroll and correct layout at **375 px**, **768 px**
and **1440 px** (mobile / tablet / desktop). The nav collapses to a menu button
below 768 px; case-study exhibits expand inline. `prefers-reduced-motion` is
respected (entrance animations and smooth scroll disabled).

## Accessibility

Semantic landmarks, one `<h1>`, logical `<h2>`/`<h3>` nesting, skip link,
keyboard-operable nav / theme toggle / exhibit cards, visible focus rings, and
AA contrast in both themes.
