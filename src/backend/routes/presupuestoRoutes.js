const express = require("express");
const router = express.Router();
const presupuestoController = require("../controllers/presupuestoController");

// Rutas para presupuestos
router.get("/", presupuestoController.getPresupuestos);
router.post("/", presupuestoController.createPresupuesto);
router.get("/:id", presupuestoController.getPresupuestoById);
router.put("/:id", presupuestoController.updatePresupuesto);
router.delete("/:id", presupuestoController.deletePresupuesto);

module.exports = router;
