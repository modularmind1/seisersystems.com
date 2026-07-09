# Private Operations System Plan

This document outlines possible phases for a future private Seiser Systems operations system. It is planning documentation only and does not add backend code, customer data, payment handling, or automation to the public website repository.

## Phase 1: Manual Intake and Templates

- Google Forms for lead capture.
- Google Sheets for basic request tracking.
- Manual quote template for estimates.
- Manual job log template for completed work notes.

## Phase 2: Status Tracker and Document Templates

- Google Sheets status tracker using the customer statuses documented in `customer-statuses.md`.
- Google Docs estimate template.
- Google Docs invoice template.
- Manual review before sending estimates or invoices.

## Phase 3: Google Apps Script Drafting

- Google Apps Script drafts estimates as PDFs.
- Google Apps Script drafts invoices as PDFs.
- Drafts are reviewed by Tanner before being sent.
- Payment status remains manual unless a reliable private workflow is approved.

## Phase 4: Private Operations Dashboard

- Private dashboard for customers, jobs, estimates, invoices, and payments.
- Access restricted to authorized Seiser Systems users.
- Public website remains static and separate.
- Customer data is stored only in the private operations system.

## Phase 5: Internal Business Operating System

- Full Seiser Systems internal business operating system.
- Lead management, estimates, invoices, job logs, parts tracking, payment tracking, and customer history.
- Customer portal may be considered only after privacy, security, maintenance, and support expectations are clear.

## Repository Boundary

The private operations system should live in a separate private repository or approved private workspace. The public website repository should remain static and public-facing only.
