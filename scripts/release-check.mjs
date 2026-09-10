import { readFileSync } from "node:fs";

const pagePaths = ["index.html", "services/index.html", "services/road-freight/index.html", "industries/chemicals/index.html", "industries/index.html", "why-holsen/index.html", "insights/index.html", "insights/road-vs-rail-freight-europe/index.html", "for-carriers/index.html", "contact/index.html", "request-a-quote/index.html", "privacy-policy/index.html"];

const releaseBlockers = [
  { label: "prototype noindex directive", pattern: /name=["']robots["'][^>]*noindex/i },
  { label: "required validation marker", pattern: /data-validation=["']required["']/i },
  { label: "visible validation flag", pattern: /class=["'][^"']*validation-flag/i },
  { label: "client validation copy", pattern: /client to validate/i },
  { label: "not-for-publication copy", pattern: /not for publication/i },
  { label: "unapproved page draft", pattern: /data-content-status=["']draft["']/i },
  { label: "prototype article cross-links", pattern: /data-example-article-link/i },
  { label: "prototype contact details", pattern: /data-prototype-contact/i },
  { label: "prototype company registration details", pattern: /data-prototype-company/i },
  { label: "prototype compliance records", pattern: /data-prototype-compliance/i },
  { label: "bracketed factual placeholder", pattern: /\[[^\]\n]{2,}\]/, visibleOnly: true },
];

const activeBlockers = pagePaths.flatMap((path) => {
  const html = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const visibleText = html
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  return releaseBlockers.filter(({ pattern, visibleOnly }) => pattern.test(visibleOnly ? visibleText : html))
    .map(({ label }) => `${path}: ${label}`);
});

if (activeBlockers.length > 0) {
  console.error("Release blocked. Resolve these page conditions before production:");
  for (const blocker of activeBlockers) console.error(`- ${blocker}`);
  process.exit(1);
}

console.log("Release check passed: no known page validation markers remain.");
