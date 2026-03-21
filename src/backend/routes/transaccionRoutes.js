const express = require("express");
const router = express.Router();
const transaccionController = require("../controllers/transaccionController");

// Ruta para registrar una nueva transacción
router.post("/", transaccionController.registrarTransaccion);

// Ruta para obtener todas las transacciones
router.get("/", transaccionController.obtenerTransacciones);

module.exports = router;
