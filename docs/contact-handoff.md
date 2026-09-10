# Contact — review draft

Route `/contact/`. Shared Holsen header/footer, hero typography, brand colours and buttons. A short contact form implements the strategy's Contact-page requirement without building the separate RFQ workflow or a backend.

## Prototype contact details — 2026-09-09

The Contact page now shows a complete direct-contact presentation for prototype review: registered entity label, operations email, phone, registered office, company code, VAT number and working hours. The shared footer repeats the phone, email, address, company code and VAT number on every page. All non-approved values are deliberately machine-recognisable placeholders: the `.example` email domain, zeroed phone and registration values, and `Address line 00`.

Both presentations carry `data-prototype-contact`, `data-prototype-company` and `data-validation="required"`. The release check explicitly blocks prototype contact and company-registration details. The public UI is presented without a visible “prototype” label, but the source and release gate retain the factual-safety marker. Do not add these values to Organization structured data or remove the markers until every value has been replaced with client-approved information.

## Behaviour

- Enquiry categories: logistics, carrier/partner and general. Approved category keys can be preselected by `?enquiry=partner` (also logistics/general); other values fall back to logistics. No personal information in URLs.
- For Carriers final CTA links directly to `/contact/?enquiry=partner#contact-form`.
- Full name, company, business email and message required; phone optional. Limits, native input types, autocomplete, persistent values after errors, inline associated errors and a linked focusable error summary.
- Form comes first in DOM and on mobile. Desktop context panel sits alongside it, not as an extra conversion step.
- Explicit preview banner and “Check Enquiry Details” button. A valid check says nothing was sent. No fake success, recipient, endpoint, CRM, response SLA, legal consent claim or upload. Contact and company placeholders are technically marked and release-blocked rather than labelled as prototype content in the visible interface.
- Button is disabled until JS initialises and is type=button. Form submit is prevented; fields deliberately have no `name` attributes, so native fallback cannot include entered data in a payload. No network/storage/analytics code for form values. No-JS message explains that validation and sending are unavailable.
- Native field validation is a preview UX layer, not a substitute for future server-side validation and spam protection.

## Before release

- Replace the prototype email, phone, address, company code, VAT number and working hours with client-approved values. Confirm enquiry routing and recipient ownership.
- Implement a secure backend with server validation, spam protection and real receipt confirmation; add field names only with that contract.
- Approve privacy notice, retention, consent basis and handling rules before enabling transmission. No unsupported legal checkbox is invented.
- Verify canonical domain and real privacy URL. Page remains noindex/draft and is in the release guard.

## Verification

- Build passes; diff whitespace check clean. Release check intentionally blocks Contact's noindex, draft and validation markers.
- Desktop 1440, tablet 768 and mobile 390 screenshots reviewed; 320 and all other widths show no horizontal overflow.
- Empty check produces four errors and focuses summary. Invalid email remains the only error after other fields are completed; correcting it clears errors. Entered values preserved. Valid state explicitly reports non-delivery; FormData empty.
- For Carriers → Contact journey tested: partner preselected and hint updated. Keyboard error-summary link focuses the relevant field below the fixed header. Reduced-motion mode checked.
- One H1, no duplicate IDs, breadcrumb JSON-LD valid; browser error log empty. Main-content accessibility scan: zero violations and zero incomplete checks. Shared orange nav contrast remains an existing design constraint, not a full WCAG certification.
