const express = require("express");
const router = express.Router();
const cuentaTrabajoController = require("../controllers/cuentaTrabajoController");

// Rutas para cuentas de trabajo
router.post("/", cuentaTrabajoController.crearCuentaTrabajo);
router.get("/", cuentaTrabajoController.obtenerCuentasTrabajo);
router.get("/:id", cuentaTrabajoController.obtenerCuentaTrabajoPorId);
router.put("/:id", cuentaTrabajoController.actualizarCuentaTrabajo);
router.delete("/:id", cuentaTrabajoController.eliminarCuentaTrabajo);

module.exports = router;
