import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Table from "../components/Table";
import RegistrarModal from "../components/RegistrarModal";
import ModificarModal from "../components/ModificarModal";
import EliminarModal from "../components/EliminarModal";
import Button from "../components/Button";
import api from "../api/api";
import ConsultarModal from "../components/ConsultarModal";
import Modal from "../components/Modal";

const EmpleadoPage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [isModificarModalOpen, setIsModificarModalOpen] = useState(false);
  const [isEliminarModalOpen, setIsEliminarModalOpen] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [isConsultarModalOpen, setIsConsultarModalOpen] = useState(false);
  const [isRegistrarJornadaModalOpen, setIsRegistrarJornadaModalOpen] =
    useState(false);
  const [isConsultarJornadasModalOpen, setIsConsultarJornadasModalOpen] =
    useState(false);
  const [isRegistrarPagoModalOpen, setIsRegistrarPagoModalOpen] =
    useState(false);
  const [isConsultarPagosModalOpen, setIsConsultarPagosModalOpen] =
    useState(false);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        // Datos de prueba
        const mockEmpleados = [
          {
            id: 1,
            nombre: "Juan",
            apellido: "Pérez",
            email: "juan.perez@example.com",
            telefono: "123456789",
            cargo: "Desarrollador",
            activo: true,
            jornadas: [
              {
                fecha: "2024-04-01",
                horaInicio: "09:00",
                horaFin: "18:00",
                descripcion: "Jornada laboral",
              },
            ],
            pagos: [
              {
                fecha: "2024-04-01",
                importe: 100,
                descripcion: "Pago por jornada",
              },
            ],
          },
          {
            id: 2,
            nombre: "María",
            apellido: "Gómez",
            email: "maria.gomez@example.com",
            telefono: "987654321",
            cargo: "Diseñadora",
            activo: false,
            jornadas: [
              {
                fecha: "2024-04-02",
                horaInicio: "09:00",
                horaFin: "18:00",
                descripcion: "Jornada laboral",
              },
            ],
            pagos: [
              {
                fecha: "2024-04-02",
                importe: 100,
                descripcion: "Pago por jornada",
              },
            ],
          },
          {
            id: 3,
            nombre: "Carlos",
            apellido: "López",
            email: "carlos.lopez@example.com",
            telefono: "456123789",
            cargo: "Gerente",
            activo: true,
            jornadas: [
              {
                fecha: "2024-04-03",
                horaInicio: "09:00",
                horaFin: "18:00",
                descripcion: "Jornada laboral",
              },
            ],
            pagos: [
              {
                fecha: "2024-04-03",
                importe: 100,
                descripcion: "Pago por jornada",
              },
            ],
          },
        ];
        setEmpleados(mockEmpleados);
      } catch (error) {
        console.error("Error al obtener empleados:", error);
      }
    };

    fetchEmpleados();
  }, []);

  useEffect(() => {
    console.log("Empleados actualizados:", empleados);
  }, [empleados]);

  useEffect(() => {
    if (empleadoSeleccionado) {
      console.log("Empleado seleccionado:", empleadoSeleccionado);
      console.log("Pagos del empleado:", empleadoSeleccionado.pagos);
    }
  }, [empleadoSeleccionado]);

  const handleRegistrarEmpleado = async (nuevoEmpleado) => {
    try {
      const response = await api.post("/empleados", nuevoEmpleado);
      setEmpleados((prevEmpleados) => [...prevEmpleados, response.data]);
      setIsRegistrarModalOpen(false);
    } catch (error) {
      console.error("Error al registrar empleado:", error);
    }
  };

  const handleModificarEmpleado = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsModificarModalOpen(true);
  };

  const handleEliminarEmpleado = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsEliminarModalOpen(true);
  };

  const handleConsultarEmpleado = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsConsultarModalOpen(true);
  };

  const handleRegistrarJornada = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsRegistrarJornadaModalOpen(true);
  };

  const handleSaveJornada = (jornadaData) => {
    console.log("Jornada registrada:", jornadaData);
    setIsRegistrarJornadaModalOpen(false);
  };

  const handleSelectEmpleado = (empleado) => {
    setEmpleadoSeleccionado(empleado);
  };

  const handleConsultarJornadas = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsConsultarJornadasModalOpen(true);
  };

  const handleRegistrarPago = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsRegistrarPagoModalOpen(true);
  };

  const handleSavePago = (pagoData) => {
    if (empleadoSeleccionado) {
      setEmpleados((prevEmpleados) =>
        prevEmpleados.map((empleado) =>
          empleado.id === empleadoSeleccionado.id
            ? {
                ...empleado,
                pagos: [...(empleado.pagos || []), pagoData],
              }
            : empleado,
        ),
      );
    }
    setIsRegistrarPagoModalOpen(false);
  };

  const handleConsultarPagos = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setIsConsultarPagosModalOpen(true);
  };

  const empleadoFields = [
    { name: "nombre", label: "Nombre", required: true, type: "text" },
    { name: "apellido", label: "Apellido", required: true, type: "text" },
    {
      name: "email",
      label: "Correo Electrónico",
      required: true,
      type: "email",
    },
    { name: "telefono", label: "Teléfono", required: false, type: "text" },
    { name: "cargo", label: "Cargo", required: true, type: "text" },
  ];

  const jornadaFields = [
    { name: "fecha", label: "Fecha", required: true, type: "date" },
    {
      name: "horaInicio",
      label: "Hora de Inicio",
      required: true,
      type: "time",
    },
    { name: "horaFin", label: "Hora de Fin", required: true, type: "time" },
    {
      name: "descripcion",
      label: "Descripción",
      required: false,
      type: "text",
    },
  ];

  const columns = [
    { label: "ID", key: "id" },
    { label: "Nombre", key: "nombre" },
    { label: "Cargo", key: "cargo" },
    {
      label: "Estado",
      render: (empleado) => (
        <img
          src={
            empleado.activo
              ? "../../public/icon/actv.svg"
              : "../../public/icon/inactv.svg"
          }
          alt={empleado.activo ? "Activo" : "Inactivo"}
          title={empleado.activo ? "Activo" : "Inactivo"}
          className="estado-icon"
        />
      ),
    },
    {
      label: "Acciones",
      render: (empleado) => (
        <div className="action-buttons">
          <button
            className="action-button"
            title="Consultar"
            onClick={() => handleConsultarEmpleado(empleado)}
          >
            <img src="../../public/icon/consult.svg" alt="" />
          </button>
          <button
            className="action-button"
            title="Registrar Jornada"
            onClick={() => handleRegistrarJornada(empleado)}
          >
            <img src="../../public/icon/jrnd.svg" alt="" />
          </button>
          <button
            className="action-button"
            title="Registrar Pago"
            onClick={() => handleRegistrarPago(empleado)}
          >
            <img src="../../public/icon/pag.svg" alt="" />
          </button>
          <button
            className="action-button"
            title={empleado.activo ? "Desactivar" : "Activar"}
            onClick={() => handleActivarDesactivarEmpleado(empleado)}
          >
            <img
              src={
                empleado.activo
                  ? "../../public/icon/desactvr.svg"
                  : "../../public/icon/actvr.svg"
              }
              alt=""
            />
          </button>
          <button
            className="action-button"
            title="Modificar"
            onClick={() => handleModificarEmpleado(empleado)}
          >
            <img src="../../public/icon/config.svg" alt="" />
          </button>
          <button
            className="action-button"
            title="Eliminar"
            onClick={() => handleEliminarEmpleado(empleado)}
          >
            <img src="../../public/icon/delete.svg" alt="" />
          </button>
        </div>
      ),
    },
  ];

  const handleActivarDesactivarEmpleado = (empleado) => {
    setEmpleados((prevEmpleados) =>
      prevEmpleados.map((e) =>
        e.id === empleado.id ? { ...e, activo: !e.activo } : e,
      ),
    );
  };

  return (
    <PageLayout>
      <h1>Gestión de Empleados</h1>
      <Button
        onClick={() => setIsRegistrarModalOpen(true)}
        title="Registrar Nuevo Empleado"
        variant="primary"
      >
        +
      </Button>
      <Table
        data={empleados}
        columns={columns}
        onRowClick={(empleado) => handleSelectEmpleado(empleado)}
      />
      <RegistrarModal
        isOpen={isRegistrarModalOpen}
        onClose={() => setIsRegistrarModalOpen(false)}
        onSave={handleRegistrarEmpleado}
        title="Registrar Empleado"
        fields={empleadoFields}
      />
      {isModificarModalOpen && (
        <ModificarModal
          isOpen={isModificarModalOpen}
          onClose={() => setIsModificarModalOpen(false)}
          onSave={(updatedEmpleado) => {
            console.log("Modificar empleado", updatedEmpleado);
            setIsModificarModalOpen(false);
          }}
          title="Modificar Empleado"
          fields={empleadoFields}
          initialData={empleadoSeleccionado}
        />
      )}
      {isEliminarModalOpen && (
        <EliminarModal
          isOpen={isEliminarModalOpen}
          onClose={() => setIsEliminarModalOpen(false)}
          onConfirm={() => {
            console.log("Eliminar empleado", empleadoSeleccionado);
            setIsEliminarModalOpen(false);
          }}
          title="Eliminar Empleado"
          message={`¿Estás seguro de que deseas eliminar al empleado "${empleadoSeleccionado?.nombre}"?`}
        />
      )}
      {isConsultarModalOpen && empleadoSeleccionado && (
        <ConsultarModal
          isOpen={isConsultarModalOpen}
          onClose={() => setIsConsultarModalOpen(false)}
          title="Detalles del Empleado"
          data={empleadoSeleccionado}
          columns={[
            { label: "Nombre", key: "nombre" },
            { label: "Apellido", key: "apellido" },
            { label: "Correo Electrónico", key: "email" },
            { label: "Teléfono", key: "telefono" },
            { label: "Cargo", key: "cargo" },
            {
              label: "Estado",
              render: (empleado) => (empleado.activo ? "Activo" : "Inactivo"),
            },
          ]}
          tableData={[empleadoSeleccionado]}
        />
      )}
      {isRegistrarJornadaModalOpen && empleadoSeleccionado && (
        <RegistrarModal
          isOpen={isRegistrarJornadaModalOpen}
          onClose={() => setIsRegistrarJornadaModalOpen(false)}
          onSave={handleSaveJornada}
          fields={jornadaFields}
          title={`Registrar Jornada ${empleadoSeleccionado.nombre}`}
          extraButtons={[
            {
              label: "Consultar Jornadas",
              onClick: () => handleConsultarJornadas(empleadoSeleccionado),
              type: "secondary",
            },
          ]}
        />
      )}
      {isConsultarJornadasModalOpen && empleadoSeleccionado && (
        <ConsultarModal
          isOpen={isConsultarJornadasModalOpen}
          onClose={() => setIsConsultarJornadasModalOpen(false)}
          title="Jornadas Registradas"
          data={empleadoSeleccionado.jornadas || []}
          columns={[
            { label: "Fecha", key: "fecha" },
            { label: "Hora de Ingreso", key: "horaIngreso" },
            { label: "Hora de Egreso", key: "horaEgreso" },
            { label: "Horas Trabajadas", key: "horasTrabajadas" },
            { label: "Subtotal", key: "subtotal" },
          ]}
        />
      )}
      {isRegistrarPagoModalOpen && empleadoSeleccionado && (
        <RegistrarModal
          isOpen={isRegistrarPagoModalOpen}
          onClose={() => setIsRegistrarPagoModalOpen(false)}
          onSave={handleSavePago}
          fields={[
            { name: "fecha", label: "Fecha", required: true, type: "date" },
            {
              name: "importe",
              label: "Importe",
              required: true,
              type: "number",
            },
            {
              name: "descripcion",
              label: "Descripción",
              required: false,
              type: "text",
            },
          ]}
          title={`Registrar Pago para ${empleadoSeleccionado?.nombre}`}
          extraButtons={[
            {
              label: "Consultar Pagos",
              onClick: () => handleConsultarPagos(empleadoSeleccionado),
              type: "secondary",
            },
          ]}
        />
      )}
      {isConsultarPagosModalOpen && empleadoSeleccionado && (
        <ConsultarModal
          isOpen={isConsultarPagosModalOpen}
          onClose={() => setIsConsultarPagosModalOpen(false)}
          title="Pagos Registrados"
          data={empleadoSeleccionado.pagos || []}
          columns={[
            { label: "Fecha", key: "fecha" },
            { label: "Importe", key: "importe" },
            { label: "Descripción", key: "descripcion" },
          ]}
          tableData={empleadoSeleccionado.pagos || []}
        />
      )}
    </PageLayout>
  );
};

export default EmpleadoPage;
