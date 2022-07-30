import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="confirm password" />
          <span className="agreement">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            similique unde fugiat cum! Possimus.
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
