//Projects files
import "../styles/Navagation.css";

function Navgation() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div>
          <a className="navbar-link" href="#">
            <img className="logo" src="images/logo-haiwei.png" alt="logo" />
          </a>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dishes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Deserts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Drinks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navgation;
