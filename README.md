# Fortune  Cosmos

A luxury real estate marketing site built with **Next.js 14 (App Router)**
and **Tailwind CSS**. The visual design system — palette, typography scale,
spacing rhythm, motion — is ported from a resort-style reference design,
adapted for real estate content.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js          Root layout — loads fonts, renders Header/Footer
  globals.css         ALL design tokens live here (see below)
  page.js              Homepage
  properties/          Listings index + /properties/[slug] detail page
  about/               About page
  contact/             Contact page

components/
  layout/              Header, Footer
  ui/                  Small reusable primitives: Button, Container,
                       Section, SectionHeading, ArrowLink, Badge,
                       PlaceholderImage
  sections/            Page sections composed from ui/ primitives:
                       Hero, IntroSplit, FeaturedProperties, PropertyCard,
                       ServicesGrid, Testimonials, StatsAwards,
                       LocationSection, CTABanner

data/
  navigation.js        Nav links (header + footer)
  properties.js        Sample property listings
  testimonials.js       Sample client quotes
  amenities.js          Services list + stats band content
```

## Theming

Every color, font, type size and spacing value used anywhere in the site is
declared **once**, as a CSS custom property, in `app/globals.css`. Tailwind
(`tailwind.config.js`) maps its `colors`, `fontSize` and `spacing` scales
straight onto those variables, and every component consumes them through
Tailwind classes (`bg-brand`, `text-h2`, `p-l`, etc.) rather than hard-coded
values.

**To rebrand the whole site**, you only need to touch `app/globals.css`:

- **Colors** — edit the `--c-*` variables at the top of `:root`. They're
  stored as space-separated RGB triplets so Tailwind's opacity modifiers
  (`bg-brand/40`) keep working.
- **Fonts** — swap the Google Fonts imports in `app/layout.js` (or add a
  local `@font-face`) and repoint `--font-display` / `--font-body`.
- **Type scale** — adjust the `--t-*` clamp() values for fluid, no-breakpoint
  responsive type.
- **Spacing rhythm** — adjust the `--space-*` clamp() values to make the
  whole site feel tighter or looser.

No component code needs to change for any of the above.

## Content

`components/ui/PlaceholderImage.jsx` stands in for real photography
throughout the template — it renders a labeled gradient tile naming the shot
that belongs there (e.g. *"Hero — Estate exterior at dusk"*). Swap it for a
Next.js `<Image>` pointed at real assets when photography is available; the
`label` prop doubles as a shot list / alt-text guide.

Listing, testimonial, and service copy lives in `data/*.js` — edit those
files to replace the sample content with real inventory.
