const express = require("express");
const router = express.Router();
const trabajoController = require("../controllers/trabajoController");

// Ruta para crear un nuevo trabajo
router.post("/", trabajoController.crearTrabajo);

// Ruta para obtener todos los trabajos
router.get("/", trabajoController.obtenerTrabajos);

// Ruta para cancelar un trabajo
router.put("/:id/cancelar", trabajoController.cancelarTrabajo);

module.exports = router;
