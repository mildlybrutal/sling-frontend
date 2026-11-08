import { vars } from "./ui";

function Sw({ on, label }: { on: boolean; label: string }) {
  return (
    <button className={`ui-switch${on ? " is-on" : ""}`} type="button" role="switch" aria-checked={on} aria-label={label} tabIndex={-1}>
      <i />
    </button>
  );
}

// features-2x2 over two screens (.g2): row 1 the h2 and two cards, row 2 the next two.
// On the dark page each card keeps its box and runs its panel flush; the panels take the
// lit sand ground. The first card loops; the others play while the pointer is on them.
export default function Checks() {
  return (
    <section className="section g2" id="checks" aria-labelledby="checks-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="checks-h">
              Safe deploys on one host. <span className="muted">The parts you stop doing over SSH.</span>
            </h2>
          </div>
          <div className="grid">
            <article className="card card--row m-nolift span-6">
              <h3>Rolls back a failed release</h3>
              <p>
                If 3 probes in a row fail in the 30-second grace window, Caddy goes back to the
                previous version.
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div
                    className="at-rise fit"
                    style={vars({ "--fit-max": "380px", "--ax": "32px", "--ay": "calc(100% - 180px)", "--ay-sm": "calc(100% - 180px)" })}
                    data-ui-loop=""
                  >
                    <div className="ui ui-notify" data-ui="notify">
                      <ul className="ui-notify__list" data-notify-list="">
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <path d="M6 4 2.5 7.5 6 11" />
                              <path d="M2.5 7.5h7a4 4 0 0 1 0 8" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Rolled back to 67dd979<time>now</time>
                            </span>
                            <span className="ui-note__body">3 proxy probes failed in a row</span>
                          </span>
                        </li>
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="5.5" />
                              <path d="M8 5v3l2 1.5" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Observing a07c3e5<time>12s</time>
                            </span>
                            <span className="ui-note__body">30s grace window before retiring</span>
                          </span>
                        </li>
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Switched traffic<time>14s</time>
                            </span>
                            <span className="ui-note__body">app-67dd979 to app-a07c3e5</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row m-nolift span-6">
              <h3>Accepts only signed pushes</h3>
              <p>
                Every GitHub delivery needs a valid HMAC-SHA256 signature and must come from your
                repo and branch.
              </p>
              <div className="panel panel--flush">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={vars({ "--fit-max": "400px", "--ax": "max(24px, 50% - 200px)", "--ay": "48px", "--ay-sm": "24px" })}>
                    <div className="ui ui-panel ui-code" data-ui="code">
                      <div className="ui-code__tabs">
                        <span className="ui-code__tab is-on">
                          <i className="ui-code__lang">GO</i>handler.go
                        </span>
                        <span className="ui-code__tab">
                          <i className="ui-code__lang">GO</i>queue.go
                        </span>
                        <span className="ui-spacer" />
                        <span className="ui-chip ui-chip--plain ui-code__chip" data-code-chip="">
                          401 if wrong
                        </span>
                      </div>
                      <pre className="ui-code__pre">
                        <code>
                          <span className="ui-code__ln" data-n="168">
                            <span className="k">func</span> <span className="f">validSignature</span>(secret, body []<span className="k">byte</span>,
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="169">
                            {"    "}header <span className="k">string</span>) <span className="k">bool</span> {"{"}
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="170" data-note="Reads GitHub's sha256= header.">
                            {"  "}hexSig, ok := strings.<span className="f">CutPrefix</span>(
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="171">
                            {"    "}header, <span className="n">&quot;sha256=&quot;</span>)
                          </span>
                          {"\n"}
                          <span className="ui-code__ln is-mark" data-n="172" data-note="Signs the raw body with your secret.">
                            {"  "}mac := hmac.<span className="f">New</span>(sha256.New, secret)
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="173">
                            {"  "}mac.<span className="f">Write</span>(body)
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="174" data-note="Compares in constant time.">
                            {"  "}
                            <span className="k">return</span> hmac.<span className="f">Equal</span>(got, mac.<span className="f">Sum</span>(<span className="k">nil</span>))
                          </span>
                          {"\n"}
                          <span className="ui-code__ln" data-n="175">{"}"}</span>
                        </code>
                      </pre>
                      <div className="ui-code__hint" data-code-hint="">
                        <span className="ui-dot" />
                        <span data-code-text="">Signs the raw body with your secret.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid">
          <article className="card card--row m-nolift span-6">
            <h3>Gets HTTPS certificates itself</h3>
            <p>
              Set SLING_DOMAIN and Caddy obtains and renews a Let&rsquo;s Encrypt certificate. Only
              /webhook is passed to Sling.
            </p>
            <div className="panel panel--flush">
              <div className="stage stage--fade-b">
                <div className="at-right to-edge" style={vars({ "--ax": "32px", "--ay": "56px" })}>
                  <div className="ui ui-panel ui-toggles" data-ui="toggles">
                    <div className="ui-head">
                      <svg className="ui-icon ui-toggles__ico" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M8 1.8 13 4v3.6c0 3-2.1 5.4-5 6.6-2.9-1.2-5-3.6-5-6.6V4z" />
                        <path d="m5.8 8 1.6 1.6 3-3.2" />
                      </svg>
                      <div className="ui-title">sling serve settings</div>
                      <span className="ui-spacer" />
                      <div className="ui-meta" data-tg-count="">
                        4 of 5 on
                      </div>
                    </div>
                    <ul className="ui-toggles__list">
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">HTTPS on your domain</span>
                          <span className="ui-tg__sub">SLING_DOMAIN</span>
                        </span>
                        <Sw on label="HTTPS on your domain" />
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">Deploy on git push</span>
                          <span className="ui-tg__sub">SLING_WEBHOOK_SECRET</span>
                        </span>
                        <Sw on label="Deploy on git push" />
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">Deploy status API</span>
                          <span className="ui-tg__sub">SLING_STATUS_TOKEN</span>
                        </span>
                        <Sw on={false} label="Deploy status API" />
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">Deploy one branch</span>
                          <span className="ui-tg__sub">SLING_BRANCH=main</span>
                        </span>
                        <Sw on label="Deploy one branch" />
                      </li>
                      <li className="ui-tg">
                        <span className="ui-tg__text">
                          <span className="ui-tg__label">Keep deploy history</span>
                          <span className="ui-tg__sub">SLING_DATA_DIR</span>
                        </span>
                        <Sw on label="Keep deploy history" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="card card--row m-nolift span-6">
            <h3>Runs one deploy at a time</h3>
            <p>
              A file lock stops two deploys fighting over the proxy. A newer push replaces the one
              still waiting.
            </p>
            <div className="panel panel--flush">
              <div className="stage stage--fade-br">
                <div className="at-corner" style={vars({ "--ax": "32px", "--ay": "40px" })}>
                  <div
                    className="ui ui-panel ui-win"
                    data-ui="window"
                    data-ui-opts='{"compact":true}'
                    data-open="queued"
                    data-work="building"
                    data-done="live"
                  >
                    <div className="ui-win__bar">
                      <span className="ui-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="ui-win__crumb">
                        sling serve <i>/</i> <b>queue</b>
                      </span>
                    </div>
                    <div className="ui-win__body">
                      <nav className="ui-win__side" aria-hidden="true">
                        <span className="ui-win__nav is-on">
                          <svg className="ui-icon" viewBox="0 0 16 16">
                            <path d="M2.5 4h11M2.5 8h11M2.5 12h11" />
                          </svg>
                          Queue<em>4</em>
                        </span>
                        <span className="ui-win__nav">
                          <svg className="ui-icon" viewBox="0 0 16 16">
                            <rect x="3.5" y="7" width="9" height="6.5" rx="1" />
                            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
                          </svg>
                          Lock<em>1</em>
                        </span>
                        <span className="ui-win__nav">
                          <svg className="ui-icon" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="5.5" />
                            <path d="M8 5v3l2 1.5" />
                          </svg>
                          Waiting<em>1</em>
                        </span>
                      </nav>
                      <div className="ui-win__main">
                        <ul className="ui-win__rows">
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="3">
                              D
                            </span>
                            <span className="ui-win__who">b81e4a2</span>
                            <span className="ui-win__sub">push to main · waiting</span>
                            <span className="ui-win__st" data-st="">
                              queued
                            </span>
                            <span className="ui-win__age">now</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="2">
                              D
                            </span>
                            <span className="ui-win__who">7f30c19</span>
                            <span className="ui-win__sub">replaced by b81e4a2</span>
                            <span className="ui-win__st is-you" data-st="">
                              superseded
                            </span>
                            <span className="ui-win__age">8s</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="5">
                              D
                            </span>
                            <span className="ui-win__who">9c41d0e</span>
                            <span className="ui-win__sub">holds the deploy lock</span>
                            <span className="ui-win__st is-done" data-st="">
                              live
                            </span>
                            <span className="ui-win__age">1m</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="5">
                              D
                            </span>
                            <span className="ui-win__who">53a2b2f</span>
                            <span className="ui-win__sub">previous, image kept</span>
                            <span className="ui-win__st" data-st="">
                              stopped
                            </span>
                            <span className="ui-win__age">6m</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
