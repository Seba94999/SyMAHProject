const LibroDiario = require("../models/LibroDiario");
const Transaccion = require("../models/Transaccion");

// Obtener el libro diario
exports.getLibroDiario = async (req, res) => {
  try {
    const libroDiario = await LibroDiario.findOne().populate("transacciones");
    if (!libroDiario) {
      return res.status(404).json({ message: "Libro diario no encontrado" });
    }
    res.status(200).json(libroDiario);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el libro diario", error });
  }
};

// Agregar una transacción al libro diario
exports.addTransaccion = async (req, res) => {
  try {
    const libroDiario = await LibroDiario.findOne();
    if (!libroDiario) {
      return res.status(404).json({ message: "Libro diario no encontrado" });
    }

    const transaccion = new Transaccion(req.body);
    await transaccion.save();

    await libroDiario.agregarTransaccion(transaccion);
    res
      .status(201)
      .json({ message: "Transacción agregada al libro diario", transaccion });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar la transacción", error });
  }
};

// Obtener transacciones por mes y año
exports.getTransaccionesPorMes = async (req, res) => {
  try {
    const { mes, anio } = req.params;
    const libroDiario = await LibroDiario.findOne().populate("transacciones");
    if (!libroDiario) {
      return res.status(404).json({ message: "Libro diario no encontrado" });
    }

    const transacciones = libroDiario.obtenerTransaccionesPorMes(
      parseInt(mes),
      parseInt(anio),
    );
    res.status(200).json(transacciones);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las transacciones", error });
  }
};
