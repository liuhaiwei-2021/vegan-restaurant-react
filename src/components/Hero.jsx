//Project files

import "../styles/Hero.css";

// ok
function Hero({ heroContent }) {
  const { name, imageURL, slogan } = heroContent;
  return (
    <section className="hero" id="hero">
      <img className="hero-image" src={imageURL} alt="hero background" />
      <div className="hero-text">
        <div className="hero-heading">
          <h1 className="hero-name">{name}</h1>
          <h2 className="slogan">{slogan}</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
