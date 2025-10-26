import "./app.scss";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Stars from "./components/stars/Stars.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const App = () => {
  return<div>
    <Cursor />
    <Sidebar />
    <Stars />
    <section id="Homepage">
    <Navbar />
    <Hero />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section id="ServicesContent">
      <Services />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Youness Hamdaoui. All rights reserved.</p>
      </footer>
    </section>
  </div>;
};

export default App;
