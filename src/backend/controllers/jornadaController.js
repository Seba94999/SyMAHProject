const Jornada = require("../models/Jornada");

// Crear una nueva jornada
exports.crearJornada = async (req, res) => {
  try {
    const jornada = new Jornada(req.body);
    jornada.calcularSubtotal();
    await jornada.save();
    res.status(201).json(jornada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las jornadas
exports.obtenerJornadas = async (req, res) => {
  try {
    const jornadas = await Jornada.find();
    res.status(200).json(jornadas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
