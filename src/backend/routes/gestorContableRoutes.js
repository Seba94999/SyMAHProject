const express = require("express");
const router = express.Router();
const gestorContableController = require("../controllers/gestorContableController");

// Rutas para el gestor contable (Singleton)
router.get("/", gestorContableController.getGestorContable);
router.post("/", gestorContableController.createGestorContable);
router.put("/", gestorContableController.updateGestorContable);

module.exports = router;
