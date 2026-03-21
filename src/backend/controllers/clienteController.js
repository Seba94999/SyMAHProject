const Cliente = require("../models/Cliente");

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find().populate("presupuestos trabajos");
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes", error });
  }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    const nuevoCliente = await cliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el cliente", error });
  }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id).populate(
      "presupuestos trabajos",
    );
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el cliente", error });
  }
};

// Actualizar un cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el cliente", error });
  }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el cliente", error });
  }
};
