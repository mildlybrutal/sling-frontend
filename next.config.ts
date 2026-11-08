import type { NextConfig } from "next";

// A static export: `next build` writes the page to out/, which any web server can host.
// The design kit (public/assets) is plain CSS and JS, loaded by the page itself.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
