import "./Nav.css";
import banner from '../img/banner-blanco-pablete.jpeg'

const Nav = () => {
  return (
    <nav>
        <img src={banner} alt="banner-pablete-bascu" />
        {/* <div className="logo">
          <h1>PABLETE BASCU</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li>Quién Soy</li>
            <li>????</li>
            <li>???</li>
          </ul>
        </div> */}
    </nav>
  );
}

export default Nav;