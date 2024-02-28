import "./login.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../images/logo.png";

function Login() {
  const initData = {
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

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      setFormErrors(validate(data));

      if (Object.keys(formErrors).length === 0) {
        let response = await fetch("http://localhost:10000/api/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        });
        let jsonToObject = await response.json();
        if (response.ok) {
          setIsSubmit(true);
          localStorage.setItem("isSubmit", "true");
          localStorage.setItem("token", jsonToObject.token);
        }
      alert(jsonToObject.status);
      } else {
        alert("Please fill in all required fields correctly.");
        event.preventDefault();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validate = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]{2,}$/i;
    const errors = {};

    if (!values.email) {
      errors.email = "E-mail required!";
    } else if (!emailRegex.test(values.email)) {
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
    <div className="Login">
      <header className="login-header">
        <img id="logo" src={logo} alt="logo" />
        <span className="signup-section">
          Don't have an account?
          <button>
            <Link to="/" id="signup-btn">Sign up</Link>
          </button>
        </span>
      </header>
      <form className="Login-form">
        <h1>Welcome back!</h1>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <Navigate to="/dashboard" />
        )}
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={dataChange}
            placeholder="Enter your email"
          />
          <p className="form-error">{formErrors.email}</p>
        </div>
        <div className="login-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={dataChange}
            placeholder="Enter password"
          />
          <p className="form-error">{formErrors.password}</p>
        </div>
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
