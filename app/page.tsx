"use client";

import { motion } from "framer-motion";

type IconProps = { className?: string };

function ArrowUpRight({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M7 5.5h7.5V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></svg>;
}

function GitCommit({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 12h6M15.5 12h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" /></svg>;
}

function Pulse({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24"><path d="M2.5 12h4l2-5.5 3.2 11 2.2-6.5 1.7 1h6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></svg>;
}

function Container({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24"><rect height="12" rx="1.5" width="16" x="4" y="6" stroke="currentColor" strokeWidth="1.4" /><path d="M8 3.5v2M12 3.5v2M16 3.5v2M8 18v2.5M12 18v2.5M16 18v2.5M4 10h16M4 14h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" /></svg>;
}

function Shield({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24"><path d="m12 3 7 2.8v5.1c0 4.4-2.9 8.2-7 10.1-4.1-1.9-7-5.7-7-10.1V5.8L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" /><path d="m8.5 11.5 2.2 2.2 4.8-4.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" /></svg>;
}

const logs = [
  ["18:42:06", "build", "image sling-web:8f2c1a7 assembled", "text-zinc-400"],
  ["18:42:09", "probe", "GET /health 200 · 42ms", "text-zinc-200"],
  ["18:42:10", "route", "standby :49152 → active traffic", "text-zinc-300"],
];

const stages = ["Queued", "Building", "Probing", "Live"];

function stageClass(index: number) {
  return "h-4 w-4 border-2 " + (index < 3 ? "border-white bg-[#111315]" : "border-zinc-700 bg-[#111315]");
}

function stageDotClass(index: number) {
  return "block h-1.5 w-1.5 translate-x-[3px] translate-y-[3px] " + (index < 2 ? "bg-white" : index === 2 ? "bg-zinc-400" : "bg-transparent");
}

function stageLabelClass(index: number) {
  return "font-mono text-[10px] " + (index === 2 ? "text-white" : index < 2 ? "text-zinc-400" : "text-zinc-700");
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c0d] text-zinc-100 selection:bg-white selection:text-zinc-950">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12">
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex items-center justify-between border-b border-white/10 py-5">
          <a href="#top" className="group flex items-center gap-3" aria-label="Sling home"><span className="flex h-8 w-8 items-center justify-center border border-white/20 bg-white/[0.04] transition-colors group-hover:border-white/50"><span className="h-2 w-2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.75)]" /></span><span className="text-sm font-semibold tracking-[0.28em] text-white">SLING</span></a>
          <div className="flex items-center gap-5 text-xs text-zinc-500 sm:gap-8"><a className="hidden transition-colors hover:text-white sm:block" href="#mechanics">Mechanics</a><a className="hidden transition-colors hover:text-white sm:block" href="#workflow">Workflow</a><a href="#get-started" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-zinc-200 transition-colors hover:border-white hover:bg-white hover:text-zinc-950">Read the brief <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
        </motion.nav>

        <section id="top" className="grid gap-12 pb-24 pt-20 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:items-center lg:gap-16 lg:pb-32 lg:pt-28">
          <div><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mb-7 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Self-hosted release infrastructure</motion.p><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65 }} className="max-w-2xl text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-7xl lg:text-[6.4rem]">Ship code.<br /><span className="text-zinc-500">Keep users.</span></motion.h1><motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.6 }} className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">Sling makes zero-downtime Blue/Green releases boring on a single VM. Every commit is built, probed, cut over, and ready to roll back—without SSH or a maintenance window.</motion.p><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }} className="mt-10 flex flex-wrap items-center gap-5"><a href="#workflow" className="group inline-flex items-center gap-4 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">See the cutover <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><span className="font-mono text-[11px] text-zinc-600">one binary · your metal</span></motion.div></div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28, duration: 0.75 }} className="relative border border-white/15 bg-[#111315] shadow-2xl shadow-black/40"><div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:px-5"><span>release / 8f2c1a7</span><span className="flex items-center gap-2 text-zinc-300"><span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />live</span></div><div className="p-5 sm:p-7"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">Deployment state</p><p className="mt-2 text-2xl tracking-[-0.03em] text-white">Probing standby</p></div><span className="font-mono text-xs text-zinc-500">00:03.82</span></div><div className="relative flex justify-between gap-1 before:absolute before:left-0 before:right-0 before:top-2 before:h-px before:bg-white/15">{stages.map((stage, index) => <div className="relative z-10 flex w-1/4 flex-col items-start gap-3" key={stage}><span className={stageClass(index)}><span className={stageDotClass(index)} /></span><span className={stageLabelClass(index)}>{stage}</span></div>)}</div><div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="border border-white/10 bg-[#0b0c0d] p-4"><div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 text-xs text-zinc-400"><Container className="h-4 w-4" /> standby</span><span className="font-mono text-[10px] text-zinc-500">:49152</span></div><p className="font-mono text-sm text-white">sling-web:8f2c1a7</p><p className="mt-2 font-mono text-[10px] text-zinc-600">health probe · 42ms</p></div><div className="border border-white/10 bg-[#0b0c0d] p-4"><div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 text-xs text-zinc-400"><Container className="h-4 w-4" /> active</span><span className="font-mono text-[10px] text-zinc-500">:8080</span></div><p className="font-mono text-sm text-zinc-300">sling-web:7d1e3c2</p><p className="mt-2 font-mono text-[10px] text-zinc-600">traffic · 100%</p></div></div><div className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] leading-6"><div className="mb-2 flex items-center justify-between text-zinc-600"><span>deployment.log</span><span>tail -f</span></div>{logs.map(([time, kind, message, color]) => <div className="flex gap-3" key={time}><span className="text-zinc-600">{time}</span><span className="w-10 uppercase text-zinc-500">{kind}</span><span className={color}>{message}</span></div>)}</div></div></motion.div>
        </section>

        <section id="mechanics" className="border-t border-white/10 py-20 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">The mechanism</p><h2 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl">The release is safe before it is visible.</h2></div><div className="grid gap-10 sm:grid-cols-3"><div><GitCommit className="h-6 w-6 text-zinc-300" /><h3 className="mt-5 text-base font-medium text-white">Commit in</h3><p className="mt-3 text-sm leading-6 text-zinc-500">A Git push starts the state machine. No dashboard configuration. No hidden platform behavior.</p></div><div><Pulse className="h-6 w-6 text-zinc-300" /><h3 className="mt-5 text-base font-medium text-white">Health proven</h3><p className="mt-3 text-sm leading-6 text-zinc-500">The Standby Container binds an ephemeral port and answers its Health Probe before traffic moves.</p></div><div><Shield className="h-6 w-6 text-zinc-300" /><h3 className="mt-5 text-base font-medium text-white">Users protected</h3><p className="mt-3 text-sm leading-6 text-zinc-500">Caddy cuts over cleanly. If the release fails, Automated Rollback restores the known-good container.</p></div></div></div></section>

        <section id="workflow" className="border-t border-white/10 py-20 lg:py-28"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">A smaller control plane</p><h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] text-white sm:text-4xl">Enterprise safety. Local primitives.</h2></div><p className="max-w-sm text-sm leading-6 text-zinc-500">One lightweight Go binary orchestrating the tools you already own: Docker, Caddy, and the operating system.</p></div><div className="grid border-y border-white/10 md:grid-cols-3"><div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">01 / build</p><p className="mt-12 font-mono text-sm text-white">os/exec + Docker daemon</p><p className="mt-3 text-sm leading-6 text-zinc-500">Build the commit into an isolated image, then run it beside the active release.</p></div><div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">02 / prove</p><p className="mt-12 font-mono text-sm text-white">ephemeral port + health probe</p><p className="mt-3 text-sm leading-6 text-zinc-500">Give every workload a clean network boundary and wait for a real signal.</p></div><div className="p-6 md:p-8"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">03 / cut over</p><p className="mt-12 font-mono text-sm text-white">Caddy API + rollback</p><p className="mt-3 text-sm leading-6 text-zinc-500">Move traffic only after the probe is green. Revert automatically when it is not.</p></div></div></section>

        <section id="get-started" className="flex flex-col justify-between gap-8 border-t border-white/10 py-16 sm:flex-row sm:items-end lg:py-20"><div><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">Sling / release infrastructure</p><p className="mt-4 max-w-xl text-2xl tracking-[-0.03em] text-white sm:text-3xl">Stop treating every deploy like an incident.</p></div><a href="#top" className="group inline-flex items-center gap-3 border border-white/20 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-white hover:bg-white hover:text-zinc-950">Back to the top <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></section>
        <footer className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-700 sm:flex-row"><span>© 2025 Sling Systems</span><span>Own the metal. Keep the release.</span></footer>
      </div>
    </main>
  );
}
