//Project files
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img className="hero-image" src="images/home-hero.png" alt="hero image" />
      <div className="hero-text">
        <div className="hero-heading">
          <h1 className="restaurant-name">Vegan Taste</h1>
          <h1 className="slogan">Healthy Food for Health Lifestylers.</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
