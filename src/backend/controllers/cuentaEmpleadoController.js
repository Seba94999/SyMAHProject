const CuentaEmpleado = require("../models/CuentaEmpleado");

// Crear una nueva cuenta de empleado
exports.crearCuentaEmpleado = async (req, res) => {
  try {
    const cuenta = new CuentaEmpleado(req.body);
    await cuenta.save();
    res.status(201).json(cuenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las cuentas de empleados
exports.obtenerCuentasEmpleado = async (req, res) => {
  try {
    const cuentas = await CuentaEmpleado.find();
    res.status(200).json(cuentas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una cuenta de empleado por ID
exports.obtenerCuentaEmpleadoPorId = async (req, res) => {
  try {
    const cuenta = await CuentaEmpleado.findById(req.params.id);
    if (!cuenta) {
      return res
        .status(404)
        .json({ error: "Cuenta de empleado no encontrada" });
    }
    res.status(200).json(cuenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una cuenta de empleado
exports.actualizarCuentaEmpleado = async (req, res) => {
  try {
    const cuenta = await CuentaEmpleado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!cuenta) {
      return res
        .status(404)
        .json({ error: "Cuenta de empleado no encontrada" });
    }
    res.status(200).json(cuenta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una cuenta de empleado
exports.eliminarCuentaEmpleado = async (req, res) => {
  try {
    const cuenta = await CuentaEmpleado.findByIdAndDelete(req.params.id);
    if (!cuenta) {
      return res
        .status(404)
        .json({ error: "Cuenta de empleado no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Cuenta de empleado eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Liquidar un período
exports.liquidarPeriodo = async (req, res) => {
  try {
    const cuenta = await CuentaEmpleado.findById(req.params.id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" });
    }

    cuenta.saldo = cuenta.devengado - cuenta.pagado;
    await cuenta.save();

    res.status(200).json(cuenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Registrar una jornada
exports.registrarJornada = async (req, res) => {
  try {
    const { horas, tarifa } = req.body;
    const cuenta = await CuentaEmpleado.findById(req.params.id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" });
    }

    const monto = horas * tarifa;
    cuenta.devengado += monto;
    await cuenta.save();

    res.status(200).json(cuenta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
