const express = require("express");
const router = express.Router();
const libroDiarioController = require("../controllers/libroDiarioController");

// Rutas para el libro diario
router.get("/", libroDiarioController.getLibroDiario);
router.post("/transacciones", libroDiarioController.addTransaccion);
router.get(
  "/transacciones/:mes/:anio",
  libroDiarioController.getTransaccionesPorMes,
);

module.exports = router;
