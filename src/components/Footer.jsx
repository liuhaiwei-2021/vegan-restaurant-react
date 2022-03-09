//Project files
import social from "../assets/data/social.json";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-icon-group">
        {social.length > 0 &&
          social.map((item, index) => (
            <div className="social-icon" key={index}>
              <a href={item.socialURL}>
                <img src={item.imageURL} alt={item.title} />
              </a>
            </div>
          ))}
      </div>
      <div className="footer-text">
        <p>© 2022 | Designed and built by Haiwei Liu</p>
      </div>
    </div>
  );
}

export default Footer;
