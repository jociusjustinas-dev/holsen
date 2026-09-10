# Trust and compliance strip — prototype

Added 2026-09-09 to the homepage, Why Holsen and Chemicals pages. The shared component demonstrates the intended final presentation for independently verifiable supplier evidence during qualification: ISO 9001, AEO, SQAS, GDP, CMR insurance and ADR scope.

The visible component contains category labels and plain-language descriptions only. It does not show certificate numbers, validity, status or any claim that Holsen currently holds the listed evidence. The component carries `data-prototype-compliance` and `data-validation="required"`, and the release check explicitly blocks publication. These categories must never be added to structured data before client validation.

Before publication, replace each applicable item with client-approved information: exact legal entity, status, issuing or assessing body, certificate / authorisation / policy number, scope, validity dates and a public verification link where available. Omit any category Holsen cannot evidence.

The unsupported homepage label `ADR-capable operations` was replaced with `Operational evidence`. Chemicals and Life Sciences summaries were rewritten as requirement-led descriptions rather than unverified compliance claims. Detailed ADR copy remains conditional on cargo classification, route, equipment, partner capability and documentation review.
