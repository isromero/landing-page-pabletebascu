import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="box">
      <form>
        <p>
          Mete tu email aquí abajo <span>SI QUIERES APRENDER</span>
        </p>
        <label htmlFor="email"></label>
        <input type="email" placeholder="Aquí es donde escribes tu EMAIL" />
        <button>Quiero mejorar mi vida</button>
      </form>
    </div>
  );
};

export default Newsletter;
