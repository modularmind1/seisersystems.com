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

The navigation uses CSS `position: sticky` so it appears below the hero at first, then remains at the top of the viewport while scrolling. The nav wraps into multiple rows at narrower widths instead of horizontal scrolling. Section anchors use CSS `scroll-margin-top` so linked headings remain visible below the sticky bar.

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

## Additional Pages

Additional public pages live under `pages/`.

- `pages/projects.html` - Dedicated project gallery page. It may contain placeholder categories, but placeholder cards must not be replaced with fake projects, fake photos, fake customers, fake before/after claims, or fake testimonials.
- `pages/disclaimer.html` - Full service disclaimer page.
- `pages/review.html` - Email-based service review page.

Because `index.html` stays at the repository root, links from the homepage to nested pages use paths such as `pages/projects.html`. Links from nested pages back to the homepage use paths such as `../index.html`, and nested assets use `../css/style.css` and `../assets/logos/seiser-systems-logo.png`.

## JavaScript

Vanilla JavaScript lives in `js/main.js`.

The review page uses JavaScript to gather the visitor's name, star rating, and description, then opens a prefilled email draft. This keeps the site static and avoids a fake form that submits nowhere.

## Lead Capture

Quote request calls to action link to an approved Google Form. The form is hosted outside this repository, so the public website remains static and does not include backend code, authentication, databases, or custom form handling.

The review form is email-based and does not publish reviews automatically.

## Deployment

GitHub Pages serves the repository from the `main` branch root. Static files are resolved relative to `index.html`.

There is no build step, package manager, server runtime, database, authentication layer, or API dependency.

## Approval Required Before Changing

- Moving `index.html` away from the root.
- Moving or removing `CNAME`.
- Adding frameworks, build tools, package managers, or backend code.
- Adding internal business software to this public website repository.
- Publishing unverified business claims, testimonials, certifications, or customer names.
