const mongoose = require("mongoose");

const cuentaEmpleadoSchema = new mongoose.Schema(
  {
    saldo: {
      type: Number,
      default: 0,
      min: 0,
    },
    gastosManoObra: {
      type: Number,
      default: 0,
      min: 0,
    },
    pagosRecibidos: {
      type: Number,
      default: 0,
      min: 0,
    },
    devengado: {
      type: Number,
      default: 0,
      min: 0,
    },
    pagado: {
      type: Number,
      default: 0,
      min: 0,
    },
    bancoHoras: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BancoHoras",
    },
    tarifa: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("CuentaEmpleado", cuentaEmpleadoSchema);
