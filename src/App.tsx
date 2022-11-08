import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>

      <Route path="/" element={<Login  />} />

      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/cadastrousuario" element={<CadastroUsuario />} />

      <Route path="/sobre" element={<Sobre />} />

    </Routes>
    <Footer />
  </Router>
  );
}
export default App;