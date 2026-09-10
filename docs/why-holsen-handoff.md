# Why Holsen

Route: `/why-holsen/`. English review draft; WordPress remains the target CMS.

## Strategy and components

User-approved consolidation (2026-09-08): this is the combined company overview and Why Holsen page. No standalone About page or navigation item is planned. The strategy sitemap, navigation and Organization-schema guidance now reflect this decision. Ethics & Compliance / Sustainability remain separate supporting destinations, not implemented by this consolidation.

The company introduction establishes Holsen as an independent logistics brand, outlines the approved service offering and explains the transport-partner model without claiming an owned fleet. Existing sections already cover operating responsibility, differentiation and markets, so no duplicate team/principles section was added. Public history, dates, named staff, entity registrations and Nunner-transition claims remain omitted pending client approval.

1. Asymmetric editorial hero: approved positioning promoted to the H1, Why Holsen as the eyebrow, copy/CTAs on the left and an existing portrait-cropped operational photo on the right. Uses homepage H1 tokens, shared buttons and a fine baseline rule. Photo remains explicitly illustrative. The BYQ Split Hero with Inset Media reference informed the composition only; no library code or dependencies were imported. Unlike service pages, this hero does not use a full-width cutout photograph.
2. Four approved differentiators in the existing editorial process-row layout; supporting copy translates them into operational questions and practices.
3. Homepage black/orange partnership component with dedicated before/during/review content.
4. Shared markets globe, eight visible HTML region labels, conditional route scope and links to completed Services/Industries overviews.
5. Shared semantic table now presents four commitment-first operating promises: accountable ownership, an acceptance decision before booking, agreed communication and reviewable performance. The section remains release-blocking until the client validates that these process commitments match day-to-day operations. A separate, visibly flagged case-study placeholder remains release-blocking.
6. Five native FAQs, existing final CTA and injected header/footer.

The new compact `#about-holsen` section sits between the hero and differentiators. Metadata now includes company identity/model. The “Who is Holsen Logistics?” FAQ absorbs the fleet-ownership answer, preserving five questions rather than adding a duplicate sixth.

## Team section — client-requested addition

`#why-team` follows About Holsen. Three static profile slots use portrait, name/role and client-facing responsibility fields. Desktop has three columns; mobile stacks them. Shared Contact CTA links to the working Contact preview. No carousel, hover-only details or new JavaScript.

At the user's explicit request, three fictional demo profiles now use coordinated AI-generated portraits, invented names and example roles/responsibilities. The user subsequently requested no disclaimer in the UI; fictional status is retained in an HTML comment and documentation, not presented as verified employee data. Portraits use existing left/right SVG cutouts, with faces kept clear. Generation prompts and asset paths are in `team-demo-assets.md`. The entire section carries `data-validation="required"`; it must not ship populated with demo people. Supply approved portraits (with publication rights), names, roles and a concise client-facing responsibility for each person. No Person schema or direct personal contacts were added.

Verified at 1440 and 390 visually, 320 for reflow: no horizontal overflow, one H1, three profiles. Scoped accessibility scan has zero violations/incomplete checks. Contact CTA works with Enter. Build/diff checks pass; browser errors empty.

LinkedIn icon slots sit to the right of each team name, using the existing Remix Icon font. They are decorative, non-focusable spans until client-approved personal profile URLs are supplied; no invented URLs or dead links. Replace each slot with an accessibly named link when verified URLs are available.

No new dependencies or animation system. The shared FAQ hook recognises `data-page-faq` and sends the page type without personal or shipment data. The main menu marks Why Holsen as current with the previously requested orange-text style, without bold or underline.

## Client validation

All new commercial copy requires review. The commitment-first rewrite leads with Holsen's operational action and the decision or setup the buyer receives; cargo-, route- and implementation-specific boundaries now follow that commitment. Validate exact operating roles, acceptance workflow, escalation/setup process, offered specialist scope, regional availability, integration/reporting capability and a real case study before publication. No routes, frequencies, ADR classes, metrics, client names, certifications, response-time guarantees, owned fleet or warehouses have been invented. The transport-partner model in the FAQ is drawn from strategy section 4.3. No Nunner-transition statement or illustrative company details are used.

`noindex`, draft status and release guard remain intentional. Contact/RFQ preview pages now exist, but their sending backend remains disconnected. No deployment requested or performed.

## Verification

- Vite build and whitespace checks passed. Built HTML has one H1, unique IDs, valid JSON-LD, shared shell and active menu state. Local content links and anchors resolve; pre-existing Contact/RFQ placeholders are excluded from that claim.
- Desktop, tablet, 390 px and 320 px checks found no page-level horizontal overflow; the evidence table scrolls in its own container.
- Revised hero verified at 1440, 768, 390 and 320 px. Mobile stacks copy, CTAs and portrait image; no page-level horizontal overflow observed. CTA controls are 48 px high. Hero has no new animation; reduced-motion mode, keyboard focus and Enter on the approach anchor were checked. Build and whitespace checks passed after the revision.
- Native FAQ tested with Enter and visible focus; focus is below the sticky header once scrolling settles. One `faq_expand` event carries `page_type: why-holsen`.
- Reduced-motion rendering tested. No JavaScript runtime errors observed. Automated main-content accessibility scan reported no violations, with manual-review items for imagery, gradients and pseudo-elements; this is not full WCAG certification.
- The shared small orange current-navigation text on white retains the existing contrast exception (about 3.48:1), not represented as AA compliant.
- Company-overview addition: reviewed at 1440 and 390 px, checked 320 px for overflow. One H1, five FAQs, no broken local anchors. New section accessibility scan: zero violations/incomplete checks. Revised FAQ opens/closes with Enter and focus remains below header. Build passed; no browser runtime errors.
