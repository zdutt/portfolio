# Zachary Dutton — Portfolio brief

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

Astro, plain CSS, and vanilla JavaScript only when a concrete interaction needs it. Current output is static HTML/CSS with no authored client JavaScript. Astro is the sole direct dependency.

Intended eventual hosting: GitHub Pages, with a custom domain later. Do not substitute another hosting service or publish during a local-only iteration. Configure the real site URL and repository base path when hosting is actually set up.

No React, Vue, Svelte, Tailwind, Bootstrap, UI/component libraries, animation libraries, Three.js, CMS, database, authentication, or speculative dependencies. Do not pre-build schemas, filters, categories, galleries, interactive CAD viewers, card systems, or content-management machinery.

## Current sitemap

- `/` — introduction, Selected Work, Smaller Work / Design Notes, Experience preview, About preview, shared footer/contact area.
- `/work/` — spaces for selected work and smaller studies.
- `/experience/` — professional background placeholder, eventually complementing the resume.
- `/about/` — personal introduction/background and a photograph placeholder.
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
