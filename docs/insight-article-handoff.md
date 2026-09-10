# Example Insight: Road vs rail freight in Europe

Route: `/insights/road-vs-rail-freight-europe/`. English design/content example; not for publication. No deployment requested.

## Template

Shared header/footer, homepage H1 tokens and final CTA. Reading-focused article includes an answer-first summary, semantic comparison table, operational considerations, procurement checklist, native FAQ and visible sources. A desktop sticky contents sidebar tracks the section at the reading line; on tablet/mobile it becomes an in-flow navigation list. The table scrolls independently on mobile with a visible hint and keyboard focus.

The article is static HTML with lightweight progressive TOC enhancement. Existing FAQ handling is reused. No new dependencies, CMS replacement, invented authors, dates, transit times, prices, assets, case studies or performance claims. `Article` JSON-LD uses draft status and omits unknown author/date properties; breadcrumbs and canonical match the real example route. Insights is marked as the current parent section in the shared header.

## Editorial basis

The site's existing road/rail comparison supplies the planning context. General combined-transport structure is checked against the European Commission's Multimodal and intermodal freight transport page. The limited average-emissions statement is attributed to EEA's Rail and waterborne — best for low-carbon motorised transport briefing. Both are linked in the body and source list. They do not validate Holsen-specific capabilities or route-level savings.

The checklist and proposal-evaluation questions are editorial recommendations, not universal legal or operating requirements. A named operational reviewer, client copy approval, source re-check and image-rights review are required before publication. No reviewer identity is fabricated.

## Hub prototype wiring

At the user's explicit request, all six topic cards plus the featured image, title and CTA open this example. Other topics retain their draft titles for layout review, but notices and link labels disclose the shared Road vs Rail destination. `data-example-article-link` blocks release even if generic draft markers are accidentally removed. Replace these cross-links with topic-specific approved articles before launch.

## Verification

- Build and whitespace checks; one H1, unique IDs, valid JSON-LD, shared shell and current Insights parent state.
- Desktop 1440 px, tablet 768 px, mobile 390/320 px checked; no page-level horizontal overflow.
- Actual hub-card navigation, all nine article link destinations, TOC comparison anchor and active sticky state tested. Sidebar stays below the header; mobile contents are not sticky.
- Native FAQ opens with Enter and visible focus below the header. Horizontal table keyboard scroll verified. Reduced-motion mode tested; no article animation is needed to access content.
- Main-content accessibility scan reported no violations, with manual review needed for table clipping/CTA artwork. The existing shared orange active navigation on white is still a known contrast exception, not a full WCAG conformance claim.
- `noindex`, draft/validation flags and example-link release guard remain intentionally blocking. Existing Contact/RFQ and unbuilt global destinations are outside this task.
