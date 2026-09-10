import { geoDistance, geoInterpolate, geoOrthographic, geoPath } from "d3-geo";
import { gsap } from "gsap";
import { feature, mesh } from "topojson-client";
import worldTopology from "world-atlas/countries-110m.json";

const worldLand = feature(worldTopology, worldTopology.objects.land);
const countryBorders = mesh(worldTopology, worldTopology.objects.countries, (a, b) => a !== b);
const HALF_PI = Math.PI / 2;
const START_VIEW = { longitude: 22, latitude: 39, zoom: 1 };
const END_VIEW = { longitude: 72, latitude: 34, zoom: 1.4 };
const MAP_VARIANTS = {
  "dark-flat": {
    outlineAlpha: 0.14,
    landAlpha: 0.78,
    textureAlpha: 0.055,
    borderAlpha: 0.1,
    routeAlpha: 0.38,
    routeWidth: 1,
    landTone: "carbon",
    textureTone: "white",
  },
  "brand-contrast": {
    outlineAlpha: 0.18,
    landAlpha: 0.36,
    textureAlpha: 0.1,
    borderAlpha: 0.24,
    routeAlpha: 0.66,
    routeWidth: 1.15,
    landTone: "grey",
    textureTone: "light-grey",
  },
  "brand-aura": {
    outlineAlpha: 0.58,
    landAlpha: 0.46,
    textureAlpha: 0.095,
    borderAlpha: 0.3,
    routeAlpha: 0.64,
    routeWidth: 1.1,
    landTone: "grey",
    textureTone: "light-grey",
    aura: true,
  },
  "brand-ember": {
    outlineAlpha: 0.18,
    globeAlpha: 0.42,
    landAlpha: 1,
    textureAlpha: 0.045,
    borderAlpha: 0.68,
    routeAlpha: 0.72,
    routeWidth: 1.1,
    routeTone: "white",
    globeTone: "carbon",
    landTone: "orange",
    textureTone: "black",
    borderTone: "black",
    landShade: true,
    topAura: true,
  },
};

const makeRoute = (origin, destination) => {
  const interpolate = geoInterpolate(origin, destination);
  return Array.from({ length: 65 }, (_, index) => interpolate(index / 64));
};

const initialiseMap = (stage, { scrollRoot = null } = {}) => {
  if (stage.dataset.marketsMapReady === "true") return () => {};
  const canvas = stage.querySelector("[data-markets-map-canvas]");
  const pins = [...stage.querySelectorAll("[data-markets-map-pin]")];
  const context = canvas?.getContext("2d");
  if (!canvas || !context || pins.length < 2) return () => {};

  const baseMapCanvas = document.createElement("canvas");
  const baseMapContext = baseMapCanvas.getContext("2d");
  if (!baseMapContext) return () => {};
  stage.dataset.marketsMapReady = "true";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const computedRoot = window.getComputedStyle(document.documentElement);
  const accent = computedRoot.getPropertyValue("--color-holsen-orange").trim() || "#F1541C";
  const coreBlack = computedRoot.getPropertyValue("--color-core-black").trim() || "#000000";
  const foreground = computedRoot.getPropertyValue("--color-functional-white").trim() || "#FFFFFF";
  const carbon = computedRoot.getPropertyValue("--color-carbon").trim() || "#202729";
  const grey = computedRoot.getPropertyValue("--color-grey").trim() || "#909495";
  const lightGrey = computedRoot.getPropertyValue("--color-light-grey").trim() || "#C8C8C8";
  const visual = MAP_VARIANTS[stage.dataset.mapVariant] || MAP_VARIANTS["dark-flat"];

  const locations = pins.map((pin) => ({
    longitude: Number.parseFloat(pin.dataset.longitude),
    latitude: Number.parseFloat(pin.dataset.latitude),
  }));

  if (locations.some(({ longitude, latitude }) => !Number.isFinite(longitude) || !Number.isFinite(latitude))) return;

  const routes = locations.slice(1).map((location, index) => ({
    coordinates: makeRoute(
      [locations[0].longitude, locations[0].latitude],
      [location.longitude, location.latitude],
    ),
    phase: (index + 1) / locations.length,
  }));

  const view = {
    longitude: reduceMotion ? (START_VIEW.longitude + END_VIEW.longitude) / 2 : START_VIEW.longitude,
    latitude: reduceMotion ? (START_VIEW.latitude + END_VIEW.latitude) / 2 : START_VIEW.latitude,
    zoom: reduceMotion ? 1.1 : START_VIEW.zoom,
  };

  let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let radius = 0;
  let centerX = 0;
  let centerY = 0;
  let hoveredIndex = -1;
  let animationFrame = 0;
  let resizeTimer = 0;
  let isVisible = false;

  const projection = geoOrthographic().clipAngle(90).precision(0.45);
  const mapPath = geoPath(projection).context(baseMapContext);
  const routePath = geoPath(projection).context(context);
  const getGlobeCenterY = () => centerY + radius * (view.zoom - 1);

  const updateProjection = () => {
    projection
      .translate([centerX, getGlobeCenterY()])
      .scale(radius * view.zoom)
      .rotate([-view.longitude, -view.latitude, 0]);
  };

  const isOnFront = (coordinate) => geoDistance([view.longitude, view.latitude], coordinate) < HALF_PI - 0.035;

  const updatePins = () => {
    locations.forEach((location, index) => {
      const pin = pins[index];
      const coordinate = [location.longitude, location.latitude];
      const position = projection(coordinate);
      const isVisibleOnGlobe = Boolean(position) && isOnFront(coordinate);

      if (position) {
        pin.style.setProperty("--map-x", `${(position[0] / width) * 100}%`);
        pin.style.setProperty("--map-y", `${(position[1] / height) * 100}%`);
      }

      pin.toggleAttribute("data-map-hidden", !isVisibleOnGlobe);
      pin.tabIndex = isVisibleOnGlobe ? 0 : -1;
    });
  };

  const drawBaseMap = () => {
    baseMapContext.setTransform(1, 0, 0, 1, 0, 0);
    baseMapContext.clearRect(0, 0, baseMapCanvas.width, baseMapCanvas.height);
    baseMapContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    updateProjection();
    const globeRadius = radius * view.zoom;
    const globeCenterY = getGlobeCenterY();

    baseMapContext.beginPath();
    baseMapContext.arc(centerX, globeCenterY, globeRadius, 0, Math.PI * 2);
    baseMapContext.fillStyle = visual.globeTone === "carbon" ? carbon : coreBlack;
    baseMapContext.globalAlpha = visual.globeAlpha ?? 1;
    baseMapContext.fill();
    baseMapContext.save();
    baseMapContext.strokeStyle = visual.aura ? accent : grey;
    baseMapContext.globalAlpha = visual.outlineAlpha;
    baseMapContext.lineWidth = visual.aura ? 1.15 : 0.75;
    if (visual.aura) {
      baseMapContext.shadowColor = accent;
      baseMapContext.shadowBlur = 14;
    }
    baseMapContext.stroke();
    baseMapContext.restore();

    baseMapContext.beginPath();
    mapPath(worldLand);
    baseMapContext.fillStyle = visual.landTone === "orange" ? accent : visual.landTone === "grey" ? grey : carbon;
    baseMapContext.globalAlpha = visual.landAlpha;
    baseMapContext.fill();

    baseMapContext.save();
    baseMapContext.beginPath();
    mapPath(worldLand);
    baseMapContext.clip();
    baseMapContext.fillStyle = visual.textureTone === "black"
      ? coreBlack
      : visual.textureTone === "light-grey"
        ? lightGrey
        : foreground;
    baseMapContext.globalAlpha = visual.textureAlpha;

    let seed = 2166136261;
    const random = () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };
    const texturePoints = Math.round((Math.PI * globeRadius * globeRadius) / 115);
    for (let index = 0; index < texturePoints; index += 1) {
      const angle = random() * Math.PI * 2;
      const distance = Math.sqrt(random()) * globeRadius;
      const size = random() > 0.9 ? 1.1 : 0.65;
      baseMapContext.fillRect(
        centerX + Math.cos(angle) * distance,
        globeCenterY + Math.sin(angle) * distance,
        size,
        size,
      );
    }
    baseMapContext.restore();

    baseMapContext.beginPath();
    mapPath(countryBorders);
    baseMapContext.save();
    baseMapContext.strokeStyle = visual.borderTone === "black" ? coreBlack : visual.aura ? accent : lightGrey;
    baseMapContext.globalAlpha = visual.borderAlpha;
    baseMapContext.lineWidth = visual.aura ? 0.75 : 0.55;
    if (visual.aura) {
      baseMapContext.shadowColor = accent;
      baseMapContext.shadowBlur = 5;
    }
    baseMapContext.stroke();
    baseMapContext.restore();

    if (visual.landShade) {
      const landShade = baseMapContext.createRadialGradient(
        centerX - globeRadius * 0.32,
        globeCenterY - globeRadius * 0.5,
        globeRadius * 0.04,
        centerX - globeRadius * 0.08,
        globeCenterY + globeRadius * 0.08,
        globeRadius * 1.18,
      );
      landShade.addColorStop(0, "rgba(0, 0, 0, 0)");
      landShade.addColorStop(0.52, "rgba(0, 0, 0, 0.08)");
      landShade.addColorStop(0.78, "rgba(0, 0, 0, 0.38)");
      landShade.addColorStop(1, "rgba(0, 0, 0, 0.76)");
      baseMapContext.save();
      baseMapContext.beginPath();
      mapPath(worldLand);
      baseMapContext.clip();
      baseMapContext.globalAlpha = 1;
      baseMapContext.fillStyle = landShade;
      baseMapContext.fillRect(centerX - globeRadius, globeCenterY - globeRadius, globeRadius * 2, globeRadius * 2);
      baseMapContext.restore();
    }

    if (visual.topAura) {
      const auraGradient = baseMapContext.createLinearGradient(
        centerX - globeRadius,
        globeCenterY - globeRadius,
        centerX + globeRadius,
        globeCenterY - globeRadius * 0.45,
      );
      auraGradient.addColorStop(0, "rgba(241, 84, 28, 0.05)");
      auraGradient.addColorStop(0.2, "rgba(241, 84, 28, 0.42)");
      auraGradient.addColorStop(0.46, "rgba(241, 84, 28, 0.9)");
      auraGradient.addColorStop(0.7, "rgba(241, 84, 28, 0.46)");
      auraGradient.addColorStop(1, "rgba(241, 84, 28, 0.08)");

      baseMapContext.save();
      baseMapContext.beginPath();
      baseMapContext.arc(centerX, globeCenterY, globeRadius, Math.PI * 1.03, Math.PI * 1.97);
      baseMapContext.globalAlpha = 1;
      baseMapContext.strokeStyle = auraGradient;
      baseMapContext.lineWidth = 1.45;
      baseMapContext.shadowColor = accent;
      baseMapContext.shadowBlur = 18;
      baseMapContext.stroke();
      baseMapContext.restore();
    }

    if (visual.aura) {
      const landLight = baseMapContext.createRadialGradient(
        centerX - globeRadius * 0.34,
        globeCenterY - globeRadius * 0.36,
        0,
        centerX - globeRadius * 0.22,
        globeCenterY - globeRadius * 0.2,
        globeRadius * 0.9,
      );
      landLight.addColorStop(0, "rgba(241, 84, 28, 0.11)");
      landLight.addColorStop(0.52, "rgba(241, 84, 28, 0.035)");
      landLight.addColorStop(1, "rgba(241, 84, 28, 0)");
      baseMapContext.save();
      baseMapContext.beginPath();
      mapPath(worldLand);
      baseMapContext.clip();
      baseMapContext.fillStyle = landLight;
      baseMapContext.globalAlpha = 1;
      baseMapContext.fillRect(centerX - globeRadius, globeCenterY - globeRadius, globeRadius * 2, globeRadius * 2);
      baseMapContext.restore();
    }

    baseMapContext.globalAlpha = 1;
    updatePins();
  };

  const drawRoute = (route, isActive) => {
    context.beginPath();
    routePath({ type: "LineString", coordinates: route.coordinates });
    context.strokeStyle = visual.routeTone === "white" ? foreground : accent;
    context.globalAlpha = isActive ? 0.95 : visual.routeAlpha;
    context.lineWidth = isActive ? 1.75 : visual.routeWidth;
    context.stroke();
  };

  const draw = (timestamp = 0) => {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.globalAlpha = 1;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseMapCanvas, 0, 0);
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    routes.forEach((route, index) => {
      const pinIndex = index + 1;
      const isActive = hoveredIndex === pinIndex;
      drawRoute(route, isActive);

      const speed = isActive ? 0.00052 : 0.00019;
      const progress = reduceMotion ? route.phase : ((timestamp * speed + route.phase) % 1 + 1) % 1;
      const point = route.coordinates[Math.round(progress * (route.coordinates.length - 1))];
      if (!isOnFront(point)) return;

      const projectedPoint = projection(point);
      if (!projectedPoint) return;
      context.globalAlpha = isActive ? 1 : 0.72;
      context.fillStyle = visual.routeTone === "white" || isActive ? foreground : accent;
      context.beginPath();
      context.arc(projectedPoint[0], projectedPoint[1], isActive ? 2.8 : 1.8, 0, Math.PI * 2);
      context.fill();
    });

    context.globalAlpha = 1;
  };

  const renderFrame = (timestamp) => {
    draw(timestamp);
    if (isVisible && !reduceMotion) animationFrame = window.requestAnimationFrame(renderFrame);
  };

  const startAnimation = () => {
    if (animationFrame || reduceMotion) return;
    animationFrame = window.requestAnimationFrame(renderFrame);
  };

  const stopAnimation = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  };

  const build = () => {
    devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.round(stage.clientWidth));
    height = Math.max(1, Math.round(stage.clientHeight));
    radius = Math.min(height * 0.475, width * 0.43);
    centerX = width * 0.54;
    centerY = height * 0.51;

    canvas.width = Math.round(width * devicePixelRatio);
    canvas.height = Math.round(height * devicePixelRatio);
    baseMapCanvas.width = canvas.width;
    baseMapCanvas.height = canvas.height;
    drawBaseMap();
    draw(window.performance.now());
  };

  const setActivePin = (index) => {
    hoveredIndex = index;
    pins.forEach((pin, pinIndex) => pin.toggleAttribute("data-active", pinIndex === index));
    if (reduceMotion || !isVisible) draw(window.performance.now());
  };

  pins.forEach((pin, index) => {
    pin.addEventListener("pointerenter", () => setActivePin(index));
    pin.addEventListener("pointerleave", () => setActivePin(-1));
    pin.addEventListener("focus", () => setActivePin(index));
    pin.addEventListener("blur", () => setActivePin(-1));
  });

  build();

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    },
    { root: scrollRoot, rootMargin: "10% 0px" },
  );
  visibilityObserver.observe(stage);

  let viewTween = null;
  if (!reduceMotion) {
    viewTween = gsap.to(view, {
      longitude: END_VIEW.longitude,
      latitude: END_VIEW.latitude,
      zoom: END_VIEW.zoom,
      ease: "none",
      scrollTrigger: {
        trigger: stage.closest("[data-markets-network]") || stage,
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: 0.65,
      },
      onUpdate: () => {
        drawBaseMap();
        if (!isVisible) draw(window.performance.now());
      },
    });
  }

  const handleResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      build();
    }, 150);
  };
  window.addEventListener("resize", handleResize);

  return () => {
    stopAnimation();
    window.clearTimeout(resizeTimer);
    visibilityObserver.disconnect();
    window.removeEventListener("resize", handleResize);
    viewTween?.scrollTrigger?.kill();
    viewTween?.kill();
  };
};

export const initMarketsMaps = (root = document, options = {}) => {
  const cleanups = [...root.querySelectorAll("[data-markets-map]")].map((stage) => initialiseMap(stage, options));
  return () => cleanups.forEach((cleanup) => cleanup?.());
};
