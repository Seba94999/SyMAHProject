import React from "react";
import Modal from "./Modal";
import Button from "./Button";

const EliminarModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h1>{title}</h1>
      </div>
      <div className="modal-body">
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <Button onClick={onConfirm} variant="secondary-close">
          Eliminar
        </Button>
        <Button onClick={onClose} variant="secondary">
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default EliminarModal;
