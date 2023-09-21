import "./Header.css";
import Newsletter from "./Newsletter";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1>Introducir texto para llamar mucho la atención aquí</h1>
          <p>
            Introducir texto con el objetivo de presentarte y explicar fácilmente
            por qué meter su email en la newsletter. </p>
          <p>Ullamco aliquip amet officia dolore dolor sint aute minim anim.</p>

          <p>Ullamco aliquip amet officia dolore dolor sint aute minim anim.</p>

          <p>Ullamco aliquip amet officia dolore dolor sint aute minim anim.</p>

          <p>Ullamco aliquip amet officia dolore dolor sint aute minim anim.</p>
          
        </div>
        <div className="header-img">
          <img src="https://picsum.photos/200/300" alt="imagen de cabecera" />
        </div>
      </div>
      <Newsletter />
    </header>
  );
};

export default Header;
