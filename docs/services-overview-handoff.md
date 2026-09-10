# Services overview

Local route: `/services/`. Static Vite entry, prepared for WordPress sections.

## Structure

1. Editorial introduction with the approved “One logistics partner. Every mode.” copy.
2. Seven-service catalogue using the existing homepage photo-hover cards.
3. Full-width semantic comparison using the approved table layout. Qualitative planning considerations replace universal speed, capacity and emissions rankings.
4. Homepage partnership component (black cutout copy panel / orange photo-and-capability panel), adapted with dedicated ownership, customs and value-added support content.
5. Five native, keyboard-operable FAQs.
6. Shared final CTA layout and injected homepage footer/header.

## Reuse and routing

- `src/service-page.css` and `src/service-page.js` provide shared internal-page foundations.
- `src/services-overview.css` contains scoped overview adjustments only.
- Road Freight opens the completed service page. Other catalogue cards currently target the relevant overview content until their dedicated pages are commissioned; do not silently send users to the homepage.
- The old pathname-based homepage section hiding was removed from `src/main.js`; Services is now a real multipage build entry.
- Shared shell URLs for unbuilt services, contact and RFQ remain existing project placeholders. Their destination pages and backend are outside this change.

## Publication

Draft/noindex is intentional and included in the release guard. New service copy needs client review. No metrics, certifications, owned-asset claims or fictional case studies were added. Approved operational evidence must be supplied before adding a proof module.
