import { GITHUB, Logo, MainButton } from "./ui";

// footer-statement (dealt) on the lit sand ground, with close-word (dealt) as row 1.
export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer closing footer--statement" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Ship your next commit <em>with Sling</em></h2>
              <p className="t-lead">Needs Go 1.26 or newer, Docker and git on the server.</p>
            </div>
            <MainButton />
          </div>
          <p className="close__word" aria-hidden="true">
            Sling
          </p>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <Logo />
              <p className="footer__lede">A deploy tool for one server.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Deploys</h3>
              <ul>
                <li>
                  <a href="#deploys">History</a>
                </li>
                <li>
                  <a href="#how">Cutover</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Checks</h3>
              <ul>
                <li>
                  <a href="#checks">Rollback</a>
                </li>
                <li>
                  <a href="#order">Health checks</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Compare</h3>
              <ul>
                <li>
                  <a href="#compare">Kamal, Dokku</a>
                </li>
                <li>
                  <a href="#questions">Questions</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Quickstart</h3>
              <ul>
                <li>
                  <a href="#start">Requirements</a>
                </li>
                <li>
                  <a href={`${GITHUB}#readme`}>README</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {year} Sling</span>
            <div className="socials" />
            <span className="credits">Product names and logos are trademarks of their owners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
