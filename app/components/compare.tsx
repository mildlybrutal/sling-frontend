// comparison-table, from the README's own table. Sling's limits stay in it.
const tools = ["Sling", "Kamal", "Coolify, Dokploy", "Dokku"];

type Cell = string | true | false;
const rows: { feature: string; cells: Cell[] }[] = [
  { feature: "What you install", cells: ["One Go binary and Caddy", "Ruby gem and kamal-proxy", "Dashboard, database, workers", "Bash and nginx plugins"] },
  { feature: "Checks the new version answers through the proxy", cells: [true, "Partly", false, false] },
  { feature: "Rolls back on its own during a grace window", cells: [true, false, false, false] },
  { feature: "Automatic HTTPS", cells: [true, true, true, true] },
  { feature: "Web UI and several apps", cells: ["On the roadmap", true, true, true] },
];

function Value({ v }: { v: Cell }) {
  if (v === true)
    return (
      <>
        <svg className="cmp__yes" viewBox="0 0 16 16" aria-hidden="true">
          <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
        </svg>
        <span className="sr-only">Included</span>
      </>
    );
  if (v === false)
    return (
      <>
        <span className="cmp__no" aria-hidden="true">
          –
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  return <>{v}</>;
}

export default function Compare() {
  return (
    <section className="section" id="compare" aria-labelledby="compare-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="compare-h">
            Sling beside Kamal, Coolify and Dokku.{" "}
            <span className="muted">The smallest of the four, with the strictest rollback.</span>
          </h2>
        </div>
        <div className="cmp" role="table" aria-label="Sling compared with Kamal, Coolify and Dokploy, and Dokku">
          <div className="cmp__row cmp__head grid" role="row">
            <span className="span-4" role="columnheader">
              <span className="sr-only">Feature</span>
            </span>
            {tools.map((t) => (
              <span className="span-2" role="columnheader" key={t}>
                {t}
              </span>
            ))}
          </div>
          {rows.map((r) => (
            <div className="cmp__row grid" role="row" key={r.feature}>
              <span className="span-4 cmp__feature" role="rowheader">
                {r.feature}
              </span>
              {r.cells.map((c, i) => (
                <span className="span-2 cmp__cell" role="cell" data-tool={tools[i]} key={tools[i]}>
                  <Value v={c} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
