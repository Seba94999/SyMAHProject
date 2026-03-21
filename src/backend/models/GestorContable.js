const mongoose = require("mongoose");

const gestorContableSchema = new mongoose.Schema(
  {
    libroDiario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LibroDiario",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("GestorContable", gestorContableSchema);
