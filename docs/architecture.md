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

A shared header provides links to services, approach, projects, products, and contact. It wraps on small screens without JavaScript. The header is not sticky; section anchors have a small scroll margin.

The homepage retains the dark palette, blue accents, and existing logo. A measured grid, restrained borders, numbered service rows, and a technical drawing frame give the content a consistent engineering focus. The hero introduces website development, software engineering, and systems engineering. Hardware and electronics remain supporting services.

Homepage section IDs:

- `top` — Hero
- `services` — Capability overview
- `web-development` — Website development
- `custom-tech-solutions` — Software engineering (preserves the existing anchor)
- `systems-engineering` — Systems engineering
- `custom-pcs-upgrades` — PC builds and support
- `diagnostics-repair` — Diagnostics within PC support
- `electronics-troubleshooting` — Low-voltage electronics and prototypes
- `approach` — Scope, build, and verification process
- `pricing` — Quote-based development work and existing hardware starting prices
- `about` — Founder introduction
- `projects` — Project and product page links
- `contact` — Existing quote, email, phone, and social links

## Shared Navigation and Accessibility

Each page includes a skip-to-content link, the same main navigation, and a footer linking to all public pages. The active project/product link uses `aria-current="page"`. CSS defines visible keyboard focus states, responsive layouts, and reduced-motion behavior. Direction arrows use inline SVG so they do not depend on installed symbol fonts.

## Additional Pages

Additional public pages live under `pages/`.

- `pages/projects.html` - Project notes, beginning with this website as a real HTML/CSS/JavaScript example. Future examples require real work and approved public details.
- `pages/products.html` - Prepared product catalog with an explicit coming-soon state. No product names, prices, availability, checkout, or specifications are invented. Add actual listing details when supplied by the owner.
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
