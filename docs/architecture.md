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

## JavaScript

`js/` is reserved for future vanilla JavaScript. No `main.js` exists yet because the current page does not need JavaScript.

## Deployment

GitHub Pages serves the repository from the `main` branch root. Static files are resolved relative to `index.html`.

There is no build step, package manager, server runtime, database, authentication layer, or API dependency.

## Approval Required Before Changing

- Moving `index.html` away from the root.
- Moving or removing `CNAME`.
- Adding frameworks, build tools, package managers, or backend code.
- Adding internal business software to this public website repository.
- Publishing unverified business claims, testimonials, certifications, or customer names.
