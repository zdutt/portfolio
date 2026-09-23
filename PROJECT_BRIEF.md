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
- `/work/`: the Work index, every written-up piece, then Smaller Work / Design Notes.
- `/experience/`: the professional record, training and certification, and a link to the resume.
- `/about/`: background, education, and skills and tools, with the portrait Zachary supplied for the page.
- `/resume/`: the resume shown as an image of the page, with Download PDF and Open PDF buttons. The PDF itself is `/zachary-dutton-resume.pdf`.
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

The user supplied the factual chronology and copy for six roles from June 2022 through August 2025. Display the entries newest-to-oldest so the most recent technical experience appears first, and preserve the supplied meaning. Use uniform entry widths and marker styling. The three Sig Sauer internships retain `/ 01`, `/ 02`, and `/ 03` in their company labels to communicate sequence without giving those entries a different visual treatment.

The timeline uses native horizontal overflow plus a small authored script for mouse dragging and extremely slow idle movement on desktop. It reverses at the ends, pauses for interaction, disables automatic movement on small screens, and respects `prefers-reduced-motion`. Keep manual scrolling primary and do not add a carousel or animation dependency.

Do not size the track with `width: max-content`. Safari, which every iPhone browser uses, works out a
flex container's max-content width from each card's text laid out on one unwrapped line, not from the
cards' fixed widths. At phone width that came to roughly 4,200 px against 1,880 px of cards, so on
Zachary's iPhone the timeline kept scrolling into blank paper after the last card. Chromium sized it
correctly, which is why the problem never showed up in testing. The track now takes the viewport's
width and the fixed-width cards overflow it, so the scroll ends at the last card in every engine.

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
every preview on Home and Work. Previews alternate sides down the page: the first image on the
left, the next on the right, and so on. This is deliberate editorial rhythm, not the beginning of a
card system, and it is not a commitment for future projects.

## Source material and publication limits

The wider photo archive at `Desktop/Personal/3D Printer/Completed Projects/Photo Dump` is reference
material, not approved content. Several items are excluded from the site by decision: Sig Sauer
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

## Experience page: coolant tank stand FEA

The second contribution on `/experience/`. Confirmed facts: a welded steel stand designed by a
colleague to carry coolant tanks had to be shown to hold 10,000 lbf before going out on the floor.
Zachary ran the analysis, his first. Linear static study in SolidWorks, load applied vertically
across the top plate, bonded contacts and rigid connectors in place of welds and bolts,
curvature-based mesh of roughly a million nodes. Top plate deflection about 4 mm; primary structure
well under 100 MPa. The automatic factor-of-safety minimum reported 0.507 at a single node on an
anti-crush sleeve, which takes bolt preload rather than carrying load, at a bonded contact on a
constrained cylindrical feature. The page states that this described the model rather than the
stand, that the structure carried the load with a factor of safety above ten, and that the analysis
went to EHS for on-floor approval and passed.

Two images are taken from the supplied report: the shaded CAD view of the stand, and the
factor-of-safety plot. The report itself is not published and is not to be quoted. Its executive
summary contradicts its own results table and contains an unfilled template placeholder; only the
figures above, which come from the results tables and from Zachary directly, may be used.

The colleague who designed the stand is not named on the site. The report names him; the site says
"a colleague". Do not add the name without Zachary's explicit instruction.

## Where work lives

Anything with a story to tell lives under `/work/`, whether it is personal or professional. The
Work/Experience split by employment status was dropped: the M290 latch, the coolant seal repair and
the coolant stand FEA are all professional, and separating them from the vacuum dock served no
reader. `/work/` is the index; each piece has its own page.

`/experience/` is the professional record: the six roles, newest first, each with its supplied
summary. Where a role has produced a written-up piece it is listed beneath, labelled "Written up in
more detail", because those pieces are examples of work done in that role and not a summary of it.
Zachary raised that distinction directly and the wording exists to respect it.

The homepage keeps the chronological timeline unlinked for the same reason, and surfaces work
through Selected Work: the two strongest pieces as full previews, the rest as a compact list. Do not
link timeline entries to project pages.

Zachary set the order on 23 September 2026: the M290 Coolant Seal Repair first, then the Vacuum
Accessory Dock. On Home those two are the full previews and the latch, the coolant stand analysis and
the remote holder follow in the compact list. The Work page shows all five as previews in that order.

The six roles live in `src/data/experience.js` and are read by both the timeline component and the
Experience page. Edit them in one place.

The M290 latch is not yet assigned to a role. It is Sig Sauer work but Zachary has not said which of
the three internships it belongs to; ask before listing it under one.

## Remote Holder

Zachary scanned each of three remotes and, separately, the side table they sit on, using a Revopoint
POP 4 with its turntable and global markers. The photograph of the three remotes on a gridded
cutting mat is a photograph only: Zachary confirmed he did not measure from it, and every dimension
came from the scans. Nothing on the page may imply otherwise. The remotes gave the pocket geometry, the table gave
the base. He modelled a single-pocket test coupon (102 x 57 x 24 mm) before committing to the full
body (140 x 97 x 62 mm, three pockets). Photographs of the printed holder are still to come.
The page no longer says so, at Zachary's instruction, but the rule stands: do not describe the
physical result until they arrive.

The CAD image on this page is a render generated from his STL file, and the caption says "Render of
the model" because it is not a photograph and must not read as one. Renders are produced by loading
the STL into three.js in headless Chromium and screenshotting the canvas, not with matplotlib: the
matplotlib output was faceted and washed out and Zachary rejected it. The fitment coupon render was
dropped because the pocket sits on the underside and the render showed a featureless slab.

## Design notes

Smaller Work is deliberately compact, at Zachary's request: one-off parts should not take the space of
a main project. Each note is a row with a small thumbnail at its own aspect ratio beside the text, 8rem
wide on desktop and 6rem on phones, where the text wraps around it.

Filament shelf: Zachary saw a filament holder design online, liked it, and modelled his own instead
of printing it. The original was built around 28 mm timber, not a US size, so his bracket was sized
around dowels he could buy, and a printed collar checked the fit first. His design, not a derivative
of the downloaded file; the note credits the idea without naming the original.

Bed sensor repair: the bed level sensors on Zachary's FlashForge Adventurer 5M failed, the printer
stopped getting a probe measurement, and the head kept driving into the plate. He stripped it down,
cleaned the boards and connections, retightened the belts, and on reinstalling the pressure sensors
had no factory torque spec, so he ran a system recalibration and let the machine re-zero against the
torque he had applied rather than guessing at the original preload. It has printed correctly since.
The Smaller Work standfirst reads "One-off parts and small repairs" so a repair fits the section.

Towel hook: scanned the curved bathroom drawer front, took the curvature from the scan, modelled a
hook whose back face follows it, replacing a generic hook that only contacted in one place.

## Training and certification

Certified SolidWorks Associate: Zachary holds this. GD&T: a course taken during the Pratt & Whitney
co-op that followed the book GeoTol Pro 2020, which is written to ASME Y14.5-2018. The site lists
both. He believes the instructor was one of the book's authors but has not confirmed it, so no
instructor is named. OSHA 10-Hour Safety Course: supplied by Zachary with his resume details.

## About page and resume

The facts on `/about/` come from Zachary in this project: engineering coursework at Embry-Riddle
Aeronautical University and the University of Central Florida; finishing his bachelor's degree part
time through online coursework; the three Sig Sauer internships, the Pratt & Whitney co-op and the
Pirouette internship; most drawn to aviation and aircraft; skiing, camping, and his own car
maintenance and home repairs. The line about taking a part from a CAD model to something he can
hold was drafted with him and kept.

The degree appears without a major, school or graduation date, and school years are left off, on
purpose. The upcoming full-time role is not mentioned anywhere on the site: the offer is tentative
and the site supports his wider job search, so Zachary asked for it to be left off. Add neither
without his instruction. The skills list mirrors the skills section of his resume.

The portrait is his photograph, cropped to 4:5 to take a power line out of the top of the frame,
resized to 1400 px tall, with metadata stripped. It is shown at its own aspect ratio.

`public/zachary-dutton-resume.pdf` is the web copy of his one-page resume: month-level dates, no
phone number and no pending role. The phone number is deliberately kept off the site. The source
lives in his local resume folder; to update the site, replace this file with the newer web copy.

The `/resume/` page shows the PDF as two lossless WebP images rendered from it, 1700 and 1000 px
wide, in `public/images/resume/`. Zachary wanted the Resume link to show the whole resume on a page,
with downloading and opening the PDF as separate buttons. Whenever the PDF changes, regenerate both
images from it or the page will show the old version. With poppler and Pillow:

```
pdftoppm -png -r 200 -singlefile public/zachary-dutton-resume.pdf r1700
pdftoppm -png -scale-to-x 1000 -scale-to-y -1 -singlefile public/zachary-dutton-resume.pdf r1000
python -c "from PIL import Image; [Image.open(f'r{w}.png').convert('RGB').save(f'public/images/resume/resume-{w}.webp', 'WEBP', lossless=True, method=6) for w in (1700, 1000)]"
```

The email, website and LinkedIn shown in the picture are live links. Zachary tapped LinkedIn on the
picture and nothing happened, so transparent link areas now sit over those three details. Their
positions, the `links` list in `src/pages/resume.astro`, come from the PDF's own link annotations,
converted to percent of the page and padded by 3 pt vertically and 2 pt horizontally. When the PDF
changes, re-read them with pypdf and update the list:

```
python -c "from pypdf import PdfReader; p=PdfReader('public/zachary-dutton-resume.pdf').pages[0]; W,H=float(p.mediabox.width),float(p.mediabox.height); [print(a.get_object()['/A']['/URI'], [round(v,2) for v in a.get_object()['/Rect']]) for a in p['/Annots']]"
```

The resume itself shows the LinkedIn address in full, linkedin.com/in/zachary-dutton-315b30201,
rather than the word LinkedIn, so it also works on paper.

## Naming

Zachary asked on 23 September 2026 for the company to be written "Sig Sauer", in normal case and
never all caps, and for the Pratt & Whitney co-op to be described as aftermarket sustainment
engineering, matching his title. The site and his resume both follow this.

Section headers that are short labels use title case (Skills and Tools, Training and
Certification), and so do the category labels under them. Project-page headings are
sentences and stay in sentence case.

## Page headers, photos on phones, and the footer

Set at Zachary's request on 23 September 2026, after he reviewed the site on his phone.

- Work, Experience, About and Resume use the compact split header (`page-intro--split`): the page
  name on the left and one short line on the right, with no eyebrow above it, on desktop and
  phones. The full-height headers took up too much of the screen. Project pages keep their full
  intro because their titles are long.
- On phones, the home portrait and the About portrait float left at 44% of the width, so the text
  starts beside the photo and wraps full width below it, instead of the photo filling the screen.
- The footer is centered: "Contact" on top, and the email and LinkedIn links side by side on one
  line below it, on phones as well. It no longer repeats his name.
- The Resume sections on About and Experience link to `/resume/` and carry no "updated" line.
- The About page lists (Education, Skills and Tools) have no rule between items. Each section has
  its one top rule, and the items sit indented under the heading. Zachary found a line under every
  item confusing. The Experience page's training list still uses rules between items.

## Not on the site

The FlashDrive folder is 2020 to 2022 SolidWorks coursework. Its drawings carry empty title blocks
and no dimensions or tolerances, so they demonstrate nothing and stay off. The turntable project is
incomplete. Thingiverse Junk is downloaded models and is not his work.
