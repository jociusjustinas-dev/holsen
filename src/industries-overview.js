import "./service-page.js";

// Menu and footer links can reveal a sector before its dedicated page exists.
// Native details remain fully usable without JavaScript.
const revealIndustry = (hash) => {
  if (!hash) return;
  const sector = document.getElementById(hash.slice(1));
  if (!sector?.matches(".industry-directory > details")) return;
  sector.open = true;
};

revealIndustry(window.location.hash);
window.addEventListener("hashchange", () => revealIndustry(window.location.hash));
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const url = new URL(link.href);
  if (url.origin === window.location.origin && url.pathname === window.location.pathname) revealIndustry(url.hash);
});
