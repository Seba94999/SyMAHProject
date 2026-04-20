import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import Table from "./Table";

const ConsultarModal = ({
  isOpen,
  onClose,
  data,
  title,
  columns,
  tableData,
}) => {
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-header">
        <h2>{title}</h2>
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
