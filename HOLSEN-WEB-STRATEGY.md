# Holsen Logistics — Commercial Website Strategy v1.1

**Status:** final strategic handoff before homepage implementation  
**Current implementation scope:** commercial website homepage only  
**Website language at launch:** English  
**Audience of this document:** Codex, UX/UI, development, copy, SEO, analytics and client teams  
**Source of truth:** this document supersedes earlier working versions discussed in the project conversation

---

## 0. How to use this document

Read this document and the original Holsen Design System before changing code, content or visual direction. `AGENTS.md` defines the working rules; this file defines what is being built and why.

Three evidence labels are used throughout:

- **APPROVED DIRECTION** — use as written unless the client explicitly changes it.
- **STRATEGIC RECOMMENDATION** — implement where it is within the current scope; validate technical or operational details when required.
- **CLIENT TO VALIDATE / NOT FOR PUBLICATION** — realistic working content for structure and design only. Never publish it as fact.

Where the original project documents and later decisions conflict, the final v1.1 direction in this file wins. Old positioning variants, generic differentiators and superseded homepage copy are intentionally excluded.

Source set reviewed for this handoff:

- `Holsen_Design System.pdf`, version 1.0, 2026 — all 47 pages, including the visual applications;
- `Project Brief-2026081308550952.pdf` — all 7 pages;
- `Scope of Work-2026081308534279.pdf` — all 6 pages;
- the referenced **UX/UI ir Growth metodika** conversation, with later v1.1 decisions taking precedence;
- current official Google, W3C and web.dev technical guidance listed in section 26.

---

## 1. Project context

Holsen Logistics is the new independent brand created after the Lithuanian office separated from Nunner Logistics. Positioning and brand identity have already been developed. This project translates that foundation into a commercial website.

Two web properties are planned:

1. **Holsen commercial website** — international, English-first, designed to support expansion abroad.
2. **Separate careers mini-site** — Lithuanian-language recruitment property outside the current commercial scope.

The separation is deliberate: the international commercial brand must not appear reduced to, or focused only on, Lithuania. The commercial website must be technically ready for possible future localisation, but only English is active at launch.

The work sequence agreed for this phase is:

1. commercial web strategy;
2. sitemap and SEO/GEO content architecture;
3. homepage structure and design direction;
4. client checkpoint;
5. homepage high-fidelity implementation only after the direction is accepted;
6. internal page system later.

Do not sprint into internal page design or build before the client accepts the strategy, sitemap and homepage direction.

### 1.1 Source-document operating context

- The commercial website CMS is **WordPress** and is not to be changed under the current scope.
- The most frequently created or edited content types are expected to be Services, Industries and News & Insights.
- Commercial copy is prepared by the service provider; the client supplies and validates industry-specific and operational facts.
- The source scope includes no ecommerce, booking, ticketing, newsletter, live chat or advanced site-search functionality.
- A contact form is required on the Contact page.
- A future carrier portal for invoices, CMR documents and related functions is not in the present scope. The For Carriers page may eventually link to an external portal; no portal integration is authorised now.
- The old website URL was not supplied in the brief.
- The source scope removed a previously fixed total number of unique sections. The count must either be recalculated against the expanded sitemap or explicitly left unfixed; do not infer a contractual section limit.
- The source scope contains a noted appendix inconsistency: the separate careers site should receive Basic SEO only, not the same advanced SEO/GEO package as the commercial site. This should be corrected before contract sign-off, although the careers site is outside the current build scope.

---

## 2. Strategic role of the website

### 2.1 Core objective — APPROVED DIRECTION

Holsen.com must operate as:

> **An international B2B trust and demand-generation platform for long-term logistics partnerships.**

The site is not a high-volume spot-freight quotation portal. Its priority is contractual clients, long-term relationships and pre-tender / RFP confidence. The brief indicates that contractual customers already represent approximately 80% of the portfolio; the website must reinforce this model rather than attract unqualified spot demand at any cost.

### 2.2 Business outcomes

The website must:

- make Holsen credible enough to enter a buyer's supplier shortlist or tender;
- support procurement stakeholders in justifying Holsen internally;
- attract qualified international RFQs, particularly contractual opportunities;
- demonstrate relevant coverage, multimodal capability and complex-route expertise;
- make responsibility, response speed and operational competence tangible;
- support organic acquisition through commercially useful service, industry, comparison, FAQ and expert content;
- retain and, where possible, transfer existing search authority from the Nunner-to-Holsen transition;
- build a measurable system that can be tested and iterated.

### 2.2.1 Brief-stated business targets

The website is intended to support, not single-handedly guarantee:

- stable annual sales growth of **10–15%**;
- revenue growth from approximately **€30 million to €50 million by 2030**;
- revenue diversification through warehousing, air and sea freight, and customs services;
- stronger visibility and confidence before tender / RFP stages following the brand change.

These are internal business targets from the Project Brief. They must not be presented publicly as achieved results, forecasts guaranteed by the website or proof metrics unless the client approves the exact context.

### 2.3 Primary conversion

**Request a Quote** is the primary site action, but it is the end of the narrative, not the whole narrative.

The required persuasion sequence is:

> **Trust → relevance → capability → proof → conversation**

Not:

> Hero → quote form

### 2.4 Primary KPI

> **Qualified RFQ rate**

Do not optimise only for total form submissions. More low-fit enquiries are not success.

Supporting KPIs:

- service-page-to-RFQ conversion;
- industry-page-to-RFQ conversion;
- RFQ start and completion rate;
- proof engagement;
- case study engagement;
- organic non-brand traffic;
- commercial keyword visibility;
- lead magnet conversion;
- returning business visitors;
- CTA CTR by context;
- engagement depth and scroll depth as diagnostic, not business-success, metrics.

---

## 3. Audience, ICP and decision context

### 3.1 Organisation profile

Primary target organisations are medium and large international companies with multiple locations and cross-border logistics needs in Europe and adjacent corridors.

The Project Brief describes a practical core as organisations shipping packaged goods with commercially reasonable timing and cost expectations. Named priority / potential buyer groups include leading plant-protection producers, chemical manufacturers, packaging manufacturers, industrial and equipment businesses, and consumer-goods companies. The final sector priorities still require client validation against growth and margin.

### 3.2 Primary decision-maker

**Logistics Procurement / Category Manager**

Needs:

- credible geographic coverage and capacity;
- a supplier suitable for shortlist, vendor onboarding, tender or RFP;
- service-level and KPI evidence;
- compliance, certification and financial / operational confidence;
- clarity on owned assets versus partner capacity;
- evidence that Holsen can integrate with established processes;
- proof that risk will be actively managed;
- commercial fit across pricing, timing and contractual conditions.

Core internal question:

> **Can I safely shortlist this company and justify the decision internally?**

### 3.3 Secondary decision-maker

**Supply Chain / Logistics Manager**

Needs:

- operational capacity;
- reliable service performance;
- shipment visibility;
- fast communication and decisions;
- handling of non-standard situations;
- one accountable operational contact;
- predictable execution across markets;
- local-language operational support where market presence matters; Spain and Italy were cited as examples in the brief, but exact local presence must be validated.

### 3.4 Influencer

**Logistics Coordinator / Planner**

Needs:

- quick answers;
- track and trace;
- documentation clarity;
- accessible human support;
- predictable day-to-day operations.

### 3.5 Jobs To Be Done

#### Functional

- Move goods reliably between the required markets.
- Handle complex routes and shipment requirements.
- Maintain compliance and shipment safety.
- Maintain predictable service performance.
- Coordinate multiple modes, partners, documents and exceptions.

#### Emotional

- Reduce uncertainty.
- Know who is responsible when something changes or goes wrong.
- Feel confident choosing and recommending the supplier.

#### Procurement

- Justify Holsen as a credible supplier during vendor selection.
- Collect enough evidence to progress Holsen into a tender, RFP or contractual discussion.

The website must therefore sell both externally and internally: it must help the buyer make the case for Holsen inside their organisation.

### 3.6 Customer pains

Cross-category pains:

- transport cost pressure;
- service reliability;
- complex administration and documentation;
- capacity constraints;
- digitisation and integration requirements;
- industry-specific risk;
- CIS / Ukraine and broader complex-corridor operating conditions;
- sustainability and emissions-reporting requirements.

Channel context: the business expects discovery both online through transport-service searches and offline through trade fairs and client visits. Digitisation and AI trends may support thought leadership, but they are not positioning substitutes.

Industry examples:

- **Chemicals:** safety, compliance and ADR.
- **Food / Consumer Goods:** cargo integrity and cleanliness.
- **Paper & Packaging:** capacity and predictable transport.
- **Industrial:** complex shipments and flexible planning.
- **Nordics / heavy industry:** CO₂ performance and reporting.

### 3.7 Customer decision framework

The homepage and all future commercial pages must answer:

1. Can they handle our routes?
2. Can they handle our industry?
3. Can they handle complexity?
4. Can they prove performance?
5. Can they integrate with our processes?
6. Will someone take responsibility?
7. Can we trust them long-term?

---

## 4. Final positioning v1.1

### 4.1 Positioning axis — APPROVED DIRECTION

> **Complex logistics. Clear decisions.**

Supporting positioning statement:

> **Holsen brings structure, ownership and fast decision-making to complex international logistics.**

Expanded strategic formula:

> **When logistics becomes complex, Holsen brings structure, ownership and fast decisions — backed by international capability and measurable operational performance.**

Brand idea:

> **Movement with structure.**

The Project Brief also contained the earlier tagline **“Moving Freight Forward.”** It is not the approved homepage positioning in v1.1 and must not replace **“Complex logistics. Clear decisions.”** If it remains a corporate tagline in another brand context, the client must explicitly confirm where it still applies.

### 4.2 Category hygiene versus differentiation

#### Category hygiene

These claims are expected in the category and cannot carry the brand alone:

- reliable logistics;
- tailored solutions;
- sustainable logistics;
- global or European network;
- customer focus;
- technology;
- multimodal services;
- operational excellence.

They may appear as supporting capabilities or validated proof. Do not present them as Holsen's primary differentiation.

#### Real differentiation

1. **Complexity**  
   Holsen is strongest where logistics no longer fits a standard playbook.

2. **Ownership**  
   One clear team remains accountable from planning to delivery.

3. **Decision speed**  
   Shorter decision chains allow a faster response when conditions change.

4. **Operational expertise**  
   Knowledge of industries, regions, corridors and specific requirements turns complexity into structured execution.

5. **Measurable confidence**  
   Capability is supported by operational proof, not adjectives.

Source strengths that support, but do not replace, this differentiation include:

- flexibility created by designing the solution around the client need rather than the location of an owned truck;
- deep CIS / Ukraine, Baltic and Scandinavian market knowledge;
- a claimed ADR dangerous-goods warehousing specialisation in Vilnius — **CLIENT TO VALIDATE before public use**;
- personal attention and “extra care” that larger providers may reserve for their largest accounts;
- communication and service quality;
- 10+ year trust from top customers — **CLIENT TO VALIDATE before public use**.

### 4.3 What Holsen must not imitate

Holsen must not try to look like:

- an asset-heavy operator at H.Essers scale;
- a chemical-infrastructure-heavy operator such as Gadot;
- a digital freight platform such as sennder;
- an unfocused, everything-everywhere catalogue such as AsstrA.

Holsen's defendable advantage is:

> **International capability without enterprise bureaucracy.**

Do not imply fleet, warehouses or other assets are owned when they are partner capacity. Holsen can credibly communicate pan-European capacity, end-to-end solutions, dedicated operational teams and a reliable carrier network without misrepresenting ownership.

This is the objective resolution of a tension in the source documents. The brief asks Holsen to look like a full A–Z logistics company and not a broker; the same brief confirms that Holsen has no owned transport fleet and works through partners. The website must communicate complete operational capability without foregrounding a broker identity, but it must never make a false asset-ownership claim.

---

## 5. Messaging architecture

### 5.1 Brand promise

> **Complex logistics. Clear decisions.**

### 5.2 Value proposition

> **Holsen Logistics manages complex freight across Europe and beyond with dedicated teams, reliable capacity and complete operational ownership.**

### 5.3 Supporting pillars

#### Fast decisions

Shorter decision chains when conditions change.

#### Dedicated ownership

One clear team responsible for the outcome.

#### Complex-route expertise

Experience across markets and corridors where standard solutions are often insufficient.

#### Industry know-how

Logistics shaped around real operational and compliance requirements.

#### Reliable international capacity

Flexible multimodal capability across multiple markets without limiting the solution to a fixed asset base.

### 5.4 Communication hierarchy

1. Complexity and clarity.
2. International capability.
3. Ownership.
4. Industry and corridor expertise.
5. Operational proof.
6. Long-term partnership.

This order prevents the homepage from becoming a generic service catalogue.

### 5.5 Commitment-first commercial copy — APPROVED DIRECTION (2026-09-09)

Customer-facing copy must lead with the action Holsen takes and the decision or operating output the buyer receives. Necessary conditions belong after that commitment, not in the opening sentence.

Use this sequence:

1. **Commitment** — what Holsen does.
2. **Process** — what Holsen reviews, records or assigns.
3. **Boundary** — only the cargo-, route- or implementation-specific condition needed for factual accuracy.

Avoid opening answers with “can be assessed”, “depends on”, “where it can be confirmed” or similar non-committal language. This rule does not authorise invented routes, frequencies, ADR classes, certifications, SLAs, integrations or performance figures. When evidence is missing, commit to a clear review and acceptance decision rather than implying unsupported capability.

### 5.6 Commercial-fit reassurance — APPROVED DIRECTION (2026-09-09)

The site must not imply that Holsen only accepts enterprise-scale tenders. Preserve the long-term partnership priority while stating that recurring transport and operationally complex freight are evaluated by the route, cargo, frequency and coordination required — not company size alone. Use this reassurance on the homepage, at the start of the RFQ flow and in the homepage FAQ. Do not publish a numeric minimum until the client defines and approves one.

### 5.5 Content truth rule

Every claim must be one of three types:

1. **Fact** — demonstrably true.
2. **Capability** — explainable through how it works.
3. **Point of view** — defensible through expertise and reasoning.

Avoid a fourth type:

> **Marketing adjective without proof.**

Do not use words such as *innovative*, *world-class*, *seamless*, *trusted*, *leading*, *best-in-class* or *customer-centric* unless specific evidence immediately supports them.

### 5.6 CTA hierarchy

#### Primary

- **Request a Quote**

#### Contextual

- **Discuss Your Route**
- **Discuss a Long-term Partnership**
- **Talk to Our Logistics Team**

#### Content navigation

- **Explore Services**
- **Explore Industries**
- **Read the Case Study**

#### Lead magnet

- **Download the ESG Report**

Do not place four equally strong CTAs in one viewport.

---

## 6. Trust and proof system

### 6.1 Strategic role

Proof is a core strategic layer, not supporting decoration. Holsen cannot win by heritage or asset scale, so it must win through:

> **Measurable operational confidence.**

Every important commercial page must contain at least one relevant proof layer.

### 6.2 Valid proof types

- SLA / OTIF performance;
- service reliability;
- client retention or relationship duration;
- markets and corridors served;
- annual shipment volume or tonnage;
- qualified carrier / partner network;
- ADR capabilities;
- EDI integration capability;
- shipment tracking and visibility;
- CO₂ measurement or reporting;
- independently verifiable certifications;
- client logos with explicit display permission;
- case studies with operational results;
- credible expert authors and named operational specialists.

### 6.3 Working proof placeholders — CLIENT TO VALIDATE / NOT FOR PUBLICATION

These are realistic working assumptions for content length, layout and information hierarchy only:

- `[30+ European and Eurasian markets served]`
- `[500+ qualified transport partners]`
- `[98%+ on-time delivery]`
- `[10+ years with key accounts]`
- `[24/7 shipment visibility]`
- `[ADR-capable transport and warehousing]`
- `[EDI integration available]`
- `[CO₂ reporting available]`
- `[X annual shipments]`
- `[X tonnes transported]`
- `[X active contractual customers]`

Never remove the brackets or validation status until evidence and the exact approved wording are supplied.

### 6.4 Case study standard

Case studies are high-priority trust assets. Use:

> **Challenge → Complexity → Solution → Operational result**

Prefer one strong, quantified case study over five generic testimonials.

Working example — CLIENT TO VALIDATE / NOT FOR PUBLICATION:

- Challenge: `[A chemical manufacturer required coordinated ADR transport across multiple markets.]`
- Complexity: `[12 markets, mixed requirements and strict delivery windows.]`
- Solution: `[A dedicated Holsen team coordinated capacity, documentation and exceptions.]`
- Result: `[98.7% OTIF]`, `[15% lower dwell time]`, `[X fewer exceptions]`.

Do not publish invented customer names, outcomes, logos, percentages or certifications.

---

## 7. Final information architecture

### 7.1 Sitemap — APPROVED DIRECTION

```text
Home

Services
├── Services Overview
├── Road Freight
├── Sea Freight
├── Air Freight
├── Rail Freight
├── Contract Logistics
├── Customs Services
└── Value-added Services

Industries
├── Industries Overview
├── Agriculture
├── Chemicals
├── Industrial
├── Consumer Goods
├── Paper & Packaging
├── Technology
├── Automotive
└── Life Sciences & Healthcare

Why Holsen — includes About Holsen / company overview
├── Ethics & Compliance
├── Sustainability
└── Careers → external Lithuanian careers site

For Carriers & Partners
├── Truck Owners
├── Warehousing
└── Local Distribution

Insights
├── Insights Archive
└── Article

Resources
└── Lead Magnet Template / ESG Report

Contact

Code of Conduct
Privacy Policy
```

**Services Overview** and **Industries Overview** are required for both UX and search architecture even if not explicitly itemised in an earlier scope list.

**User-approved structure update — 2026-09-08:** About Holsen is consolidated into `/why-holsen/`, not a separate page or menu item. This page covers company identity and operating model as well as differentiation, people’s operational responsibilities and proof. Ethics & Compliance and Sustainability remain supporting content destinations; this consolidation does not authorise their implementation or publication of unvalidated company history, named team members or legal facts.

### 7.2 Navigation

Desktop primary navigation:

- Services
- Industries
- Why Holsen
- Insights
- For Carriers
- Contact

Persistent primary action:

- Request a Quote

Prepare a language architecture / language indicator for future localisation, but do not present inactive languages as selectable. Only English is live.

### 7.3 Markets architecture

Do **not** create a standalone Markets page in the current scope. Use Markets as a reusable, prominent content component on:

- Homepage;
- Service pages;
- Industry pages;
- Why Holsen (including the company overview).

Regions identified in the brief and strategy:

- Western Europe;
- Southern Europe;
- Northern Europe / Nordics;
- Baltics;
- CIS;
- Caucasus;
- Central Asia;
- Asia.

Ukraine is part of the source expertise context but not a separate published region label in the approved market module. Exact current service feasibility, sanctions, border conditions and route availability require live operational validation before any country-specific claim.

Provisional commercial corridor hypothesis — CLIENT TO VALIDATE:

> **Western Europe / Nordics ↔ Baltics / CIS / Caucasus / Central Asia**

Future corridor landing pages such as *Europe to Kazakhstan freight*, *freight transport to Central Asia* or *road freight Scandinavia* should be created only if keyword research and commercial value justify them. Do not manufacture thin location pages.

The current scope explicitly excludes an interactive map. Markets must be presented as a prominent structured section, not as a standalone map page or map-dependent interface.

### 7.4 Content priority

#### Tier 1 — Commercial authority

- Services;
- Industries;
- Why Holsen;
- Markets / corridor content;
- case studies.

#### Tier 2 — Decision support

- comparisons;
- FAQ;
- procurement guides;
- corridor content.

#### Tier 3 — Thought leadership

- ESG;
- industry trends;
- technology;
- broader insights.

Build commercial authority before producing a blog for volume.

---

## 8. Reusable page templates for later phases

These templates define the system but are **not current homepage implementation scope**.

### 8.1 Service page template

1. Hero: exact service H1 and definition.
2. Quick answer: what it is, where Holsen operates, who it is for.
3. Capabilities.
4. Markets / corridors.
5. Relevant industries / use cases.
6. Operational advantages and differentiation.
7. Comparison / decision support: when to choose this mode.
8. Process: how it works.
9. Technology / EDI / visibility.
10. Sustainability where material.
11. Operational proof / case study.
12. FAQ.
13. Request a Quote CTA.

Canonical content sequence:

> **Direct answer → capability → where → who for → operational proof → decision support → FAQ → CTA**

### 8.2 Industry page template

1. Hero: direct industry-specific H1.
2. Industry challenge.
3. Holsen solution.
4. Relevant service matrix.
5. Compliance and specialist requirements.
6. Markets / corridors.
7. Operational proof.
8. Case study.
9. FAQ.
10. Request a Quote CTA.

Example H1:

> **Chemical logistics across Europe and beyond**

Not an abstract brand slogan.

### 8.3 Required content in every important commercial page

1. Direct answer.
2. Actual capabilities.
3. Markets.
4. Industries or use cases.
5. Proof.
6. Decision support.
7. FAQ.
8. CTA.

---

## 9. Homepage narrative and final English copy

### Global page rules

- One `<h1>` only.
- Use real headings for structure, not typography alone.
- Proof appears immediately after the hero.
- Use editorial composition, not a repetitive card catalogue.
- All bracketed numbers, customer claims and operational features are placeholders until validated.
- Links must use descriptive labels and connect to their future target pages even if temporary URLs are used during prototyping.

### 9.1 Header

**Purpose:** orient users and make the primary conversion consistently available.

**Navigation copy:**

- Services
- Industries
- Why Holsen
- Insights
- For Carriers
- Contact

**Primary CTA:**

> **Request a Quote**

**UX requirements:**

- true `<nav>` landmark;
- skip link before navigation;
- accessible mobile menu with correct name, expanded state, focus management and Escape support;
- current-page state where applicable;
- inactive languages must not be presented as available.

### 9.2 Section 01 — Hero

**Purpose:** answer what, where and why Holsen within approximately five seconds.

**Eyebrow:**

> **International logistics across Europe and beyond**

**H1 — APPROVED:**

> **Complex logistics.  
> Clear decisions.**

**Supporting copy — APPROVED:**

> **International road, rail, sea and air logistics across Europe and beyond — managed with dedicated ownership from first decision to final delivery.**

**Primary CTA:**

> **Request a Quote**

**Secondary CTA:**

> **Explore Services**

**Optional compact capability line:**

> Road · Rail · Sea · Air · Contract Logistics · Customs · Value-added Services

**Visual direction:** asymmetric editorial grid; large type; operational image; geographic or service information; Holsen Loop connecting content. Do not use a full-bleed truck hero with overlaid generic copy.

**CRO logic:** the primary CTA captures existing high intent; the secondary CTA serves buyers who still need evidence.

**Analytics:** `hero_primary_cta_click`, `hero_secondary_cta_click`.

### 9.3 Section 02 — Immediate operational proof

**Purpose:** establish scale and competence before the services catalogue.

**Accessible section label:**

> **Operational confidence, measured**

**Working content — CLIENT TO VALIDATE / NOT FOR PUBLICATION:**

- `[30+ markets served]`
- `[10+ years with key accounts]`
- `[98%+ on-time delivery]`

**User-approved prototype update — 2026-09-09:** do not use `ADR-capable operations` as a primary proof statement until the legal entity, service scope and supporting evidence are confirmed. The prototype may show a final-looking, release-blocking trust strip for ISO, AEO, SQAS, GDP, CMR insurance and ADR categories without visible prototype labels. Until client evidence is supplied, show category and purpose only: no certificate numbers, validity, status or claim that Holsen holds the record. Keep the source-level validation marker and release blocker, omit any unverified category before publication, and never include unverified records in structured data.

**Supporting line:**

> **Capability should be visible in performance, coverage and responsibility — not marketing claims.**

Do not use *Reliable / Flexible / Professional* as proof.

**CRO hypothesis:** early quantified proof will increase service-page CTR and RFQ starts among procurement visitors by reducing perceived scale risk.

**Analytics:** `proof_item_view`, `proof_detail_click` if details are interactive.

### 9.4 Section 03 — Markets

**Purpose:** answer “Do they operate where we need them?” early.

**Eyebrow:**

> **Markets and corridors**

**H2:**

> **From Europe to complex international corridors.**

**Body:**

> **Holsen coordinates international freight across established European markets and operationally demanding routes beyond them.**

**Region labels:**

- Western Europe
- Southern Europe
- Nordics
- Baltics
- CIS
- Caucasus
- Central Asia
- Asia

**Validation note:** exact country and corridor coverage must be client-approved before publication.

**CTA:**

> **Discuss Your Route**

**UI rule:** use a structured information-led layout. The current scope explicitly excludes an interactive map; use text, layout, restrained imagery or non-map brand graphics. Avoid glowing route-line clichés.

### 9.5 Section 04 — Services

**Purpose:** demonstrate complete A–Z multimodal capability without turning the page into a card grid.

**Eyebrow:**

> **Services**

**H2:**

> **One logistics partner. Every mode.**

**Body:**

> **Road, rail, sea and air freight — supported by contract logistics, customs and value-added services when the solution requires more than transport alone.**

**Editorial service navigator:**

1. **Road Freight**  
   Flexible international transport for direct, groupage and complex route requirements.
2. **Sea Freight**  
   International ocean solutions for high-capacity and long-distance supply chains.
3. **Air Freight**  
   Time-critical international transport when speed and coordination are decisive.
4. **Rail Freight**  
   High-capacity links between European and Eurasian markets.
5. **Contract Logistics**  
   Long-term operational solutions built around your supply-chain requirements.
6. **Customs Services**  
   Documentation and customs coordination across international borders.
7. **Value-added Services**  
   Additional handling and operational support around the shipment.

**CTA:**

> **Explore Services**

**Validation note:** service descriptions are strategic copy and must be reconciled with exact offered capabilities before publication.

**UI rule:** prefer a numbered editorial navigator, progressive disclosure or contextual image changes. Do not require hover to access core information. On mobile, all content must remain directly available.

### 9.6 Section 05 — Why Holsen

**Purpose:** communicate actual differentiation.

**Eyebrow:**

> **Why Holsen**

**H2:**

> **Built for logistics that doesn't fit the standard playbook.**

**Pillars — APPROVED:**

#### Fast decisions

> **Fewer layers between the problem and the people responsible for solving it.**

#### Dedicated ownership

> **Clear responsibility from planning through final delivery.**

#### Complex-route expertise

> **Experience where routes, regulations and operating conditions require deeper coordination.**

#### Reliable international capacity

> **Flexible multimodal capacity without limiting the solution to a fixed asset base.**

**CTA:**

> **Why Holsen**

Do not revert to *Customer First / Tailored Solutions / Operational Excellence / Pan-European Network / Sustainable Logistics* as the four primary pillars. These remain supporting category requirements only.

### 9.7 Section 06 — Industries

**Purpose:** show that Holsen understands sector-specific problems, not merely sector labels.

**Eyebrow:**

> **Industry expertise**

**H2:**

> **Logistics shaped around the requirements of your industry.**

**Body:**

> **The right transport plan starts with the cargo, compliance requirements and operating realities — not a standard template.**

**Industry content:**

- **Agriculture** — Seasonal volumes, market timing and dependable capacity.
- **Chemicals** — Cargo-specific planning, documentation and handling.
- **Industrial** — Flexible planning for complex freight and operating conditions.
- **Consumer Goods** — Reliable flow, cargo integrity and predictable delivery.
- **Paper & Packaging** — Capacity and dependable scheduling for high-volume movements.
- **Technology** — Coordinated handling for sensitive, valuable and time-critical goods.
- **Automotive** — Time-sensitive supply chains and production continuity.
- **Life Sciences & Healthcare** — Requirements-led planning for sensitive products.

**CTA:**

> **Explore Industries**

**Validation note:** exact compliance, temperature-control and special-handling claims must be confirmed. Do not imply capabilities merely because an industry is listed.

**UI rule:** no generic icon grid. Pair category with a specific problem or requirement.

### 9.8 Section 07 — Long-term partnership

**Purpose:** distinguish contractual partnership from transactional spot quoting.

**Eyebrow:**

> **Contract logistics relationships**

**H2:**

> **Built for long-term logistics partnerships.**

**Body:**

> **Holsen assigns one accountable team, agrees how the operation will run and reviews service performance against defined measures.**

**Working capability list — CLIENT TO VALIDATE / NOT FOR PUBLICATION:**

- `[Dedicated account and operational team]`
- `[Service-level commitments]`
- `[EDI integration]`
- `[Track and trace / 24/7 shipment visibility]`
- `[CO₂ reporting]`
- `[Tender and onboarding support]`

**Primary CTA:**

> **Discuss a Long-term Partnership**

**Supporting CTA:**

> **Request a Quote**

### 9.9 Section 08 — Decision support / comparison

**Purpose:** help users choose a transport mode while supporting SEO, AEO and conversion.

**Eyebrow:**

> **Decision support**

**H2:**

> **Choosing the right transport mode**

**Intro:**

> **We compare distance, urgency, capacity, route access, cargo requirements and total supply-chain cost before recommending a mode. When one mode is not enough, the proposed plan connects the stages and assigns responsibility across them.**

| Mode | Best for | Flexibility | Typical speed | Capacity | Relative CO₂ profile |
|---|---|---:|---:|---:|---:|
| Road | Door-to-door European transport and flexible routes | Very high | High | Medium | Medium |
| Rail | High-volume inland corridors and long distances | Medium | Medium | High | Lower |
| Sea | Very high-volume, long-distance freight | Low | Low | Very high | Lower |
| Air | Urgent, high-value or time-critical freight | Medium | Very high | Low | Highest |

**Accuracy note:** these are general relative characteristics, not route-specific guarantees. Do not turn them into hard transit-time, cost or emissions claims without a defined methodology and data.

**CTA:**

> **Not sure which mode fits your supply chain? Talk to Our Logistics Team.**

**Implementation:** use an actual semantic HTML `<table>` with a caption and meaningful headers. Provide a usable stacked or horizontally scrollable mobile treatment without converting it into an image.

### 9.10 Section 09 — Case study

**Purpose:** convert positioning into operational evidence.

**Eyebrow:**

> **Operational proof**

**H2:**

> **Complexity managed. Performance measured.**

**Working content — CLIENT TO VALIDATE / NOT FOR PUBLICATION:**

**Challenge**

> `[A chemical manufacturer needed coordinated ADR transport across multiple European markets with strict delivery windows.]`

**Complexity**

> `[Twelve markets, multiple operating partners and market-specific documentation requirements.]`

**Solution**

> `[A dedicated Holsen team coordinated capacity, documentation, visibility and exception management through one point of responsibility.]`

**Results**

- `[98.7% OTIF]`
- `[15% lower dwell time]`
- `[12 markets coordinated]`
- `[One operational team]`

**CTA:**

> **Read the Case Study**

If no validated case study is available at launch, do not publish an invented story. Replace this module with a verified proof layer or keep it out of production until evidence exists.

### 9.11 Section 10 — Sustainability / ESG lead magnet

**Purpose:** provide evidence-based ESG content and capture lower-intent business leads.

**Eyebrow:**

> **Sustainability**

**H2:**

> **Sustainable logistics in practice.**

**Body:**

> **Explore how Holsen approaches operational efficiency, transport choices and emissions transparency across international supply chains.**

**CTA:**

> **Download the ESG Report**

**Lead form recommendation:**

- Name
- Work email
- Company

Do not demand an eight-field form for a report. The template must be reusable for future lead magnets.

**Validation note:** ESG report availability, statements, methodology and gated-versus-ungated choice require client confirmation.

### 9.12 Section 11 — Insights

**Purpose:** build search authority through expert, commercially relevant content rather than company news.

**Eyebrow:**

> **Insights**

**H2:**

> **Practical guidance for complex logistics decisions.**

**Recommended initial topics:**

- Road vs rail freight in Europe
- ADR transport requirements
- How to reduce and report logistics CO₂ emissions
- Freight transport to Central Asia
- EDI in logistics procurement
- How to evaluate a logistics provider
- Logistics tender checklist

**Homepage presentation:** feature up to three current, useful articles. Each card or editorial link must show a clear topic and purpose, not generic “Read more”.

**CTA:**

> **Explore Insights**

### 9.13 Section 12 — Homepage FAQ

**Purpose:** answer procurement objections, support long-tail discovery, improve internal linking and provide clear extractable answers.

Use 5–7 questions, not an indiscriminate 20-item accordion.

#### Which countries and regions does Holsen Logistics serve?

> **Holsen coordinates international freight across Europe and routes extending into the Baltics, CIS, the Caucasus, Central Asia and selected Asian markets. Share the origin, destination and cargo requirements; the team returns a clear route-feasibility decision and proposed operating setup before booking.**

**Validation:** client must approve the exact coverage before publication. Link to relevant Services or future corridor content.

#### Which transport services does Holsen provide?

> **Holsen provides road, rail, sea and air freight, supported by contract logistics, customs and value-added services. The team compares the complete journey and proposes a multimodal plan when a single mode does not meet the route, capacity, timing or cargo requirements.**

Link to Services Overview.

#### Can Holsen manage ADR and dangerous goods?

> **Holsen reviews the goods classification, route, equipment, capacity and documentation before accepting a dangerous-goods shipment. You receive a clear acceptance decision and service scope before booking; accepted classes and exclusions remain specific to the cargo and operating markets.**

**Validation:** confirm actual classes, exclusions, warehousing, certifications and responsible entities before publication. Link to Chemicals and relevant service pages.

#### Can Holsen integrate with our systems through EDI?

> **For a contractual logistics setup, Holsen documents the required data exchange, responsible parties and implementation scope during onboarding. Message types, systems and timing are agreed before implementation begins.**

**Validation:** capability is a placeholder until the technical scope is verified.

#### How does Holsen provide shipment visibility?

> **Holsen assigns clear operational ownership for shipment updates and exception communication. Before transport begins, the operating setup records what the client team receives, who receives it and who acts when conditions change.**

**Validation:** insert named platform, access model, frequency and support hours only after confirmation.

#### Do we need an enterprise-scale tender to work with Holsen?

> **No. Holsen works with recurring transport and operationally complex freight requirements. Fit is based on the route, cargo, frequency and coordination needed — not company size alone.**

**Validation:** confirm the commercial-fit criteria and any real minimum threshold before publication. Do not invent or imply a numeric threshold.

#### Can Holsen support international logistics tenders?

> **Yes. Holsen structures the qualification discussion around routes, service requirements, onboarding, performance measures and integration needs. The result is a defined operating and commercial scope for the tender decision.**

**Validation:** confirm the exact tender-support process and responsible team.

**Accordion accessibility:** real buttons, programmatic expanded state, keyboard operation, visible focus and content available in the DOM. Do not hide essential information behind hover.

### 9.14 Section 13 — Final CTA

**Purpose:** convert users after the complete evidence sequence.

**H2:**

> **Looking for a logistics partner built for the long term?**

**Body:**

> **Tell us what needs to move, where it needs to go and what makes the operation complex. Our team will review the requirement and define the next step.**

**Primary CTA:**

> **Request a Quote**

**Secondary CTA:**

> **Contact Our Team**

### 9.15 Footer

Include:

- Services links;
- Industries links;
- Why Holsen;
- Insights;
- For Carriers & Partners;
- Contact;
- Code of Conduct;
- Privacy Policy;
- approved company identity, address, registration and contact information;
- approved social links only.

Do not invent office locations, registrations, memberships or social profiles.

---

## 10. Request a Quote flow

The brief defines the commercial goal and contact / quote action but does **not** define form fields, CRM, lead routing, scoring, recipients, autoresponders or the post-submit sales process. The flow below is a **STRATEGIC RECOMMENDATION**, not a source requirement.

Avoid one intimidating form. Use a clear, accessible, resumable or simple three-step qualification flow if implementation context allows.

### Step 1 — What do you need?

- Road Freight
- Rail Freight
- Sea Freight
- Air Freight
- Contract Logistics
- Customs Services
- Other / Not sure

### Step 2 — About your logistics

- Origin
- Destination
- Shipment type / cargo description
- Frequency
- Approximate volume
- Timing / requested start
- Additional requirements: ADR, temperature, customs, handling, integrations, other

### Step 3 — About you

- Name
- Company
- Business email
- Phone — optional
- Message / supporting context
- File upload only if secure, necessary and operationally supported
- privacy notice and consent where legally required

**User-approved prototype update — 2026-09-09:** include an optional supporting-document picker for packing lists, SDS/MSDS and dangerous-goods declarations. The prototype may validate file count, extension and size in the browser, but production upload remains blocked until secure transport, server-side content validation, malware scanning, storage, retention, access and deletion responsibilities are approved. Never send file names or document contents to analytics.

**User-approved pricing-orientation update — 2026-09-09:** explain the factors that shape a quotation — route and mode, cargo profile, collection/delivery conditions, timing and frequency, specialist requirements, and current capacity or operating costs. Do not show indicative rates or price ranges without validated lanes, dates and commercial assumptions. State that final pricing follows review of the complete requirement and operational feasibility.

### Form UX requirements

- preserve entered data on validation errors;
- show visible field labels, instructions and inline error messages;
- connect errors programmatically to fields;
- provide an error summary for complex forms;
- do not use placeholder text as the only label;
- use correct input types and autocomplete tokens;
- state required versus optional fields clearly;
- never demand duplicate information already entered;
- keyboard and screen-reader operable;
- no CAPTCHA that requires inaccessible cognitive tasks;
- post-submit page must confirm receipt, set response expectations and offer a useful next step;
- do not promise response times until the client confirms them.

### Technical items to validate

- CRM or destination system;
- routing by mode, geography or account;
- recipients and ownership;
- spam protection;
- file security and retention;
- consent and privacy wording;
- autoresponder;
- lead qualification and scoring;
- sales handoff and response SLA;
- analytics consent requirements.

---

## 11. SEO strategy

### 11.1 Principle

SEO is part of information architecture and content design, not a checklist added after development.

> **Holsen does not compete on content volume. Holsen competes on content clarity, usefulness and first-hand operational evidence.**

Do not reproduce AsstrA's large catalogue model. More pages are not automatically better. Build fewer, stronger, commercially purposeful pages.

### 11.2 Topic architecture

#### Cluster 1 — Services

- Road freight
- Rail freight
- Air freight
- Sea freight
- Contract logistics
- Customs services
- Value-added logistics

#### Cluster 2 — Industries

- Chemical logistics
- ADR logistics
- Agricultural logistics
- Industrial logistics
- Consumer-goods logistics
- Paper and packaging logistics
- Technology logistics
- Automotive logistics
- Life-sciences and healthcare logistics

#### Cluster 3 — Geographic intent

- European freight
- Nordic logistics
- Baltic logistics
- CIS logistics
- Central Asia freight
- Caucasus logistics

#### Cluster 4 — Problem / expertise

- ADR transport
- dangerous-goods warehousing
- CO₂ logistics reporting
- multimodal freight
- EDI logistics
- supply-chain resilience
- logistics tender evaluation

### 11.3 Search intent mapping

- `road freight company europe` → Road Freight service page.
- `chemical logistics company` → Chemicals industry page.
- `freight to central asia` → validated corridor / market content.
- `ADR transport requirements` → expert insight.
- `road freight vs rail freight` → decision-support insight or comparison module.

### 11.4 On-page requirements

Each page requires:

- one specific search intent and one clear primary topic;
- unique, descriptive `<title>` and meta description;
- one H1, followed by logical H2/H3 hierarchy;
- answer-first introductory copy;
- descriptive, stable URLs;
- canonical URL;
- crawlable HTML links;
- descriptive anchors, not repeated *Read more*;
- important content rendered as text, not embedded in images or canvas;
- descriptive alt text only for meaningful images; empty alt for decorative imagery;
- XML sitemap and appropriate robots controls;
- social sharing metadata where appropriate;
- rendered-HTML validation if content depends on JavaScript;
- multilingual-ready architecture, with `hreflang` only when actual localised pages exist.

### 11.5 Heading example

```text
H1 Chemical logistics across Europe and beyond

H2 Logistics built around safety and compliance

H2 Chemical logistics services
  H3 ADR road freight
  H3 Warehousing
  H3 Multimodal transport

H2 Markets we serve

H2 Why chemical companies choose Holsen

H2 Frequently asked questions
```

Never choose heading levels for visual size.

### 11.6 Structured data

Implement JSON-LD only where it matches visible, validated content:

- `Organization` on the homepage or combined Why Holsen / company page, only with validated entity details;
- `WebSite` on the homepage;
- `BreadcrumbList` on internal pages;
- `Service` on appropriate service pages as a semantic entity, without assuming a Google rich result;
- `Article` on insights;
- `Person` for real named expert authors;
- `FAQPage` only where the page contains the same visible FAQ content.

Structured data must never contain invented coverage, ratings, reviews, offices, certifications, services or FAQs. Validate syntax and eligibility, but do not promise a rich result.

### 11.7 FAQ reality check

FAQ content is valuable for:

- objection handling;
- long-tail discovery;
- internal linking;
- clear answer extraction;
- procurement UX.

It is **not** included because Google “likes accordions” or because FAQ rich results are expected. Google restricts regular FAQ rich-result display primarily to well-known government and health sites. Keep FAQ because it helps people and content understanding, not as a SERP gimmick.

### 11.8 Comparison strategy

Use comparisons only for real decisions:

- Road vs Rail;
- Sea vs Air;
- Dedicated vs Spot logistics;
- Standard vs ADR logistics;
- Single-mode vs Multimodal.

Use accessible semantic tables or structured lists. State assumptions and avoid universal cost, speed or sustainability claims. Comparison content must not become thin keyword filler.

---

## 12. GEO / AEO / AI-search strategy

### 12.1 Principle

GEO and AEO are not separate hacks. They are outcomes of strong SEO, clear information architecture, reliable facts and expert content.

Use:

- answer-first passages;
- explicit entities: service, industry, region, cargo, regulation and responsible organisation;
- specific, original operational facts;
- clear headings and prose;
- useful comparisons and FAQs;
- named experts and review dates where available;
- relevant internal links;
- crawlable text and standard semantic HTML;
- structured data that mirrors visible content;
- high-quality relevant images and video with context.

Do not:

- rewrite text unnaturally “for AI”;
- fragment content into arbitrary tiny chunks;
- produce one thin page for every keyword permutation;
- fabricate first-hand experience or proof;
- overfocus on schema as a ranking lever;
- treat AI-written commodity content as authority.

### 12.2 `llms.txt`

The project scope mentioned basic GEO, structured data and `llms.txt`. `llms.txt` may be delivered experimentally if it remains contractually required, but:

- it is not the centre of the GEO strategy;
- it is not a KPI;
- it does not replace crawlable HTML, internal links or structured data;
- it must not contain claims absent from the website;
- Google Search has stated that it ignores `llms.txt` for ranking and generative Search visibility.

### 12.3 Measurement

Track organic landing pages, qualified conversions, non-brand query themes and Search Console visibility. AI-search visibility must be treated as directional evidence, not a guaranteed rank. Do not rely on third-party “AI share of voice” as ground truth without documenting methodology.

---

## 13. Internal linking system

Build a semantic topic graph, not isolated pages.

### 13.1 Examples

**Chemicals** should link to:

- Road Freight;
- Rail Freight;
- Contract Logistics where relevant;
- ADR requirements insight;
- relevant Markets / corridor content;
- relevant case study;
- Request a Quote.

**Road Freight** should link to:

- Chemicals;
- Industrial;
- Consumer Goods where relevant;
- a Central Asia / corridor insight where validated;
- Road vs Rail comparison;
- relevant case study;
- Request a Quote.

**Homepage** must link to:

- Services Overview and featured service pages;
- Industries Overview and featured industry pages;
- Why Holsen;
- case study;
- ESG resource;
- Insights;
- Request a Quote / Contact.

### 13.2 Rules

- use descriptive anchor text that predicts the destination;
- include links in relevant body context, not only navigation and footer;
- no orphan commercial pages;
- link FAQ answers to deeper content where useful;
- avoid excessive exact-match anchors and boilerplate repetition;
- update links when pages are renamed or migrated;
- audit broken links and redirects before launch.

---

## 14. CRO and conversion paths

### 14.1 Primary funnel

```text
Organic / Direct / Campaign
          ↓
Homepage / Service / Industry
          ↓
Relevance + Capability + Proof
          ↓
Request a Quote
          ↓
Qualification
          ↓
Sales conversation
```

### 14.2 Informational funnel

```text
Informational search
          ↓
Insight / Comparison / FAQ
          ↓
Relevant Service or Industry
          ↓
Lead magnet or RFQ
```

### 14.3 CRO rules

- match the CTA to user intent and section context;
- show proof before demanding commitment;
- use outcome and decision language, not generic *Learn more*;
- do not make the homepage a wall of quote prompts;
- keep lead-magnet forms proportionate to value;
- keep RFQ fields tied to qualification or routing;
- state what happens after form submission;
- never manufacture urgency, scarcity or social proof;
- treat qualified conversion and sales fit as more important than raw CTR.

---

## 15. Analytics and experimentation

### 15.1 Measurement foundation

Recommended tools:

- GA4 or an approved equivalent;
- Google Search Console;
- consent management appropriate to applicable privacy law;
- privacy-safe qualitative tools only if approved;
- CRM / lead destination once confirmed.

Do not load non-essential analytics before required consent where consent law applies.

### 15.2 Event taxonomy

Use stable lowercase snake_case names and attach context parameters such as `page_type`, `section`, `cta_label`, `service`, `industry`, `device`, `form_step` and `lead_source` where available.

Recommended events:

- `rfq_cta_click`
- `rfq_start`
- `rfq_step_complete`
- `rfq_validation_error`
- `rfq_submit`
- `rfq_success`
- `rfq_failure`
- `contact_cta_click`
- `service_link_click`
- `industry_link_click`
- `market_cta_click`
- `comparison_engagement`
- `faq_expand`
- `case_study_click`
- `lead_magnet_view`
- `lead_magnet_submit`
- `outbound_careers_click`

Do not send personal data, email addresses, free-text messages or cargo-sensitive information to analytics.

### 15.3 Conversion definitions

- **RFQ start:** first meaningful interaction with the form, not mere form visibility.
- **RFQ submit:** submit attempt.
- **RFQ success:** server-confirmed successful receipt.
- **Qualified RFQ:** defined later using agreed sales / CRM criteria; it cannot be inferred reliably from a front-end event alone.
- **Lead magnet conversion:** successful delivery request, subject to consent and report availability.

### 15.4 Experiment prerequisites

- define the hypothesis and primary metric before launch;
- define guardrail metrics;
- check tracking integrity;
- set an appropriate sample size and test duration;
- avoid overlapping tests that contaminate interpretation;
- segment cautiously; do not overread small B2B samples;
- document result, decision and follow-up;
- use qualitative evidence or sequential testing when traffic is too low for conventional A/B significance.

### 15.5 Prioritised experiment backlog

#### Test 1 — Hero positioning

- **Control:** Complex logistics. Clear decisions.
- **Variant:** Logistics built for complex routes.
- **Hypothesis:** the approved positioning will create stronger distinctiveness and trust without losing comprehension.
- **Primary KPI:** qualified RFQ rate; diagnostic: hero-to-service CTR.
- **Guardrail:** bounce / rapid exits from relevant paid or organic traffic.

The approved copy remains production default until valid evidence shows otherwise.

#### Test 2 — Proof placement

- **Control:** immediately after hero.
- **Variant:** after Markets.
- **Hypothesis:** immediate proof reduces perceived scale risk.
- **KPI:** RFQ start rate, service-page CTR and proof engagement.

#### Test 3 — Primary CTA label

- **Control:** Request a Quote.
- **Variant:** Discuss Your Logistics Needs.
- **Hypothesis:** a lower-commitment label may increase starts but could reduce intent quality.
- **KPI:** qualified RFQ rate, not click rate alone.

#### Test 4 — Why Holsen content

- **Control:** v1.1 differentiation pillars.
- **Variant:** legacy generic capability pillars.
- **Hypothesis:** specific differentiation improves trust and recall.
- **KPI:** section engagement, progression to proof or RFQ; qualitative recall if research is available.

The generic variant is a research comparison, not recommended production content.

#### Test 5 — Industries presentation

- **Control:** problem-based.
- **Variant:** category-only.
- **Hypothesis:** problem-based framing improves relevance and industry-page CTR.
- **KPI:** industry link CTR and downstream RFQ conversion.

#### Test 6 — Case study visibility

- **Control:** mid-page.
- **Variant:** higher, after Why Holsen.
- **Hypothesis:** earlier validated operational proof will improve trust for procurement visitors.
- **KPI:** case study engagement and RFQ start rate.

---

## 16. Accessibility — WCAG 2.2 AA target

The implementation target is **WCAG 2.2 Level AA**. Automated scans are necessary but insufficient; use keyboard, screen-reader and manual visual checks.

### 16.1 Structure

- semantic landmarks: header, nav, main, sections, footer;
- one H1 and ordered headings;
- skip link to main content;
- meaningful document title and page language;
- lists, definitions and tables marked up semantically;
- native elements before ARIA.

### 16.2 Keyboard and focus

- all functionality operable by keyboard;
- no keyboard traps;
- logical focus order;
- clearly visible focus indicator with strong contrast;
- focus never fully hidden by sticky navigation, cookie banners or overlays;
- focus moved and restored correctly in dialogs and mobile navigation;
- hover content must also be available on focus and touch.

### 16.3 Colour, type and layout

- normal text contrast at least 4.5:1;
- large text contrast at least 3:1;
- meaningful UI components and states at least 3:1 against adjacent colours;
- never use Holsen Orange as the sole carrier of meaning;
- support 200% text zoom and 400% browser zoom / 320 CSS px reflow without loss of content or function;
- do not lock line height or clip enlarged text;
- respect text-spacing overrides;
- use readable line lengths and sufficient spacing.

### 16.4 Controls and targets

- target size at least 24 × 24 CSS px or sufficient spacing under WCAG 2.2; aim for 44 × 44 for primary touch controls;
- accessible names must contain the visible label;
- no drag-only interactions; provide a single-pointer alternative;
- carousels, if any, need controls, pause and keyboard operation; preferably avoid them;
- do not use inaccessible custom selects or faux buttons.

### 16.5 Images, video and motion

- descriptive alt text for meaningful images;
- `alt=""` for decorative visuals;
- maps and infographics require equivalent text;
- captions for spoken video; transcript where needed;
- audio description or equivalent for essential visual-only information;
- respect `prefers-reduced-motion`;
- no essential information conveyed only through animation;
- avoid flashing and uncontrolled parallax;
- animation must not block reading or interaction.

### 16.6 Forms

- persistent visible labels;
- clear required and optional states;
- programmatic instructions and errors;
- suggestions for correction;
- data preserved after errors;
- accessible confirmation and status messages;
- no unnecessary cognitive-function tests for authentication or spam protection;
- consistent help and contact access.

### 16.7 Components

- FAQ toggles use buttons with `aria-expanded` and an associated panel;
- comparison table uses caption, header cells and correct scope;
- modal use is exceptional and fully accessible;
- accordions must not break find-in-page or prevent content access;
- Loop and decorative SVGs are hidden from assistive technology unless informative.

---

## 17. Performance and technical quality

### 17.1 Core Web Vitals targets

At the 75th percentile for mobile and desktop:

- LCP ≤ 2.5 s;
- INP ≤ 200 ms;
- CLS ≤ 0.1.

### 17.2 Implementation principles

- server-render or statically render core marketing content where practical;
- keep essential copy and navigation available without client-only delays;
- use responsive images with explicit dimensions, modern formats and appropriate `srcset` / `sizes`;
- do not lazy-load the likely LCP hero image;
- preload only critical assets;
- subset and preload brand fonts carefully; use `font-display` intentionally;
- minimise third-party scripts;
- reserve space for media, embeds and forms;
- prefer transform and opacity for motion;
- avoid scroll-jacking, excessive canvas and decorative WebGL;
- use progressive enhancement;
- ensure animations and imagery do not outweigh the information architecture.

Performance is part of UX, SEO and brand trust, not a post-build optimisation.

---

## 18. Visual direction — Structured Movement

### 18.1 Strategic direction — APPROVED

> **Structured Movement**

Interpretation:

> **An information-led editorial logistics brand.**

The goal is not merely a visually impressive logistics website. The site must make movement feel controlled, decisions feel clear and information feel structured.

### 18.2 Design-system foundation

The original Design System remains authoritative for asset usage. Its specified foundation is:

- **Mona Sans** as the brand typeface;
- flexible **6 / 12 column grid**;
- general margins of **4–6% of format width**; for horizontal formats, the Design System calculates this proportion from format height;
- **Holsen Loop** as a symbol of continuity, direction and controlled movement;
- asymmetric but structured compositions;
- an existing website application combining headline, photography and Loop; it validates the direction but is not a final homepage layout or copy source.

Names, addresses, follower counts, locations, contact details and other content shown inside Design System application mockups are illustrative design content, not verified Holsen business facts. Never copy them into production.

#### Colour tokens

| Token | Value | Role |
|---|---|---|
| Holsen Orange | `#F1541C` | Primary brand signal and selective emphasis |
| Core Black | `#000000` | Structure, high-contrast background and text |
| Soft White | `#F7F7F7` | Primary light brand background |
| Holsen Carbon | `#202729` | Dark secondary neutral |
| Holsen Grey | `#909495` | Secondary hierarchy only |
| Holsen Light Grey | `#C8C8C8` | Light secondary hierarchy |
| White | `#FFFFFF` | Functional white |

Use approved text/background combinations and verify WCAG contrast in the actual UI state. Black or white should be prioritised for body copy and functional information. Orange may be used for headlines, highlights and short display text on approved backgrounds, but not for small type or long passages. Light space and black provide the base; orange is selective and secondary greys remain subordinate.

#### Typeface and hierarchy

- Mona Sans Regular is the system foundation.
- Medium and Semibold add emphasis and structure.
- Light is reserved for large display use.
- Large headlines are generally tight or solid; small or long text uses more open leading.
- Reference hierarchy from the Design System: large headline 100% line height, Medium, optical tracking `-10`; small headline 110%, Regular, metric tracking `-10`; subheadline 125%, Regular, metric tracking `-5`; body 133%, Regular, tracking `0`; supporting information 133%, Regular, tracking `10`.
- Digital reference examples use 60 px and 48 px Medium sentence-case headings, 30 px Regular supporting copy, 16 px Regular body and 16 px Medium buttons. These are relationship references, not rigid responsive values; preserve hierarchy and accessibility at every viewport.

#### Brandmark rules

- Use the **primary brandmark** with the Logistics descriptor for formal, external and first-contact communication.
- Use the **wordmark** where Holsen is already established or a compact digital presence is required.
- Use the **brand symbol** only in compact or highly visible contexts where the identity is already established; it must not replace the primary brandmark in formal or first-contact use.
- Always use approved artwork. Never redraw, retype, stretch, rearrange, rotate, crop or modify proportions.
- Choose the approved orange, black or white version with the strongest contrast. No alternate colours or effects.
- Minimum exclusion zones: wordmark — half the height of the “H”; brand symbol — one quarter of symbol height / one vertical stem width; primary brandmark — one third of the “H” height. Allow more space where possible.

#### Holsen Loop rules

- The Loop originates from a circle with a fine, regular dashed stroke and an unshaded 3D form.
- In source artwork, perspective is created with 3D Extrude & Bevel (Classic), adjustable X/Y/Z rotation and extrusion depth, with Surface set to No Shading.
- On the website, prefer approved exported / vector assets rather than approximating the form inconsistently.
- It may be scaled, cropped, extended beyond the layout and placed over photography or solid colour.
- Preserve the circular origin, regular dash rhythm, thin construction and approved brand colours.
- Never stretch, warp, shade, gradient-fill or add unapproved effects.

Encode exact approved values as reusable tokens and keep original assets intact. Do not invent extra colours, logo variants, Loop geometry or arbitrary type styles.

### 18.3 Composition

Use:

- large, controlled typography;
- asymmetric editorial grids;
- a strong information hierarchy;
- mixed content density rather than repeated equal cards;
- data and operational evidence as visual material;
- selective photography;
- the Loop to connect sections, paths or information — not as random decoration;
- controlled motion that reinforces continuity and direction.

Prefer fewer modules with more useful information per module. For services, use an editorial navigator, expandable detail or contextual photography rather than eight equal cards.

### 18.4 Hero composition

Recommended structure:

```text
┌─────────────────────────────┬──────────────┐
│ Complex logistics.          │ EUROPE       │
│ Clear decisions.            │ NORDICS      │
│                             │ CIS          │
│ Supporting text             │ CENTRAL ASIA │
│ [Request a Quote]           │              │
├──────────────────────┬──────┴──────────────┤
│                      │                     │
│ OPERATIONAL IMAGE    │ HOLSEN LOOP         │
│                      │                     │
└──────────────────────┴─────────────────────┘
```

This is layout intent, not a literal fixed wireframe.

### 18.5 Motion principles

- motion communicates direction, continuity, transition or system state;
- keep durations and easing controlled, not playful or theatrical;
- animate transforms and opacity where possible;
- never delay access to content for an intro sequence;
- no scroll hijacking;
- no constant decorative motion competing with reading;
- provide a reduced-motion version that preserves meaning;
- performance budget wins over decorative ambition.

---

## 19. Photography and AI imagery direction

### 19.1 Role of photography

The truck is not the brand. Transport should appear as one part of a coordinated system, not as the default hero object.

Image subjects:

- routes and infrastructure;
- terminals, yards and warehouses;
- cargo and handling;
- real operating environments;
- people making decisions or coordinating work;
- industrial contexts;
- transitions between modes and markets.

### 19.2 AI visual direction — STRATEGIC RECOMMENDATION

Before producing a final AI photo or video library, define and approve a dedicated visual style. The recommended direction is:

> **Industrial documentary realism**

The source scope states that the service provider will create the photo, visual and video content for both sites with AI tools rather than using a real photo library. Approval of the shared AI visual style is therefore a production prerequisite, not an optional later refinement.

Characteristics:

- plausible real-world logistics environments;
- natural light and restrained colour;
- wide cinematic crops and contextual detail;
- motion blur or imperfect moments where credible;
- people as part of operations, not posed stock models;
- accurate vehicles, safety equipment, infrastructure and cargo physics;
- a consistent camera, colour and grain language across the set;
- compositions that leave purposeful room for typography when needed.

### 19.3 AI imagery safeguards

- AI visuals may support atmosphere but must not serve as evidence of real Holsen assets, offices, employees, customers, routes or certifications.
- Never add the Holsen logo to synthetic vehicles or warehouses in a way that implies ownership.
- Do not depict unsafe handling, incorrect PPE, impossible cargo, fictitious licence plates, fake paperwork, invented client branding or implausible infrastructure.
- Do not label synthetic imagery as a case-study photograph.
- If an image could reasonably be interpreted as documentary proof, use a real commissioned image or explicitly disclose that it is illustrative.
- Check human anatomy, text, signage, vehicle geometry, wheel placement, reflections, road rules and load securing.
- Store prompt, source, licence / model terms and approval status for each production asset.
- Provide meaningful alt text based on the image's communicative role, not the generation prompt.

### 19.4 Avoid “AI slop”

Do not use:

- CGI-perfect trucks as spectacle;
- glowing world maps;
- neon route trails;
- glassmorphism dashboards floating over vehicles;
- synthetic smiling business teams;
- hyper-clean, impossible warehouses;
- orange-and-black applied mechanically to every object;
- visual clichés that any logistics competitor could use;
- repeated AI compositions with different vehicles swapped in.

---

## 20. Do / Don't

### Do

- lead with complexity, ownership and clear decisions;
- show proof early;
- make geographic relevance obvious;
- distinguish owned capability from partner capacity;
- make procurement decisions easier;
- use specific, answer-first English;
- build Services and Industries as connected authority clusters;
- use comparison and FAQ where they solve real questions;
- use semantic HTML, accessible interactions and fast rendering;
- encode the Design System into reusable tokens and components;
- keep the layout editorial, structured and information-dense;
- validate every public fact.

### Don't

- change the positioning, section order or approved copy without explicit instruction;
- present customer-first, tailored, global, sustainable or innovative as the main differentiation;
- imitate an asset-heavy operator or digital freight platform;
- imply Holsen owns partner trucks, warehouses or infrastructure;
- publish bracketed proof placeholders;
- invent client logos, certifications, KPIs, coverage or case studies;
- build a generic blue-gradient logistics website;
- use a truck, globe, map or icon grid as the entire visual idea;
- create repetitive card grids where an editorial navigator communicates more;
- rely on hover, animation, canvas or imagery for essential content;
- add AI visuals that look like synthetic advertising or false evidence;
- create thin SEO pages, keyword stuffing or generic AI articles;
- claim SEO, GEO, rich-result or conversion outcomes as guaranteed.

---

## 21. Competitor audit conclusions

The competitor review did not require a change of strategic direction; it strengthened and clarified it.

### 21.1 Category conclusions

- *Reliable*, *tailored*, *sustainable*, *global*, *customer-focused*, *technology-led* and *multimodal* are widely used category claims.
- Large operators can rely on asset scale, history, infrastructure or content volume. Holsen should not imitate proof it does not possess.
- A broad catalogue can win search surface area but weaken brand clarity.
- Digital-platform aesthetics can imply a business model Holsen is not claiming.
- Generic service grids and transport clichés make logistics firms interchangeable.

### 21.2 Strategic response

The v1.1 response is to strengthen:

- complexity;
- ownership;
- decision speed;
- operational expertise;
- early quantified proof;
- case studies;
- content clarity;
- international capability without enterprise bureaucracy.

And weaken as differentiators, while retaining as supporting arguments:

- tailored solutions;
- customer first;
- global network;
- sustainability;
- technology.

### 21.3 Named competitor boundaries

- Do not imitate **H.Essers** as a large asset operator.
- Do not imitate **Gadot** as chemical infrastructure / asset heavy.
- Do not imitate **sennder** as a digital freight platform.
- Do not imitate **AsstrA** as an everything-everywhere catalogue.

These references are strategic boundaries, not copy for the public website. Do not mention competitors on the homepage.

---

## 22. Nunner → Holsen migration

The transition may carry valuable search authority, backlinks, brand queries and buyer recognition. Do not treat the new brand as a clean-slate domain move until the following are audited.

### 22.1 Client decisions required

- Can Holsen publicly say **“formerly Nunner Logistics Lithuania”** or an equivalent?
- Does Holsen want continuity or full separation from the Nunner name?
- Which old Nunner URLs, subdomains, profiles or listings were controlled by the Lithuanian entity?
- Can redirects from old URLs be implemented?
- Who controls the old domain, Google Business Profile, directories and backlinks?
- Is there legal wording governing the brand transition?

### 22.2 Migration actions — STRATEGIC RECOMMENDATION

1. Inventory old indexable URLs and inbound links relevant to the Lithuanian office.
2. Map every valuable old URL to the closest equivalent Holsen URL.
3. Use one-hop permanent redirects where control exists; avoid redirecting everything blindly to the homepage.
4. Preserve relevant page intent and copy coverage on destination pages.
5. Update canonicals, XML sitemaps, internal links, social profiles, directories and key backlinks.
6. Verify old and new properties in Search Console where possible.
7. Monitor indexation, top landing pages, backlinks, 404s, branded queries and organic conversions.
8. Keep any public transition note factual, time-bounded and legally approved.
9. Do not mark unrelated legacy Nunner content as Holsen content.

If no old domain or URL control exists, document that constraint and focus on entity consistency, earned-link updates and clear brand-transition communication where approved.

---

## 23. Current scope and phase boundaries

### 23.1 In scope now

- homepage implementation;
- global header and footer needed by the homepage;
- responsive homepage states;
- homepage SEO metadata and structured-data foundation;
- homepage accessibility;
- homepage analytics hooks;
- placeholders clearly blocked from production publication;
- reusable primitives only where directly required by the homepage.

### 23.2 Defined strategically but not to be built now without instruction

- internal Service pages;
- internal Industry pages;
- Why Holsen (including company overview), Contact and carrier pages;
- Insights archive and articles;
- Resources / ESG landing template;
- full Request a Quote workflow and back-end integration;
- careers mini-site;
- corridor landing pages;
- multilingual content;
- production AI image or video library;
- CRM and lead routing;
- final migration execution.

### 23.3 Client checkpoint

Before expanding the implementation, present and obtain direction on:

1. web strategy: long-term partnerships, international growth and procurement trust;
2. sitemap and SEO/GEO content system;
3. homepage narrative, copy and proof needs;
4. Structured Movement visual direction;
5. exact validation list and content owners.

---

## 24. Client validation checklist

These items do not block structural prototyping, but they block factual publication.

### Brand and transition

- approved public description of the Nunner separation;
- permission to use “formerly Nunner Logistics Lithuania” or equivalent;
- old domain / URL / backlink access;
- official Holsen legal entity name, address and registration details;
- approved logo files, favicons and social profiles.

### Commercial priorities

- highest-value geographies and corridors;
- priority services by growth and margin;
- priority industries;
- contractual versus spot enquiry policy;
- disqualifying or unsupported enquiry types.

Provisional authority hypothesis to confirm:

- Road Freight;
- Contract Logistics;
- ADR / Chemicals;
- other modes as evidence of A–Z capability.

### Coverage and capacity

- exact countries and corridors served;
- owned assets versus subcontracted / partner capacity;
- fleet, carrier network or warehouse numbers, if public;
- local distribution and warehousing coverage;
- operational hours and escalation model.

### Compliance and operations

- real certifications and issuing bodies;
- ADR classes, exclusions and responsible legal entities;
- exact dangerous-goods warehousing capability;
- temperature-control capability;
- customs licences / services;
- insurance and risk statements allowed publicly;
- financial-stability proof that may be shared.

### Technology and sustainability

- EDI formats, messages, systems and implementation process;
- tracking / visibility product and support model;
- availability of client portal or API;
- CO₂ calculation standard, methodology, scope and reporting frequency;
- ESG report status and approved claims.

### Performance proof

- SLA / OTIF definitions, periods and verified values;
- shipment, tonnage, customer, country and partner counts;
- client relationship duration;
- permitted client logos and approvals;
- 2–3 case studies with challenge, complexity, solution and result;
- approved testimonials, names and roles if used.

### RFQ and data

- form fields and qualification criteria;
- CRM / mailbox / system destination;
- lead owner and routing;
- response expectations;
- autoresponder;
- privacy wording, retention and consent;
- analytics and consent platform;
- definition of a qualified RFQ.

### Content governance

- content owners and subject-matter experts;
- legal / compliance reviewer;
- approval workflow;
- review dates for services, coverage, FAQ and comparison content;
- expert author profiles for Insights.

---

## 25. Acceptance criteria for homepage implementation

The homepage is ready for review only when:

- the v1.1 positioning appears unchanged;
- all 13 sections are represented in the agreed order unless explicitly changed;
- proof placeholders remain visibly flagged and technically blocked from accidental production release;
- no invented operational fact appears as public copy;
- layout follows the Design System and Structured Movement direction;
- page is not a generic logistics card template;
- semantic heading and landmark structure is valid;
- keyboard and screen-reader-critical paths work;
- contrast, reflow, zoom, focus, motion and target-size requirements are checked;
- comparison is a semantic table;
- FAQ is accessible and answer-first;
- images are optimised, sized and correctly described;
- reduced-motion handling exists;
- performance is tested against Core Web Vitals targets;
- metadata, canonical, crawlability and homepage JSON-LD are correct and factual;
- internal links have descriptive labels and planned destinations;
- analytics hooks fire once and contain no personal data;
- responsive behaviour is checked at narrow mobile, tablet and desktop sizes;
- there are no broken links, console errors or layout shifts caused by media;
- the client validation list is carried into the release checklist.

---

## 26. External technical references

These references support the implementation rules and should be rechecked when technical requirements change:

- [Google: Optimizing your website for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google: FAQ and HowTo rich-result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Google: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: What’s New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)

---

## 27. Final strategic summary

Holsen should not compete by looking larger, louder or more technological than it is. It should compete by making difficult international logistics feel governed:

> **Complexity becomes structure.  
> Responsibility is visible.  
> Decisions happen faster.  
> Performance is proven.**

That logic must remain consistent across copy, homepage hierarchy, interface, imagery, motion, SEO, AEO, case studies, internal linking and conversion design.
