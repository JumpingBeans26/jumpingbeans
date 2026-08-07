# Jumping Beans Coffee Ltd — Unified Brand & Product Package

One folder, one source of truth. Both the **website** and the **companion app**
should pull their colours, type, and content rules from `brand/` rather than
hardcoding their own — that's what keeps the two products looking like they
belong to the same business.

## Structure

```
jumping-beans-unified/
├── brand/
│   ├── design-tokens.json   ← machine-readable source of truth (colours, type, radii, etc.)
│   └── BRAND_GUIDE.md       ← human-readable reference, same values
├── shared/
│   └── menu.json            ← menu content (categories, items, prices, signature drink) — used by both
├── website/
│   └── index.html           ← current website build (marketing site)
└── app/
    └── app-spec.json         ← companion app spec (screens, loyalty, gifting, truck schedule)
```

## ⚠️ One open item: app palette needs updating

Confirmed by cross-checking the app project's sync export against the website:
menu content, tagline, positioning, socials, signature drink, typography, and
icon style are **already consistent** across both products. The **one thing
still out of sync** is colour — the app's UI is currently built against the
old forest/oat/gold/sky tokens, while the website has moved to the
espresso/caramel/sage/terracotta palette below. Re-theme the app against
`brand/design-tokens.json` to finish the alignment. See
`app/app-spec.json → reconciliationStatus` for the same note in machine-readable form.

## Current brand direction (confirmed Aug 2026)

Bohemian / watercolor palette sampled from the logo art:

| Name | Hex | Use |
|---|---|---|
| Espresso | `#3B2410` | Outline/border accent |
| Espresso Dark | `#2A1809` | Hero/dark sections, headings |
| Cream Deep | `#F4E8D6` | Card/section backgrounds |
| Cream | `#FBF4E8` | Page background |
| Caramel | `#C27C2E` | Primary buttons, highlights |
| Caramel Light | `#E3A85C` | Accents on dark backgrounds |
| Coffee | `#6B4226` | Coffee/food banners |
| Sage | `#6E6B42` | Matcha banner (secondary category) |
| Terracotta | `#B2600C` | Tea banner |
| Ink | `#2E1B0C` | Body text |

**This replaces the earlier forest green / oat cream / mustard gold / sky blue
palette.** No blue, no forest green, going forward — this is deliberate, not
an inconsistency to "fix."

Typography, icon style, menu hierarchy, signature drink, and plant-based/vegan
positioning are unchanged from before — see `brand/BRAND_GUIDE.md` for the
full reference.

## How to use this in a Project

1. Create (or pick) one Claude Project for Jumping Beans Coffee Ltd.
2. Add everything in this folder to that Project's knowledge.
3. Point any future website or app work at `brand/design-tokens.json` /
   `brand/BRAND_GUIDE.md` first, so new work starts aligned instead of
   needing to be corrected later.

## Note on the website file

Two website preview builds were supplied (`preview-1` and `preview-2`).
Both use the current espresso/caramel palette and are otherwise consistent;
`preview-2` was the larger, standalone upload and is treated here as the
canonical current build, saved as `website/index.html`. If `preview-1` was
meant to be a distinct version rather than an earlier duplicate, let me know
and I'll fold in a diff.
