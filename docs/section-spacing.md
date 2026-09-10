# Shared section spacing

Page-level spacing is defined in `src/section-spacing.css`, imported by the shared stylesheet. `--section-space` is 64px on small screens and scales to 96px on desktop. `--service-space` uses the same token.

Top-level sections use `data-section-spacing`:

- `content`: ordinary light sections and inset modules. Adjacent content sections share one gap instead of adding bottom and top padding together.
- `attached`: the first content module below a hero heading. The heading owns the gap above it.
- `surface`: full-width contrasting sections, including final CTAs. These retain internal top and bottom padding.
- `flush`: media-led sections whose inner content owns the padding.

Hero compositions, sticky navigation, cards, accordion contents and media dimensions retain their component-specific spacing. Article subsections use a smaller 48–72px reading rhythm. Preserve these attributes when porting the templates to WordPress.

## Coverage and checks — 2026-09-09

Applied to all 11 existing pages: home, Services, Road Freight, Industries, Chemicals, Why Holsen, Insights hub, example Insight article, For Carriers, Contact and Request a Quote. Hidden legacy modules are unchanged.

The Services table-to-partnership gap changed from approximately 230px to 96px at 1440px viewport width, and from 144px to 64px at 390px.

Browser measurements covered widths 320, 390, 768, 1440 and 1920px: no page-level horizontal overflow, one H1 per page and no Vite error overlays. Desktop and mobile screenshots were captured; browser runtime error checks were empty. Content, links, validation flags and metadata were not changed by this spacing update.
