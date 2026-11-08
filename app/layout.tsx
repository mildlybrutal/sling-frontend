import type { Metadata, Viewport } from "next";
import KitLoader from "./kit-loader";

const title = "Sling: zero-downtime deploys for a single server";
const description =
  "A Go deploy tool for one VPS. It builds an exact commit with Docker, proves it healthy, switches Caddy over and rolls back on its own.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    title,
    description: "Builds an exact commit, proves it healthy, switches Caddy over and rolls back on its own.",
  },
  twitter: { card: "summary_large_image" },
  // canonical: added once the site has its own domain
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070b18",
};

// The palette (start.mjs brand, the client's colours): a midnight-navy ground, ice-blue ink and an
// electric-blue action; Instrument Serif for headings, Instrument Sans for text, JetBrains Mono for code.
const palette = `:root {
  --p-bg: #070b18; --p-surface: #0e1528; --p-ink: #e8eefc; --p-muted: #93a1c2;
  --p-accent: #2a64f6; --p-accent-ink: #ffffff; --p-action: #2a64f6; --p-action-ink: #ffffff;
  --p-inv-bg: #e8eefc; --p-inv-surface: #d6dcea; --p-inv-ink: #070b18; --p-inv-muted: #515665;
  --p-inv-accent: #2a64f6; --p-inv-accent-ink: #ffffff; --p-inv-action: #2a64f6; --p-inv-action-ink: #ffffff;
  --font-display: "Instrument Serif", "Iowan Old Style", Georgia, serif;
  --font-text: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 400;
  --display-tracking: -0.004em;
  --display-tracking-xl: -0.012em;
}`;

// Set before the first paint: the hero's entrance waits for motion.js (700ms fallback),
// and the moments' guard (2.5s fallback) shows their finished state if a module fails.
const enterGuard =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

const styles = [
  "assets/system.css",
  "assets/ui/cards.css",
  "assets/motion/motion.css",
  "assets/backgrounds/backgrounds.css",
  "assets/layout/layout.css",
  "assets/icons/icon.css",
  "assets/ui/base.css",
  "assets/ui/terminal-run/fragment.css",
  "assets/ui/window/fragment.css",
  "assets/ui/pipeline-board/fragment.css",
  "assets/ui/notify/fragment.css",
  "assets/ui/code/fragment.css",
  "assets/ui/toggles/fragment.css",
  "assets/diagrams/diagram.css",
];

const preloads = [
  "assets/moments/moments.js",
  "assets/moments/lib.js",
  "assets/moments/letters-assemble/moment.js",
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The kit sets classes and tokens on <html> before React hydrates.
    <html
      lang="en"
      data-type="software"
      data-radius="soft"
      data-ground="sky"
      data-buttons="solid"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <meta name="site-kind" content="software" />
        <meta name="page-type" content="software" />
        {/* the hero's own tile from shoot.mjs; relative until the site has its domain */}
        <meta property="og:image" content="share.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wght@400..700&family=JetBrains+Mono:wght@400..500&display=swap"
        />
        {styles.map((href) => (
          <link key={href} rel="stylesheet" href={`/${href}`} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: palette }} />
        <link rel="stylesheet" href="/page.css" />
        <script dangerouslySetInnerHTML={{ __html: enterGuard }} />
        {/* plain on purpose: it sets the palette mode before first paint */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/assets/backgrounds/backgrounds.js" />
        {preloads.map((href) => (
          <link key={href} rel="modulepreload" href={`/${href}`} />
        ))}
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitLoader />
      </body>
    </html>
  );
}
