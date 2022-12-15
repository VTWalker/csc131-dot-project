import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import { useState } from "react";


function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleUsername(event) {
    setName(event.target.value);
  }

  function handlePass(event){
    setPass(event.target.value);
  }

  function onClick() {
    if(name === '' || pass === ''){
      alert('Please Enter Username/Password')
    }else{
      if(name === "Admin" && pass === "12345"){
       
        localStorage.setItem("isLogggedIn",'Yes');
        localStorage.setItem("name",name);
        window.location = '/';
      }else{
        alert('Wrong Username OR Password');
      }
      
    }

    
  }
  
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
            <input type="text" id="username" onChange={handleUsername} placeholder="Username" />
            <i className="fas fa-user" />
          </div>
          <div className="input-group">
            <input type="password" id="password" onChange={handlePass} placeholder="Password" />
            <i className="fas fa-key" />
          </div>
          <div className="forget-pwd">
            <a href="#">Forgot Password?</a>
          </div>
          <button to="/" className="login-button" onClick={onClick}>Login <i className="fas fa-lock" /></button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Login;
