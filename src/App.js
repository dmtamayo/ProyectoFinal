import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import {Inicio}  from './pages/Inicio'
import Contacto from './pages/Contacto'
import Destacado from './pages/Destacado'
import Informacion from './pages/Informacion'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/destacado' element={<Destacado/>}/>
        <Route path='/informacion' element={<Informacion/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
