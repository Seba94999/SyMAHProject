# Skill: Gestión de Empleados

Un empleado representa una persona que trabaja para la empresa.

Atributos:

- id
- nombre
- cargo
- tarifaHora
- estado
- fechaAlta
- fechaBaja
- cuentaEmpleado
- telefono

Estados posibles:

Activo
Inactivo

Reglas:

Un empleado inactivo:

- no puede registrar horarios
- no puede recibir pagos

Cada empleado posee una CuentaEmpleado donde se registran:

- gastos de mano de obra
- pagos recibidos

Metodos

- activarEmpleado()
- desactivarEmpleado()
- modificarDatos()
- crearCuentaEmpleado()
- registrarJornada()
