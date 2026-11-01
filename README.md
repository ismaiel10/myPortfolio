# Syed Ismaiel — Portfolio

A static, responsive portfolio with an editorial visual system, accessible interactions, and no build step.

## Project structure

- `index.html` — page content, project descriptions, links, and metadata
- `assets/css/styles.css` — layout, typography, colors, responsive rules
- `assets/js/main.js` — mobile navigation and dynamic footer year
- `assets/images/` — personal photographs (add the two originals here)

## Run locally

Open `index.html` directly, or serve the folder with any static file server. For example, from this directory run `python -m http.server 8000` and visit `http://localhost:8000`.

## Replace the photographs

The two original PNGs are in `assets/images/ismaiel-portrait.png` (hero) and `assets/images/ismaiel-editorial.png` (About section). Replace those files to change photos, or update the two `<img>` `src` values in `index.html`. Keep the originals' aspect ratios; the page uses `object-fit: cover` and section-specific framing.

## Edit content

Update the introduction and About copy directly in `index.html`. Each project is a separate `<article>` in `#projects`; its visible summary, current status, role, expandable details, technology list, and any real external link live together. Keep status language current and remove links that do not exist. LinkedIn and GitHub URLs are in the Contact section.

## Change fonts and colors

Edit the CSS variables at the top of `assets/css/styles.css`. The current system uses DM Serif Display for editorial headlines, DM Sans for body text, and Pinyon Script sparingly for the signature. Google Fonts are optional; the CSS includes local system fallbacks.

## Deploy updates

This is a static site. Publish the project root with GitHub Pages, Vercel, Netlify, or another static host. No build command is required. Commit and push updates to the configured repository, then let the hosting provider publish the new version.
