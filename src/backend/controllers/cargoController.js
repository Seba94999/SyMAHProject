const Cargo = require("../models/Cargo");

// Crear un nuevo cargo
exports.crearCargo = async (req, res) => {
  try {
    const cargo = new Cargo(req.body);
    await cargo.save();
    res.status(201).json(cargo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los cargos
exports.obtenerCargos = async (req, res) => {
  try {
    const cargos = await Cargo.find();
    res.status(200).json(cargos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un cargo por ID
exports.obtenerCargoPorId = async (req, res) => {
  try {
    const cargo = await Cargo.findById(req.params.id);
    if (!cargo) {
      return res.status(404).json({ error: "Cargo no encontrado" });
    }
    res.status(200).json(cargo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un cargo
exports.actualizarCargo = async (req, res) => {
  try {
    const cargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cargo) {
      return res.status(404).json({ error: "Cargo no encontrado" });
    }
    res.status(200).json(cargo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un cargo
exports.eliminarCargo = async (req, res) => {
  try {
    const cargo = await Cargo.findByIdAndDelete(req.params.id);
    if (!cargo) {
      return res.status(404).json({ error: "Cargo no encontrado" });
    }
    res.status(200).json({ message: "Cargo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
