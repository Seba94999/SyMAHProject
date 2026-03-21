const mongoose = require("mongoose");

const libroDiarioSchema = new mongoose.Schema(
  {
    transacciones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaccion",
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Método para agregar una transacción
libroDiarioSchema.methods.agregarTransaccion = function (transaccion) {
  this.transacciones.push(transaccion);
  return this.save();
};

// Método para obtener transacciones por mes
libroDiarioSchema.methods.obtenerTransaccionesPorMes = function (mes, anio) {
  return this.transacciones.filter((transaccion) => {
    const fecha = new Date(transaccion.fecha);
    return fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio;
  });
};

module.exports = mongoose.model("LibroDiario", libroDiarioSchema);
