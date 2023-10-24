import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallex from "./components/Parallax/Parallex";
import Services from "./components/Services/Services";

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
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
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
