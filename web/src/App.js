import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';
import Reports from './pages/Reports/Reports';
import Suppliers from './pages/Suppliers/Suppliers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/suppliers' element={<Suppliers />} />
      </Routes> 
    </>
  );
}

export default App;
