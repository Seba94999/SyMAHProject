import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const RegistrarModal = ({ isOpen, onClose, onSave, fields, title }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h2>{title}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>
              {field.label}
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            </label>
          </div>
        ))}
        <div className="modal-footer">
          <Button type="submit" variant="secondary">
            Guardar
          </Button>
          <Button onClick={onClose} variant="secondary-close">
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrarModal;
