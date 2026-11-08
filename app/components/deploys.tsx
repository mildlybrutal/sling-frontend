import { Section, ToolIcon, Tick, vars } from "./ui";

// `sling history` rows, newest first. The statuses are Sling's own; the first four rows of the
// finished deploys are the README's sample history.
const history: { sha: string; kind: "deploy" | "rollback"; at: string; status: string; took: string; tone: string }[] = [
  { sha: "9c41d0e", kind: "deploy", at: "Nov 08 16:52", status: "health_checking", took: "22s", tone: "work" },
  { sha: "53a2b2f", kind: "deploy", at: "Nov 08 16:46", status: "live", took: "34s", tone: "done" },
  { sha: "399076a", kind: "deploy", at: "Nov 08 16:46", status: "interrupted", took: "2s", tone: "you" },
  { sha: "67dd979", kind: "rollback", at: "Nov 08 16:45", status: "live", took: "33s", tone: "done" },
  { sha: "feb2e72", kind: "deploy", at: "Nov 08 16:45", status: "failed", took: "2s", tone: "you" },
  { sha: "a07c3e5", kind: "deploy", at: "Nov 08 15:12", status: "rolled_back", took: "41s", tone: "you" },
  { sha: "67dd979", kind: "deploy", at: "Nov 08 14:30", status: "live", took: "35s", tone: "done" },
  { sha: "5d02b6f", kind: "deploy", at: "Nov 08 14:02", status: "superseded", took: "0s", tone: "" },
  { sha: "e3b8f41", kind: "deploy", at: "Nov 08 13:58", status: "live", took: "36s", tone: "done" },
  { sha: "e3b8f41", kind: "deploy", at: "Nov 08 13:57", status: "skipped", took: "0s", tone: "" },
  { sha: "2c9a7d0", kind: "deploy", at: "Nov 07 18:20", status: "live", took: "34s", tone: "done" },
];

// The open deploy's stages: is-done with their time, is-run for the one in progress (its
// finished time as data-time), and Queued for the rest. Each step shows its tool's real mark.
const steps = [
  { key: "clone", name: "Clone", tool: "git", cmd: "git checkout --detach", state: "done", time: "1.4s" },
  { key: "build", name: "Build", tool: "docker", cmd: "docker build", state: "done", time: "19.2s" },
  { key: "probe", name: "Probe", tool: "docker", cmd: "GET /health", state: "run", time: "1.1s", final: "1.6s" },
  { key: "switch", name: "Switch", tool: "caddy", cmd: "POST /load", state: "wait", final: "0.7s" },
  { key: "watch", name: "Watch", tool: "caddy", cmd: "30s grace", state: "wait", final: "30.0s" },
];

// The open deploy's log, in the words Sling and its tools print. A "$" line is a command.
const log: Record<string, string[]> = {
  clone: [
    "$git clone --no-checkout https://github.com/you/app /tmp/paas-builds/9c41d0e",
    "Cloning into '/tmp/paas-builds/9c41d0e'...",
    "remote: Enumerating objects: 412, done.",
    "remote: Counting objects: 100% (412/412), done.",
    "remote: Compressing objects: 100% (231/231), done.",
    "Receiving objects: 100% (412/412), 188.20 KiB, done.",
    "Resolving deltas: 100% (164/164), done.",
    "$git checkout --detach 9c41d0e",
    "HEAD is now at 9c41d0e Time out slow health checks",
    "$git rev-parse HEAD",
    "9c41d0e matches the commit asked for",
  ],
  build: [
    "$docker build -t paas-app:9c41d0e /tmp/paas-builds/9c41d0e",
    "#1 [internal] load build definition from Dockerfile",
    "#2 [internal] load metadata for docker.io/library/node:22-alpine",
    "#3 [1/5] FROM docker.io/library/node:22-alpine",
    "#4 [2/5] WORKDIR /app",
    "#5 [3/5] COPY package*.json ./",
    "#6 [4/5] RUN npm ci --omit=dev",
    "#7 [5/5] COPY . .",
    "#8 exporting to image",
    "#8 naming to docker.io/library/paas-app:9c41d0e done",
    "Built paas-app:9c41d0e",
  ],
  probe: [
    "$docker run -d --name app-9c41d0e --network sling-net -p 127.0.0.1::3000",
    "  --memory 256m --cpus 0.5 -e APP_VERSION=9c41d0e paas-app:9c41d0e",
    "$docker port app-9c41d0e 3000",
    "127.0.0.1:49731",
    "Waiting for http://127.0.0.1:49731/health to pass health checks...",
    "+0.5s  container running, GET /health: connection refused",
    "+1.0s  container running, GET /health: connection refused",
    "+1.5s  container running, GET /health: connection refused",
    "+2.0s  container running, GET /health: 503 Service Unavailable",
    "+2.5s  container running, GET /health: 503 Service Unavailable",
    "+3.0s  container running, GET /health: 200 OK (1 of 3)",
    "+3.5s  container running, GET /health: 200 OK (2 of 3)",
    "needs 3 in a row before 30s",
  ],
  switch: [
    "$curl -X POST localhost:2019/load (upstream app-9c41d0e:3000)",
    'Switching traffic: "app-53a2b2f:3000" -> "app-9c41d0e:3000"',
    "Verifying through the proxy (http://127.0.0.1:8080)...",
    "GET /health 200, X-Sling-Upstream: app-9c41d0e:3000 (1 of 3)",
    "GET /health 200, X-Sling-Upstream: app-9c41d0e:3000 (2 of 3)",
    "GET /health 200, X-Sling-Upstream: app-9c41d0e:3000 (3 of 3)",
    "The new version is the one answering",
  ],
  watch: [
    "Observing for 30s before retiring the previous version...",
    "probes through the proxy, rolls back on 3 failures in a row",
    "+10s  every probe passed",
    "+20s  every probe passed",
    "+30s  grace window passed",
    "Retiring previous version app-53a2b2f (SIGTERM, up to 10s to drain)...",
    "app-53a2b2f stopped, image paas-app:53a2b2f kept for rollback",
    "Live: 9c41d0e",
  ],
};

// app-frame: the product big. `sling history` as the list, the open deploy as the pipeline beside it.
export default function Deploys() {
  return (
    <Section id="deploys" label="deploys-h" className="bg-mist">
      <div className="grid">
        <h2 id="deploys-h" className="span-5">
          Every deploy <em>on record</em>
        </h2>
        <p className="span-6 start-7 muted">
          Each stage of every deploy and rollback is saved to SQLite, so the history survives a
          restart. A deploy killed halfway is marked interrupted, with the stage it reached.{" "}
          <a className="link" href="https://github.com/mildlybrutal/sling-orchestrator#deploy-history">
            Read the history docs
          </a>
        </p>
      </div>
      <div
        className="ui app fill"
        role="img"
        aria-label="Sling's deploy history beside the open deploy of commit 9c41d0e, which has been cloned and built and is passing its health checks"
        data-ui-pause-host=""
      >
        <div className="app__pane app__pane--list">
          <div className="ui ui-panel ui-win" data-ui="window" data-open="queued" data-work="health_checking" data-done="live">
            <div className="ui-win__bar">
              <span className="ui-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="ui-win__crumb">
                <svg className="ui-brand" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.5 21.5V12a9.5 9.5 0 0 1 19 0v9.5h-6V12a3.5 3.5 0 0 0-7 0v9.5z" />
                </svg>
                sling <i>/</i> <b>history</b>
              </span>
              <span className="ui-spacer" />
              <span className="ui-win__search" aria-hidden="true">
                <svg className="ui-icon" viewBox="0 0 16 16">
                  <circle cx="7" cy="7" r="4.5" />
                  <path d="m10.5 10.5 3 3" />
                </svg>
                <span className="ui-win__ph">Commit</span>
                <span className="ui-kbd">/</span>
              </span>
            </div>
            <div className="ui-win__body">
              <nav className="ui-win__side" aria-hidden="true">
                <span className="ui-win__nav is-on">
                  <svg className="ui-icon" viewBox="0 0 16 16">
                    <path d="M2.5 4h11M2.5 8h11M2.5 12h11" />
                  </svg>
                  All<em>20</em>
                </span>
                <span className="ui-win__nav">
                  <svg className="ui-icon" viewBox="0 0 16 16">
                    <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                  </svg>
                  Live<em>5</em>
                </span>
                <span className="ui-win__nav">
                  <svg className="ui-icon" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="5.5" />
                    <path d="M8 5v3.5M8 11h.01" />
                  </svg>
                  Failed<em>3</em>
                </span>
                <span className="ui-win__nav">
                  <svg className="ui-icon" viewBox="0 0 16 16">
                    <path d="M6 4 2.5 7.5 6 11" />
                    <path d="M2.5 7.5h7a4 4 0 0 1 0 8" />
                  </svg>
                  Rollbacks<em>1</em>
                </span>
                <span className="ui-win__label">Branch</span>
                <span className="ui-win__nav">
                  <span className="ui-win__hash">#</span>main
                </span>
              </nav>
              <div className="ui-win__main">
                <div className="ui-win__cols" aria-hidden="true">
                  <span>Commit</span>
                  <span>Started</span>
                  <span>Status</span>
                  <span>Took</span>
                </div>
                <ul className="ui-win__rows">
                  {history.map((r, i) => (
                    <li className="ui-win__row" data-row="" key={i}>
                      <span className="ui-avatar" data-tone={r.kind === "deploy" ? "3" : "5"}>
                        {r.kind === "deploy" ? "D" : "R"}
                      </span>
                      <span className="ui-win__who">{r.sha}</span>
                      <span className="ui-win__sub">
                        {r.kind} · {r.at}
                      </span>
                      <span className={`ui-win__st${r.tone && r.tone !== "work" ? ` is-${r.tone}` : ""}`} data-st="">
                        {r.status}
                      </span>
                      <span className="ui-win__age">{r.took}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="app__pane app__pane--open" data-ui-loop="">
          <div className="ui ui-panel ui-pipe" data-ui="pipeline-board">
            <div className="ui-pipe__head">
              <svg className="ui-icon ui-pipe__branch" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="4.5" cy="3.5" r="1.5" />
                <circle cx="4.5" cy="12.5" r="1.5" />
                <circle cx="11.5" cy="5" r="1.5" />
                <path d="M4.5 5v6M11.5 6.5c0 2.6-2.2 3.6-5.6 4.6" />
              </svg>
              <span className="ui-pipe__repo">you/app</span>
              <i className="ui-pipe__slash">/</i>
              <code className="ui-pipe__ref">main</code>
              <span className="ui-pipe__run">deploy</span>
              <span className="ui-spacer" />
              <span className="ui-pipe__total">
                <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8.5" r="5.5" />
                  <path d="M8 5.5v3l2 1.25M6.5 1.75h3" />
                </svg>
                <span data-pipe-total="">21.7s</span>
              </span>
              <span className="ui-chip ui-chip--ink ui-chip--live ui-pipe__chip" data-pipe-chip="" data-done="live">
                health_checking
              </span>
            </div>
            <div className="ui-pipe__commit">
              <span className="ui-avatar" data-tone="4">
                MB
              </span>
              <span className="ui-pipe__msg">Time out slow health checks</span>
              <code className="ui-pipe__sha">9c41d0e</code>
              <button className="ui-btn ui-btn--ghost ui-btn--sm ui-pipe__btn" type="button" tabIndex={-1} data-pipe-btn="" data-done="Roll back">
                Logs
              </button>
            </div>
            <ol className="ui-pipe__steps">
              {steps.map((s) => (
                <li
                  className={`ui-pipe__step${s.state === "done" ? " is-done" : s.state === "run" ? " is-run" : ""}`}
                  data-step={s.key}
                  key={s.key}
                  style={s.state === "run" ? vars({ "--k": 0.6 }) : undefined}
                >
                  <span className="ui-pipe__ico">
                    <Tick />
                  </span>
                  <span className="ui-pipe__name">
                    <span className="ui-pipe__tool" aria-hidden="true">
                      <ToolIcon id={s.tool} />
                    </span>
                    <span className="ui-pipe__nm">{s.name}</span>
                  </span>
                  <code className="ui-pipe__cmd">{s.cmd}</code>
                  <span className="ui-pipe__time" data-time={s.final ?? ""}>
                    {s.state === "wait" ? "Queued" : s.time}
                  </span>
                  <span className="ui-pipe__bar">
                    <i />
                  </span>
                </li>
              ))}
            </ol>
            <div className="ui-pipe__log" aria-hidden="true">
              {Object.entries(log).flatMap(([step, lines]) =>
                lines.map((text, i) => (
                  <span className={`ui-pipe__line${step === "probe" ? " is-on" : ""}`} data-step={step} key={`${step}-${i}`}>
                    {text.startsWith("$") ? (
                      <>
                        <b>$</b>
                        {text.slice(1)}
                      </>
                    ) : (
                      text
                    )}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
