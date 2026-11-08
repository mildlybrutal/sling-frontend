// split-text-left on the page's own dark ground: the diagram sits in a lit glass panel.
const lanes = {
  layout: "lanes",
  alt: "A git push goes to Sling, which runs three checks: a direct health probe, a probe through Caddy and a 30 second grace window.",
  curve: "curve",
  input: { label: "git push", icon: "github", meta: "main" },
  core: { label: "Sling", icon: "ui:box" },
  lanes: [
    { label: "Direct probe", icon: "ui:activity", meta: "3 × 200", done: true },
    { label: "Proxy probe", icon: "caddy", meta: "new upstream", done: true },
    { label: "Grace window", icon: "ui:timer", meta: "30 s", done: true },
  ],
};

export default function How() {
  return (
    <section
      className="section"
      id="how"
      aria-labelledby="how-h"
    >
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-6">
            <h2 id="how-h">How a commit goes <em>live</em></h2>
            <p className="t-lead">
              Sling clones the commit, builds it with Docker and starts it beside the running
              version on a random loopback port. Three checks decide if users ever see it.
            </p>
            <ul className="rows how__facts">
              <li>Three 200s in a row from /health, within 30 seconds</li>
              <li>The X-Sling-Upstream header names the new container</li>
              <li>No three failed probes in a row for 30 seconds</li>
            </ul>
            <p>
              <a className="link" href="https://github.com/mildlybrutal/sling-orchestrator#deploy-sequence">
                Read the deploy sequence
              </a>
            </p>
          </div>
          <div className="frame frame--split span-6 start-7">
            <div className="dg" data-diagram="">
              <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lanes) }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
