# Architecture

This document records the static-site structure for the public Seiser Systems website.

## Root Entry Point

`index.html` stays at the repository root because GitHub Pages is currently serving from the `main` branch root. Moving it would require a hosting configuration change outside the codebase.

`CNAME` also stays at the repository root so GitHub Pages can keep serving `seisersystems.com`.

Do not move `index.html` or `CNAME` without explicit approval.

## Assets

Static assets live under `assets/`:

- `assets/logos/` - Logo and brand mark files.
- `assets/images/` - General public-site images.
- `assets/icons/` - Static icon files.

The current logo remains named `seiser-systems-logo.png` and is referenced from `assets/logos/`.

## CSS

Global styles live in `css/style.css`.

The stylesheet was extracted from the original embedded CSS in `index.html` to improve maintainability while preserving the current visual design.

## Homepage Layout

The homepage is a single-page static layout in `index.html`.

The top of the page uses a full-width hero section with the Seiser Systems logo, company name, tagline, supporting sentence, and calls to action. The hero also includes a simple service overview panel using existing brand styling instead of stock imagery or flashy effects.

Below the hero, a service navigation bar links to the primary homepage sections:

- Custom PCs & Upgrades
- Diagnostics & Repair
- Electronics Troubleshooting
- Custom Tech Solutions
- Pricing
- Contact

The navigation uses CSS `position: sticky` so it appears below the hero at first, then remains at the top of the viewport while scrolling. Section anchors use CSS `scroll-margin-top` so linked headings remain visible below the sticky bar.

Homepage sections are organized with semantic `<section>` elements and stable IDs. The current section IDs are:

- `intro`
- `custom-pcs-upgrades`
- `diagnostics-repair`
- `electronics-troubleshooting`
- `custom-tech-solutions`
- `pricing`
- `about`
- `projects`
- `contact`

## JavaScript

`js/` is reserved for future vanilla JavaScript. No `main.js` exists yet because the current homepage uses only HTML and CSS, including the sticky service navigation.

## Deployment

GitHub Pages serves the repository from the `main` branch root. Static files are resolved relative to `index.html`.

There is no build step, package manager, server runtime, database, authentication layer, or API dependency.

## Approval Required Before Changing

- Moving `index.html` away from the root.
- Moving or removing `CNAME`.
- Adding frameworks, build tools, package managers, or backend code.
- Adding internal business software to this public website repository.
- Publishing unverified business claims, testimonials, certifications, or customer names.
