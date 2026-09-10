import "./styles.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initHolsenLoops } from "./holsen-loop.js";
import { initMarketsMaps } from "./markets-map.js";

const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navShell = document.querySelector("[data-nav-shell]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

gsap.registerPlugin(ScrollTrigger);
initHolsenLoops();
initMarketsMaps();
root.classList.add("styles-ready");
requestAnimationFrame(() => {
  requestAnimationFrame(() => root.classList.remove("is-booting"));
});

const preloader = document.querySelector("[data-preloader]");
const preloaderLogo = document.querySelector("[data-preloader-logo]");
const preloaderFill = document.querySelector("[data-preloader-fill]");
let pageReady = false;
const pageReadyCallbacks = [];

const whenPageReady = (callback) => {
  if (pageReady) {
    callback();
    return;
  }

  pageReadyCallbacks.push(callback);
};

const finishPreloader = () => {
  if (pageReady) return;

  preloader?.remove();
  body.classList.remove("is-loading");
  pageReady = true;
  pageReadyCallbacks.splice(0).forEach((callback) => callback());
  requestAnimationFrame(() => ScrollTrigger.refresh());
};

if (!preloader) {
  finishPreloader();
} else if (reduceMotion) {
  body.classList.add("is-loading");
  gsap.set(preloaderLogo, { autoAlpha: 1, scale: 1 });
  gsap.set(preloaderFill, { clipPath: "inset(0% 0 0 0)" });
  window.setTimeout(finishPreloader, 650);
} else {
  body.classList.add("is-loading");
  gsap
    .timeline({ onComplete: finishPreloader })
    .fromTo(preloaderLogo, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power2.out" })
    .fromTo(
      preloaderFill,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.15, ease: "power2.inOut" },
      0.18,
    )
    .to(preloaderLogo, { scale: 1.04, duration: 0.35, ease: "power2.inOut" }, "-=0.18")
    .to(preloader, { yPercent: -100, duration: 0.72, ease: "power4.inOut" }, "+=0.14");
}

let lenis = null;

if (!reduceMotion) {
  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    gestureOrientation: "vertical",
    smoothWheel: true,
    syncTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

root.classList.add("reveal-enabled");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeDesktopDropdowns = (exceptButton = null) => {
  document.querySelectorAll("[data-nav-dropdown]").forEach((button) => {
    if (button === exceptButton) return;
    button.setAttribute("aria-expanded", "false");
    const panel = document.getElementById(button.getAttribute("aria-controls"));

    if (panel?._menuTimeline && !reduceMotion) panel._menuTimeline.reverse();
    else panel?.setAttribute("data-open", "false");
  });
};

document.querySelectorAll("[data-nav-dropdown]").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const parent = button.closest(".nav-dropdown");
  const panelInner = panel?.querySelector(".nav-dropdown__inner");
  const panelItems = panel ? gsap.utils.toArray(".nav-dropdown__links a, .nav-dropdown__feature", panel) : [];

  if (panel && panelInner && !reduceMotion) {
    panel._menuTimeline = gsap
      .timeline({
        paused: true,
        defaults: { ease: "power3.inOut" },
        onStart: () => panel.setAttribute("data-open", "true"),
        onReverseComplete: () => panel.setAttribute("data-open", "false"),
      })
      .fromTo(panel, { height: 0 }, { height: "min(68vh, 34rem)", duration: 0.58 }, 0)
      .fromTo(panelInner, { autoAlpha: 0, y: -22 }, { autoAlpha: 1, y: 0, duration: 0.38, ease: "power3.out" }, 0.2)
      .fromTo(panelItems, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.035, ease: "power3.out" }, 0.25);
  }

  const setOpen = (open) => {
    closeDesktopDropdowns(open ? button : null);
    button.setAttribute("aria-expanded", String(open));

    if (!panel) return;
    if (reduceMotion || !panel._menuTimeline) {
      panel.setAttribute("data-open", String(open));
      return;
    }

    if (open) panel._menuTimeline.play();
    else panel._menuTimeline.reverse();
  };

  button.addEventListener("click", (event) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    const usesHover = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 68.01rem)").matches;

    // On desktop the pointer has already opened the menu before the click
    // arrives. Keep it open; keyboard and touch activation still toggle it.
    if (usesHover && event.detail > 0 && isOpen) return;
    setOpen(!isOpen);
  });

  parent?.addEventListener("pointerenter", (event) => {
    if (
      event.pointerType === "mouse" &&
      event.buttons === 0 &&
      window.matchMedia("(min-width: 68.01rem)").matches
    ) {
      setOpen(true);
    }
  });

  parent?.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse" && !parent.contains(document.activeElement)) {
      setOpen(false);
    }
  });

  parent?.addEventListener("focusout", (event) => {
    if (!parent.contains(event.relatedTarget)) setOpen(false);
  });
});

const openMobileMenu = () => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
  mobileMenu.hidden = false;
  menuToggle.querySelector(".menu-toggle__icon")?.classList.replace("ri-menu-line", "ri-close-line");
  body.classList.add("menu-open");
  mobileMenu.querySelector("a, summary, button")?.focus();
};

const closeMobileMenu = ({ restoreFocus = true } = {}) => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  mobileMenu.hidden = true;
  menuToggle.querySelector(".menu-toggle__icon")?.classList.replace("ri-close-line", "ri-menu-line");
  body.classList.remove("menu-open");
  if (restoreFocus) menuToggle.focus();
};

menuToggle?.addEventListener("click", () => {
  if (menuToggle.getAttribute("aria-expanded") === "true") closeMobileMenu();
  else openMobileMenu();
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMobileMenu({ restoreFocus: false }));
});

document.addEventListener("click", (event) => {
  if (navShell && !navShell.contains(event.target)) closeDesktopDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openDropdown = document.querySelector('[data-nav-dropdown][aria-expanded="true"]');
    closeDesktopDropdowns();
    openDropdown?.focus();
    if (menuToggle?.getAttribute("aria-expanded") === "true") closeMobileMenu();
    return;
  }

  if (event.key !== "Tab" || menuToggle?.getAttribute("aria-expanded") !== "true" || !mobileMenu) return;

  const focusable = [menuToggle, ...mobileMenu.querySelectorAll("a, summary, button")].filter(
    (element) => !element.hidden && element.getClientRects().length > 0,
  );
  const first = focusable[0];
  const last = focusable.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
});

window.matchMedia("(min-width: 68.01rem)").addEventListener("change", (event) => {
  if (event.matches && menuToggle?.getAttribute("aria-expanded") === "true") {
    closeMobileMenu({ restoreFocus: false });
  }
});

document.querySelectorAll("[data-accordion-group]").forEach((group) => {
  const buttons = [...group.querySelectorAll("[data-accordion-button]")];

  const setItem = (button, open) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    button.setAttribute("aria-expanded", String(open));
    panel?.setAttribute("data-open", String(open));

    if (open && group.hasAttribute("data-industry-group")) {
      const title = document.querySelector("[data-industry-title]");
      const copy = document.querySelector("[data-industry-copy]");
      if (title) title.textContent = button.dataset.title || "";
      if (copy) copy.textContent = button.dataset.copy || "";
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      buttons.forEach((otherButton) => setItem(otherButton, false));
      setItem(button, willOpen);
    });
  });
});

// Internal templates use the same progressive reveal language as the homepage.
// Existing hand-authored reveal groups keep their own timing; otherwise each
// section's primary content blocks are enhanced automatically.
if (body.hasAttribute("data-page-type")) {
  const addReveal = (item, delay = 0) => {
    if (!item || item.classList.contains("reveal") || item.querySelector(".reveal")) return;
    item.classList.add("reveal");
    if (delay > 0) item.dataset.delay = String(Math.min(delay, 3));
  };

  document
    .querySelectorAll("main > section:not(.service-hero):not(.final-cta) > .site-container")
    .forEach((container) => {
      const blocks = [...container.children].filter(
        (item) => !item.matches(".sr-only, [aria-hidden='true'], .holsen-loop"),
      );

      if (!blocks.length) addReveal(container);
      else blocks.forEach((item, index) => addReveal(item, index));
    });

  document
    .querySelectorAll("main .final-cta__copy, main .carriers-application__intro, main .carriers-form-wrap")
    .forEach((item, index) => addReveal(item, index % 2));
}

const revealItems = [...document.querySelectorAll(".reveal")];
const heroRevealItems = revealItems.filter((item) => item.closest(".hero"));
const scrollRevealItems = revealItems.filter((item) => !item.closest(".hero"));

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  whenPageReady(() => {
    requestAnimationFrame(() => {
      heroRevealItems.forEach((item) => item.classList.add("is-visible"));
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -26%", threshold: 0.12 },
  );

  scrollRevealItems.forEach((item) => revealObserver.observe(item));
}

const servicesMarquees = document.querySelector("[data-services-marquees]");
const servicesForward = servicesMarquees?.querySelector('[data-services-marquee="forward"]');
const servicesReverse = servicesMarquees?.querySelector('[data-services-marquee="reverse"]');

if (servicesMarquees && !servicesMarquees.hidden && servicesForward && servicesReverse && !reduceMotion) {
  const marqueeScroll = {
    trigger: servicesMarquees,
    start: "top bottom",
    end: "bottom top",
    scrub: 2.4,
    invalidateOnRefresh: true,
  };

  const marqueeTravel = () => -Math.min(window.innerWidth * 0.18, 260);

  gsap.fromTo(servicesForward, { x: marqueeTravel }, { x: 0, ease: "none", scrollTrigger: { ...marqueeScroll } });
  gsap.fromTo(servicesReverse, { x: 0 }, { x: marqueeTravel, ease: "none", scrollTrigger: { ...marqueeScroll } });
}

const whyShowcase = document.querySelector("[data-why-showcase]");

if (whyShowcase) {
  const whyTabs = [...whyShowcase.querySelectorAll("[data-why-tab]")];
  const whyPanels = [...whyShowcase.querySelectorAll("[data-why-panel]")];
  const whyImages = [...whyShowcase.querySelectorAll("[data-why-image]")];
  const canHover = window.matchMedia("(hover: hover)");
  let activeWhyIndex = Math.max(0, whyTabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true"));

  const activateWhyItem = (nextIndex, { moveFocus = false } = {}) => {
    if (!whyTabs[nextIndex] || nextIndex === activeWhyIndex) {
      if (moveFocus) whyTabs[nextIndex]?.focus();
      return;
    }

    whyTabs.forEach((tab, index) => {
      const isActive = index === nextIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    whyPanels.forEach((panel, index) => {
      panel.hidden = index !== nextIndex;
    });

    whyImages.forEach((image, index) => {
      const isActive = index === nextIndex;
      image.classList.toggle("is-active", isActive);
    });

    activeWhyIndex = nextIndex;
    if (moveFocus) whyTabs[nextIndex].focus();
  };

  whyTabs.forEach((tab, index) => {
    tab.addEventListener("mouseenter", () => {
      if (canHover.matches) activateWhyItem(index);
    });
    tab.addEventListener("focus", () => activateWhyItem(index));
    tab.addEventListener("click", () => activateWhyItem(index));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % whyTabs.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + whyTabs.length) % whyTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = whyTabs.length - 1;
      if (nextIndex === null) return;

      event.preventDefault();
      activateWhyItem(nextIndex, { moveFocus: true });
    });
  });
}

document.querySelectorAll("[data-industry-tabs]").forEach((widget) => {
  const tabs = [...widget.querySelectorAll('[role="tab"]')];
  const panels = [...widget.querySelectorAll('[role="tabpanel"]')];

  const activateTab = (tab, { moveFocus = false } = {}) => {
    const panelId = tab.getAttribute("aria-controls");

    tabs.forEach((candidate) => {
      const isActive = candidate === tab;
      candidate.setAttribute("aria-selected", String(isActive));
      candidate.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== panelId;
    });

    const activePanel = document.getElementById(panelId);
    const activeMedia = activePanel?.querySelector(".industry-feature__media");
    const activeContent = activePanel ? gsap.utils.toArray(".industry-feature__content > *", activePanel) : [];

    if (!reduceMotion && activePanel) {
      if (activeMedia) {
        gsap.fromTo(activeMedia, { autoAlpha: 0, scale: 1.025 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "power2.out" });
      }

      if (activeContent.length) {
        gsap.fromTo(
          activeContent,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power2.out", clearProps: "opacity,visibility,transform" },
        );
      }
    }

    if (moveFocus) tab.focus();
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = null;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === null) return;

      event.preventDefault();
      activateTab(tabs[nextIndex], { moveFocus: true });
    });
  });
});

document.querySelectorAll("[data-case-carousel]").forEach((viewport) => {
  const section = viewport.closest(".case-section");
  const slides = [...viewport.querySelectorAll("[data-case-slide]")];
  const previousButton = section?.querySelector("[data-case-prev]");
  const nextButton = section?.querySelector("[data-case-next]");
  const status = section?.querySelector("[data-case-status]");
  const itemLabel = viewport.dataset.caseItemLabel || "Stage";
  let activeIndex = -1;
  let scrollFrame = 0;

  const getSlideLeft = (slide) => slide.offsetLeft - viewport.firstElementChild.offsetLeft;

  const setActiveIndex = (index) => {
    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    const changed = nextIndex !== activeIndex;
    activeIndex = nextIndex;
    previousButton?.toggleAttribute("disabled", activeIndex === 0);
    nextButton?.toggleAttribute("disabled", activeIndex === slides.length - 1);

    if (status && changed) {
      status.textContent = `${itemLabel} ${activeIndex + 1} of ${slides.length}`;
    }
  };

  const goToSlide = (index) => {
    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[nextIndex];
    if (!slide) return;

    viewport.scrollTo({
      left: getSlideLeft(slide),
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(nextIndex);
  };

  previousButton?.addEventListener("click", () => goToSlide(activeIndex - 1));
  nextButton?.addEventListener("click", () => goToSlide(activeIndex + 1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    goToSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
  });

  viewport.addEventListener(
    "scroll",
    () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const nearestIndex = slides.reduce((closestIndex, slide, index) => {
          const closestDistance = Math.abs(getSlideLeft(slides[closestIndex]) - viewport.scrollLeft);
          const slideDistance = Math.abs(getSlideLeft(slide) - viewport.scrollLeft);
          return slideDistance < closestDistance ? index : closestIndex;
        }, 0);
        setActiveIndex(nearestIndex);
      });
    },
    { passive: true },
  );

  setActiveIndex(0);
});

const marketsSection = document.querySelector("[data-markets-network]");
const marketsIntro = marketsSection?.querySelector("[data-markets-intro]");
const marketsRegions = marketsSection?.querySelector("[data-markets-regions]");
const marketsMap = marketsSection?.querySelector("[data-markets-map]");

if (marketsSection && marketsIntro && marketsRegions && marketsMap && !reduceMotion) {
  const marketsEyebrow = marketsIntro.querySelector(".eyebrow");
  const marketsTitle = marketsIntro.querySelector(".section-title");
  const marketsBody = marketsIntro.querySelector(".body-copy");
  const marketsCta = marketsIntro.querySelector(".button");

  const marketsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: marketsSection,
      start: "top 66%",
      once: true,
    },
    defaults: { duration: 0.72, ease: "power3.out" },
  });

  marketsTimeline
    .fromTo(marketsMap, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0)
    .fromTo(marketsEyebrow, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, 0.06)
    .fromTo(marketsTitle, { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0 }, 0.14)
    .fromTo(marketsBody, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, 0.24)
    .fromTo(marketsCta, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, 0.32);
}

const parseCountUpValue = (rawValue) => {
  const numericText = rawValue.replace(/[^\d.,]/g, "");
  const decimal = numericText.match(/[.,](\d{1,2})$/);
  const normalized = decimal
    ? `${numericText.slice(0, decimal.index).replace(/[.,]/g, "")}.${decimal[1]}`
    : numericText.replace(/[.,]/g, "");

  return Number.parseFloat(normalized);
};

if (!reduceMotion) {
  document.querySelectorAll("[data-count-up]").forEach((element) => {
    if (element.closest(".proof-section")) return;

    const rawValue = element.textContent.trim();
    const target = parseCountUpValue(rawValue);
    if (!Number.isFinite(target)) return;

    const suffix = rawValue.replace(/[\d,.]/g, "");
    const counter = { value: 0 };
    element.textContent = `0${suffix}`;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          once: true,
        },
      })
      .fromTo(element, { filter: "blur(6px)" }, { filter: "blur(0px)", duration: 2.25, ease: "power2.out" }, 0)
      .to(
        counter,
        {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = `${gsap.utils.snap(1, counter.value).toLocaleString()}${suffix}`;
          },
        },
        0,
      );
  });
}

const proofChart = document.querySelector("[data-proof-chart]");
const proofBarsContainer = proofChart?.querySelector("[data-proof-bars]");
const proofCurveStart = 0;
const proofCurvePoint = (progress) => {
  const curveProgress = Math.max(0, (progress - proofCurveStart) / (1 - proofCurveStart));

  return {
    x: 1000 * progress,
    y: 960 * (1 - curveProgress ** 3.8),
    active: progress >= proofCurveStart,
  };
};

const proofBarCount = 121;
const proofCurvePoints = Array.from({ length: proofBarCount }, (_, index) =>
  proofCurvePoint(index / (proofBarCount - 1)),
);
proofCurvePoints.forEach((point) => {
  const bar = document.createElement("span");
  bar.className = "proof-chart__bar";
  bar.style.setProperty("--bar-height", `${(1000 - point.y) / 10}%`);

  if (!point.active) {
    bar.classList.add("proof-chart__bar--hidden");
  }

  proofBarsContainer?.append(bar);
});

let proofLinePath = null;
let proofLine = null;

if (proofBarsContainer) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  proofLine = document.createElementNS(svgNamespace, "svg");
  proofLinePath = document.createElementNS(svgNamespace, "path");
  const activeProofCurvePoints = proofCurvePoints.filter((point) => point.active);
  const proofLineData = activeProofCurvePoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ");
  const proofCurveStartX = proofCurveStart * 1000;

  proofLine.classList.add("proof-chart__line");
  proofLine.setAttribute("viewBox", `${proofCurveStartX} 0 ${1000 - proofCurveStartX} 1000`);
  proofLine.setAttribute("preserveAspectRatio", "none");
  proofLine.setAttribute("aria-hidden", "true");
  proofLine.style.left = `${proofCurveStart * 100}%`;
  proofLine.style.right = "auto";
  proofLine.style.width = `${(1 - proofCurveStart) * 100}%`;
  proofLinePath.setAttribute("d", proofLineData);
  proofLine.append(proofLinePath);
  proofBarsContainer.append(proofLine);
}

const proofBars = proofBarsContainer
  ? gsap.utils.toArray(".proof-chart__bar:not(.proof-chart__bar--hidden)", proofBarsContainer)
  : [];
const proofSection = proofChart?.closest(".proof-section");
const proofStats = proofSection ? gsap.utils.toArray("[data-proof-stat]", proofSection) : [];
const proofCounters = proofSection ? gsap.utils.toArray("[data-count-up]", proofSection) : [];

if (proofSection && proofChart && proofBars.length && proofStats.length && !reduceMotion) {
  whenPageReady(() => {
    gsap.set(proofStats, { autoAlpha: 0, y: 24 });
    gsap.set(proofBars, { scaleY: 0, transformOrigin: "bottom center" });
    gsap.set(proofLine, { clipPath: "inset(0 100% 0 0)" });

    const counterAnimations = proofCounters
      .map((element) => {
        const rawValue = element.textContent.trim();
        const target = parseCountUpValue(rawValue);
        if (!Number.isFinite(target)) return null;

        const suffix = rawValue.replace(/[\d,.]/g, "");
        const counter = { value: 0 };
        element.textContent = `0${suffix}`;

        return { counter, element, suffix, target };
      })
      .filter(Boolean);

    const proofChartTimeline = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    });

    proofChartTimeline
      .to(proofStats, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0)
      .to(
        proofBars,
        {
          scaleY: 1,
          duration: 1.05,
          stagger: { amount: 1.35, from: "start" },
        },
        0.18,
      )
      .to(
        proofLine,
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.85,
          ease: "power1.inOut",
        },
        0.18,
      );

    counterAnimations.forEach(({ counter, element, suffix, target }, index) => {
      proofChartTimeline.to(
        counter,
        {
          value: target,
          duration: 1.45,
          onUpdate: () => {
            element.textContent = `${gsap.utils.snap(1, counter.value).toLocaleString()}${suffix}`;
          },
        },
        0.06 + index * 0.08,
      );
    });

    let proofAnimationStarted = false;
    const playProofAnimation = () => {
      if (proofAnimationStarted) return;
      proofAnimationStarted = true;
      proofChartTimeline.play(0);
    };

    ScrollTrigger.create({
      trigger: proofSection,
      start: "top 68%",
      once: true,
      onEnter: playProofAnimation,
      onEnterBack: playProofAnimation,
      onRefresh: (trigger) => {
        if (trigger.isActive) playProofAnimation();
      },
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        const proofBounds = proofSection.getBoundingClientRect();
        if (proofBounds.top < window.innerHeight * 0.68 && proofBounds.bottom > 0) {
          playProofAnimation();
        }
      });
    });
  });
}

if (reduceMotion) {
  gsap.set(proofStats, { autoAlpha: 1, y: 0 });
  gsap.set(proofBars, { scaleY: 1, transformOrigin: "bottom center" });

  if (proofLine) {
    gsap.set(proofLine, { clipPath: "inset(0 0% 0 0)" });
  }
}

window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
document.fonts?.ready.then(() => ScrollTrigger.refresh());

const sustainabilitySection = document.querySelector(".sustainability-section");
const sustainabilityImage = sustainabilitySection?.querySelector("[data-sustainability-image]");

if (sustainabilitySection && sustainabilityImage && !reduceMotion) {
  gsap.fromTo(
    sustainabilityImage,
    { yPercent: -3 },
    {
      yPercent: 3,
      ease: "none",
      scrollTrigger: {
        trigger: sustainabilitySection,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    },
  );
}

const finalCtaSection = document.querySelector(".final-cta");
const finalCtaLoop = finalCtaSection?.querySelector(".final-cta__loop");
const finalCtaLoopDashes = finalCtaLoop
  ? gsap.utils.toArray("[data-loop-dash]", finalCtaLoop)
  : [];

if (finalCtaSection && finalCtaLoop && finalCtaLoopDashes.length && !reduceMotion) {
  whenPageReady(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: finalCtaSection,
          start: "top 70%",
          once: true,
        },
      })
      .fromTo(
        finalCtaLoop,
        { autoAlpha: 0, scale: 0.94, xPercent: -2 },
        { autoAlpha: 0.38, scale: 1, xPercent: 0, duration: 1.05, ease: "power3.out" },
        0,
      )
      .fromTo(
        finalCtaLoopDashes,
        { attr: { "stroke-dasharray": 1, "stroke-dashoffset": 1 } },
        {
          attr: { "stroke-dashoffset": 0 },
          duration: 0.62,
          stagger: 0.006,
          ease: "power2.out",
        },
        0.08,
      );
  });
}

const esgForm = document.querySelector("[data-esg-form]");
const esgStatus = esgForm?.querySelector("[data-esg-status]");

esgForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = esgForm.elements.email;
  if (!(email instanceof HTMLInputElement) || !email.validity.valid) {
    esgForm.dataset.state = "error";
    email?.setAttribute("aria-invalid", "true");
    esgStatus.hidden = false;
    esgStatus.textContent = "Enter a valid work email address.";
    email?.focus();
    return;
  }

  esgForm.dataset.state = "pending";
  email.removeAttribute("aria-invalid");
  esgStatus.hidden = false;
  esgStatus.textContent = "Thank you. Report delivery is not active in this frontend preview.";
});

esgForm?.elements.email?.addEventListener("input", (event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) return;
  event.currentTarget.removeAttribute("aria-invalid");
  delete esgForm.dataset.state;
  esgStatus.hidden = true;
  esgStatus.textContent = "";
});

document.querySelectorAll('[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

document.querySelectorAll("[data-event]").forEach((element) => {
  element.addEventListener("click", () => {
    document.dispatchEvent(
      new CustomEvent("holsen:interaction", {
        detail: {
          event: element.dataset.event,
          section: element.closest("section")?.id || "global",
          label: element.textContent.trim(),
        },
      }),
    );
  });
});

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());
