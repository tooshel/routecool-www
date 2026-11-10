# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS (user's choice), published with GitHub Pages
(tooshel/routecool-www). This repo is the marketing site only; the
product itself lives in `C:\Sites\routecool`.

## Users

Owners and office managers of small field-service companies (HVAC, plumbing,
home service), around five people: an owner/dispatcher plus a handful of
technicians. They are comparing against the incumbent field-service suites
that cost about $500/month for 5 users. Secondary readers: the technicians,
who will live in the phone view.

## Product Purpose

RouteCool is field-service management: jobs, appointments, a drag-and-drop
dispatch board with a map, phone-first invoicing from a price book,
payments and receivables, and an audit trail of every change. The marketing site
(www.routecool.com) explains it and gets a company to email
**demo@routecool.com** (forwards to Sheldon via Cloudflare Email Routing).
A live demo instance at demo.routecool.com is planned but doesn't exist yet.

## Positioning

**Every company gets its own RouteCool.** That means its own domain
(e.g. kappaair.routecool.com), its own Postgres database, its own backups,
and its own upgrades. No shared multi-tenant database.

Because each company runs its own instance, it pays its own hosting and
storage directly, at cost: typically $10–30/month for a small VPS share plus
Cloudflare R2. It also brings its own keys for Stripe, Twilio, email and
Google Maps. RouteCool doesn't pad its price to subsidize the storage that
older, cheaper customers use, and it doesn't mark up card or SMS fees.

## Operating Context

- Office: the dispatch board (Rows ⇄ Columns orientation, 15-min drag snap,
  map with tech-colored pins, unscheduled rail with "show all on map"),
  workflow Kanban, jobs/people/invoices/payments search.
- Field: technicians get **My Day** on their phone. That's today's calls in
  visit order, one-tap En Route → On Site → Completed, and invoices built at
  the house from the price book.
- Home-warranty work is first-class: warranty company + claim # on the job,
  several invoices per visit (e.g. one to the warranty company and one to the
  resident), and an "In Repayment" status for financing.
- Feedback: the 🐞 button on every screen sends a screenshot and context to the
  builder, and the answer comes back in-app.

## Capabilities and Constraints

Shipped (see `routecool/FEATURES.md`): job/appointment model, crews with pay
split, dispatch board and map, My Day, Street View of the house, photos with
labels, checklists, time tracking, invoice templates, recommendations/upsells
(Offered/Accepted/Declined), proposals with Good/Better/Best tiers, price book
with CSV import and bulk price adjust + revert, compare-at prices, receivables
aging and derived overdue, payments search ("whose check is this?"),
audit History on every record, branding (logo/favicon), global multi-word
search, every screen and dialog is a shareable URL, maintenance plans.

**Not shipped yet. The site must not claim these as live:** outbound SMS and
email sending (the queue exists but no sender), card/ACH processing and Pay-Now
links, QuickBooks sync, review collection, financing offers.
**Not planned:** mobile card readers, mobile check deposit, live chat support.

## Brand Commitments

- Name: **RouteCool** (one word, camel-case C).
- Existing mark: the app's favicon, a sky-blue (#0ea5e9) rounded square
  holding a white folded-map glyph (`routecool/public/favicon.svg`). The app UI
  uses a sky-blue brand ramp (#0ea5e9 / #0284c7) on zinc neutrals.
- Pricing: **$199/month for up to 5 users.** Price for more users isn't set;
  don't invent one ("more users? ask").
- Hosting is honest: "typically $10–30/mo, paid to your provider at cost."

## Evidence on Hand

- **Kappa Air** (KAPPA-AIR LLC), a Phoenix-area HVAC company, runs on RouteCool
  today at kappaair.routecool.com. The user approved naming them.
- Kappa Air's real 196-item price book shipped as the demo price book.
- The app's own UI can be shown (rebuilt or captured from a demo dataset with
  synthetic Phoenix data).
- **Absent, so don't fabricate:** testimonials, quotes, customer counts, uptime
  numbers, press, ratings. `routecool/screenshots/` holds captures of a
  *competitor* (Payzerware); never use them.

## Product Principles

1. Your instance, your data: isolation is the product, not a tier.
2. Pay for what you use, at cost; no cross-subsidy and no markup.
3. Built for the phone in the tech's hand as much as the office screen.
4. Every change is recorded: who, what, when.
5. Built in the open with the people using it; feedback goes straight to the
   builder and the answer comes back.
