//NPM packages
import { Link, NavLink } from "react-router-dom";
//Projects files
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div>
          <Link className="navbar-link" to="/">
            <img className="logo" src="images/logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="navbar-items">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dishes"
              exact="true"
              activeclassname="active"
            >
              Dishes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deserts" exact="true">
              Deserts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/drinks" exact="true">
              Drinks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact="true">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
