import { MainButton, vars } from "./ui";

// One deploy as the CLI prints it: each stage is a real status name from
// internal/deploy, with the time it took (the run in the README's history).
const stages = [
  { name: "cloning", detail: "HEAD matches", time: "1.4s" },
  { name: "building", detail: "paas-app:53a2b2f", time: "1.9s" },
  { name: "health_checking", detail: "3 of 3 passed", time: "0.9s" },
  { name: "switching", detail: "Caddy /load", time: "0.6s" },
  { name: "observing", detail: "grace window", time: "30.0s" },
];

function TermTick() {
  return (
    <svg className="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
    </svg>
  );
}

// hero--centred (dealt): pill, centred h1 with the mark inline, the lead, two buttons,
// then the product window rising out of a lit frame that carries the page's one effect.
export default function Hero() {
  return (
    <section className="hero hero--centred bg-topglow" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__c">
            <a className="pill" href="#checks">
              <span>New: HTTPS on your domain</span>
              <span className="muted">See the settings</span>
            </a>
            <h1 id="hero-h" aria-label="Zero-downtime deploys for one VPS">
              <span className="mark hero__mark" data-mark="arc" aria-hidden="true" /> Zero-downtime deploys for <em className="hero__hl">one VPS</em>
            </h1>
            <p className="hero__lead">
              Sling builds one exact commit, waits for 3 healthy checks before traffic moves, then
              rolls back by itself if it fails.
            </p>
            <div className="btn-row">
              <MainButton />
              <a className="btn btn--secondary" href="#start">
                Read the quickstart
              </a>
            </div>
          </div>
          <div
            className="hero__window"
            data-fx="grain-gradient"
            data-fx-seed="7"
            data-fx-params='{"calmX":0.5,"calmY":0.3}'
            role="img"
            aria-label="A terminal running sling: the commit is cloned, built, health checked three times, switched in Caddy and observed for 30 seconds, then goes live"
          >
            <div className="ly-piece hero__term" aria-hidden="true">
              <div className="ui ui-panel ui-term" data-ui="terminal-run" data-ui-loop="">
                <div className="ui-term__head">
                  <span className="ui-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="ui-term__title">you/app</span>
                  <span className="ui-meta">sling</span>
                  <span className="ui-spacer" />
                  <span className="ui-chip ui-chip--plain ui-term__branch">
                    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5" cy="3.5" r="1.5" />
                      <circle cx="5" cy="12.5" r="1.5" />
                      <circle cx="11" cy="5.5" r="1.5" />
                      <path d="M5 5v6M11 7c0 2.6-6 1.8-6 4" />
                    </svg>
                    main
                  </span>
                </div>
                <div className="ui-term__screen" data-term-screen="">
                  <div className="ui-term__track" data-term-track="">
                    <div className="ui-term__ln ui-term__cmd">
                      <span className="ui-term__cwd">
                        ~/<span className="ui-term__up">you/</span>app
                      </span>
                      <span className="ui-term__sig">$</span>
                      <span className="ui-term__typed" data-term-cmd="">
                        sling . $(git rev-parse HEAD)
                      </span>
                    </div>
                    <div className="ui-term__ln ui-term__meter" data-term-out="" data-term-meter="">
                      <span className="ui-term__bar" style={vars({ "--p": 1 })}>
                        <i />
                      </span>
                      <span className="ui-term__count" data-term-count="">
                        5 of 5 stages
                      </span>
                    </div>
                    {stages.map((s) => (
                      <div className="ui-term__ln ui-term__log" data-term-out="" data-term-step="" key={s.name}>
                        <TermTick />
                        <span className="ui-term__path">{s.name}</span>
                        <span className="ui-term__n">{s.detail}</span>
                        <span className="ui-term__t">{s.time}</span>
                      </div>
                    ))}
                    <div className="ui-term__ln ui-term__sum" data-term-out="">
                      <span className="ui-term__key">Previous</span>
                      <span className="ui-term__val">app-67dd979</span>
                      <span className="ui-term__dim">(stopped, image kept)</span>
                    </div>
                    <div className="ui-term__ln ui-term__done" data-term-out="" data-term-done="">
                      <span className="ui-term__ok">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <path d="m4.5 8.3 2.4 2.4 4.6-5" />
                        </svg>
                      </span>
                      <b>Live: 53a2b2f</b>
                      <span className="ui-term__dim">in 34.8s</span>
                    </div>
                    <div className="ui-term__ln ui-term__cmd" data-term-next="">
                      <span className="ui-term__cwd">
                        ~/<span className="ui-term__up">you/</span>app
                      </span>
                      <span className="ui-term__sig">$</span>
                      <span className="ui-term__typed" />
                      <i className="ui-term__caret" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
