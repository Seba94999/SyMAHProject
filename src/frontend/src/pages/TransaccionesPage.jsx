import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import api from "../api/api";
import ConsultarModal from "../components/ConsultarModal";
import EliminarModal from "../components/EliminarModal";
import RegistrarModal from "../components/RegistrarModal";

const TransaccionesPage = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [isConsultarModalOpen, setIsConsultarModalOpen] = useState(false);
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
        setTransacciones(mockTransacciones || []);
      } catch (error) {
        console.error("Error al obtener las transacciones", error);
        setTransacciones([]); // Asegurar que siempre sea un array
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

  const handleConsultarTransaccion = (transaccion) => {
    setTransaccionSeleccionada(transaccion);
    setIsConsultarModalOpen(true);
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
            title="Consultar"
            onClick={() => handleConsultarTransaccion(transaccion)}
            aria-label="Abrir modal para consultar transacción"
          >
            <img src="../../public/icon/consult.svg" alt="Consultar" />
          </button>
          <button
            className="action-button"
            title="Eliminar"
            onClick={() => {
              setTransaccionSeleccionada(transaccion);
              setIsEliminarModalOpen(true);
            }}
            aria-label="Abrir modal para eliminar transacción"
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
      <Table data={transacciones || []} columns={columns} />

      {isRegistrarModalOpen && (
        <RegistrarModal
          isOpen={isRegistrarModalOpen}
          onClose={() => setIsRegistrarModalOpen(false)}
          onSave={handleRegistrarTransaccion}
          fields={transaccionFields}
          title="Registrar Transacción"
        />
      )}

      {isConsultarModalOpen && transaccionSeleccionada && (
        <ConsultarModal
          title="Consultar Transacción"
          isOpen={isConsultarModalOpen}
          onClose={() => setIsConsultarModalOpen(false)}
          tableData={[
            Object.fromEntries(
              Object.entries(transaccionSeleccionada).map(([key, value]) => [
                key,
                value,
              ]),
            ),
          ]}
          columns={Object.keys(transaccionSeleccionada).map((key) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1),
            key,
          }))}
        />
      )}

      {isEliminarModalOpen && (
        <EliminarModal
          title="Eliminar Transacción"
          isOpen={isEliminarModalOpen}
          onClose={() => setIsEliminarModalOpen(false)}
          onConfirm={() =>
            handleEliminarTransaccion(transaccionSeleccionada.id)
          }
          message="¿Está seguro que desea eliminar esta transacción?"
        />
      )}
    </PageLayout>
  );
};

export default TransaccionesPage;
