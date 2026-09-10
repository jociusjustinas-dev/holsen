export const initServicePage = (scope = document, scrollRoot = window) => {
const cleanups = [];
const getScrollTop = () => scrollRoot === window ? window.scrollY : scrollRoot.scrollTop;
const getScrollRootTop = () => scrollRoot === window ? 0 : scrollRoot.getBoundingClientRect().top;

const alignHashTarget = () => {
  const hash = window.location.hash;
  if (!hash || hash === "#") return;

  let targetId;
  try {
    targetId = decodeURIComponent(hash.slice(1));
  } catch {
    targetId = hash.slice(1);
  }

  const target = scope.querySelector(`#${CSS.escape(targetId)}`);
  if (!target) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
  });
};

alignHashTarget();
window.addEventListener("hashchange", alignHashTarget);
cleanups.push(() => window.removeEventListener("hashchange", alignHashTarget));

const serviceJump = scope.querySelector(".service-jump");

if (serviceJump) {
  const jumpLinks = [...serviceJump.querySelectorAll('a[href^="#"]')];
  const jumpSections = jumpLinks.map((link) => scope.querySelector(link.hash)).filter(Boolean);
  let jumpStateFrame = 0;

  const updateJumpState = () => {
    const stickyTop = Number.parseFloat(getComputedStyle(serviceJump).top) || 0;
    // Account for the document's scroll-padding instead of adding header space twice.
    const documentInset = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    document.body.style.setProperty("--jump-anchor-margin", `${Math.max(0, stickyTop + serviceJump.offsetHeight + 8 - documentInset)}px`);
    const scrollTop = getScrollTop();
    const scrollRootTop = getScrollRootTop();
    const isStuck = serviceJump.getBoundingClientRect().top <= scrollRootTop + stickyTop + 0.5 && scrollTop > 0;
    serviceJump.classList.toggle("is-stuck", isStuck);
    document.body.classList.toggle("service-jump-active", isStuck);

    const sectionStarts = jumpSections.map((section) => scrollTop + section.getBoundingClientRect().top - scrollRootTop);
    const readingPosition = scrollTop + stickyTop + serviceJump.offsetHeight + 8;
    let activeIndex = 0;

    sectionStarts.forEach((start, index) => {
      if (readingPosition + 1 >= start) activeIndex = index;
    });

    const activeStart = sectionStarts[activeIndex];
    const activeSection = jumpSections[activeIndex];
    const activeEnd = sectionStarts[activeIndex + 1]
      ?? scrollTop + activeSection.getBoundingClientRect().bottom - scrollRootTop;
    const progress = Math.min(1, Math.max(0, (readingPosition - activeStart) / Math.max(1, activeEnd - activeStart)));

    jumpLinks.forEach((link, index) => {
      if (index === activeIndex) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");

      const linkProgress = index < activeIndex ? 1 : index === activeIndex ? progress : 0;
      link.style.setProperty("--section-progress", `${linkProgress * 100}%`);
    });

    jumpStateFrame = 0;
  };

  const requestJumpStateUpdate = () => {
    if (jumpStateFrame) return;
    jumpStateFrame = window.requestAnimationFrame(updateJumpState);
  };

  updateJumpState();
  scrollRoot.addEventListener("scroll", requestJumpStateUpdate, { passive: true });
  window.addEventListener("resize", requestJumpStateUpdate);
  window.addEventListener("hashchange", requestJumpStateUpdate);
  cleanups.push(() => {
    scrollRoot.removeEventListener("scroll", requestJumpStateUpdate);
    window.removeEventListener("resize", requestJumpStateUpdate);
    window.removeEventListener("hashchange", requestJumpStateUpdate);
    if (jumpStateFrame) cancelAnimationFrame(jumpStateFrame);
    document.body.classList.remove("service-jump-active");
  });
}

// Native details retain keyboard, touch and no-JavaScript support.
scope.querySelectorAll("[data-service-accordion] details").forEach((item) => {
  item.querySelector("summary").addEventListener("click", () => {
    // Native keyboard activation also dispatches click; initial open state does not.
    const faqSection = item.closest("#road-faq, #services-faq, [data-industry-faq], [data-page-faq]");
    if (item.open || !faqSection) return;
    document.dispatchEvent(new CustomEvent("holsen:interaction", {
      detail: {
        event: "faq_expand",
        page_type: document.body.dataset.pageType || "service",
        ...(faqSection.id === "road-faq" ? { service: "Road Freight" } : {}),
        ...(document.body.dataset.industry ? { industry: document.body.dataset.industry } : {}),
        section: faqSection.id,
        label: item.querySelector("h3").textContent.trim(),
      },
    }));
  });
});

return () => cleanups.splice(0).forEach((cleanup) => cleanup());
};
