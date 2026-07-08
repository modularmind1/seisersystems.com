# Seiser Systems Website

Public-facing static website for Seiser Systems.

Website: https://seisersystems.com

## Purpose

This repository contains only the public website for Seiser Systems. It is a static GitHub Pages site and does not contain internal business software, backend code, databases, authentication, or APIs.

The current site is a simple "Coming Soon" landing page for Version 0.1.

## Technology

This repository is intentionally simple:

- HTML5
- CSS3
- Vanilla JavaScript when needed
- No frameworks
- No build tooling
- No backend

## File Structure

- `index.html` - Current GitHub Pages entry point.
- `assets/logos/` - Logo and brand mark files.
- `assets/images/` - General website imagery.
- `assets/icons/` - Static icon files.
- `css/` - Site stylesheets.
- `js/` - Future vanilla JavaScript modules.
- `docs/` - Project documentation, architecture notes, and roadmap.
- `CNAME` - GitHub Pages custom domain configuration.

## Preview Locally

Open `index.html` directly in a browser, or serve the folder with any simple static file server.

No install step is required.

## Deployment

GitHub Pages serves this site from the `main` branch root. Because of that, `index.html` and `CNAME` must remain at the repository root unless the GitHub Pages settings are intentionally changed.

## Notes

- Keep this repository focused on the public website.
- Do not add frameworks, package managers, build tools, backend code, or internal business workflows.
- See `docs/architecture.md` for structure decisions.
- See `docs/roadmap.md` for the planned public-site roadmap.
