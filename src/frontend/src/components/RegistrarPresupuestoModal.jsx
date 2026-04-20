import React from "react";
import Modal from "./Modal";
import Button from "./Button";

import "../styles/Form.css";

const RegistrarPresupuestoModal = ({
  isOpen,
  onClose,
  onSave,
  fields,
  title,
}) => {
  const [formData, setFormData] = React.useState({});
  const [file, setFile] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, file });
    setFormData({}); // Limpiar el formulario después de guardar
    setFile(null); // Limpiar el archivo después de guardar
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h2>{title}</h2>
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
        <div className="form-group">
          <label htmlFor="file">
            Archivo:
            <input
              id="file"
              name="file"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ display: "block" }}
            />
          </label>
        </div>
        <div className="modal-footer">
          <Button type="submit" variant="secondary">
            Guardar
          </Button>
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrarPresupuestoModal;
