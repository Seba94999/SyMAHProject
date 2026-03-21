const Empleado = require("../models/Empleado");
const CuentaEmpleado = require("../models/CuentaEmpleado");
const Cargo = require("../models/Cargo");

// Crear un nuevo empleado
exports.crearEmpleado = async (req, res) => {
  try {
    const { cargo: nombreCargo, ...empleadoData } = req.body;

    // Verificar si el cargo existe por ID
    const cargo = await Cargo.findById(nombreCargo);
    if (!cargo) {
      return res
        .status(400)
        .json({ error: "El cargo especificado no existe." });
    }

    // Crear la cuenta del empleado
    const nuevaCuenta = new CuentaEmpleado();
    await nuevaCuenta.save();

    // Crear el empleado con el ID del cargo
    const empleado = new Empleado({
      ...empleadoData,
      cargo: cargo._id,
      cuentaEmpleado: nuevaCuenta._id,
    });
    await empleado.save();

    // Incluir el nombre del cargo en la respuesta
    const empleadoConNombreCargo = {
      ...empleado.toObject(),
      cargo: cargo.nombre,
    };

    res.status(201).json(empleadoConNombreCargo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los empleados
exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un empleado por ID
exports.obtenerEmpleadoPorId = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un empleado
exports.actualizarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un empleado
exports.eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json({ message: "Empleado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Activar un empleado
exports.activarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    empleado.estado = "Activo";
    await empleado.save();

    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Desactivar un empleado
exports.desactivarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    empleado.estado = "Inactivo";
    await empleado.save();

    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Validar estado antes de registrar horarios o pagos
exports.validarEstadoEmpleado = (req, res, next) => {
  if (req.empleado.estado !== "Activo") {
    return res.status(400).json({ error: "El empleado no está activo" });
  }
  next();
};
