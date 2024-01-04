import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Login() {
  const initData = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initData);

  const dataChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const login = async () => {
    try {
      let response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("Login successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Login">
      <header className="login-header">
        <img id="logo" src={logo} alt="logo" />
        <span className="signup-section">
          Don't have an account?
          <button>
            <Link to="/create-account">Sign up</Link>
          </button>
        </span>
      </header>
      <form className="Login-form">
        <h1>Welcome back!</h1>
        <div className="login-email">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={dataChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="login-password">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={dataChange}
            placeholder="Enter password"
          />
        </div>
        <button onClick={login}>Log In</button>
      </form>
    </div>
  );
}

export default Login;
