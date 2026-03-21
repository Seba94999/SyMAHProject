const mongoose = require("mongoose");

const empleadoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    cargo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cargo",
      required: true,
    },
    tarifaHora: {
      type: Number,
      required: true,
      min: 0,
    },
    estado: {
      type: String,
      enum: ["Activo", "Inactivo"],
      required: true,
    },
    fechaAlta: {
      type: Date,
      default: Date.now,
    },
    fechaBaja: {
      type: Date,
    },
    cuentaEmpleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CuentaEmpleado",
    },
    telefono: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Empleado", empleadoSchema);
