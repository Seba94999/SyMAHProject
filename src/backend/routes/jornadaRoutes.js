const express = require("express");
const router = express.Router();
const jornadaController = require("../controllers/jornadaController");

// Ruta para crear una nueva jornada
router.post("/", jornadaController.crearJornada);

// Ruta para obtener todas las jornadas
router.get("/", jornadaController.obtenerJornadas);

module.exports = router;
