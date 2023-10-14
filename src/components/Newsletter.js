import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="box">
      <form>
        <label htmlFor="email"></label>
        <input type="email" placeholder="Aquí es donde escribes tu EMAIL" />
        <button>Mejorar mi vida</button>
      </form>
    </div>
  );
};

export default Newsletter;
