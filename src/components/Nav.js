import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <h1>PABLETE BASCU</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li>Quién Soy</li>
            <li>????</li>
            <li>???</li>
            <li><FontAwesomeIcon icon="fa-brands fa-youtube"/></li>
            <li><FontAwesomeIcon icon="fa-brands fa-instagram" /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;