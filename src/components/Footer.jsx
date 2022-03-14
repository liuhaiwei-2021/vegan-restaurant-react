//Project files
import social from "../data/social.json";
import "../styles/Footer.css";

function Footer() {
  // Components
  const SocialItems = social.map((item, index) => (
    <div className="social-icon" key={index}>
      <a href={item.socialURL}>
        <img src={item.imageURL} alt={item.title} />
      </a>
    </div>
  ))} 

  return (
    <div className="footer">
      <div className="social-icon-group">
        {/* Nesting -1, THIS one actually deserves to be a component but just put it here */}
        {SocialItems}
      </div>
    </div>
  );
}

export default Footer;
