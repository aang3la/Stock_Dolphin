import './App.css';
import logo from './imgs/logo.png';
// import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <>

      <aside className="App-navigation">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation />
      </aside>
      
    </>
  );
}

export default App;
