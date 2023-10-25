import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallex from "./components/Parallax/Parallex";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallex type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallex type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">Contact</section>
      <section id="About">About</section>

      {/*
      <Test />
      <Test />
      */}
    </div>
  );
};

export default App;
