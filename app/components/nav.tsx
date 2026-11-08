import { Logo, MainButton, vars } from "./ui";

// nav-mega: one fixed, opaque bar on the page's .wrap. "Deploys" opens the panel
// (two link columns and the newest feature on one card); a click goes to its section.
export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <Logo />
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a className="nav__link" href="#deploys">
              Deploys{" "}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Release</p>
                  <a href="#how">
                    Zero-downtime cutover<span>Old version serves until then</span>
                  </a>
                  <a href="#checks">
                    Automatic rollback<span>Back to the last good version</span>
                  </a>
                  <a href="#checks">
                    Signed webhooks<span>Deploys on a verified push</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Operate</p>
                  <a href="#deploys">
                    sling history<span>The last 20 deploys</span>
                  </a>
                  <a href="#questions">
                    sling rollback<span>Any kept commit, no rebuild</span>
                  </a>
                  <a href="#start">
                    sling serve<span>Deploys on every git push</span>
                  </a>
                </div>
                <a className="menu-card span-3 start-10" href="#checks">
                  <div className="panel">
                    <div className="stage stage--fade-br">
                      <div className="at-corner" style={vars({ "--ax": "24px", "--ay": "24px" })}>
                        <div className="ui ui-notify" data-ui="notify">
                          <ul className="ui-notify__list" data-notify-list>
                            <li className="ui-note">
                              <span className="ui-note__ico">
                                <svg className="ui-icon" viewBox="0 0 16 16">
                                  <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                                </svg>
                              </span>
                              <span className="ui-note__text">
                                <span className="ui-note__title">
                                  Certificate issued<time>now</time>
                                </span>
                                <span className="ui-note__body">Let&rsquo;s Encrypt, renewed by Caddy</span>
                              </span>
                            </li>
                            <li className="ui-note">
                              <span className="ui-note__ico">
                                <svg className="ui-icon" viewBox="0 0 16 16">
                                  <path d="M8 2.5v11M2.5 8h11" />
                                </svg>
                              </span>
                              <span className="ui-note__text">
                                <span className="ui-note__title">
                                  HTTP redirects to HTTPS<time>now</time>
                                </span>
                                <span className="ui-note__body">Only /webhook reaches Sling</span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="t-card">HTTPS on your domain</span>
                  <span className="t-small muted">Set SLING_DOMAIN and deploy</span>
                </a>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#checks">
              Checks
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#compare">
              Compare
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#start">
              Quickstart
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#questions">
              Questions
            </a>
          </div>
        </nav>
        <div className="nav__actions">
          <MainButton />
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
