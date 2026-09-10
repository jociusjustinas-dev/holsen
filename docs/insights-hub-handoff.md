# Insights hub

Route: `/insights/`. English review draft. WordPress remains the target CMS.

## Structure and content

- Shared internal hero with the homepage H1 tokens, Mona Sans and existing spacing.
- Featured Road vs Rail guide links to `/insights/road-vs-rail-freight-europe/`, the requested example article. Its image, heading and CTA all work as links.
- Six proposed guides use the remaining initial topics from strategy §9.12. Four editorial filter groups organise those topics; these groups are proposed UI taxonomy, not changes to Services/Industries taxonomy.
- Each planned guide has an existing decorative project image, title and proposed scope. At the user's request all six full-card links open the same Road vs Rail example article. The shared notice, CTA and accessible names explicitly identify that example destination. No invented publication dates, authors, reading times, download files or case-study results.
- Shared final CTA, header and footer. The homepage Insights section remains hidden as before; this task does not change its visibility.

There is one article-detail example; no search service, newsletter, CMS integration or new dependencies. Topic previews are not legal/compliance guidance or a claim of EDI/emissions-reporting availability. Expert review, authorship, sources, publication dates, image rights and commercial copy approval are required before publishing articles.

## Interaction and implementation

All six guide previews and article links exist in static HTML. Filter controls are hidden until enhancement is ready. Buttons expose `aria-pressed`, reference the controlled grid and update an accessible result count. URL `?topic=` supports a shareable selection and browser Back/Forward. Unknown values show all guides. No search text or extra analytics events are collected. Prototype cross-links use `data-example-article-link`, a release blocker until replaced with each approved article's permalink.

For WordPress, map approved Insights posts to title, excerpt, featured image, category, author, publication/review dates and permalink. Replace planned outlines with real article links only after approval. Keep planned posts unpublished. Filters can reuse the approved taxonomy and server-rendered archive data.

BreadcrumbList and CollectionPage JSON-LD match the page. No Article/Person schema is emitted for outlines. `noindex`, `data-content-status="draft"`, the visible editorial-preview notice and `data-validation="required"` remain. The release checker includes this route and correctly blocks release.

## Verification

- Build and whitespace checks pass; one H1, unique IDs, valid JSON-LD, shared shell and current Insights navigation verified.
- New main-content links and section anchors resolve. Contact/RFQ and other global future-page links remain pre-existing prototype destinations outside this task.
- 1440, 768, 390 and 320 px checked; no horizontal page overflow. Grid adapts from three to two to one column. Filter controls are 44 px high.
- Filters return 6 / 1 / 1 / 3 / 1 results for All / Transport / Compliance / Procurement / Sustainability. Direct query loading, invalid query fallback and browser Back verified.
- Tab/Enter change filters. The old expandable outlines were replaced with full-card example links; native anchors support keyboard navigation. Focus outlines use black on light surfaces and white on dark surfaces. Reduced motion removes the new transitions and image zoom.
- All nine article entry links resolve to the one requested example; a card was tested by actual navigation. Images loaded successfully. No runtime errors observed.
- Automated main-content accessibility scan: zero violations after fixing the featured eyebrow contrast. The shared CTA artwork needs manual contrast review. The shared small orange active header text retains its existing white-background contrast exception; this is not a claim of full WCAG compliance.
- No deployment performed. Existing server remains at `127.0.0.1:5173`.
