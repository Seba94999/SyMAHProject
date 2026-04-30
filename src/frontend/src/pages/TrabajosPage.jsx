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
          {
            id: 1,
            cliente: "Cliente 1",
            descripcion: "Descripción del trabajo 1",
            fechaInicio: "2026-04-01",
            estado: "EnCurso",
            direccion: "Dirección 1",
            precio: 1000,
            cobrosRecibidos: [
              {
                id: 1,
                fecha: "2026-04-01",
                monto: 500,
              },
              {
                id: 2,
                fecha: "2026-04-02",
                monto: 500,
              },
            ],
          },
          {
            id: 2,
            cliente: "Cliente 2",
            descripcion: "Descripción del trabajo 2",
            fechaInicio: "2026-03-15",
            estado: "Finalizado",
            direccion: "Dirección 2",
            precio: 2000,
            cobrosRecibidos: [
              {
                id: 1,
                fecha: "2026-03-15",
                monto: 1000,
              },
            ],
          },
          {
            id: 3,
            cliente: "Cliente 3",
            descripcion: "Descripción del trabajo 3",
            fechaInicio: "2026-02-20",
            estado: "EnPausa",
            direccion: "Dirección 3",
            precio: 1500,
            cobrosRecibidos: [
              {
                id: 1,
                fecha: "2026-02-20",
                monto: 750,
              },
            ],
          },
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
    setTrabajoSeleccionado([trabajo]); // Asegurarse de que sea un arreglo
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

  const trabajoFields = [
    { name: "cliente", label: "Cliente", required: true, type: "text" },
    {
      name: "descripcion",
      label: "Descripción",
      required: false,
      type: "text",
    },
    {
      name: "fechaInicio",
      label: "Fecha de Inicio",
      required: true,
      type: "date",
    },
    {
      name: "estado",
      label: "Estado",
      required: true,
      type: "select",
      options: ["EnCurso", "EnPausa", "Finalizado", "Cancelado"],
    },
    { name: "direccion", label: "Dirección", required: true, type: "text" },
    { name: "precio", label: "Precio", required: true, type: "number", min: 0 },
  ];

  const columns = [
    { label: "ID", key: "id" },
    { label: "Cliente", key: "cliente" },
    { label: "Descripción", key: "descripcion" },
    { label: "Fecha de Inicio", key: "fechaInicio" },
    {
      label: "Estado",
      render: (trabajo) => (
        <div className="estado-cell">
          <img
            src={
              trabajo.estado === "EnCurso"
                ? "../../public/icon/enproc.svg"
                : trabajo.estado === "EnPausa"
                  ? "../../public/icon/enproc.svg"
                  : trabajo.estado === "Finalizado"
                    ? "../../public/icon/fin.svg"
                    : trabajo.estado === "Cancelado"
                      ? "../../public/icon/rechazado.svg"
                      : ""
            }
            alt={trabajo.estado}
            className="estado-icon"
          />
        </div>
      ),
    },
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
            title={trabajo.estado === "EnCurso" ? "Pausar" : "Reanudar"}
            onClick={() => {
              const nuevoEstado =
                trabajo.estado === "EnCurso" ? "EnPausa" : "EnCurso";
              handleActualizarEstadoTrabajo(trabajo, nuevoEstado);
            }}
          >
            <img
              className="action-button"
              src={
                trabajo.estado === "EnCurso"
                  ? "../../public/icon/paus.svg"
                  : "../../public/icon/reprod.svg"
              }
              alt={trabajo.estado === "EnCurso" ? "Pausar" : "Reanudar"}
            />
          </button>
          <button
            className="action-button"
            title="Finalizar"
            onClick={() => handleActualizarEstadoTrabajo(trabajo, "Finalizado")}
          >
            <img src="../../public/icon/aceptado.svg" alt="Finalizar" />
          </button>
          <button
            className="action-button"
            title="Cobros"
            onClick={() => handleConsultarCobros(trabajo)}
          >
            <img src="../../public/icon/recibo.svg" alt="Cobros" />
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

  const handleActualizarEstadoTrabajo = async (trabajo, nuevoEstado) => {
    try {
      const response = await api.patch(`/trabajos/${trabajo.id}`, {
        estado: nuevoEstado,
      });
      setTrabajos((prevTrabajos) =>
        prevTrabajos.map((t) =>
          t.id === trabajo.id ? { ...t, estado: response.data.estado } : t,
        ),
      );
    } catch (error) {
      console.error("Error al actualizar el estado del trabajo:", error);
    }
  };

  const handleConsultarCobros = (trabajo) => {
    setTrabajoSeleccionado(trabajo.cobrosRecibidos || []);
    setIsConsultarModalOpen(true);
  };

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
        fields={trabajoFields}
      />
      {isConsultarModalOpen && trabajoSeleccionado && (
        <ConsultarModal
          isOpen={isConsultarModalOpen}
          onClose={() => setIsConsultarModalOpen(false)}
          title={
            Array.isArray(trabajoSeleccionado) && trabajoSeleccionado[0]?.monto
              ? "Cobros del Trabajo"
              : "Detalles del Trabajo"
          }
          data={trabajoSeleccionado}
          columns={
            Array.isArray(trabajoSeleccionado) && trabajoSeleccionado[0]?.monto
              ? [
                  {
                    label: "Monto",
                    render: (cobro) =>
                      new Intl.NumberFormat("es-CL", {
                        style: "currency",
                        currency: "CLP",
                      }).format(cobro.monto),
                  },
                  { label: "Fecha", key: "fecha" },
                ]
              : trabajoFields.map((field) => ({
                  label: field.label,
                  key: field.name,
                }))
          }
          tableData={trabajoSeleccionado}
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
          fields={trabajoFields}
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
