# Request a Quote — three-step preview

Route: `/request-a-quote/`. Existing global and page RFQ links now resolve to this page. Follows strategy §10's recommended flow, using shared Holsen shell, typography, buttons and Contact field styling. No CMS replacement or RFQ backend.

## Flow

1. Service: approved service taxonomy plus Other / Not sure. Native radio group, no preselection; service required.
2. Logistics: origin, destination, cargo and frequency required; uncertainty accepted. Volume, timing and specialist requirement checkboxes optional. Selections describe needs, not confirmed capabilities.
3. Contact: name, company and business email required; phone, context and supporting documents optional. The file picker accepts up to five PDF, Word, Excel, CSV, JPG or PNG files, limited to 10 MB each and 25 MB in total. Read-only brief summary, edit-logistics link, Back and visited-step navigation. Values and selected file handles remain in the current browser document while moving between steps, but are not saved across reloads or transmitted.

Visible headings receive focus on step changes. Hidden panels are excluded from keyboard navigation. Invalid fields have associated messages, aria-invalid and a focused linked summary. Final checking revalidates earlier steps. Summary is built with textContent, not HTML from user input.

The RFQ hero and persistent desktop context panel explain what shapes a quotation: route and mode, cargo profile, site conditions, timing and frequency, specialist requirements, and current operating costs. The same information appears in a native, expandable disclosure before the form on tablet and mobile, rather than being pushed below the full form. A compact commercial-fit reassurance now appears before the steps: an enterprise-scale tender is not required, and fit is framed around the operation rather than company size. This statement carries a required validation marker until the client confirms the actual acceptance criteria and any minimum threshold. No indicative rate or price range is shown because those values would be misleading without validated lanes, dates and commercial assumptions. The interface states that final pricing follows a complete operational-feasibility review.

## Preview safety / release dependencies

- Explicit preview banner; final action says “Check Quote Details”, not Send. The result explicitly states nothing was sent and no price/booking confirmed.
- No network calls, storage, CRM, recipients or preview RFQ events. Selected files are neither read nor transmitted. No personal-data or file input has a name attribute; native FormData contains only the selected public service category. Submit is prevented; no native submit buttons; navigation disabled until JS loads.
- Without JavaScript the fields remain readable with an explanation; sending is unavailable.
- Before production: approve field/routing requirements, recipient ownership, secure endpoint, server validation, malware scanning, MIME/content verification, upload storage and retention, spam protection, privacy/consent text and any response expectations. Only server-confirmed receipt may generate success. Add approved RFQ analytics without personal data, file names or shipment-document details and subject to consent.
- Page is noindex/draft, preview has a required validation marker, and release-check includes this route. Canonical domain follows existing templates and needs release verification.

## Verified

- Build passes; diff whitespace clean. One H1, unique IDs, valid BreadcrumbList; browser runtime error log empty.
- Desktop 1440 screenshot, tablet 768 screenshot, mobile 390 logistics step reviewed. No horizontal overflow at 320, 390, 768 or 1440, including contact/review stage at 320.
- Empty service blocked; step 2 flags four missing fields. Other / Not sure works. Back preserves logistics values and checkbox state; changing service updates final summary. Edit preserves contact details.
- Invalid email isolated after other contacts completed; valid final state explicitly reports non-delivery. Payload has only the service category, no personal fields.
- Optional attachments can be left empty. Unsupported extensions produce a linked error; accepted PDF selections appear in the selected-files list and brief review. “Remove all” clears the selection and returns focus to the file picker. File inputs remain absent from `FormData` in the preview.
- Focus lands below header on step change; Tab moves to first visible field. Native controls retain keyboard behaviour; reduced-motion mode checked.
- Automated main-content accessibility checks on all three stages: zero violations, zero incomplete checks. Existing shared navigation contrast remains a separate design constraint; not a full WCAG certification.
