// Highlight the section at the reading line. The content and anchors stay native.
export const initInsightArticle = (scope = document, scrollRoot = window) => {
const toc = scope.querySelector("[data-article-toc]");
if (toc) {
  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) => scope.querySelector(`#${CSS.escape(link.hash.slice(1))}`)).filter(Boolean);
  let frame = 0;
  const update = () => {
    frame = 0;
    const header = document.querySelector(".nav-shell");
    const readingLine = (header?.getBoundingClientRect().bottom || 0) + 60;
    let active = 0;
    sections.forEach((section, index) => { if (section.getBoundingClientRect().top <= readingLine) active = index; });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  scrollRoot.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  document.addEventListener("toggle", schedule, true);
  update();
  return () => {
    scrollRoot.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    document.removeEventListener("toggle", schedule, true);
    if (frame) cancelAnimationFrame(frame);
  };
}
return () => {};
};
