import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("inicio");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <img
          src="../../public/Gemini_Generated_Image_mvfdpvmvfdpvmvfd__1_-removebg-preview1.png"
          alt=""
        />
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/inicio"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => handleButtonClick("inicio")}
        >
          <button>Inicio</button>
        </NavLink>

        <NavLink
          to="/clientes"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => handleButtonClick("clientes")}
        >
          <button>Clientes</button>
        </NavLink>

        <NavLink
          to="/trabajos"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => handleButtonClick("trabajos")}
        >
          <button>Trabajos</button>
        </NavLink>

        <NavLink
          to="/empleados"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => handleButtonClick("empleados")}
        >
          <button>Empleados</button>
        </NavLink>

        <NavLink
          to="/transacciones"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => handleButtonClick("transacciones")}
        >
          <button>Transacciones</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
