const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    cuenta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CuentaEmpresa",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Empresa", empresaSchema);