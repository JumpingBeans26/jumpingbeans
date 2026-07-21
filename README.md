# Jumping Beans Coffee — Marketing Homepage

A single-page marketing website for **Jumping Beans Coffee Ltd**, a mobile,
plant-based coffee truck that serves markets, festivals and community events.

Design direction: **earthy artisan coffee meets botanical luxury** — warm oat
creams, mocha and espresso browns, caramel-gold accents and sage greens, with
paper-grain texture, hand-drawn botanical sprigs, organic shapes and elegant
Playfair Display / Great Vibes typography.

Built as a **no-build static site** (HTML + CSS + vanilla JS). Open `index.html`
in any browser; no build step or server is required.

## Structure

```
index.html        Markup + inline SVG sprite (line icons + botanical motifs)
css/styles.css    Design tokens (CSS custom properties), components, responsive
js/main.js        Mobile nav + three forms (newsletter, Coffee Club, booking)
assets/           Real photography / logo / map embed go here (see assets/README.md)
```

## Homepage sections

Sticky nav → Hero (4 CTAs: Find Our Truck / Order Ahead / Download App / Join
Coffee Club) → Featured-info strip (next location, next event, current promo,
seasonal special) → Marquee → Our Story → Find Our Truck (this week's stops +
map) → Menu (with dietary/allergen tags) → Coffee Club membership + reviews →
Order Ahead (steps, app badges, QR) → Gallery → Events & Catering + booking
enquiry form → Join Our Community (newsletter) → Footer (explore, contact, app
badges).

All nav/CTA links are smooth-scroll anchors to section ids.

## Design tokens

Defined as CSS custom properties at the top of `css/styles.css` (`:root`):

| Token | Hex | Use |
|-------|-----|-----|
| `--espresso` | `#3B2115` | headings, nav, footer, logo text |
| `--mocha` | `#6B4325` | borders, icons, highlights |
| `--caramel` | `#C88A2D` | buttons, promotions, accents |
| `--cream` | `#F5EBDD` | main background (oat/latte) |
| `--sage` | `#596B45` | sustainability / plant-based |
| `--terracotta` | `#C66A3D` | festival / seasonal accent |

Fonts: Playfair Display (headings), Great Vibes (script accents), Montserrat
(body) — loaded from Google Fonts; self-host in production if preferred.

## Responsive & accessibility

- Grids collapse to single column; nav becomes a hamburger below 768px.
- Visible keyboard focus, ARIA live-region form status, `prefers-reduced-motion`.
- SEO: title, meta description, keywords, semantic headings, image alt text.

## To finish before launch

1. **Images** — replace the striped CSS placeholders with real assets in
   `assets/` (see `assets/README.md` for the full list and specs).
2. **Logo & social icons** — the nav/footer mark and IG/FB/TT icons are CSS/SVG
   approximations; swap in the real brand assets.
3. **Map** — drop a Google Maps / Mapbox embed into the Find Our Truck panel.
4. **Forms** — `js/main.js` uses placeholder async submits with success/error
   states for the newsletter, Coffee Club and booking forms. Wire them to real
   providers (Mailchimp / Klaviyo / HubSpot for lists; an email/CRM endpoint for
   booking enquiries).
5. **App links & analytics** — point the App Store / Google Play badges and QR
   at the real app, and add Google Analytics / Search Console / Meta Pixel.

## Single-file preview

`jumping-beans-preview.html` is a standalone build with fonts inlined as base64
data URIs and CSS/JS embedded — renders with correct typography offline and with
no external dependencies. The multi-file build above is the primary deliverable.

## Beyond the homepage

The full brief also calls for standalone pages (About, Find Our Truck, Events,
Menu, Ordering, Promotions, Gallery, Contact, Blog, Shop). This build delivers
the homepage with those sections represented; the standalone pages and back-end
integrations (email automation, app, analytics, ordering) are the natural next
step.
