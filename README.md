# Zachary Dutton — Portfolio v0.1

A local, structural portfolio skeleton built with Astro and plain CSS. Read [PROJECT_BRIEF.md](PROJECT_BRIEF.md) before changing the design or adding content.

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

- `src/pages/index.astro`: homepage section order and placeholders.
- `src/pages/work.astro`, `experience.astro`, `about.astro`: the other three pages.
- `src/components/Header.astro`: shared navigation and Resume placeholder.
- `src/components/Footer.astro`: shared contact area.
- `src/layouts/BaseLayout.astro`: page document, title, metadata, and shared structure.
- `src/styles/global.css`: all visual styles, including mobile rules and editable color variables.
- `public/`: future images and resume PDF. Nothing added here is private.
- `astro.config.mjs`: static output settings.
- `PROJECT_BRIEF.md`: design direction, content truthfulness, and scope rules for future agents.

## Current decisions

The first real project, Vacuum Accessory Dock, is linked from Home and Work at `/work/vacuum-accessory-dock/`. Its page uses the user's description and all five supplied images. Edit `src/pages/work/vacuum-accessory-dock.astro` for the narrative and `src/components/VacuumDockPreview.astro` for the shared preview. Image copies live in `public/images/vacuum-accessory-dock/`; the supplied originals remain unchanged.

No biography, employer details, contact details, or project claims have been invented. Remaining placeholder shapes are layout spaces, not a project-card system. Resume is disabled until a document is supplied. No client JavaScript, downloaded fonts, CMS, or extra UI dependencies are needed. The system font and color values are temporary foundations.

All four pages use trailing slashes for directory-style static hosting. Internal links use Astro's base URL so a future repository subpath can be configured centrally. Nothing has been published or connected to GitHub yet.

When setting up GitHub Pages, set `site` to the actual public origin and `base` to the repository subpath if needed in `astro.config.mjs`. Configure deployment then, using the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/). Do not guess an account, repository name, or domain.

## Next design pass

Review the homepage at desktop and phone widths. Decide the hero's text/image proportions, section spacing, and how quickly Selected Work enters view. Then experiment with one real design study before defining reusable project presentation.

## Project references

The files in `sources/` are synced read-only references. The implementation lives directly in this folder alongside them. Keep those references out of `public/` and leave them unchanged.
