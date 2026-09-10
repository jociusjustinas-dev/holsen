// Progressive enhancement: without JavaScript every topic link remains available.
export const initInsightsPage = (scope = document) => {
const filterBar = scope.querySelector("[data-insights-filters]");
if (filterBar) {
  const buttons = [...filterBar.querySelectorAll("[data-topic]")];
  const cards = [...scope.querySelectorAll("[data-insights-topic]")];
  const count = filterBar.querySelector("[data-insights-count]");
  const topics = new Set(buttons.map((button) => button.dataset.topic));

  const applyFilter = (topic) => {
    const selected = topics.has(topic) ? topic : "all";
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.topic === selected)));
    let visibleCount = 0;
    cards.forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.insightsTopic !== selected;
      if (!card.hidden) visibleCount += 1;
    });
    const label = buttons.find((button) => button.dataset.topic === selected).textContent.trim();
    count.textContent = `${visibleCount} planned ${visibleCount === 1 ? "guide" : "guides"}${selected === "all" ? "" : ` · ${label}`}`;
  };

  buttons.forEach((button) => button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    const url = new URL(window.location.href);
    if (topic === "all") url.searchParams.delete("topic");
    else url.searchParams.set("topic", topic);
    if (url.href !== window.location.href) window.history.pushState(null, "", url);
    applyFilter(topic);
  }));
  const restoreFilter = () => applyFilter(new URL(window.location.href).searchParams.get("topic"));
  window.addEventListener("popstate", restoreFilter);
  restoreFilter();
  filterBar.hidden = false;

  const scrollToRequestedLibrary = () => {
    if (window.location.hash !== "#insights-library") return;
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scope.querySelector("#insights-library")?.scrollIntoView({ block: "start" });
      });
    });
  };

  if (document.body.classList.contains("is-loading")) {
    const loadingObserver = new MutationObserver(() => {
      if (document.body.classList.contains("is-loading")) return;
      loadingObserver.disconnect();
      scrollToRequestedLibrary();
    });
    loadingObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  } else {
    scrollToRequestedLibrary();
  }
  return () => window.removeEventListener("popstate", restoreFilter);
}
return () => {};
};
