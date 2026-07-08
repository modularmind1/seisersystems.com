# CODEX.md

This file is the working guide for Codex and other AI coding agents contributing to the Seiser Systems public website.

## Project Summary

Seiser Systems is an engineering-first technology company. This repository contains only the public website for:

https://seisersystems.com

Repository:

https://github.com/modularmind1/seisersystems.com

The site is currently a static "Coming Soon" landing page. Version 0.1 is the foundation phase: keep the site simple, professional, accessible, and maintainable.

## Repository Scope

This repository is only for the public-facing website.

Do not add internal business software here. Future internal systems such as CRM, quoting, inventory, dashboards, customer portals, or operations tools should live in separate repositories.

## Brand Direction

Seiser Systems should feel like a modern engineering firm:

- Professional
- Trustworthy
- Engineering-focused
- Honest
- Premium but restrained
- Minimal and maintainable

Avoid:

- Gamer or RGB-heavy styling
- Cyberpunk styling
- Flashy effects
- Fake claims
- Fake customers
- Fake certifications
- Unverified years of experience
- Overcomplicated architecture

## Current Services

Current public positioning may reference:

- Custom PCs
- PC upgrades
- Diagnostics
- Workstations

Future possible expansion may include:

- AI workstations
- Servers
- NAS systems
- Networking
- Automation
- Robotics
- Engineering tools

Do not present future possibilities as current services unless the business owner explicitly approves the change.

## Technology Rules

Use only:

- HTML
- CSS
- Vanilla JavaScript when needed
- Markdown documentation

Do not add:

- React
- Vue
- Angular
- Bootstrap
- Tailwind
- npm or Node project setup
- Build tools
- Backend code
- Databases
- Authentication
- APIs

If a task appears to require one of these, stop and document the tradeoff before implementing.

## Hosting Rules

The site is hosted with GitHub Pages from the `main` branch root.

Because of that:

- `index.html` must remain at the repository root.
- `CNAME` must remain at the repository root.
- Relative paths should be written from the root `index.html`.

Do not move `index.html` or `CNAME` without explicit approval.

## Current Structure

- `index.html` - Root GitHub Pages entry point.
- `CNAME` - Custom domain configuration for GitHub Pages.
- `README.md` - Project overview, preview, and deployment notes.
- `CODEX.md` - AI agent working guide.
- `assets/logos/` - Logo and brand mark files.
- `assets/images/` - General website imagery.
- `assets/icons/` - Static icon files.
- `css/style.css` - Global stylesheet.
- `js/` - Reserved for future vanilla JavaScript.
- `docs/` - Architecture notes, audit, and roadmap.

Do not create extra top-level folders unless they serve a clear public-website maintenance purpose.

## Coding Guidance

- Keep semantic HTML.
- Keep CSS readable and organized.
- Keep functions small if JavaScript is ever added.
- Prefer simple static files over abstractions.
- Preserve accessibility and responsive behavior.
- Comment only where the code would otherwise be hard to understand.
- Do not redesign the visual style unless the task explicitly asks for design work.
- Do not invent business facts or marketing claims.

## Documentation Guidance

Keep documentation current when architecture changes.

Important docs:

- `docs/audit.md` - Sprint 0 repository audit.
- `docs/architecture.md` - Hosting and structure decisions.
- `docs/roadmap.md` - Public website roadmap.

When changing structure, update `README.md`, `docs/architecture.md`, and this file if needed.

## Validation Checklist

Before finishing changes:

- Confirm `index.html` remains at the repository root.
- Confirm `CNAME` remains at the repository root.
- Confirm local stylesheet links resolve.
- Confirm image paths resolve.
- Confirm no frameworks or build tools were added.
- Confirm the site still works as a static GitHub Pages site.
- Check `git status --short --branch`.

For this static site, a simple local server is enough for validation. Example:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8765/index.html
```

If system Python is unavailable, use any available static file server or verify paths directly.

## Commit Guidance

Keep commits small and logical.

Good commit examples:

- `docs: update project guidance`
- `chore: organize static assets`
- `docs: update architecture notes`
- `fix: correct stylesheet path`

Avoid mixing unrelated visual, structural, and documentation changes in one commit.

## Approval Boundaries

Get explicit approval before:

- Changing hosting structure.
- Moving `index.html` or `CNAME`.
- Adding frameworks, build tooling, backend code, or package managers.
- Publishing new business claims.
- Adding customer names, testimonials, certifications, or private contact details.
- Adding internal business software to this repository.

The default choice is simplicity and maintainability.
