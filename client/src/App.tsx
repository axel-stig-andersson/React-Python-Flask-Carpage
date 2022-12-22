import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCarPage from './pages/AddCarPage';
import CarPage from './pages/CarPage';
import StartPage from './pages/StartPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} /> 
          <Route path="/available" element={<CarPage />} />
          <Route path="/add" element={<AddCarPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
