const mongoose = require("mongoose");

const bancoHorasSchema = new mongoose.Schema(
  {
    jornadas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jornada",
      },
    ],
    cantidadHoras: {
      type: Number,
      default: 0,
    },
    saldoAcumulado: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Método para calcular la cantidad de horas
bancoHorasSchema.methods.calcularCantidadHoras = function () {
  this.cantidadHoras = this.jornadas.reduce(
    (total, jornada) => total + jornada.horasTrabajadas,
    0,
  );
  return this.cantidadHoras;
};

// Método para calcular el saldo acumulado
bancoHorasSchema.methods.calcularSaldo = function () {
  this.saldoAcumulado = this.jornadas.reduce(
    (total, jornada) => total + jornada.subtotal,
    0,
  );
  return this.saldoAcumulado;
};

// Método para registrar una jornada
bancoHorasSchema.methods.registrarJornada = function (jornada) {
  this.jornadas.push(jornada);
  this.calcularCantidadHoras();
  this.calcularSaldo();
  return this.save();
};

module.exports = mongoose.model("BancoHoras", bancoHorasSchema);
