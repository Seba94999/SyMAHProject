import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import ConsultarModal from "../components/ConsultarModal";
import RegistrarModal from "../components/RegistrarModal";
import ModificarModal from "../components/ModificarModal";
import EliminarModal from "../components/EliminarModal";
import RegistrarPresupuestoModal from "../components/RegistrarPresupuestoModal";

import "../styles/HomePage.css";

const ClientesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com" },
    { id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com" },
  ]);
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [presupuestos, setPresupuestos] = useState([
    {
      id: 1,
      clienteId: 1,
      descripcion: "Presupuesto 1",
      monto: 1000,
      fecha: "2026-04-01",
      estado: "pendiente",
    },
    {
      id: 2,
      clienteId: 1,
      descripcion: "Presupuesto 2",
      monto: 2000,
      fecha: "2026-04-10",
      estado: "aceptado",
    },
    {
      id: 3,
      clienteId: 2,
      descripcion: "Presupuesto 3",
      monto: 1500,
      fecha: "2026-04-05",
      estado: "rechazado",
    },
  ]);
  const [isModificarModalOpen, setIsModificarModalOpen] = useState(false);
  const [clienteAModificar, setClienteAModificar] = useState(null);
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [clienteAEliminar, setClienteAEliminar] = useState(null);
  const [isRegistrarPresupuestoModalOpen, setIsRegistrarPresupuestoModalOpen] =
    useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  const consultarCliente = (cliente) => {
    setSelectedCliente(cliente);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCliente(null);
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "email", label: "Email" },
    {
      key: "acciones",
      label: "Acciones",
      render: (cliente) => (
        <div className="action-buttons">
          <button
            className="action-button"
            title="Consultar"
            onClick={() => consultarCliente(cliente)}
          >
            <img src="../../public/icon/consult.svg" alt="Consultar"></img>
          </button>
          <button
            className="action-button"
            title="Modificar"
            onClick={() => handleModificarCliente(cliente)}
          >
            <img src="../../public/icon/config.svg" alt="Modificar"></img>
          </button>
          <button
            className="action-button"
            title="Registrar Presupuesto"
            onClick={() => handleRegistrarPresupuesto(cliente)}
          >
            <img src="../../public/icon/presup.svg" alt="" />
          </button>
          <button
            className="action-button"
            title="Eliminar"
            onClick={() => handleEliminarCliente(cliente)}
          >
            <img src="../../public/icon/delete.svg" alt="" />
          </button>
        </div>
      ),
    },
  ];

  const handleSaveCliente = (newCliente) => {
    setClientes([...clientes, { id: clientes.length + 1, ...newCliente }]);
    setIsRegistrarModalOpen(false); // Cerrar solo el modal de registro
  };

  const clienteFields = [
    { name: "nombre", label: "Nombre", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Teléfono", type: "tel", required: true },
    { name: "direccion", label: "Dirección", type: "text", required: true },
  ];

  const handleAddCliente = () => {
    setIsRegistrarModalOpen(true);
  };

  const handleCloseRegistrarModal = () => {
    setIsRegistrarModalOpen(false);
  };

  const handleModificarCliente = (cliente) => {
    setClienteAModificar(cliente);
    setIsModificarModalOpen(true);
  };

  const handleSaveModificacion = (updatedCliente) => {
    setClientes((prevClientes) =>
      prevClientes.map((cliente) =>
        cliente.id === updatedCliente.id ? updatedCliente : cliente,
      ),
    );
    setIsModificarModalOpen(false);
  };

  const modificarCliente = (cliente) => {
    console.log("Modificar cliente", cliente);
    alert(`Modificando cliente: ${cliente.nombre}`);
  };

  const registrarPresupuestoCliente = (cliente) => {
    console.log("Registrar presupuesto para cliente", cliente);
    alert(`Registrando presupuesto para cliente: ${cliente.nombre}`);
  };

  const eliminarCliente = (cliente) => {
    console.log("Eliminar cliente", cliente);
    if (
      window.confirm(
        `¿Estás seguro de que deseas eliminar a ${cliente.nombre}?`,
      )
    ) {
      setClientes(clientes.filter((c) => c.id !== cliente.id));
    }
  };

  const handleEliminarCliente = (cliente) => {
    setClienteAEliminar(cliente);
    setIsEliminarModalOpen(true);
  };

  const handleConfirmEliminar = () => {
    setClientes((prevClientes) =>
      prevClientes.filter((cliente) => cliente.id !== clienteAEliminar.id),
    );
    setIsEliminarModalOpen(false);
    setClienteAEliminar(null);
  };

  const editarPresupuesto = (row) => {
    console.log("Editar presupuesto", row);
    alert(`Editando presupuesto: ${row.descripcion}`);
  };

  const eliminarPresupuesto = (row) => {
    console.log("Eliminar presupuesto", row);
    if (
      window.confirm(
        `¿Estás seguro de que deseas eliminar el presupuesto ${row.descripcion}?`,
      )
    ) {
      setPresupuestos(presupuestos.filter((r) => r.id !== row.id));
    }
  };

  const consultarPresupuesto = (row) => {
    console.log("Consultar presupuesto", row);
    alert(`Consultando presupuesto: ${row.descripcion}`);
  };

  const aprobarPresupuesto = (row) => {
    console.log("Aprobar presupuesto", row);
    setPresupuestos((prevPresupuestos) =>
      prevPresupuestos.map((presupuesto) =>
        presupuesto.id === row.id
          ? { ...presupuesto, estado: "aceptado" }
          : presupuesto,
      ),
    );
    alert(`Presupuesto ${row.descripcion} aceptado.`);
  };

  const desaprobarPresupuesto = (row) => {
    console.log("Desaprobar presupuesto", row);
    setPresupuestos((prevPresupuestos) =>
      prevPresupuestos.map((presupuesto) =>
        presupuesto.id === row.id
          ? { ...presupuesto, estado: "rechazado" }
          : presupuesto,
      ),
    );
    alert(`Presupuesto ${row.descripcion} rechazado.`);
  };

  const handleRegistrarPresupuesto = (cliente) => {
    setClienteSeleccionado(cliente);
    setIsRegistrarPresupuestoModalOpen(true);
  };

  const handleSavePresupuesto = (nuevoPresupuesto) => {
    setPresupuestos((prevPresupuestos) => [
      ...prevPresupuestos,
      {
        id: prevPresupuestos.length + 1,
        clienteId: clienteSeleccionado.id,
        ...nuevoPresupuesto,
        fileName: nuevoPresupuesto.file ? nuevoPresupuesto.file.name : null,
      },
    ]);
    setIsRegistrarPresupuestoModalOpen(false);
    setClienteSeleccionado(null);
  };

  // Asegurar que solo un modal se renderice a la vez
  return (
    <PageLayout>
      <h1>Clientes</h1>

      <Table data={clientes} columns={columns} />

      {isModalOpen && selectedCliente && (
        <ConsultarModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedCliente}
          title={`Presupuestos de ${selectedCliente.nombre}`}
          columns={[
            { key: "fecha", label: "Fecha" },
            {
              key: "estado",
              label: "Estado",
              render: (row) => {
                const estadoIconMap = {
                  pendiente: "pendiente.svg",
                  aceptado: "aceptado.svg",
                  rechazado: "rechazado.svg",
                };

                return (
                  <img
                    src={`../../public/icon/${estadoIconMap[row.estado]}`}
                    alt={row.estado}
                    title={row.estado}
                    className="estado-icon"
                  />
                );
              },
            },
            {
              key: "acciones",
              label: "Acciones",
              render: (row) => (
                <div className="action-buttons">
                  <button
                    className="action-button"
                    title="Consultar Presupuesto"
                    onClick={() => consultarPresupuesto(row)}
                  >
                    <img src="../../public/icon/consult.svg" alt="Consultar" />
                  </button>
                  <button
                    className="action-button"
                    title="Aprobar Presupuesto"
                    onClick={() => aprobarPresupuesto(row)}
                  >
                    <img src="../../public/icon/aprob.svg" alt="Aprobar" />
                  </button>
                  <button
                    className="action-button"
                    title="Desaprobar Presupuesto"
                    onClick={() => desaprobarPresupuesto(row)}
                  >
                    <img
                      src="../../public/icon/desaprob.svg"
                      alt="Desaprobar"
                    />
                  </button>
                  <button
                    className="action-button"
                    title="Eliminar Presupuesto"
                    onClick={() => eliminarPresupuesto(row)}
                  >
                    <img src="../../public/icon/delete.svg" alt="Eliminar" />
                  </button>
                </div>
              ),
            },
          ]}
          tableData={presupuestos}
        />
      )}

      {isRegistrarModalOpen && (
        <RegistrarModal
          isOpen={isRegistrarModalOpen}
          onClose={handleCloseRegistrarModal}
          onSave={handleSaveCliente}
          fields={clienteFields}
          title="Registrar Cliente"
        />
      )}

      {isModificarModalOpen && (
        <ModificarModal
          isOpen={isModificarModalOpen}
          onClose={() => setIsModificarModalOpen(false)}
          onSave={handleSaveModificacion}
          fields={clienteFields}
          title="Modificar Cliente"
          initialData={clienteAModificar}
        />
      )}

      {isEliminarModalOpen && (
        <EliminarModal
          isOpen={isEliminarModalOpen}
          onClose={() => setIsEliminarModalOpen(false)}
          onConfirm={handleConfirmEliminar}
          title="Confirmar Eliminación"
          message={`¿Estás seguro de que deseas eliminar a ${clienteAEliminar?.nombre}?`}
        />
      )}

      {isRegistrarPresupuestoModalOpen && (
        <RegistrarPresupuestoModal
          isOpen={isRegistrarPresupuestoModalOpen}
          onClose={() => setIsRegistrarPresupuestoModalOpen(false)}
          onSave={handleSavePresupuesto}
          fields={[
            {
              name: "descripcion",
              label: "Descripción",
              type: "text",
              required: true,
            },
            { name: "monto", label: "Monto", type: "number", required: true },
            { name: "fecha", label: "Fecha", type: "date", required: true },
          ]}
          title="Registrar Presupuesto"
        />
      )}

      <Button onClick={handleAddCliente} variant="primary">
        +
      </Button>
    </PageLayout>
  );
};

export default ClientesPage;
