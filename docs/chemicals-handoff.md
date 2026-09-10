# Chemicals industry page

Route: `/industries/chemicals/`. English review draft; WordPress remains the target CMS.

## Strategic structure

Industry-specific answer and hero → cargo requirements / Holsen coordination → relevant service matrix → specialist handling → markets and proof → FAQ → RFQ.

Uses the existing internal-page shell, shared homepage H1 scale, joined sticky navigation and progress dividers, native disclosures, semantic comparison table, homepage black/orange partnership component, interactive markets globe, final CTA and injected header/footer. No new dependencies or typography scales.

The page is linked from the shared Industries menu, footer, homepage Chemicals panel and Road Freight industry card. The Industries breadcrumb goes to the actual homepage section until an Industries Overview exists. Links to service content use completed pages or their relevant anchors.

## Factual and publication safeguards

- `noindex`, draft status and release guard remain enabled.
- No universal dangerous-goods acceptance, owned fleet, warehouse, certification, ADR class or temperature-control claim is made.
- General regional coverage does not imply acceptance of chemical cargo on every route; the visible copy states that distinction.
- Proof is explicitly a client-approval placeholder, not a fabricated case or metric.
- Existing imagery is illustrative, not evidence of Holsen assets or a chemical customer operation.
- The FAQ distinguishes road ADR from requirements for other modes. Reference: [UNECE ADR 2025](https://unece.org/info/Transport/pub/395786), checked 2026-09-08. This is general context, not a shipment-specific compliance guide.

Client approval required: priority cargo/product profiles; dangerous-goods classes and exclusions; specialist handling, storage and temperature-control scope; exact corridors; responsible parties and certifications; verified case-study challenge, coordination and measured outcome. Quote/contact destination pages and submission backend are still outside this change.

## Existing design-system exception

The approved orange-text active/hover state on the white secondary navigation has about 3.48:1 contrast at small text sizes, below AA text contrast. It is preserved for consistency with the explicitly requested navigation design, not represented as AA compliant. Resolving this requires agreeing a dark text state with a separate orange indicator, or a different background; do not invent a darker brand-orange token.

## Verification — 2026-09-08

- Build and whitespace checks passed. Release check intentionally blocks the page draft and unapproved proof.
- Built HTML checked for one H1, unique IDs, valid fragment links, active Chemicals menu entry, semantic table, shared footer and parseable JSON-LD.
- Chromium checked at 320, 390, 768 and 1440 px: no page-level horizontal overflow; table scrolls within its own region.
- Sticky nav joins the main header and updates active section/progress. Anchor offsets on this template account for document scroll-padding to avoid double header spacing.
- Native FAQ opens with Enter; one `faq_expand` event carries industry context without enquiry data. Globe pins show their labels on keyboard focus. Reduced-motion transitions are disabled. No runtime errors observed.
- Automated main-content accessibility check reported the existing secondary-nav contrast exception above. Masked/photographic backgrounds require manual contrast review; this is not a full WCAG certification.
