import './App.css';
import React, { useState } from 'react';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const[location, setLocation] = useState('signup');

  const locationChange = (event) => {
    setLocation(event.target.dataset.target);
  };

  return (
    <>
     {/* <Dashboard /> */}
      <nav>
        <button onClick={locationChange} data-target="login">Login</button>
        <button onClick={locationChange} data-target="signup">Signup</button>
      </nav>
      <div>
        {/* { location === 'signup' ? <Signup /> : null }
        { location === 'login' ? <Login /> : null } */}
        <Dashboard />
      </div>
    </>
  );
}

export default App;
