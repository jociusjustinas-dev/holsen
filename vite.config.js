import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Render shared navigation/footer into each static page, ready for WordPress parts.
const sharedShell = () => ({
  name: "holsen-shared-shell",
  transformIndexHtml: {
    order: "pre",
    handler(html, context) {
      const home = readFileSync(new URL("./index.html", import.meta.url), "utf8");
      const part = (tag) => {
        const match = home.match(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`));
        if (!match) throw new Error(`Missing shared Holsen ${tag}`);
        return match[0].replaceAll('src="./src/', 'src="/src/');
      };
      let output = html;

      if (output.includes("<!-- holsen:header -->")) {
        const path = context.path.replace(/index\.html$/, "");
        const header = path.startsWith("/insights/") && path !== "/insights/"
          ? part("header").replaceAll('href="/insights/"', 'href="/insights/" aria-current="true"')
          : part("header");
        output = output.replace("<!-- holsen:header -->", header)
          .replace("<!-- holsen:footer -->", part("footer"))
          .replaceAll(`href="${path}"`, `href="${path}" aria-current="page"`);
      }

      if (!output.includes('id="page-scroll"')) {
        output = output
          .replace(/(<header class="site-header"[\s\S]*?<\/header>)/, '<div class="app">$1\n<div id="page-scroll">')
          .replace(/(<\/footer>)(?![\s\S]*<\/footer>)/, "$1\n</div>\n</div>");
      }

      return output;
    },
  },
});

export default defineConfig({
  plugins: [sharedShell(), tailwindcss()],
  css: {
    lightningcss: {
      targets: {
        chrome: 111 << 16,
        firefox: 111 << 16,
        safari: 16 << 16,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        services: fileURLToPath(new URL("./services/index.html", import.meta.url)),
        roadFreight: fileURLToPath(new URL("./services/road-freight/index.html", import.meta.url)),
        chemicals: fileURLToPath(new URL("./industries/chemicals/index.html", import.meta.url)),
        industries: fileURLToPath(new URL("./industries/index.html", import.meta.url)),
        whyHolsen: fileURLToPath(new URL("./why-holsen/index.html", import.meta.url)),
        insights: fileURLToPath(new URL("./insights/index.html", import.meta.url)),
        forCarriers: fileURLToPath(new URL("./for-carriers/index.html", import.meta.url)),
        contact: fileURLToPath(new URL("./contact/index.html", import.meta.url)),
        privacyPolicy: fileURLToPath(new URL("./privacy-policy/index.html", import.meta.url)),
        requestQuote: fileURLToPath(new URL("./request-a-quote/index.html", import.meta.url)),
        roadRailInsight: fileURLToPath(new URL("./insights/road-vs-rail-freight-europe/index.html", import.meta.url)),
      },
    },
    target: "es2020",
    cssTarget: ["chrome111", "firefox111", "safari16"],
    sourcemap: true,
  },
});
