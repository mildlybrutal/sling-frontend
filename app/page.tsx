import Nav from "./components/nav";
import Hero from "./components/hero";
import Deploys from "./components/deploys";
import Statement from "./components/statement";
import Checks from "./components/checks";
import How from "./components/how";
import Compare from "./components/compare";
import Start from "./components/start";
import Faq from "./components/faq";
import Footer from "./components/footer";

/*
  type: software (a developer tool)
  deal: hero centred, nav nav-mega, close close-word, footer footer-statement, rhythm dark-band
        (the sand inverse band), buttons solid, mark arc, palette: the client's own (charcoal,
        sand, electric blue via start.mjs brand), type reddit, radius sharp, lit ground sand
  effect: grain-gradient in the hero's window frame
  moments: letters-assemble (#order)
  screens at 1440x900: hero 1, deploys 1, order 1, checks 2, how 1, compare 1, start 1,
        questions 1, closing 1
*/
export default function Page() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Deploys />
        <Statement />
        <Checks />
        <How />
        <Compare />
        <Start />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
