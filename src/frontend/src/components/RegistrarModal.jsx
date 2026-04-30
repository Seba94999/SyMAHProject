import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const RegistrarModal = ({
  isOpen,
  onClose,
  onSave,
  fields,
  title,
  extraButtons = [],
}) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h1>{title}</h1>
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
          {extraButtons.map((button, index) => (
            <Button
              label={button.label}
              key={index}
              {...button}
              onClick={button.onClick}
              variant="secondary"
            />
          ))}
          <Button onClick={onClose} variant="secondary-close">
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrarModal;
