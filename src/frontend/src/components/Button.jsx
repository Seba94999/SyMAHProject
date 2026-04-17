import React from "react";
import "../styles/Button.css";

const Button = ({ onClick, children, variant = "default" }) => {
  return (
    <button className={`button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
