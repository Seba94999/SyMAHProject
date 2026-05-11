import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import Table from "./Table";

const ConsultarModal = ({ isOpen, onClose, title, columns, tableData }) => {
  if (!isOpen) return null; // Asegurar que el modal no se renderice si no está abierto

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h1>{title}</h1>
      </div>
      <div className="modal-table">
        <Table data={tableData} columns={columns} />
      </div>

      <Button onClick={onClose} variant="secondary-close">
        Cerrar
      </Button>
    </Modal>
  );
};

export default ConsultarModal;
