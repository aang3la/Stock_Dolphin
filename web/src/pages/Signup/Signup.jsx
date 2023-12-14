import "./signup.css";
import React, { useState } from "react";

function Signup() {
  const initData = {
    name: "",
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

  const signup = async () => {
    try {
      let response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("User is created!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Signup">
      <form className="Signup-form">
        <h1>Sign Up</h1>
        <input
          type="name"
          name="name"
          value={data.name}
          onChange={dataChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={dataChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={dataChange}
          placeholder="Enter your password"
        />
        <button onClick={signup}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
