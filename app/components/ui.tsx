import type { CSSProperties, ReactNode } from "react";

// Small shared pieces of the kit's markup, written once.

export const GITHUB = "https://github.com/mildlybrutal/sling-orchestrator";
export const MAIN_ACTION = "View source on GitHub";

/** CSS custom properties (the kit's --h, --p-h, --ax ...) as a React style object. */
export function vars(o: Record<string, string | number>): CSSProperties {
  return o as CSSProperties;
}

/** The drawn arrow the primary button carries as its last child. */
export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

/** GitHub's mark, standing in for the word inside the main action. */
export function GithubMark() {
  return (
    <svg className="gh-mark" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/** The main action in the nav, the hero and the close: "View source on" and GitHub's mark. */
export function MainButton({ className = "" }: { className?: string }) {
  return (
    <a className={`btn btn--primary ${className}`.trim()} href={GITHUB} aria-label={MAIN_ACTION}>
      View source on
      <GithubMark />
      <Arrow />
    </a>
  );
}

/** Sling's dealt mark (arc) and name. */
export function Logo() {
  return (
    <a className="nav__logo" href="#top">
      <span className="mark" data-mark="arc" aria-hidden="true" />
      Sling
    </a>
  );
}

export function Tick() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4.5 8.2 2.3 2.3 4.7-5" />
    </svg>
  );
}

/** A real tool mark on its light tile, as icons.mjs wrote it to public/assets/icons. */
export function ToolIcon({ id }: { id: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img data-icon={id} src={`/assets/icons/${id}.svg`} alt="" />
  );
}

export function Section({
  id,
  label,
  className = "",
  h,
  children,
  ...rest
}: {
  id: string;
  label: string;
  className?: string;
  h?: 1 | 2;
  children: ReactNode;
  [data: `data-${string}`]: string | undefined;
}) {
  return (
    <section
      className={`section ${className}`.trim()}
      id={id}
      aria-labelledby={label}
      style={h ? vars({ "--h": h }) : undefined}
      {...rest}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
