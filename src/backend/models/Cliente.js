const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    presupuestos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Presupuesto",
      },
    ],
    trabajos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trabajo",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Cliente", clienteSchema);
