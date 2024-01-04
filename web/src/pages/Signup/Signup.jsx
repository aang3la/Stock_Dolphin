import "./signup.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import check_icon from "../../images/checkIcon.png";

function Signup() {
  const initData = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const dataChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSignup = async (event) => {
    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        event.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
    const errors = {};

    if (!values.email) {
      errors.email = "E-mail required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This email is invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or longer!";
    }

    console.log(errors);
    return errors;
  };

  return (
    <div className="Signup">
      <header className="signup-header">
        <img id="logo" src={logo} alt="logo" />
        <span className="login-section">
          Already have an account?
          <button>
            <Link to="/login">Login</Link>
          </button>
        </span>
      </header>
      <form className="Signup-form">
        <h1>You’re one click away from less inefficiency.</h1>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div>Created account successfully!</div>
        )}
        <div className="signup-name">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            value={data.name}
            onChange={dataChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="signup-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={dataChange}
            placeholder="Enter your email"
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="signup-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={dataChange}
            placeholder="Enter your password"
          />
          <p>{formErrors.password}</p>
        </div>
        <button onClick={handleSignup}>Sign up</button>
      </form>
      <section className="signup-info">
        <div>
          <img src={check_icon} />
          <p>Inventory System that revolutionize supply management.</p>
        </div>
        <div>
          <img src={check_icon} />
          <p>Efficiently optimize expandable item inventory.</p>
        </div>
        <div>
          <img src={check_icon} />
          <p>Automate purchase record keeping for cost savings.</p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
