const Empresa = require("../models/Empresa");

// Obtener la empresa (Singleton)
exports.getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findOne().populate("cuenta");
    if (!empresa) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la empresa", error });
  }
};

// Crear la empresa (solo una vez)
exports.createEmpresa = async (req, res) => {
  try {
    const existingEmpresa = await Empresa.findOne();
    if (existingEmpresa) {
      return res
        .status(400)
        .json({ message: "Ya existe una empresa registrada" });
    }
    const empresa = new Empresa(req.body);
    const nuevaEmpresa = await empresa.save();
    res.status(201).json(nuevaEmpresa);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la empresa", error });
  }
};

// Actualizar la empresa
exports.updateEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!empresa) {
      return res.status(404).json({ message: "Empresa no encontrada" });
    }
    res.status(200).json(empresa);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la empresa", error });
  }
};
