const express = require("express");
const router = express.Router();
const cuentaEmpleadoController = require("../controllers/cuentaEmpleadoController");

// Rutas para cuentas de empleados
router.post("/", cuentaEmpleadoController.crearCuentaEmpleado);
router.get("/", cuentaEmpleadoController.obtenerCuentasEmpleado);
router.get("/:id", cuentaEmpleadoController.obtenerCuentaEmpleadoPorId);
router.put("/:id", cuentaEmpleadoController.actualizarCuentaEmpleado);
router.delete("/:id", cuentaEmpleadoController.eliminarCuentaEmpleado);

module.exports = router;
