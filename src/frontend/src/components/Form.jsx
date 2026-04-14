import React from "react";

const Form = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
