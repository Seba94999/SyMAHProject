import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import RegistrarModal from "../components/RegistrarModal";
import api from "../api/api";
import Button from "../components/Button";
import ConsultarModal from "../components/ConsultarModal";
import ModificarModal from "../components/ModificarModal";
import EliminarModal from "../components/EliminarModal";

const TrabajosPage = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [isConsultarModalOpen, setIsConsultarModalOpen] = useState(false);
  const [isModificarModalOpen, setIsModificarModalOpen] = useState(false);
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  useEffect(() => {
    const fetchTrabajos = async () => {
      try {
        // Datos de prueba para visualizar en la tabla
        const mockTrabajos = [
          { id: 1, nombre: "Trabajo 1", estado: "En Curso" },
          { id: 2, nombre: "Trabajo 2", estado: "Finalizado" },
          { id: 3, nombre: "Trabajo 3", estado: "Pausado" },
        ];
        setTrabajos(mockTrabajos);
      } catch (error) {
        console.error("Error al obtener trabajos:", error);
      }
    };

    fetchTrabajos();
  }, []);

  const handleRegistrarTrabajo = async (nuevoTrabajo) => {
    try {
      const response = await api.post("/trabajos", nuevoTrabajo);
      setTrabajos((prevTrabajos) => [...prevTrabajos, response.data]);
      setIsRegistrarModalOpen(false);
    } catch (error) {
      console.error("Error al registrar trabajo:", error);
    }
  };

  const handleConsultarTrabajo = (trabajo) => {
    setTrabajoSeleccionado(trabajo);
    setIsConsultarModalOpen(true);
  };

  const handleModificarTrabajo = (trabajo) => {
    setTrabajoSeleccionado(trabajo);
    setIsModificarModalOpen(true);
  };

  const handleEliminarTrabajo = (trabajo) => {
    setTrabajoSeleccionado(trabajo);
    setIsEliminarModalOpen(true);
  };

  const columns = [
    { label: "ID", key: "id" },
    { label: "Nombre", key: "nombre" },
    { label: "Estado", key: "estado" },
    {
      label: "Acciones",
      render: (trabajo) => (
        <div className="action-buttons">
          <button
            className="action-button"
            title="Consultar"
            onClick={() => handleConsultarTrabajo(trabajo)}
          >
            <img src="../../public/icon/consult.svg" alt="Consultar" />
          </button>
          <button
            className="action-button"
            title="Modificar"
            onClick={() => handleModificarTrabajo(trabajo)}
          >
            <img src="../../public/icon/config.svg" alt="Modificar" />
          </button>
          <button
            className="action-button"
            title="Eliminar"
            onClick={() => handleEliminarTrabajo(trabajo)}
          >
            <img src="../../public/icon/delete.svg" alt="Eliminar" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <PageLayout>
      <h1>Gestión de Trabajos</h1>
      <Button
        onClick={() => setIsRegistrarModalOpen(true)}
        title="Registrar Nuevo Trabajo"
        variant="primary"
      >
        +
      </Button>
      <Table data={trabajos} columns={columns} />
      <RegistrarModal
        isOpen={isRegistrarModalOpen}
        onClose={() => setIsRegistrarModalOpen(false)}
        onSave={handleRegistrarTrabajo}
        title="Registrar Trabajo"
        fields={[
          { name: "nombre", label: "Nombre", required: true },
          { name: "estado", label: "Estado", required: true },
        ]}
      />
      {isConsultarModalOpen && (
        <ConsultarModal
          isOpen={isConsultarModalOpen}
          onClose={() => setIsConsultarModalOpen(false)}
          title="Detalles del Trabajo"
          data={trabajoSeleccionado}
          columns={[
            { label: "ID", key: "id" },
            { label: "Nombre", key: "nombre" },
            { label: "Estado", key: "estado" },
          ]}
          tableData={[trabajoSeleccionado]}
        />
      )}
      {isModificarModalOpen && (
        <ModificarModal
          isOpen={isModificarModalOpen}
          onClose={() => setIsModificarModalOpen(false)}
          onSave={(updatedTrabajo) => {
            console.log("Modificar trabajo", updatedTrabajo);
            setIsModificarModalOpen(false);
          }}
          title="Modificar Trabajo"
          fields={[
            { name: "nombre", label: "Nombre", required: true, type: "text" },
            { name: "estado", label: "Estado", required: true, type: "text" },
          ]}
          initialData={trabajoSeleccionado}
        />
      )}
      {isEliminarModalOpen && (
        <EliminarModal
          isOpen={isEliminarModalOpen}
          onClose={() => setIsEliminarModalOpen(false)}
          onConfirm={() => {
            console.log("Eliminar trabajo", trabajoSeleccionado);
            setIsEliminarModalOpen(false);
          }}
          title="Eliminar Trabajo"
          message={`¿Estás seguro de que deseas eliminar el trabajo "${trabajoSeleccionado?.nombre}"?`}
        />
      )}
    </PageLayout>
  );
};

export default TrabajosPage;
