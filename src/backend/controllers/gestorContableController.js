const GestorContable = require("../models/GestorContable");
const LibroDiario = require("../models/LibroDiario");

// Obtener el gestor contable (Singleton)
exports.getGestorContable = async (req, res) => {
  try {
    const gestorContable =
      await GestorContable.findOne().populate("libroDiario");
    if (!gestorContable) {
      return res.status(404).json({ message: "Gestor contable no encontrado" });
    }
    res.status(200).json(gestorContable);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el gestor contable", error });
  }
};

// Crear el gestor contable (solo una vez)
exports.createGestorContable = async (req, res) => {
  try {
    const existingGestor = await GestorContable.findOne();
    if (existingGestor) {
      return res
        .status(400)
        .json({ message: "Ya existe un gestor contable registrado" });
    }
    const libroDiario = new LibroDiario();
    await libroDiario.save();

    const gestorContable = new GestorContable({ libroDiario: libroDiario._id });
    const nuevoGestor = await gestorContable.save();
    res.status(201).json(nuevoGestor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el gestor contable", error });
  }
};

// Actualizar el gestor contable
exports.updateGestorContable = async (req, res) => {
  try {
    const gestorContable = await GestorContable.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!gestorContable) {
      return res.status(404).json({ message: "Gestor contable no encontrado" });
    }
    res.status(200).json(gestorContable);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el gestor contable", error });
  }
};
