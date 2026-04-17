import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";

import "../styles/HomePage.css";

const ClientesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com" },
    { id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com" },
  ]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
  ];

  const actions = [
    {
      label: <i className="fas fa-edit" title="Editar"></i>,
      onClick: (cliente) => {
        console.log("Editar cliente", cliente);
      },
      className: "action-button",
    },
    {
      label: <i className="fas fa-trash" title="Eliminar"></i>,
      onClick: (cliente) => {
        console.log("Eliminar cliente", cliente);
      },
      className: "action-button",
    },
  ];

  const handleAddCliente = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCliente = (newCliente) => {
    setClientes([...clientes, newCliente]);
    setIsModalOpen(false);
  };

  return (
    <PageLayout>
      <h1>Clientes</h1>

      <Table data={clientes} columns={columns} actions={actions} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-header">
          <h2>Agregar Cliente</h2>
          <img src="../../public/icon/tmpSVG@1x.png" alt="" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newCliente = {
              id: clientes.length + 1,
              nombre: formData.get("nombre"),
              email: formData.get("email"),
            };
            handleSaveCliente(newCliente);
          }}
        >
          <div>
            <label>
              Nombre:
              <input type="text" name="nombre" required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
          </div>

          <div>
            <label>
              Telefono:
              <input type="tel" name="telefono" required />
            </label>
          </div>

          <div>
            <label>
              Direccion:
              <input type="text" name="direccion" required />
            </label>
          </div>
          <div className="buttoner">
            <Button handleOnClick={handleSaveCliente} variant="secundary">
              Guardar
            </Button>
            <Button onClick={handleCloseModal} variant="secundary-close">
              Cancelar
            </Button>
          </div>
        </form>
      </Modal>
      <Button onClick={handleAddCliente} variant="primary">
        +
      </Button>
    </PageLayout>
  );
};

export default ClientesPage;
