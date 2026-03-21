const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargoController");

// Rutas para cargos
router.post("/", cargoController.crearCargo);
router.get("/", cargoController.obtenerCargos);
router.get("/:id", cargoController.obtenerCargoPorId);
router.put("/:id", cargoController.actualizarCargo);
router.delete("/:id", cargoController.eliminarCargo);

module.exports = router;
