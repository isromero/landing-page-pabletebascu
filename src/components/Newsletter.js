import "./Newsletter.css";

async function mailerLiteApi(email) {
  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(response.status);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

const Newsletter = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.querySelector('.email').value;
    console.log(email);

    try {
      const result = await mailerLiteApi(email);
      console.log('Subscription result:', result);
    } catch (error) {
      console.error('Failed to subscribe:', error.message);
    }
  };
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email" placeholder="Aquí es donde escribes tu EMAIL" className="email"/>
        <button>Mejorar mi vida</button>
      </form>
    </div>
  );
};

export default Newsletter;
