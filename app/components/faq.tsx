import { GITHUB } from "./ui";

const faq = [
  {
    q: "Does Sling need Kubernetes?",
    a: "No. It is one Go binary that drives Docker and a Caddy container on the same host.",
  },
  {
    q: "Can I deploy a branch name instead of a SHA?",
    a: "No. Sling takes only full 40-character SHAs, and checks that HEAD matches after checkout, so a moving branch can't change what ships.",
  },
  {
    q: "How do I go back to an older commit?",
    a: "Run sling rollback with its SHA. Any commit whose image is still on the host comes back without a rebuild, through the same checks as a deploy.",
  },
  {
    q: "What if Sling is killed mid-deploy?",
    a: "The next deploy marks it interrupted and records the stage it reached. Run sling status first: traffic may already be on the new version.",
  },
  {
    q: "Can it run several apps on one server?",
    a: "Not yet. Today it runs one app per host. Several apps and a web UI are on the roadmap.",
  },
];

// faq: the page's split, every answer open.
export default function Faq() {
  return (
    <section className="section bg-dots" id="questions" aria-labelledby="questions-h">
      <div className="wrap">
        <div className="grid">
          <div className="span-5 stack-4">
            <h2 id="questions-h"><em>Questions</em></h2>
            <p className="muted">What people ask before they put Sling on a server.</p>
            <p>
              <a className="link" href={`${GITHUB}/issues`}>
                Ask on GitHub
              </a>
            </p>
          </div>
          <div className="faq span-6 start-7">
            {faq.map((f) => (
              <div className="faq__item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
