// letters-assemble (dealt): one statement of three words, its letters fly into the line as it
// rises through the screen. Phones and reduced motion show it as written.
export default function Statement() {
  return (
    <section
      className="section statement"
      id="order"
      aria-labelledby="order-h"
      data-moment="letters-assemble"
      data-moment-opts='{"spread": 1}'
    >
      <div className="wrap">
        <h2 className="mo-la__type" id="order-h">
          Traffic moves <em>last.</em>
        </h2>
        <p className="mo-la__sub t-lead">
          Sling points Caddy at the new container only after it answers /health three times in a
          row. Then it checks again through the proxy, as your users reach it.
        </p>
      </div>
    </section>
  );
}
