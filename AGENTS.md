# Holsen Logistics — Codex Working Rules

These instructions apply to the Holsen Logistics commercial website repository.

## 1. Read before acting

Before planning or changing code:

1. Read `HOLSEN-WEB-STRATEGY.md` completely.
2. Find and read the original Holsen Design System completely or the relevant approved source files.
3. Inspect the existing codebase, components, tokens, assets, routes and current uncommitted changes.

If the strategy and an older draft conflict, `HOLSEN-WEB-STRATEGY.md` v1.1 wins. If the strategy and the exact visual tokens conflict, preserve the strategy and use the approved Design System token values.

## 2. Current scope

The current build scope is the **English commercial homepage only**, including only the header, footer and reusable primitives required by it. The target CMS is **WordPress**; do not replace it without explicit instruction.

Do not implement internal Service, Industry, About, Why Holsen, Contact, Insight, Resource, Careers or corridor pages; CRM integrations; multilingual content; a full production RFQ backend; an interactive markets map; or a carrier portal unless explicitly requested. A future carrier portal is an external-link concept only, not a current integration.

## 3. Locked strategic decisions

Do not change, reinterpret or “improve” without explicit instruction:

- positioning: **Complex logistics. Clear decisions.**
- the v1.1 differentiation: complexity, ownership, decision speed, operational expertise and proof;
- approved homepage section order;
- approved English copy;
- service and industry taxonomy;
- CTA hierarchy;
- Structured Movement visual direction.

Do not restore older generic positioning or pillars such as Customer First, Tailored Solutions, Operational Excellence, Global Network or Sustainability as primary differentiators.

## 4. Factual integrity

Anything in brackets or labelled `CLIENT TO VALIDATE`, `NOT FOR PUBLICATION`, `PLACEHOLDER` or equivalent is not a fact.

- Never publish, unflag or silently normalise placeholder metrics.
- Never invent certifications, SLA / OTIF values, shipment counts, countries, corridors, client names, logos, EDI capability, tracking, CO₂ reporting, ADR scope, case-study outcomes, offices, fleet or warehouses.
- Never imply partner capacity is owned by Holsen.
- If a factual claim lacks evidence, keep it visibly marked for validation or omit it from production.
- Add a release-blocking validation mechanism for placeholder content where practical.

## 5. Content rules

- Preserve the approved English context and meaning.
- Use answer-first, specific B2B language.
- Every claim must be a fact, an explainable capability or a defensible point of view.
- Avoid unsupported adjectives such as innovative, leading, seamless, world-class, trusted and best-in-class.
- Use descriptive CTA and link labels; avoid generic “Read more”.
- Do not create SEO filler, thin location pages or generic AI-written logistics copy.

## 6. Design rules

- Follow the Holsen Design System exactly for logo, colour, typography, grid, spacing and Holsen Loop usage.
- Encode its approved values as reusable design tokens: Orange `#F1541C`, Core Black `#000000`, Soft White `#F7F7F7`, Carbon `#202729`, Grey `#909495`, Light Grey `#C8C8C8`, White `#FFFFFF`, and Mona Sans. Do not invent additional brand tokens.
- Preserve brandmark roles, exclusion zones and approved artwork. Do not redraw, retype, stretch, rotate, crop or recolour the marks.
- Preserve the Holsen Loop's circular origin, thin regular dash rhythm and unshaded construction; no warping, gradients or extra effects.
- Direction: information-led editorial logistics brand; strong typography, structured 6/12-column logic, operational data, selective orange, controlled movement.
- Prefer fewer information-rich modules over repetitive card grids.
- Avoid generic logistics UI: blue gradients, globe or map spectacle, full-screen truck hero, generic icon grids, glass dashboards and glowing routes.
- Avoid AI slop. Synthetic visuals must not imply real assets, employees, clients or results.

## 7. Semantic HTML, SEO and AEO

- Use semantic landmarks and one H1.
- Keep heading order logical; never use headings only for styling.
- Essential copy, links, FAQ and comparison data must exist as crawlable HTML.
- Use real anchor elements with descriptive text.
- Use a semantic table for comparisons.
- Add only factual, visible JSON-LD: `Organization`, `WebSite` and other relevant types described in the strategy.
- Structured data must match visible copy exactly.
- Provide metadata, canonical URL, indexability and internal-link hooks.
- Do not treat FAQ schema or `llms.txt` as ranking hacks. Do not promise SEO or AI-search outcomes.
- Prepare for future localisation, but do not add inactive languages or `hreflang` without real translated URLs.

## 8. Accessibility

Target **WCAG 2.2 AA**.

- All functions must work with keyboard and touch.
- Use native elements before ARIA.
- Provide a skip link, visible focus, correct focus order and focus management.
- Ensure focus is not obscured by sticky UI.
- Meet text and non-text contrast requirements.
- Support zoom, reflow and text-spacing overrides.
- Provide visible labels, programmatic errors and accessible status messages in forms.
- FAQ buttons need correct expanded state and panel relationships.
- Meaningful images need useful alt text; decorative visuals need empty alt.
- Respect `prefers-reduced-motion`; never make animation essential.
- Avoid drag-only, hover-only and scroll-jacking interactions.
- Aim for 44 × 44 px primary touch controls and never violate the WCAG 24 × 24 minimum / spacing rule.

## 9. Performance

Protect Core Web Vitals at the 75th percentile:

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

Optimise responsive images and fonts, reserve media dimensions, minimise JavaScript and third-party scripts, and prefer transform / opacity motion. Do not lazy-load the likely LCP image. Performance takes precedence over decorative animation.

## 10. Analytics and privacy

- Implement only the events defined or approved in the strategy.
- Never send personal data, email, free text or sensitive shipment details to analytics.
- Distinguish RFQ click, start, submit attempt and confirmed success.
- A qualified RFQ requires agreed sales / CRM criteria; do not infer it from a browser event.
- Respect consent requirements before non-essential tracking.

## 11. Working method

For each requested change:

1. Inspect relevant code and source documents.
2. State any consequential assumption.
3. Make the smallest coherent change within scope.
4. Preserve unrelated user changes.
5. Validate desktop and mobile rendering.
6. Test keyboard flow, focus, reduced motion, contrast-sensitive states and accessible names.
7. Check semantic structure, metadata, links, structured data and placeholder safety.
8. Check build / tests and performance in proportion to risk.
9. Report exactly what changed, what was verified and what still requires client validation.

Do not expand scope, replace approved strategy or manufacture missing business facts to make the page look complete.
