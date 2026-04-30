import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ClientesPage from "./pages/ClientesPage";
import TrabajosPage from "./pages/TrabajosPage";
import EmpleadoPage from "./pages/EmpleadoPage";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/trabajos" element={<TrabajosPage />} />
        <Route path="/empleados" element={<EmpleadoPage />} />
        <Route path="/transacciones" element={<div>Transacciones Page</div>} />
      </Routes>
    </>
  );
}

export default App;
