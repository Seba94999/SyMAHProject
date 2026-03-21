const express = require("express");
const router = express.Router();
const bancoHorasController = require("../controllers/bancoHorasController");

// Rutas para bancos de horas
router.get("/", bancoHorasController.getBancosHoras);
router.post("/", bancoHorasController.createBancoHoras);
router.get("/:id", bancoHorasController.getBancoHorasById);
router.put("/:id", bancoHorasController.updateBancoHoras);
router.delete("/:id", bancoHorasController.deleteBancoHoras);

module.exports = router;
