import Home from './pages/home';
import { Tolls } from './pages/tolls';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
const vehicleTypes = ['Car/Jeep/Van', 'LCV', 'Truck/Bus', 'Heavy Vehicle'];

function App() {
  useEffect(() => {
    localStorage.setItem('vehicleTypes', JSON.stringify(vehicleTypes));
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/tolls" element={<Tolls />} />
      </Routes>
    </>
  );
}

export default App;
