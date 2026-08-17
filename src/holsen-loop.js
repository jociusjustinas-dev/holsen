const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

/*
 * Holsen Design System, page 23 — canonical Loop construction.
 *
 * The supplied Illustrator export uses the first approved 3D starting point:
 * X 0deg, Y 60deg, Z -60deg, Extrude Depth 40pt and No Shading. The values
 * below are the corresponding projected geometry measured in the supplied
 * 1541.23895 x 1024.87 artwork coordinate system.
 */
export const HOLSEN_LOOP_GEOMETRY = Object.freeze({
  viewBoxWidth: 1541.23895,
  viewBoxHeight: 1024.87,
  centerX: 780.14255,
  centerY: 215.68679,
  radius: 833.23132,
  depthX: 151.54,
  depthY: 261.612,
  dashCount: 160,
  strokeWidth: 4.6,
  rearStrokeOpacity: 0.18,
  depthOpacityExponent: 0.78,
});

const COS_60 = 0.5;
const SIN_60 = Math.sqrt(3) / 2;

const createSvgNode = (tagName, attributes = {}) => {
  const node = document.createElementNS(SVG_NAMESPACE, tagName);

  Object.entries(attributes).forEach(([name, value]) => {
    node.setAttribute(name, String(value));
  });

  return node;
};

export const createHolsenLoop = (host) => {
  if (!host || host.dataset.holsenLoopReady === "true") return host?.querySelector("svg") ?? null;

  const geometry = HOLSEN_LOOP_GEOMETRY;
  const svg = createSvgNode("svg", {
    class: "holsen-loop__svg",
    viewBox: `0 0 ${geometry.viewBoxWidth} ${geometry.viewBoxHeight}`,
    preserveAspectRatio: "xMidYMid meet",
    "aria-hidden": "true",
    focusable: "false",
  });
  const strokes = createSvgNode("g", {
    class: "holsen-loop__strokes",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": geometry.strokeWidth,
    "stroke-linecap": "butt",
  });

  const projectedDashes = [];
  let minimumX = Number.POSITIVE_INFINITY;
  let minimumY = Number.POSITIVE_INFINITY;
  let maximumX = Number.NEGATIVE_INFINITY;
  let maximumY = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < geometry.dashCount; index += 1) {
    const angle = (index / geometry.dashCount) * Math.PI * 2;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    /* Orthographic projection of a circle after X 0, Y 60, Z -60. */
    const x =
      geometry.centerX + geometry.radius * (0.25 * cosAngle + SIN_60 * sinAngle);
    const y =
      geometry.centerY + geometry.radius * ((SIN_60 * COS_60) * cosAngle - COS_60 * sinAngle);

    /*
     * The reference artwork's darker rear face is a perspective cue, not a
     * colour gradient. Preserve one approved orange and vary only the
     * projected dash visibility. Rear dashes are painted first so the brighter
     * front face remains legible where the extrusion converges.
     */
    const frontDepth = (cosAngle + 1) / 2;
    const strokeOpacity =
      geometry.rearStrokeOpacity +
      (1 - geometry.rearStrokeOpacity) * frontDepth ** geometry.depthOpacityExponent;
    const endX = x + geometry.depthX;
    const endY = y + geometry.depthY;
    const dash = createSvgNode("line", {
      class: "holsen-loop__dash",
      x1: x.toFixed(3),
      y1: y.toFixed(3),
      x2: endX.toFixed(3),
      y2: endY.toFixed(3),
      opacity: strokeOpacity.toFixed(3),
      pathLength: 1,
      "data-loop-dash": "",
      "data-loop-depth": frontDepth.toFixed(3),
    });

    minimumX = Math.min(minimumX, x, endX);
    minimumY = Math.min(minimumY, y, endY);
    maximumX = Math.max(maximumX, x, endX);
    maximumY = Math.max(maximumY, y, endY);
    projectedDashes.push({ dash, frontDepth });
  }

  if (host.dataset.loopFraming === "complete") {
    const framePadding = geometry.strokeWidth * 2;
    const frameX = minimumX - framePadding;
    const frameY = minimumY - framePadding;
    const frameWidth = maximumX - minimumX + framePadding * 2;
    const frameHeight = maximumY - minimumY + framePadding * 2;

    svg.setAttribute("viewBox", `${frameX} ${frameY} ${frameWidth} ${frameHeight}`);
    host.style.aspectRatio = `${frameWidth} / ${frameHeight}`;
  }

  projectedDashes
    .sort((first, second) => first.frontDepth - second.frontDepth)
    .forEach(({ dash }) => strokes.append(dash));

  svg.append(strokes);
  host.replaceChildren(svg);
  host.dataset.holsenLoopReady = "true";

  return svg;
};

export const initHolsenLoops = (root = document) => {
  root.querySelectorAll("[data-holsen-loop]").forEach(createHolsenLoop);
};
