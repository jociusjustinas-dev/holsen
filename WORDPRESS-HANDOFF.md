# Holsen homepage — WordPress handoff

## Current implementation

This repository contains the English commercial homepage frontend only. It is a static semantic HTML, Tailwind CSS v4 and minimal vanilla JavaScript implementation intended for transfer into WordPress. It does not contain WordPress, PHP, a page builder, React or a form backend.

The source of truth remains:

1. `HOLSEN-WEB-STRATEGY.md` v1.1 for positioning, structure and approved copy.
2. `Holsen_Design System.pdf` for exact visual tokens and asset rules.
3. Project Brief and Scope of Work for delivery boundaries.

## Local commands

```bash
npm install
npm run dev
npm run build
npm run check:release
```

`npm run check:release` is expected to fail at this stage. It is a pre-launch gate that detects the prototype `noindex`, validation markers and bracketed factual placeholders.

## Proposed WordPress structure

```text
theme/
├── front-page.php
├── header.php
├── footer.php
├── functions.php
├── assets/
│   ├── css/home.css
│   ├── js/home.js
│   ├── fonts/mona-sans.woff2
│   └── images/
├── template-parts/home/
│   ├── hero.php
│   ├── proof.php
│   ├── markets.php
│   ├── services.php
│   ├── why-holsen.php
│   ├── industries.php
│   ├── partnership.php
│   ├── comparison.php
│   ├── case-study.php
│   ├── sustainability.php
│   ├── insights.php
│   ├── faq.php
│   └── final-cta.php
└── inc/
    ├── assets.php
    ├── menus.php
    ├── homepage-fields.php
    ├── metadata.php
    └── release-validation.php
```

Use native WordPress menus for primary and footer navigation. The homepage sections may be registered as locked blocks or a controlled field group, but editors must not be able to reorder sections or silently remove validation status. Keep essential text and interactions server-rendered.

## Homepage build sequence

The order is locked:

1. Hero
2. Immediate operational proof
3. Markets and corridors
4. Services
5. Why Holsen
6. Industries
7. Long-term partnership
8. Decision-support comparison
9. Case study
10. Sustainability / ESG
11. Insights
12. FAQ
13. Final CTA

Implement the WordPress shell and tokens first, then sections in this order. Finish with validation fields, metadata, analytics hooks, accessibility checks and the release gate.

## Content model

The prototype uses `data-wp-section` attributes to mark template boundaries. Approved copy should remain fixed unless a future content-governance decision explicitly makes it editable.

- Global: logo, navigation, RFQ URL, contact URL and footer navigation.
- Hero: eyebrow, H1, body copy, two CTA labels/URLs and capability labels.
- Proof: four values plus source, period, methodology and approval status for every value.
- Markets: intro and approved region list; route details remain validation-controlled.
- Services: seven approved service items and future internal URLs.
- Why Holsen: four approved differentiation items.
- Industries: eight approved industry items and future internal URLs.
- Partnership: approved copy and individually validated capability statements.
- Comparison: fixed semantic comparison table and explanatory note.
- Case study: publish toggle locked off until every claim and result is evidenced and approved.
- Sustainability: approved introduction; report URL, methodology and availability require validation.
- Insights: connect only to real published posts; current topics are plans, not articles.
- FAQ: seven approved question/answer pairs.
- Final CTA: approved copy and two destination URLs.

Services, Industries and Insights may later query WordPress content types. That future work must not create empty or thin internal pages during this homepage phase.

## Design and component provenance

Only components and interaction patterns from BYQ Avenir are used. Avenir's brand styling and demo content were not copied.

- Navigation and footer: Avenir global floating navigation, dropdown, mobile navigation and multi-column footer.
- Hero: Avenir Home A hero — full-bleed logistics image, transparent navigation, eyebrow and H1 at the upper left, with the approved description and CTAs in the lower-right content position. The image is contextual stock imagery and must not be presented as an owned Holsen vehicle or asset.
- Proof: Avenir Home A Impact — a left-aligned introduction with the validation-controlled `[ADR-capable operations]` label above the title and an inline logistics image revealed between “Operational” and “confidence” as the heading enters the viewport. Three validation-controlled numeric proof values sit over a 33-line rising metric field that borrows the Holsen Loop's thin, regular line rhythm without reproducing the Loop artwork. Values enter with a 700 ms / 100 ms stagger and the lines grow upward from their baseline. The inline image is decorative contextual stock imagery, not evidence of owned Holsen assets.
- Markets: BYQ `dark-tech-services-1` two-column index structure adapted to Holsen — a compact Core Black composition with approved copy on the left and all eight approved region labels in a structured list on the right. The reusable vector Holsen Loop keeps its original aspect ratio, circular origin, regular line rhythm and unshaded orange construction; it is uniformly scaled and deliberately extended beyond the right edge without rotation, warping, gradients or added effects. The section contains no map, Spline canvas, country flags or unsupported country count.
- Services: Avenir Services catalogue — compact service modules in an editorial grid.
- Why Holsen: Avenir Home A Expertise — sticky statement paired with tall differentiation modules.
- Industries: Avenir Home A Services — selectable list and persistent detail panel.
- Partnership: Avenir About C Partnerships v2 — paired information panels.
- Comparison: Avenir About C Comparison — centred heading and a structured comparison matrix.
- Case study: Avenir Case Study body — evidence sequence translated into four editorial modules.
- Sustainability: Avenir parallax statement structure without synthetic media or unsupported claims.
- Insights: Avenir Blog B content grid.
- FAQ: Avenir shared FAQ accordion.
- Final CTA: Avenir shared CTA module.
- Buttons: Avenir CTA interaction — a clipped left arrow enters while the control expands by 24 px; colour state changes over 300 ms. The Holsen version uses CSS, preserves visible keyboard focus and follows reduced-motion preferences.

All colour, typography, spacing character and artwork follow Holsen. The implementation uses Mona Sans and the approved Holsen palette only. All interface icons use Remix Icon 4.9.1 in the outlined `-line` style. The prototype loads the official local WOFF2 asset through npm and defines only the icon classes it actually uses; preserve the same single-system rule in WordPress instead of mixing text glyphs, hand-drawn SVGs or another icon library.

## Asset handling

- Use `src/assets/logo_main.svg` for every visible Holsen logo instance and `SVG/favicon.svg` for the favicon, without redrawing or recolouring.
- `SVG/Asset 4.svg` is the untouched supplied master. It contains 325 embedded PNG images and weighs about 6.6 MB.
- `src/holsen-loop.js` is the reusable web component derived from the approved master and Design System construction. It uses 160 regular vector dashes, the approved first 3D starting point (X 0°, Y 60°, Z -60°), the source 40 pt extrusion relationship, Holsen Orange and no shading. Every dash remains individually addressable for GSAP while the whole component can be uniformly scaled or cropped. Do not stretch, gradient-fill or recolour it outside the approved palette.
- `src/assets/holsen-loop-visible.avif` remains only as a visual reference/fallback derivative at 1541 × 1025 px. `src/assets/holsen-loop.avif` is an earlier faulty export with effectively invisible artwork and should not be reused.
- `src/assets/mona-sans-variable.woff2` is the normal Mona Sans variable webfont used by the prototype. Preload only this normal face above the fold; add an italic webfont later only if approved content actually uses italics.
- `remixicon` is the sole interface-icon dependency. Copy/enqueue its WOFF2 asset locally in the WordPress theme and retain only required glyph mappings in the compiled stylesheet.
- `src/assets/hero.svg` is the supplied 1778 × 853 hero silhouette. It is used as a CSS alpha mask for the existing hero photograph: image pixels appear only inside the approved SVG forms and the cut-outs remain transparent. The narrow layout uses the supplied portrait `src/assets/Vector.svg` fragment of the same form. Keep both SVG files unchanged and copy them alongside the compiled CSS so the mask URLs resolve.

## Accessibility and behaviour

- Preserve the skip link, semantic landmarks, one H1 and logical heading order.
- Preserve native links and buttons, visible focus, Escape-to-close navigation and accordion `aria-expanded` / panel relationships.
- Keep the comparison as a real HTML table.
- Keep all essential copy in server-rendered HTML.
- Respect `prefers-reduced-motion`; animation is enhancement only.
- Do not add hover-only, drag-only or scroll-jacking interactions.

## Avenir global animation system

The frontend implements all three global behaviours documented on Avenir's Instructions page:

- Preloader: an Avenir-style full-screen layer using Holsen Orange `#F1541C`. The supplied `SVG/favicon.svg` appears as a muted white silhouette and fills solid white from bottom to top before the layer exits upward. It runs on every full page load or reload, is removed from the DOM after completion and is skipped entirely for `prefers-reduced-motion`.
- Count-up statistics: GSAP + ScrollTrigger support is available through `data-count-up`. Do not add that attribute to factual placeholders. Apply it only after the number, suffix, source, period, methodology and approval status are confirmed. Static text remains the reduced-motion fallback.
- Smooth scroll: Lenis runs on wheel input with the Avenir values `lerp: 0.1` and `wheelMultiplier: 0.7`. Touch retains native scrolling and reduced-motion disables Lenis.

GSAP, ScrollTrigger and Lenis are local npm dependencies rather than CDN scripts. For WordPress, compile them into the homepage JavaScript bundle and enqueue that built asset only where required. Essential content and controls must remain functional before JavaScript loads.

## Analytics hooks

The prototype emits a `holsen:interaction` browser event for elements with `data-event`. Map only approved event names to the chosen consent-aware analytics tool. Never send email addresses, free text or shipment details. RFQ click, start, submit attempt and confirmed success must remain separate events.

## Production blockers

Do not remove a blocker merely to make the release check pass.

- Proof metrics and their source/methodology.
- Detailed routes/corridors, capacity language and capability claims.
- Partner network, single-invoice, integrations, visibility, control tower and emissions-reporting scope.
- Entire case study, including client identity, challenge, solution and results.
- ESG report availability, content, methodology and access model.
- Company legal identity, address, contact details and social URLs.
- Real published Insight URLs.
- Final RFQ/form destination and backend success handling.
- Organization structured data until the matching visible legal facts are approved.
- Remove the prototype `noindex, nofollow` only after all launch checks pass.
