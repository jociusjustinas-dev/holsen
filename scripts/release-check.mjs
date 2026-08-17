import { readFileSync } from "node:fs";

const homepage = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const visibleHomepageText = homepage
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<[^>]+>/g, " ");

const releaseBlockers = [
  { label: "prototype noindex directive", pattern: /name=["']robots["'][^>]*noindex/i },
  { label: "required validation marker", pattern: /data-validation=["']required["']/i },
  { label: "visible validation flag", pattern: /class=["'][^"']*validation-flag/i },
  { label: "client validation copy", pattern: /client to validate/i },
  { label: "not-for-publication copy", pattern: /not for publication/i },
  { label: "bracketed factual placeholder", pattern: /\[[^\]\n]{2,}\]/, source: visibleHomepageText },
];

const activeBlockers = releaseBlockers.filter(({ pattern, source = homepage }) => pattern.test(source));

if (activeBlockers.length > 0) {
  console.error("Release blocked. Resolve these homepage conditions before production:");
  for (const blocker of activeBlockers) console.error(`- ${blocker.label}`);
  process.exit(1);
}

console.log("Release check passed: no known homepage validation markers remain.");
