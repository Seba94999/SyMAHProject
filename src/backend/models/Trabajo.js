const mongoose = require("mongoose");

const trabajoSchema = new mongoose.Schema(
  {
    cliente: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    estado: {
      type: String,
      enum: ["EnCurso", "EnPausa", "Finalizado", "Cancelado"],
      default: "EnCurso",
    },
    gastosManoObra: {
      type: Number,
      default: 0,
      min: 0,
    },
    cobrosRecibidos: {
      type: Number,
      default: 0,
      min: 0,
    },
    direccion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    cuentaTrabajo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CuentaTrabajo",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Trabajo", trabajoSchema);
