import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import "../styles/Modal.css";

const ModificarModal = ({
  isOpen,
  onClose,
  onSave,
  fields,
  title,
  initialData,
}) => {
  const [formData, setFormData] = React.useState(initialData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h1>{title}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>
              {field.label}
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ""}
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

export default ModificarModal;
