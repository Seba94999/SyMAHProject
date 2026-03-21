const mongoose = require("mongoose");

const jornadaSchema = new mongoose.Schema(
  {
    fecha: {
      type: Date,
      default: Date.now,
    },
    horaIngreso: {
      type: String,
      required: true,
    },
    horaEgreso: {
      type: String,
      required: true,
    },
    horasTrabajadas: {
      type: Number,
      required: true,
    },
    trabajo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trabajo",
      required: true,
    },
    empleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empleado",
      required: true,
    },
    extra: {
      type: Number,
      default: 0,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    tarifaAplicada: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Método para calcular el subtotal
jornadaSchema.methods.calcularSubtotal = function () {
  this.subtotal = this.horasTrabajadas * this.tarifaAplicada + this.extra;
  return this.subtotal;
};

module.exports = mongoose.model("Jornada", jornadaSchema);
