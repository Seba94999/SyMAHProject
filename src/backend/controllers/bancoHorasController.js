const BancoHoras = require("../models/BancoHoras");

// Obtener todos los bancos de horas
exports.getBancosHoras = async (req, res) => {
  try {
    const bancosHoras = await BancoHoras.find().populate("jornadas");
    res.status(200).json(bancosHoras);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los bancos de horas", error });
  }
};

// Crear un nuevo banco de horas
exports.createBancoHoras = async (req, res) => {
  try {
    const bancoHoras = new BancoHoras(req.body);
    const nuevoBancoHoras = await bancoHoras.save();
    res.status(201).json(nuevoBancoHoras);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el banco de horas", error });
  }
};

// Obtener un banco de horas por ID
exports.getBancoHorasById = async (req, res) => {
  try {
    const bancoHoras = await BancoHoras.findById(req.params.id).populate(
      "jornadas",
    );
    if (!bancoHoras) {
      return res.status(404).json({ message: "Banco de horas no encontrado" });
    }
    res.status(200).json(bancoHoras);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el banco de horas", error });
  }
};

// Actualizar un banco de horas
exports.updateBancoHoras = async (req, res) => {
  try {
    const bancoHoras = await BancoHoras.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!bancoHoras) {
      return res.status(404).json({ message: "Banco de horas no encontrado" });
    }
    res.status(200).json(bancoHoras);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el banco de horas", error });
  }
};

// Eliminar un banco de horas
exports.deleteBancoHoras = async (req, res) => {
  try {
    const bancoHoras = await BancoHoras.findByIdAndDelete(req.params.id);
    if (!bancoHoras) {
      return res.status(404).json({ message: "Banco de horas no encontrado" });
    }
    res.status(200).json({ message: "Banco de horas eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el banco de horas", error });
  }
};
