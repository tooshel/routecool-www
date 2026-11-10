# routecool-www

The marketing site for **www.routecool.com**: one static page on GitHub Pages.
The product itself lives in the `routecool` repo. Each company runs its own
copy of that at `<company>.routecool.com`.

```
index.html   the page
styles.css   the equipment-data-plate look (tokens at the top)
main.js      "type your company name" stamps the serial plate + updates the demo email
assets/      real app screenshots (demo data, fictional names) + og.jpg share image
CNAME        www.routecool.com, for GitHub Pages
.github/workflows/pages.yml   publishes the site files to GitHub Pages
```

## Preview locally

```bash
python -m http.server 8077
# open http://127.0.0.1:8077
```

There's no build step. Edit and refresh.

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/pages.yml`. It copies only the
site files (page, CSS, JS, icons, the `.webp`/`.jpg` assets) into the Pages
artifact, so README, PRODUCT.md, DESIGN.md, `.impeccable/` and the image
sidecars stay in the repo but aren't served. If you add a new site file, add it to the
copy step too.

DNS is in Cloudflare and set to **DNS only** (grey cloud) so GitHub can issue the
certificate:

- `www` → CNAME `tooshel.github.io`
- `routecool.com` → A 185.199.108.153 / .109 / .110 / .111.153 (GitHub
  redirects the bare domain to www)

## Contact

The main action is `mailto:demo@routecool.com`. Cloudflare Email Routing on the
routecool.com zone forwards it to sheldon@tooshel.com.

## Screenshots

`assets/dispatch-board.webp` and `assets/my-day.webp` come from a local
RouteCool running `npm run seed:demo`. Before capturing them, the demo techs were renamed to
fictional people and the company to "Saguaro Air & Plumbing". The stock
demo seed uses real Kappa Air staff names, so rename again if you
re-shoot. Never use `routecool/screenshots/`; those are of a competitor.

## Rules for copy

See `PRODUCT.md`. In short: $199/mo for up to 5 users, and hosting is typically $10–30/mo at
cost. Don't claim SMS/email sending, card payments or QuickBooks sync until
they ship. Don't invent testimonials or customer counts.
