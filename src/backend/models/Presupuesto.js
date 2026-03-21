const mongoose = require("mongoose");

const presupuestoSchema = new mongoose.Schema(
  {
    fecha: {
      type: Date,
      default: Date.now,
    },
    monto: {
      type: Number,
      required: true,
      min: 0,
    },
    estado: {
      type: String,
      enum: ["Pendiente", "Aceptado", "Rechazado"],
      default: "Pendiente",
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Presupuesto", presupuestoSchema);
