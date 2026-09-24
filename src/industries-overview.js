// Menu and footer links can reveal a sector before its dedicated page exists.
// Native details remain fully usable without JavaScript.
export const initIndustriesOverview = (scope = document) => {
const revealIndustry = (hash) => {
  if (!hash) return;
  const sector = scope.querySelector(`#${CSS.escape(hash.slice(1))}`);
  if (!sector?.matches(".industry-accordion > details")) return;
  sector.open = true;
};

revealIndustry(window.location.hash);
const handleHashChange = () => revealIndustry(window.location.hash);
const handleClick = (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  const url = new URL(link.href);
  if (url.origin === window.location.origin && url.pathname === window.location.pathname) revealIndustry(url.hash);
};
window.addEventListener("hashchange", handleHashChange);
scope.addEventListener("click", handleClick);
const items = [...scope.querySelectorAll(".industry-accordion > details")];
const handleToggle = (event) => {
  const item = event.currentTarget;
  if (!item.open) return;
  items.forEach((other) => {
    if (other !== item) other.open = false;
  });
};
items.forEach((item) => item.addEventListener("toggle", handleToggle));
return () => {
  window.removeEventListener("hashchange", handleHashChange);
  scope.removeEventListener("click", handleClick);
  items.forEach((item) => item.removeEventListener("toggle", handleToggle));
};
};
