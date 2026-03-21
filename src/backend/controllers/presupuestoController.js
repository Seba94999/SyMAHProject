const Presupuesto = require("../models/Presupuesto");
const Trabajo = require("../models/Trabajo"); // Asegúrate de importar el modelo Trabajo

// Obtener todos los presupuestos
exports.getPresupuestos = async (req, res) => {
  try {
    const presupuestos = await Presupuesto.find().populate("cliente");
    res.status(200).json(presupuestos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los presupuestos", error });
  }
};

// Crear un nuevo presupuesto
exports.createPresupuesto = async (req, res) => {
  try {
    const presupuesto = new Presupuesto(req.body);
    const nuevoPresupuesto = await presupuesto.save();
    res.status(201).json(nuevoPresupuesto);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el presupuesto", error });
  }
};

// Obtener un presupuesto por ID
exports.getPresupuestoById = async (req, res) => {
  try {
    const presupuesto = await Presupuesto.findById(req.params.id).populate(
      "cliente",
    );
    if (!presupuesto) {
      return res.status(404).json({ message: "Presupuesto no encontrado" });
    }
    res.status(200).json(presupuesto);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el presupuesto", error });
  }
};

// Actualizar un presupuesto
exports.updatePresupuesto = async (req, res) => {
  try {
    const presupuesto = await Presupuesto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    if (!presupuesto) {
      return res.status(404).json({ message: "Presupuesto no encontrado" });
    }

    // Lógica para crear un trabajo si el presupuesto es aceptado
    if (req.body.estado === "Aceptado") {
      const nuevoTrabajo = new Trabajo({
        cliente: presupuesto.cliente,
        descripcion: `Trabajo generado a partir del presupuesto ${presupuesto._id}`,
        estado: "EnCurso",
        direccion: presupuesto.direccion,
        precio: presupuesto.monto,
        cuenta: null, // Esto se puede inicializar más adelante si es necesario
      });
      await nuevoTrabajo.save();
    }

    res.status(200).json(presupuesto);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el presupuesto", error });
  }
};

// Eliminar un presupuesto
exports.deletePresupuesto = async (req, res) => {
  try {
    const presupuesto = await Presupuesto.findByIdAndDelete(req.params.id);
    if (!presupuesto) {
      return res.status(404).json({ message: "Presupuesto no encontrado" });
    }
    res.status(200).json({ message: "Presupuesto eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el presupuesto", error });
  }
};
