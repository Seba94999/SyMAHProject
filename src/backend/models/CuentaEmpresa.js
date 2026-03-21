const mongoose = require("mongoose");

const cuentaEmpresaSchema = new mongoose.Schema(
  {
    caja: {
      type: Number,
      default: 0,
    },
    prestamos: {
      type: Number,
      default: 0,
    },
    cobros: {
      type: Number,
      default: 0,
    },
    pagos: {
      type: Number,
      default: 0,
    },
    gastos: {
      type: Number,
      default: 0,
    },
    deuda: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Método para calcular la caja
cuentaEmpresaSchema.methods.calcularCaja = function () {
  this.caja =
    this.cobros - this.pagos - this.gastos + this.prestamos - this.deuda;
  return this.caja;
};

module.exports = mongoose.model("CuentaEmpresa", cuentaEmpresaSchema);
