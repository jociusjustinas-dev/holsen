import "./main.js";

const alignHashTarget = () => {
  const hash = window.location.hash;
  if (!hash || hash === "#") return;

  let targetId;
  try {
    targetId = decodeURIComponent(hash.slice(1));
  } catch {
    targetId = hash.slice(1);
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
  });
};

if (document.readyState === "complete") alignHashTarget();
else window.addEventListener("load", alignHashTarget, { once: true });
window.addEventListener("hashchange", alignHashTarget);

const serviceJump = document.querySelector(".service-jump");

if (serviceJump) {
  const jumpLinks = [...serviceJump.querySelectorAll('a[href^="#"]')];
  const jumpSections = jumpLinks.map((link) => document.querySelector(link.hash));
  let jumpStateFrame = 0;

  const updateJumpState = () => {
    const stickyTop = Number.parseFloat(getComputedStyle(serviceJump).top) || 0;
    // Account for the document's scroll-padding instead of adding header space twice.
    const documentInset = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    document.body.style.setProperty("--jump-anchor-margin", `${Math.max(0, stickyTop + serviceJump.offsetHeight + 8 - documentInset)}px`);
    const isStuck = serviceJump.getBoundingClientRect().top <= stickyTop + 0.5 && window.scrollY > 0;
    serviceJump.classList.toggle("is-stuck", isStuck);
    document.body.classList.toggle("service-jump-active", isStuck);

    const sectionStarts = jumpSections.map((section) => window.scrollY + section.getBoundingClientRect().top);
    const readingPosition = window.scrollY + stickyTop + serviceJump.offsetHeight + 8;
    let activeIndex = 0;

    sectionStarts.forEach((start, index) => {
      if (readingPosition + 1 >= start) activeIndex = index;
    });

    const activeStart = sectionStarts[activeIndex];
    const activeSection = jumpSections[activeIndex];
    const activeEnd = sectionStarts[activeIndex + 1]
      ?? window.scrollY + activeSection.getBoundingClientRect().bottom;
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
  window.addEventListener("scroll", requestJumpStateUpdate, { passive: true });
  window.addEventListener("resize", requestJumpStateUpdate);
  window.addEventListener("load", requestJumpStateUpdate);
  window.addEventListener("hashchange", requestJumpStateUpdate);
}

// Native details retain keyboard, touch and no-JavaScript support.
document.querySelectorAll("[data-service-accordion] details").forEach((item) => {
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
