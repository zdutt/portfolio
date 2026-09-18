# Zachary Dutton: portfolio brief

## Source of truth

Use only the ChatGPT Project **Project Portfolio Website** for personal facts, experience, projects, skills, education, and resume content. Do not import personal information from other conversations, projects, or memory. Follow `AGENTS.md` and read `sources/MUST READ.txt`; synced files under `sources/` are read-only.

This brief records the supplied Version 0.1 request and the available project conversation **Start Prototyping Business** (portfolio planning). That conversation references **Website Development Strategy**, whose original conversation and visual references were not directly available during this build. Its summarized direction is captured here; do not claim that original references have been reviewed. Consult them before making final visual decisions.

## Purpose and honesty

Create a personal portfolio that communicates Zachary's real design thinking, technical work, and professional background. The content should convey engineering; the presentation should feel like restrained industrial/editorial design.

Zachary stated that his current work consists primarily of smaller, one-off CAD projects, with little to no electronics experience. Do not invent major programs, electronics expertise, project results, employers, or credentials. Small projects can demonstrate real iteration, constraints, and technical judgment. Present them as thoughtful design studies without inflation or apology. Placeholder spaces do not imply a fixed project count or hierarchy.

Future project stories should reveal the problem, process, iteration, and result through actual imagery and concise explanation. Show what matters beneath a seemingly simple object. Use only confirmed facts and supplied or approved assets.

## Visual identity

- Warm off-white/light background, near-black text, clean rules, generous whitespace.
- Restrained typography and concise copy; actual imagery should eventually dominate.
- Explore irregular editorial compositions later, rather than committing to endless identical cards.
- Let projects provide color. Current system fonts, spacing, and neutral image spaces are provisional.
- Mobile layouts should be considered deliberately; navigation currently wraps without JavaScript.
- Technical captions or notation must communicate real information, never pretend to be instrumentation.
- Earlier planning discussed selective interactive galleries and CAD viewing. These are possible future explorations, not approved implementation requirements.

## Stack and simplicity

Astro, plain CSS, and vanilla JavaScript only when a concrete interaction needs it. The homepage experience timeline contains the site's only authored client-side script. Astro is the sole direct dependency.

Production hosting: the `zdutt/portfolio` GitHub repository deploys through Vercel to `https://zdutton.com`. Vercel watches `main`. Do not add GitHub Pages configuration. Build and review locally before any explicitly authorized commit and push.

No React, Vue, Svelte, Tailwind, Bootstrap, UI/component libraries, animation libraries, Three.js, CMS, database, authentication, or speculative dependencies. Do not pre-build schemas, filters, categories, galleries, interactive CAD viewers, card systems, or content-management machinery.

## Current sitemap

- `/`: headshot and concise factual profile, horizontally scrollable experience chronology, Selected Work, Smaller Work / Design Notes, About preview, shared footer/contact area.
- `/work/`: spaces for selected work and smaller studies.
- `/experience/`: professional background placeholder, eventually complementing the resume.
- `/about/`: personal introduction/background and a photograph placeholder.
- Resume is a visibly muted, disabled navigation placeholder until a real document exists. No Resume page.
- Contact belongs in the footer/About area; no separate Contact route.

Navigation: **ZACHARY DUTTON** left; **WORK / EXPERIENCE / ABOUT / RESUME** right on desktop.

## Avoid

Cyberpunk/HUD styling, neon/glow, fake schematics or telemetry, stock aerospace imagery, AI filler artwork, widespread glassmorphism/gradients, giant rounded cards, skill percentages, generic engineering slogans, startup/SaaS layouts, walls of text, excessive animation, scroll hijacking, and platform branding.

## Incremental design rule

Version 0.1 is a structural skeleton, not a finished visual design. First assess pages, section order, scale, whitespace, and navigation in the browser. Then design one layer at a time. Do not populate every project or decide the final card system prematurely. Add abstractions only when actual content and a reviewed design require them. Keep the codebase small enough to modify without making Zachary learn a large application.

## First real project: Vacuum Accessory Dock

The user explicitly supplied a local project folder containing background text and five images as the source for `/work/vacuum-accessory-dock/`, linked from Home and Work. The originals remain unchanged; website copies live in `public/images/vacuum-accessory-dock/`.

Confirmed workflow: multiple scans of the accessory mating interface; merged and cleaned point clouds; meshing; datum-plane fitting in Solid Edge Community Edition; mesh sections and editable reconstruction in Fusion; subtraction of the positive connector to form the socket; lofted mounting geometry; duplication and joining for two accessories. The supplied completed photograph shows the printed dock installed with both accessories. The fitment screenshot is a CAD view, not evidence of physical tolerance testing. No material, print settings, measured tolerances, load rating, or iteration count were provided; do not invent these.

The dedicated preview component only shares this project's presentation between two pages. It is not a final card system or a generalized project schema. All other placeholder areas remain available for incremental design.

## Homepage experience timeline

The user supplied the factual chronology and copy for six roles from June 2022 through August 2025. Display the entries newest-to-oldest so the most recent technical experience appears first, and preserve the supplied meaning. Use uniform entry widths and marker styling. The three SIG SAUER internships retain `/ 01`, `/ 02`, and `/ 03` in their company labels to communicate sequence without giving those entries a different visual treatment.

The timeline uses native horizontal overflow plus a small authored script for mouse dragging and extremely slow idle movement on desktop. It reverses at the ends, pauses for interaction, disables automatic movement on small screens, and respects `prefers-reduced-motion`. Keep manual scrolling primary and do not add a carousel or animation dependency.

## Second project: M290 Latch Redesign

A worn latch on an EOS M290 was no longer drawing its closure tight, and the machine's pressure and
purge tests were failing by a narrow, repeatable margin. Zachary shortened the latch so that closing
it tightened the joint, kept the mounting interface unchanged, and had the replacement printed in
17-4. The tests passed once it was fitted.

Confirmed facts stop there. No dimensional change, tolerance, print machine, heat treatment, build
orientation, date, or iteration count was recorded, and none may be inferred. The second photograph in the source
folder, `M290 Latch (worse)`, is the original latch, confirmed by Zachary. It appears on the project
page as the part the redesign replaced. Nothing about the extent of its wear is claimed beyond
what he stated.

## Project previews

`VacuumDockPreview.astro` was replaced by `ProjectPreview.astro`, which takes props and is used for
both projects on Home and Work. Previews alternate: the dock places its image left on a dark panel,
the latch places its image right on a light panel. This is deliberate editorial rhythm, not the
beginning of a card system, and it is not a commitment for future projects.

## Source material and publication limits

The wider photo archive at `Desktop/Personal/3D Printer/Completed Projects/Photo Dump` is reference
material, not approved content. Several items are excluded from the site by decision: SIG SAUER
suppressor build and depowdering photographs, the oversized-particle thermal event, and the
templated FEA report itself. The Pirouette internship deck may inform prose but its part
nomenclature, MFG document numbers, and embedded Onshape link must never be published.

The coolant-table FEA report contains internal contradictions: its executive summary states that
yield is not exceeded while the results table reports 621.3 MPa against yield strengths of 250 and
351.6 MPa, it contains an unfilled `[connection or component]` placeholder, and its summary and
conclusion disagree on whether further work is needed. The report is not to be published or quoted.
The analysis itself is sound and may be described in Zachary's own words. The cover page records
Designer: John Campbell, FEA: Zachary Dutton. The fixture design is not his and must not be
presented as his.

## Experience page: M290 coolant seal repair

The first written-up contribution on `/experience/`. Confirmed facts, supplied by Zachary: the M290
arrived used and would not run; coolant had been leaking from the top long enough to corrode the
surfaces beneath it, including the faces the coolant tanks seal against. The correct repair meant an
EOS lead time measured in months, which an R&D environment could not absorb, so the team repaired it
in-house. Zachary stripped the corroded area to bare metal, cleaned it, filled the pitting with JB
Weld, deliberately overfilled, sanded it back flat and repainted. The team worked the machine
together at different points; the surface work was his. It did not leak again. Summer 2025.

Two photographs are used: the corrosion before removal, and the area stripped to bare metal showing
the rectangular band of clean flat metal. There is no finished photograph and none is needed, since
the completed repair is paint over epoxy and shows nothing. Do not add a closing image implying the
machine back in service unless Zachary confirms one depicts this machine after the repair.

Not established and not to be invented: coolant chemistry, substrate alloy, how long the repair was
expected to last, machine downtime, dates beyond the summer, or any claim that this was an approved
or standard procedure. The page states plainly that it was not the standard repair. The employer is
left implicit here, consistent with the M290 latch page.
