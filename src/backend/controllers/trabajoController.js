const CuentaTrabajo = require("../models/CuentaTrabajo");
const Trabajo = require("../models/Trabajo");

// Crear un nuevo trabajo
exports.crearTrabajo = async (req, res) => {
  try {
    // Crear la cuenta del trabajo
    const nuevaCuenta = new CuentaTrabajo();
    await nuevaCuenta.save();

    const trabajo = new Trabajo({
      ...req.body,
      cuentaTrabajo: nuevaCuenta._id,
    });

    res.status(201).json(trabajo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los trabajos
exports.obtenerTrabajos = async (req, res) => {
  try {
    const trabajos = await Trabajo.find();
    res.status(200).json(trabajos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancelar un trabajo
exports.cancelarTrabajo = async (req, res) => {
  try {
    const trabajo = await Trabajo.findById(req.params.id);
    if (!trabajo) {
      return res.status(404).json({ error: "Trabajo no encontrado" });
    }

    await trabajo.cancelarTrabajo();
    res.status(200).json(trabajo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Registrar un cobro
exports.registrarCobro = async (req, res) => {
  try {
    const { monto } = req.body;
    const trabajo = await Trabajo.findById(req.params.id).populate("cuenta");
    if (!trabajo) {
      return res.status(404).json({ error: "Trabajo no encontrado" });
    }

    trabajo.cuenta.cobrado += monto;
    await trabajo.cuenta.save();
    res.status(200).json(trabajo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Registrar un gasto de mano de obra
exports.registrarGastoMO = async (req, res) => {
  try {
    const { monto } = req.body;
    const trabajo = await Trabajo.findById(req.params.id).populate("cuenta");
    if (!trabajo) {
      return res.status(404).json({ error: "Trabajo no encontrado" });
    }

    trabajo.cuenta.totalMO += monto;
    await trabajo.cuenta.save();
    res.status(200).json(trabajo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
