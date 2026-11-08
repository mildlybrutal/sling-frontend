"use client";

import { useEffect } from "react";

// The design kit's scripts change the DOM (they split headings into letters, draw diagrams,
// run the UI loops). They start only after React has hydrated, so React never sees a
// tree it did not render. The page has no client state, so React does not touch it again.
const scripts = [
  "/assets/system.js",
  "/assets/motion/motion.js",
  "/assets/layout/layout.js",
  "/assets/diagrams/mount.js",
];

export default function KitLoader() {
  useEffect(() => {
    if (document.documentElement.dataset.kit) return;
    document.documentElement.dataset.kit = "on";
    for (const src of scripts) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      s.async = false; // keep their order
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
