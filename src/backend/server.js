const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const connectDB = require("./config/db");
const empleadoRoutes = require("./routes/empleadoRoutes");
const cargoRoutes = require("./routes/cargoRoutes");
const cuentaEmpleadoRoutes = require("./routes/cuentaEmpleadoRoutes");
const trabajoRoutes = require("./routes/trabajoRoutes");
const transaccionRoutes = require("./routes/transaccionRoutes");
const jornadaRoutes = require("./routes/jornadaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const presupuestoRoutes = require("./routes/presupuestoRoutes");
const libroDiarioRoutes = require("./routes/libroDiarioRoutes");
const empresaRoutes = require("./routes/empresaRoutes");
const gestorContableRoutes = require("./routes/gestorContableRoutes");
const cuentaTrabajoRoutes = require("./routes/cuentaTrabajoRoutes");

app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("API Sistema Gestión funcionando");
});

app.use("/api/empleados", empleadoRoutes);
app.use("/api/cargos", cargoRoutes);
app.use("/api/cuentas-empleado", cuentaEmpleadoRoutes);
app.use("/api/trabajos", trabajoRoutes);
app.use("/api/transacciones", transaccionRoutes);
app.use("/api/jornadas", jornadaRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/presupuestos", presupuestoRoutes);
app.use("/api/libro-diario", libroDiarioRoutes);
app.use("/api/empresa", empresaRoutes);
app.use("/api/gestor-contable", gestorContableRoutes);
app.use("/api/cuentas-trabajo", cuentaTrabajoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
