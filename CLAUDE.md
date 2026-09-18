# Claude guide: Zachary Dutton portfolio

This file is the working handoff for Claude. Read it, `PROJECT_BRIEF.md`, and the current code before making changes. Keep this file updated when the project direction materially changes.

## What we are building

This is Zachary Dutton's personal engineering portfolio. The immediate goal is to build it incrementally from real work, one supplied project or experience update at a time. It should make Zachary's technical judgment visible through concrete design decisions, manufacturing work, iteration, and results.

Current homepage order:

1. Portrait and short introduction
2. Professional experience timeline
3. Selected Work
4. Smaller Work / Design Notes
5. About preview
6. Contact/footer

The homepage introduction is deliberately specific. On desktop, the portrait is on the left. The right column starts with “Zachary Dutton” aligned to the top of the photo, followed by “Design / Manufacturing / Prototyping.” The final line of the paragraph aligns with the bottom of the photo. On mobile, the portrait and text stack naturally.

The experience timeline shows six technical roles from 2022 through 2025, newest first. The first visible role must be `SIG SAUER / 03`. All entries use the same width and styling. The horizontal scrollbar is hidden, manual scrolling remains available, and slow automatic movement runs only on larger screens. Do not restore Target or Market Basket.

The first full project is the Vacuum Accessory Dock. Its homepage thumbnail is the final CAD image. Its case study explains scanning, mesh cleanup, datum construction, CAD reconstruction, socket creation, mounting geometry, and the printed result.

## Source of truth

- Treat `PROJECT_BRIEF.md` as the product and design brief.
- Treat `sources/` as read-only reference material. Never edit, rename, move, or delete anything in it.
- Use facts supplied in this project or by Zachary. Do not infer credentials, education, test results, dimensions, tolerances, materials, print settings, software expertise, or project outcomes.
- When information is missing, keep the copy narrow or use a restrained placeholder. Ask for the missing fact if it blocks accurate work.
- Preserve the meaning of supplied experience and project descriptions. Editing for clarity is fine; inflation is not.

## Design direction

Aim for a restrained industrial/editorial portfolio:

- Warm off-white background, dark neutral text, muted secondary text, thin rules.
- Strong typography, clear hierarchy, generous whitespace, square edges.
- Small uppercase labels may support hierarchy, but they must sit directly with the content they label.
- Let photography, CAD, drawings, and process images carry the visual interest.
- Use consistent grids and alignments. Details should feel deliberate rather than decorative.
- Keep pages readable and calm. Motion should be slow, optional, and never interfere with navigation.

Avoid:

- Gradients, glow, glass effects, drop shadows, neon, fake schematics, or HUD styling.
- Rounded card grids, skill bars, generic engineering slogans, and startup-style marketing copy.
- Random accent colors or special styling for selected employers.
- Stock imagery, AI filler imagery, fabricated metrics, and unsupported claims.
- Extra frameworks, UI libraries, animation packages, carousels, or abstractions without a current need.

## Technical boundaries

- Framework: Astro.
- Styling: plain CSS in `src/styles/global.css`.
- Client code: vanilla JavaScript only when an actual interaction requires it.
- Keep dependencies minimal. Astro is currently the only direct dependency.
- Output is a static site.
- Production repository: `https://github.com/zdutt/portfolio.git`.
- Production branch: `main`.
- Vercel watches `main` and deploys the production site at `https://zdutton.com`.

Important locations:

- `src/pages/index.astro`: homepage composition and copy
- `src/components/ExperienceTimeline.astro`: timeline data and interaction
- `src/components/ProjectPreview.astro`: shared project preview used on Home and Work
- `src/data/experience.js`: the six roles, read by the timeline and the Experience page
- `src/pages/experience.astro`: the professional record, newest first
- `src/pages/work/`: one page per written-up piece of work
- `src/styles/global.css`: site-wide visual system and responsive rules
- `public/images/`: optimized site images grouped by project where appropriate
- `PROJECT_BRIEF.md`: lasting product decisions and factual context

## How to add a project

1. Read every supplied note and inspect every supplied image before writing.
2. Separate confirmed facts from assumptions. Do not publish assumptions as facts.
3. Choose the strongest representative image. CAD is often better for a thumbnail; completion photos are useful as evidence inside the case study.
4. Build a focused story: problem, constraints, process, key decisions, iteration, and result.
5. Add the project page under `src/pages/work/` and only extract a shared component when the same presentation is actually used in more than one place.
6. Add the minimum homepage or Work-page preview needed to find the project.
7. Add new lasting facts or design decisions to `PROJECT_BRIEF.md`.
8. Check image alt text, heading order, keyboard access, mobile layout, and page overflow.

## Local workflow

Install and run:

```powershell
npm install
npm run dev
```

The local site normally runs at `http://127.0.0.1:4321/`.

`node_modules` holds native binaries for whichever platform ran `npm install`. Windows and Linux
bindings for rolldown, satteri, esbuild, sharp, lightningcss, and the Astro compiler are installed
side by side so the project builds from either. Running `npm ci` or `npm install` on Windows prunes
the Linux ones; reinstall them if a Linux build then fails to find a native module.

Before committing:

```powershell
npm run build
git diff --check
git status --short
git diff
```

Also inspect the affected page in a browser at desktop and phone widths. A passing build does not prove the layout is correct. Check that images load, text does not clip, the page has no accidental horizontal overflow, and the browser console has no errors.

## Switching between Codex and Claude

Only one agent should edit the repository at a time. Finish, commit, and push one agent's work before handing the project to the other. This prevents both agents from rewriting the same files from different snapshots.

At the start of every session:

```powershell
git status --short
git branch --show-current
git pull --ff-only origin main
```

Expected branch: `main`.

If `git status --short` shows changes you did not make, do not discard, reset, overwrite, or stash them blindly. They may belong to the other agent. Review them and finish or commit that work first.

At the end of a completed change:

```powershell
npm run build
git diff --check
git status --short
git add <files-for-this-change>
git commit -m "Describe the completed change"
git pull --rebase origin main
git push origin main
```

If the rebase reports conflicts:

1. Open each conflicted file and preserve the intended parts of both changes.
2. Remove conflict markers.
3. Run `git add <resolved-files>`.
4. Run `git rebase --continue`.
5. Rebuild and visually verify again.
6. Push normally.

Never use `git push --force`, `git reset --hard`, or destructive cleanup to solve a synchronization problem. Do not rewrite published history.

## Definition of done

A change is done when:

- It follows the latest user direction and the design rules above.
- All text is supported by project facts.
- Desktop and mobile layouts have been visually checked.
- `npm run build` passes.
- `git diff --check` passes.
- The commit contains only intended files.
- The commit is pushed to `origin/main` when publishing was requested.
