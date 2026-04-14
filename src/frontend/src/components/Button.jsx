import React from "react";

const Button = ({ onClick, children, variant = "default" }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
