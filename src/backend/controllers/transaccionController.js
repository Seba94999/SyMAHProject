const Transaccion = require("../models/Transaccion");
const LibroDiario = require("../models/LibroDiario");

// Registrar una nueva transacción
exports.registrarTransaccion = async (req, res) => {
  try {
    const transaccion = new Transaccion(req.body);
    await transaccion.save();

    // Agregar la transacción al libro diario
    const libroDiario = await LibroDiario.findOne();
    if (!libroDiario) {
      return res.status(500).json({ error: "Libro diario no encontrado" });
    }
    await libroDiario.agregarTransaccion(transaccion);

    res.status(201).json(transaccion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las transacciones
exports.obtenerTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.find();
    res.status(200).json(transacciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
