import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <li className="logo-rrss-li youtube-logo"><FontAwesomeIcon icon={faYoutube} /></li>
            <li className="logo-rrss-li"><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;