# Architecture Decisions

This file records structural decisions for the public website. Decisions should favor simplicity, maintainability, accessibility, and a static-site workflow.

## 2026-07-08 - Preserve root GitHub Pages entry point

Decision: Keep `index.html` and `CNAME` at the repository root.

Reason: The current repository is configured like a simple GitHub Pages root deployment. Moving the entry point into another folder could break hosting unless repository settings are changed outside this codebase.

## 2026-07-08 - Organize static assets by purpose

Decision: Move image files into `assets/` and CSS into `css/`.

Reason: The site currently has only one page, but separating media and styles now makes the foundation easier to maintain without changing the rendered design.

## 2026-07-08 - Reserve future folders without adding features

Decision: Create placeholder folders for `js/`, `pages/`, `docs/`, and `public/`.

Reason: These folders match the planned repository structure while keeping Version 0.1 focused on the existing static landing page. Empty folders are tracked with README files so the structure is visible in Git.
