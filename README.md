# Jumping Beans Coffee — Marketing Homepage

A single-page marketing website for **Jumping Beans Coffee Ltd**, a mobile,
plant-based coffee truck that serves markets, festivals and community events.

Built as a **no-build static site** (HTML + CSS + vanilla JS) — the most
appropriate, dependency-free choice for a small single-page marketing site.
Open `index.html` in any browser; no build step or server is required.

## Structure

```
index.html        Markup for all sections (nav, hero, story, menu, truck,
                  club/events, signup, footer)
css/styles.css    Design tokens (CSS custom properties), components, responsive rules
js/main.js        Mobile nav toggle + newsletter form (with success/error states)
assets/           Real photography / logo / map embed go here (see below)
```

## Sections

Sticky nav → Hero → Marquee band → Our Story → Menu → Find Our Truck →
Coffee Club + Events → Join Our Community → Footer.

All nav and CTA links are smooth-scroll anchors to section ids
(`#top #story #truck #menu #events #club #join`).

## Design

Recreated faithfully from the supplied high-fidelity design reference.

- **Colors, type and spacing** are defined as CSS custom properties at the top
  of `css/styles.css` (`:root`).
- **Fonts:** Playfair Display (headings), Great Vibes (script accents),
  Montserrat (body) — loaded from Google Fonts. Self-host in production if preferred.
- **Animations:** floating hero bean (`floaty`) and the marquee (`drift`); both
  respect `prefers-reduced-motion`.

## Responsive

- Two/three-column grids collapse to a single column below ~900px / ~768px.
- The nav becomes a hamburger menu below 768px.
- The hero `<h1>` scales from 76px down to 44px on mobile.

## To finish before launch

1. **Images** — replace the striped CSS placeholders with real assets in `assets/`:
   - `coffee-truck-hero.jpg` — hero, 4:5 portrait of the truck
   - `barista-pour.jpg` — Our Story, 1:1 latte pour
   - `treats-flatlay.jpg` — Menu, 1:1 vegan treats
   - `truck-at-sunset.jpg` — Events, 16:8 truck at an event
   - `location-map.embed` — Find Our Truck: drop in a Google Maps / Mapbox embed
     (the CSS teardrop pin is decorative)
2. **Logo** — the nav/footer mark is a CSS approximation; swap in the real logo.
3. **Social icons** — IG / FB / TT are text placeholders; link them and swap for
   real brand icons.
4. **Newsletter** — `js/main.js` uses a simulated submit with success/error
   states. Wire the marked block to a real provider (Mailchimp/Klaviyo/etc.).

## Content (static)

The truck schedule and menu are static markup and can later be driven by a
CMS/API. Current menu prices and schedule match the design reference.
