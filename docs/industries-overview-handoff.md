# Industries overview

Route: `/industries/`. English review draft, using the existing Vite multipage / WordPress section architecture.

## Structure and reuse

- Editorial hero uses the same Mona Sans H1 tokens as the homepage, Services and Chemicals.
- Eight sectors retain the approved taxonomy and requirement summaries. Existing photo-hover service cards are composed with native `details` / `summary` for keyboard, touch and no-JavaScript operation. The text is always HTML, not embedded in images.
- Sector detail panels explain planning inputs. Chemicals links to its completed page; other sectors link to existing service content until dedicated pages are commissioned.
- A full-width semantic table connects movement, specialist needs and continuity with relevant services.
- The approved shared interactive globe is reused, with all eight regions also visible as HTML text. Route scope remains conditional.
- Five native FAQs, the existing final CTA with adapted wording, and the injected common header/footer complete the page. No additional sticky navigation is introduced for the overview.

## Routing

Shared desktop/mobile menu and footer links for the seven unbuilt industry pages now target their sector anchors in the overview. Anchors open the corresponding native disclosure; Chemicals retains its dedicated URL. Its breadcrumb and BreadcrumbList now point to `/industries/`.

## Publication safeguards

`noindex`, draft status and the release check include this page. The proof module is visibly awaiting client approval / not for publication. No case results, certifications, owned assets or universal specialist acceptance are invented. Sector-specific scope, operational regions and all new copy require client review; existing images are illustrative rather than evidence of a customer operation.

Existing Contact and Request a Quote pages/backends remain outside this task. No production deployment was requested.

## Verification

- Vite build passed; page has one H1, unique IDs, valid JSON-LD and valid local content anchors.
- Tested at 1440, 768, 390 and 320 px without page-level horizontal overflow. The table scrolls within its own container.
- Sector details and FAQ operate with Enter and visible focus. Direct sector hashes reveal their content; reduced-motion transitions are disabled.
- All eight map controls render and expose labels on keyboard focus. No browser runtime errors observed.
- Automated main-content accessibility scan: zero reported violations; photographic/pseudo-element backgrounds require manual contrast review. This is not a full WCAG certification. Shared brand-orange hover and focus treatments are preserved.
- Release check intentionally blocks unapproved drafts and proof.
