# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are backend developers, DevOps engineers, and small startup teams managing their own virtual machines. They use Sling when shipping code and need a reliable release without SSH sessions, port conflicts, dropped active HTTP connections, or panic-driven manual reverts.

## Product Purpose

Sling is a Git-driven deployment control plane for self-hosted applications. It builds a commit, proves the resulting release healthy, performs a zero-downtime cutover to active users, and automatically rolls back when the release fails its health probe. Its purpose is to move release anxiety from the operator into a visible, dependable system.

## Positioning

Sling brings enterprise-grade Blue/Green deployment safety to a single low-cost virtual machine. Unlike Vercel or Heroku, it is transparent and self-hosted, with no vendor lock-in or scaling-cost dependency. Unlike Kubernetes or AWS ECS, it avoids distributed control-plane complexity while using local primitives—`os/exec`, the Docker daemon, and the Caddy API—to provide the same deployment safety net in a lightweight Go binary.

## Operating Context

Sling is strictly Git-driven: a commit initiates the release workflow. The interface is primarily a read-only observability layer for the deployment state machine and streamed build logs. The core state progression is Queued → Building → Probing → Live or Failed. Operators need to understand the relationship between Active and Standby Containers, health probes, ephemeral port binding, traffic cutovers, and rollback decisions without logging into the server.

## Capabilities and Constraints

- Supports Blue/Green releases with zero-downtime cutovers.
- Builds and runs releases in containers, using ephemeral port binding to avoid collisions.
- Performs automated health probing and failure rollback.
- Streams build and deployment logs for inspection.
- Visualizes deployment state and runtime boundaries; it is not a configuration editor.
- Uses precise orchestration terminology: Active Container, Standby Container, Zero-Downtime Cutover, Health Probe, Ephemeral Port Binding, and Automated Rollback.
- The frontend is a Next.js single-page application using Tailwind CSS and Framer Motion.
- Icons must be inline SVGs; do not add external icon libraries such as Lucide or FontAwesome.
- Visual treatments must not use gradients. The interface should use deep greying blacks, high-contrast white text, and subtle monochrome glows.

## Brand Commitments

Sling should feel industrial, heavy, terminal-inspired, and premium. Its strength is exposing raw deployment mechanics cleanly, so the interface should avoid magic metaphors and vague language.

## Evidence on Hand

The current frontend contains a single landing surface in `app/page.tsx` describing zero-downtime cutovers, automated rollbacks, Git-driven automation, and ephemeral port binding. It includes inline SVG icons, Tailwind utility styling, and Framer Motion transitions. No production deployment data, customer proof, testimonials, or case studies are present; future work must not fabricate them.

## Product Principles

- Make release safety observable rather than magical.
- Prefer transparent self-hosting over vendor dependency.
- Reduce deployment complexity without reducing deployment confidence.
- Keep operators informed through precise state, mechanics, and logs.
- Protect active users first: prove health before cutover and recover automatically when reality disagrees with the release.

## Accessibility & Inclusion

No product-specific accessibility standard has been established yet. Future work should preserve high-contrast text, clear state communication, keyboard-accessible interactions, and motion that respects reduced-motion preferences.
