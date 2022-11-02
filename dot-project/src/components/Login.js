import React from 'react';
import './Login.css';


function Login() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device=width, initial-scale=1.0" />
    {/* Google font*/}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="style1.css" />
    <title>Login Page</title>
    <section className="login-section">
      <div className="wrapper">
        <div className="login-main">
        </div>
        <div className="login-form">
          <h1> Hi Welcome!</h1>
          <p>Login to your account</p>
          <div className="input-group">
            <input type="text" placeholder="Username" />
            <i className="fas fa-user" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <i className="fas fa-key" />
          </div>
          <div className="forget-pwd">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="login-button">Login <i className="fas fa-lock" /></button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Login;
