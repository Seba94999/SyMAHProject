const mongoose = require("mongoose");

const cuentaTrabajoSchema = new mongoose.Schema(
  {
    cobrado: {
      type: Number,
      default: 0,
    },
    totalMO: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Método para calcular el porcentaje cobrado
cuentaTrabajoSchema.methods.calcularPorcentajeCobrado = function () {
  if (this.totalMO === 0) return 0;
  return (this.cobrado / this.totalMO) * 100;
};

module.exports = mongoose.model("CuentaTrabajo", cuentaTrabajoSchema);
