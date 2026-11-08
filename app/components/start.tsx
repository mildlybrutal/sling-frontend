// split-text-left: what Sling and your app need, beside the tools Sling drives (hub diagram).
const hub = {
  layout: "hub",
  alt: "Sling drives Git, Docker and Caddy, takes pushes from GitHub, gets certificates from Let's Encrypt and keeps its history in SQLite.",
  center: { label: "Sling", icon: "go" },
  spokes: [
    { label: "Git", icon: "git" },
    { label: "GitHub", icon: "github" },
    { label: "Docker", icon: "docker" },
    { label: "Caddy", icon: "caddy" },
    { label: "Let’s Encrypt", icon: "letsencrypt" },
    { label: "SQLite", icon: "sqlite" },
  ],
};

const needs = [
  { name: "A Dockerfile", value: "at the repo root" },
  { name: "A server on port 3000", value: "inside the container" },
  { name: "GET /health", value: "200 when ready" },
  { name: "APP_VERSION", value: "optional, set to the SHA" },
];

export default function Start() {
  return (
    <section className="section" id="start" aria-labelledby="start-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-6">
            <h2 id="start-h">Runs on Go, Docker <em>and Caddy</em></h2>
            <p className="t-lead">
              Build it with <code>make build</code>, then run <code>./bin/sling</code> with a repo and
              a full commit SHA. It pulls caddy:2.11.7-alpine the first time.
            </p>
            <ul className="rows">
              {needs.map((n) => (
                <li key={n.name}>
                  <span className="rows__name">{n.name}</span>
                  <span className="rows__value">{n.value}</span>
                </li>
              ))}
            </ul>
            <p>
              <a className="link" href="https://github.com/mildlybrutal/sling-orchestrator#usage">
                Read the full setup
              </a>
            </p>
          </div>
          <div className="frame frame--split span-6 start-7">
            <div className="dg" data-diagram="">
              <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hub) }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
