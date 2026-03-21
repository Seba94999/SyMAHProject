# SKILL: gestion_contable_core

## Propósito

Modelar y operar el dominio contable del sistema, incluyendo empleados, trabajos, cuentas y transacciones, garantizando consistencia según reglas de negocio y requerimientos funcionales.

---

## Contexto del Dominio

El sistema está basado en un modelo contable donde:

- Toda operación genera una **Transacción**
- Las transacciones impactan en **Cuentas**
- Las cuentas pertenecen a:
  - Empleados
  - Trabajos
  - Empresa

El sistema debe garantizar:

- consistencia contable
- trazabilidad
- atomicidad

---

## Entidades Principales

### Empleado

```yaml
atributos:
  id: int
  nombre: string
  apellido: string
  dni: int
  estado: EstadoEmpleado
  cargo: Cargo
  cuenta: CuentaEmpleado
  telefono: int

comportamiento:
  - activarEmpleado()
  - desactivarEmpleado()
  - actualizarDatos()
  - registrarJornada()


### Cuenta(abstracta)
atributos:
  id: string
  transacciones: List<Transaccion>

comportamiento:
  - registrarTransaccion()
  - obtenerTransacciones()
  - calcularTotal()
  - revertirTransaccion()

### CuentaEmpleado (extiende Cuenta)
  atributos:
  pagado: double
  devengado: double
  bancoHoras: BancoHoras
  tarifa: double
  saldo: double

comportamiento:
  - calcularSaldo()
  - liquidarPeriodo()
  - registrarJornada()
  - registrarPago()


### Transaccion
atributos:
  id: int
  fecha: LocalDate
  importe: double
  descripcion: string
  tipo: TipoTransaccion
  empleado: Empleado
  trabajo: Trabajo

comportamiento:
  - definirTipo()

### TipoTransaccion
valores:
  - COBRO
  - PAGO
  - GASTO
  - PRESTAMO

### CuentaEmpresa (extiende Cuenta)
atributos:
  caja: double
  prestamos: double
  cobros: double
  pagos: double
  gastos: double
  deuda: double

comportamiento:
  - calcularCaja()
  - registrarCobro()
  - registrarPago()
  - registrarGasto()
  - registrarPrestamo()

### CuentaTrabajo (extiende Cuenta)
atributos:
  cobrado: double
  totalMO: double

comportamiento:
  - calcularPorcentajeCobrado()
  - registrarCobro()
  - registrarGastoMO()
  - calcularTotal()
  - calcularRentabilidad()

### Trabajo
atributos:
  id: int
  direccion: string
  descripcion: string
  estado: EstadoTrabajo
  cuenta: CuentaTrabajo
  precio: double

comportamiento:
  - actualizar()
  - pausar()
  - reanudar()
  - finalizar()
  - cancelar()
  - registrarCobro()

### Jornada
atributos:
  id: string
  fecha: LocalDate
  horaIngreso: LocalTime
  horaEgreso: LocalTime
  horasTrabajadas: int
  trabajo: Trabajo
  empleado: Empleado
  extra: double
  subtotal: double
  tarifaAplicada: double

comportamiento:
  - calcularHorasTrabajadas()
  - calcularSubtotal()
  - cerrarRegistro()

### BancoHoras
atributos:
  jornadas: List<Jornada>
  cantidadHoras: int
  saldoAcumulado: double

comportamiento:
  - registrarJornada()
  - calcularCantidadHoras()
  - calcularSaldo()
  - revertirJornada()

### Empresa (Singleton)
atributos:
  cuenta: CuentaEmpresa
  nombre: string

comportamiento:
  - conocerCuentaEmpresa()

### GestorContable (control)
atributos:
  libroDiario: LibroDiario

comportamiento:
  - registrarTransaccion()
  - obtenerTransacciones()
  - cerrarMes()

### LibroDiario
atributos:
  transacciones: List<Transaccion>

comportamiento:
  - agregarTransaccion()
  - obtenerTransacciones()
  - obtenerTransaccionesPorMes()

### Cliente
atributos:
  id: int
  nombre: string
  telefono: string
  email: string
  direccion: string
  presupuestos: List<Presupuesto>
  trabajos: List<Trabajo>

comportamiento:
  - crearPresupuesto()
  - conocerTrabajo()

### Presupuesto
atributos:
  id: string
  fecha: LocalDate
  monto: double
  estado: EstadoPresupuesto
  cliente: Cliente

comportamiento:
  - aceptar()
  - rechazar()
  - modificar()

## RElACIOONES CLAVES
relaciones:
  - Empleado -> CuentaEmpleado (1:1)
  - CuentaEmpleado -> BancoHoras (1:1)
  - BancoHoras -> Jornada (1:N)

  - Trabajo -> CuentaTrabajo (1:1)
  - Cliente -> Trabajo (1:N)
  - Cliente -> Presupuesto (1:N)

  - Cuenta -> Transaccion (1:N)
  - GestorContable -> LibroDiario (1:1)

  - Empresa -> CuentaEmpresa (1:1)

## Capacidades de la Skill
✔ Registrar Jornada

valida estado de empleado y trabajo

calcula subtotal

impacta:

cuenta empleado

cuenta trabajo (mano de obra)

libro diario

✔ Registrar Pago

impacta:

cuenta empleado

cuenta empresa

caja

✔ Registrar Cobro

impacta:

cuenta trabajo

cuenta empresa

caja

✔ Registrar Gasto

impacta:

cuenta empresa

caja

✔ Registrar Préstamo

depende del tipo:

recibido → aumenta caja

otorgado → disminuye caja

✔ Reversión (operaciones críticas)

toda operación tiene reversión

debe deshacer impactos en TODAS las cuentas

## Restricciones

TODA operación debe ser atómica

NO existen modificaciones de transacciones → solo alta o baja

estados controlan comportamiento (Empleado, Trabajo, Presupuesto)

las cuentas SIEMPRE se derivan de transacciones (no valores manuales)

## INSTRUCCIONES PARA EL AGENTE
guidelines:
  - priorizar consistencia contable sobre rapidez
  - nunca actualizar saldos directamente → usar transacciones
  - validar estados antes de operar
  - aplicar reglas RN-* antes de ejecutar acciones
  - registrar todo en LibroDiario
```
