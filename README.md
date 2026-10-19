# Seiser Systems Website

Public-facing static website for Seiser Systems.

Website: https://seisersystems.com

## Purpose

This repository contains only the public website for Seiser Systems. It is a static GitHub Pages site and does not contain internal business software, backend code, databases, authentication, or APIs.

The site presents website development, software engineering, systems engineering, custom PCs, and electronics services. It includes starting prices, quote links, a project write-up, a coming-soon product catalog, a service disclaimer, and an email-based review form.

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
- `CODEX.md` - Working guide for Codex and other AI coding agents.
- `assets/logos/` - Logo and brand mark files.
- `assets/images/` - General website imagery.
- `assets/icons/` - Static icon files.
- `css/` - Site stylesheets.
- `js/` - Vanilla JavaScript for progressive enhancement.
- `pages/` - Projects, products, service disclaimer, and review pages.
- `docs/` - Project documentation, architecture notes, and roadmap.
- `CNAME` - GitHub Pages custom domain configuration.

## Preview Locally

Open `index.html` directly in a browser, or serve the folder with any simple static file server.

No install step is required.

## Deployment

GitHub Pages serves this site from the `main` branch root. Because of that, `index.html` and `CNAME` must remain at the repository root unless the GitHub Pages settings are intentionally changed.

## Preparing a Live Update

Review changes on a feature branch before merging into `main`. GitHub Pages publishes the root of `main` to the existing custom domain. No build command, dependency installation, or hosting migration is needed. Publication can take a few minutes after a merge; check the Pages deployment in GitHub Actions before treating the live update as complete.

Product listings are intentionally empty until real product details, pricing, and availability are supplied. The existing site itself is documented as the first project example.

## Notes

- Keep this repository focused on the public website.
- Do not add frameworks, package managers, build tools, backend code, or internal business workflows.
- See `docs/architecture.md` for structure decisions.
- See `docs/roadmap.md` for the planned public-site roadmap.
