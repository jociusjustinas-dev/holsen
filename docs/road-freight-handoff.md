# Road Freight — internal service page prototype

Authorised by the user on 2026-09-08 as the first internal page following the homepage review. This extends the original homepage-only phase for this page; it does not change the WordPress CMS decision.

## Route and shared components

- `/services/road-freight/` is a separate static HTML entry, included in the Vite production build.
- `services/road-freight/index.html` contains all essential content and section boundaries (`data-wp-section`).
- `src/service-page.css` scopes the service template to `.service-page`.
- Vite expands `holsen:header` and `holsen:footer` from the existing homepage into the delivered HTML. The source navigation and footer remain shared; the current-page link gets `aria-current`.
- Native `details` components work with keyboard, touch and without JavaScript. The module adds only FAQ engagement events and reuses existing navigation behaviour.
- Future WordPress mapping: service hero, capabilities, markets/industries, process, proof, comparison, FAQ and CTA become template parts. Shared shell becomes `get_header()` / `get_footer()`.

## Design provenance

- Original Holsen Design System v1.0: Mona Sans, approved palette, 6/12-column relationships, rectangular content and current button components.
- Existing homepage imagery, navigation, footer and button styles reused.
- Process section adapted from BYQ Supply Avenir `avenir-structured-data-2` (Numbered Process Framework List): https://app.byq.supply/sections/avenir-structured-data-2.
- The numbered three-column structure is translated into semantic HTML/CSS using Holsen typography and spacing. No React, external font or new runtime dependency was introduced.

## Copy / release status

New service copy is a review draft, based on strategy v1.1 sections 8, 9 and 24. `noindex` and `data-content-status="draft"` remain. `npm run check:release` checks both homepage and this page and must continue failing until content is approved.

Client approval is needed for direct/groupage scope, recurring-transport process, exact regional coverage, partner/ownership wording, communication setup and specialist-handling feasibility. No equipment inventory, country-specific service guarantee, ADR class, certification, transit time, tracking product or quantitative result is asserted.

The operational-proof layout visibly states that a client-approved case study is pending. Its illustrative image is decorative, not a case-study photograph. Replace the draft with a verified challenge, solution and measured result before publication.

## Destinations not built in this increment

RFQ, Contact, Industry and other service links retain their approved future destinations. Their forms/pages are not implemented by this prototype. The `/services/` overview remains the existing comparison preview. Do not treat SPA fallback responses as proof those destinations exist.

The development server uses `127.0.0.1:5173` with `--strictPort` to avoid silently moving to another port. This increment is for local review; deployment is a separate action.

## Verification — 2026-09-08

- Vite production build emits both homepage and `/services/road-freight/index.html` with static header/footer and page-specific metadata.
- Chromium checks passed at 320, 390, 768, 1024 and 1440 px without document-level horizontal overflow. The comparison alone scrolls horizontally on narrow screens.
- Desktop dropdown, Escape dismissal, mobile navigation and focus return passed.
- Transport details and FAQ work with Enter/Space; FAQ expansion emits one event per opening, not on initial rendering.
- Reduced-motion, text-spacing override and JavaScript-disabled content/FAQ checks passed.
- One H1, one header/footer, current-page navigation and all in-page fragment targets checked.
- Homepage and existing `/services/` comparison preview smoke checks passed; no JavaScript page errors were observed.
- Desktop/full-page and mobile hero, markets and evidence rendering inspected. Lazy evidence image loads when scrolled into view.
- Release check intentionally fails for unapproved page drafts and existing homepage validation markers. No production publication in this increment.
- Real-device screen-reader testing and field Core Web Vitals measurement remain outside this local browser check.
