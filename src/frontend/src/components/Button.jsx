import React from "react";
import "../styles/Button.css";

const Button = ({ onClick, children, label, variant = "default" }) => {
  return (
    <button className={`button-${variant}`} onClick={onClick}>
      {label || children}
    </button>
  );
};

export default Button;
