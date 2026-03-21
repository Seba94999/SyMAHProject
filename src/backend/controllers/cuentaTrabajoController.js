const CuentaTrabajo = require("../models/CuentaTrabajo");

// Crear una nueva cuenta de trabajo
exports.crearCuentaTrabajo = async (req, res) => {
  try {
    const cuenta = new CuentaTrabajo(req.body);
    await cuenta.save();
    res.status(201).json(cuenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las cuentas de trabajo
exports.obtenerCuentasTrabajo = async (req, res) => {
  try {
    const cuentas = await CuentaTrabajo.find();
    res.status(200).json(cuentas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una cuenta de trabajo por ID
exports.obtenerCuentaTrabajoPorId = async (req, res) => {
  try {
    const cuenta = await CuentaTrabajo.findById(req.params.id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta de trabajo no encontrada" });
    }
    res.status(200).json(cuenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una cuenta de trabajo
exports.actualizarCuentaTrabajo = async (req, res) => {
  try {
    const cuenta = await CuentaTrabajo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta de trabajo no encontrada" });
    }
    res.status(200).json(cuenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una cuenta de trabajo
exports.eliminarCuentaTrabajo = async (req, res) => {
  try {
    const cuenta = await CuentaTrabajo.findByIdAndDelete(req.params.id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta de trabajo no encontrada" });
    }
    res.status(200).json({ message: "Cuenta de trabajo eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
