const mongoose = require("mongoose");

const transaccionSchema = new mongoose.Schema(
  {
    fecha: {
      type: Date,
      default: Date.now,
    },
    importe: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
    },
    tipo: {
      type: String,
      enum: ["COBRO", "PAGO", "GASTO", "PRESTAMO"],
      required: true,
    },
    empleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empleado",
    },
    trabajo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trabajo",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Transaccion", transaccionSchema);
