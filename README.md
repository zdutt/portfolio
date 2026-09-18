# Zachary Dutton: portfolio v0.1

A personal portfolio built with Astro and plain CSS. Read [PROJECT_BRIEF.md](PROJECT_BRIEF.md) before changing the design or adding content.

## Run locally

Use Node.js 22.12+ (Node 24 was used for this build) and npm. From this folder:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal, normally http://localhost:4321. Keep the terminal running while editing; press Ctrl+C to stop. On subsequent runs, just use `npm run dev` unless dependencies changed.

## Build and preview

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. Do not edit generated files. Astro's setup reference: https://docs.astro.build/en/install-and-setup/

## Important files

- `src/pages/index.astro`: homepage introduction, section order, and remaining placeholders.
- `src/pages/work.astro`, `experience.astro`, `about.astro`: the other three pages.
- `src/components/Header.astro`: shared navigation and Resume placeholder.
- `src/components/ExperienceTimeline.astro`: homepage experience chronology and its small, dependency-free interaction script.
- `src/components/Footer.astro`: shared contact area.
- `src/layouts/BaseLayout.astro`: page document, title, metadata, and shared structure.
- `src/styles/global.css`: all visual styles, including mobile rules and editable color variables.
- `public/`: future images and resume PDF. Nothing added here is private.
- `astro.config.mjs`: static output settings.
- `PROJECT_BRIEF.md`: design direction, content truthfulness, and scope rules for future agents.

## Current decisions

The first real project, Vacuum Accessory Dock, is linked from Home and Work at `/work/vacuum-accessory-dock/`. Its page uses the user's description and all five supplied images. Edit `src/pages/work/vacuum-accessory-dock.astro` for the narrative and `src/components/VacuumDockPreview.astro` for the shared preview. Image copies live in `public/images/vacuum-accessory-dock/`; the supplied originals remain unchanged.

No biography, employer details, contact details, or project claims have been invented. Remaining placeholder shapes are layout spaces, not a project-card system. Resume is disabled until a document is supplied. The experience timeline uses a small amount of authored JavaScript; there are no downloaded fonts, CMS, or extra UI dependencies. The system font and color values are temporary foundations.

All pages use trailing slashes for directory-style static hosting. Internal links use Astro's base URL.

## Production deployment

The live site is [zdutton.com](https://zdutton.com). Production follows this path:

`GitHub zdutt/portfolio` → `Vercel` → `zdutton.com`

Vercel watches the `main` branch and deploys pushed commits automatically. Do not add GitHub Pages configuration. Build locally before committing and pushing.

## Next design pass

Review the homepage introduction, timeline density, idle motion speed, and how quickly Selected Work enters view. The full Experience page remains a later design pass.

## Project references

The files in `sources/` are synced read-only references. The implementation lives directly in this folder alongside them. Keep those references out of `public/` and leave them unchanged.
