import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import api from "../api/api";

const TransaccionesPage = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [isModificarModalOpen, setIsModificarModalOpen] = useState(false);
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [transaccionSeleccionada, setTransaccionSeleccionada] = useState(null);

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const mockTransacciones = [
          {
            id: 1,
            fecha: "2026-05-01",
            importe: 500,
            descripcion: "Pago de servicios",
            tipo: "PAGO",
          },
          {
            id: 2,
            fecha: "2026-05-02",
            importe: 1200,
            descripcion: "Cobro de cliente",
            tipo: "COBRO",
          },
        ];
        setTransacciones(mockTransacciones);
      } catch (error) {
        console.error("Error al obtener las transacciones", error);
      }
    };

    fetchTransacciones();
  }, []);

  const handleRegistrarTransaccion = async (nuevaTransaccion) => {
    try {
      const response = await api.post("/transacciones", nuevaTransaccion);
      setTransacciones([...transacciones, response.data]);
      setIsRegistrarModalOpen(false);
    } catch (error) {
      console.error("Error al registrar la transacción", error);
    }
  };

  const handleModificarTransaccion = async (transaccion) => {
    try {
      const response = await api.put(
        `/transacciones/${transaccion.id}`,
        transaccion,
      );
      setTransacciones(
        transacciones.map((t) => (t.id === transaccion.id ? response.data : t)),
      );
      setIsModificarModalOpen(false);
    } catch (error) {
      console.error("Error al modificar la transacción", error);
    }
  };

  const handleEliminarTransaccion = async (id) => {
    try {
      await api.delete(`/transacciones/${id}`);
      setTransacciones(transacciones.filter((t) => t.id !== id));
      setIsEliminarModalOpen(false);
    } catch (error) {
      console.error("Error al eliminar la transacción", error);
    }
  };

  const transaccionFields = [
    { name: "fecha", label: "Fecha", required: true, type: "date" },
    { name: "importe", label: "Importe", required: true, type: "number" },
    {
      name: "descripcion",
      label: "Descripción",
      required: false,
      type: "text",
    },
    {
      name: "tipo",
      label: "Tipo",
      required: true,
      type: "select",
      options: ["COBRO", "PAGO", "GASTO", "PRESTAMO"],
    },
  ];

  const columns = [
    { label: "Fecha", key: "fecha" },
    { label: "Importe", key: "importe" },
    { label: "Descripción", key: "descripcion" },
    { label: "Tipo", key: "tipo" },
    {
      label: "Acciones",
      render: (transaccion) => (
        <div className="action-buttons">
          <button
            className="action-button"
            title="Modificar"
            onClick={() => {
              setTransaccionSeleccionada(transaccion);
              setIsModificarModalOpen(true);
            }}
          >
            <img src="../../public/icon/config.svg" alt="Modificar" />
          </button>
          <button
            className="action-button"
            title="Eliminar"
            onClick={() => {
              setTransaccionSeleccionada(transaccion);
              setIsEliminarModalOpen(true);
            }}
          >
            <img src="../../public/icon/delete.svg" alt="Eliminar" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <PageLayout>
      <h1>Gestión de Transacciones</h1>
      <Button
        className="floating-button"
        onClick={() => setIsRegistrarModalOpen(true)}
        variant="primary"
      >
        +
      </Button>
      <Table data={transacciones} columns={columns} />

      {isRegistrarModalOpen && (
        <Modal
          title="Registrar Transacción"
          onClose={() => setIsRegistrarModalOpen(false)}
          onSave={handleRegistrarTransaccion}
          fields={transaccionFields}
        />
      )}

      {isModificarModalOpen && (
        <Modal
          title="Modificar Transacción"
          onClose={() => setIsModificarModalOpen(false)}
          onSave={handleModificarTransaccion}
          fields={transaccionFields}
          initialData={transaccionSeleccionada}
        />
      )}

      {isEliminarModalOpen && (
        <Modal
          title="Eliminar Transacción"
          onClose={() => setIsEliminarModalOpen(false)}
          onConfirm={() =>
            handleEliminarTransaccion(transaccionSeleccionada.id)
          }
        >
          <p>¿Está seguro que desea eliminar esta transacción?</p>
        </Modal>
      )}
    </PageLayout>
  );
};

export default TransaccionesPage;
