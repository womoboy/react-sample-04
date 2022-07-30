import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>LOGIN</button>
          <link>DO NO YOU REMEMBER THE PASSWORD?</link>
          <link>CREATE NEW ACCOUNT</link>
        </form>
      </div>
    </div>
  );
};

export default Login;
