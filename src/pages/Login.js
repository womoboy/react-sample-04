import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="wrapper">
        <h1 className="title">LOGIN TO YOUR ACCOUT</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>LOGIN</button>
          <a href='#'>DO NO YOU REMEMBER THE PASSWORD?</a>
          <a href='#'>CREATE NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
