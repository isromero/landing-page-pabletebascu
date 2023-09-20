import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="box">
      <form>
        <p>Mete tu email aquí abajo <span>SI QUIERES TU APTO</span></p>
        <label htmlFor="email"></label>
        <input type="email" placeholder="EMAIL"/>
        <button>QUIERO EL APTO</button>
      </form>
    </div>
  );
}

export default Newsletter;