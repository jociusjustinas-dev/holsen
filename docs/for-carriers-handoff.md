# For Carriers & Partners — review draft

Route: `/for-carriers/`. Built from the strategy's approved partner taxonomy: Truck Owners, Warehousing, Local Distribution. English copy is proposed for review, not a confirmed onboarding procedure.

## Components and interaction

- Shared header/footer, H1 design tokens, buttons, native FAQ disclosures and homepage final CTA/Loop.
- Three illustrated native `details` rows expand their own introduction checklists in place. All start closed and can be opened independently. The separate dark checklist section and redundant hero checklist CTA were removed. No hover-only content or extra page JavaScript.
- Semantic headings and definition lists; breadcrumb JSON-LD matches the visible breadcrumb. No unverified Organization or service claims added.
- Page content remains `data-content-status="draft"` and `noindex, nofollow`; included in the release checker.

## Before publication

- Client approval of partner categories' operating scope and proposed page copy.
- Confirm partner enquiry destination, business recipient and privacy requirements. Final CTA now points to `/contact/?enquiry=partner#contact-form`, preselecting partner enquiry in the new Contact preview. Sending remains disconnected; see `contact-handoff.md`.
- Confirm documentary requirements, onboarding steps and commercial terms before adding them. No guaranteed volumes, payment terms, acceptance promises or response deadlines are invented here.
- Existing images are illustrative, not evidence of Holsen-owned assets; confirm image rights before publishing.
- Canonical domain follows the other page templates and still needs release validation.
- No carrier portal, invoice/CMR upload or integration has been added.

## Verification

- Browser checked at 1440, 768, 390 and 320 px: no page-level horizontal overflow. Desktop, tablet, mobile hero and mobile FAQ screenshots reviewed.
- Partner rows open by click/touch or Enter and close with Enter; focused summary stays in place. Existing checklist links now target the shared introduction above these rows. Reduced-motion disables image/title transitions.
- One H1, unique IDs, no broken in-page links, loaded images, valid breadcrumb JSON-LD and active For Carriers navigation verified.
- Browser runtime error log empty. Automated main-content accessibility check: zero violations; four CTA contrast checks require manual assessment because of decorative artwork. This is not full WCAG certification; existing shared orange navigation contrast remains outside this change.
- Vite build passes. Release check intentionally blocks the unapproved page alongside existing review drafts.
- Accordion revision: desktop 1440 and mobile 390/320 checked with panels open. No horizontal overflow, no broken in-page links, no runtime errors; automated accessibility scan of the revised directory has zero violations and zero incomplete checks.
