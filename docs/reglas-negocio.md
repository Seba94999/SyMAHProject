Reglas de Negocio del Sistema
RN-01 – Estados de las Entidades
Un Empleado solo podrá estar en estado Activo o Inactivo.
Un empleado Inactivo:
no podrá registrar nuevos horarios de trabajo.
no podrá recibir nuevos pagos.
Un Trabajo deberá tener al menos los estados:
En Curso
En Pausa
Finalizado
Cancelado
Un trabajo Cancelado no podrá recibir cobros ni registrar nuevos horarios.

RN-02 – Registro de Horarios de Trabajo
Un horario de trabajo solo podrá registrarse para:
un empleado Activo.
un trabajo En Curso.
Al registrar un horario de trabajo:
se deberá calcular el importe en función de la tarifa horaria del empleado,
se deberá actualizar el saldo de la cuenta del empleado.
se deberá actualizar el gasto en mano de obra del trabajo asociado.
No se permitirá registrar horarios con duración negativa o nula.
El registro de un horario de trabajo deberá generar una transacción contable de gasto en mano de obra.
RN-03 – Bajas de Horarios de Trabajo
La baja de un horario de trabajo:
deberá revertir el impacto en la cuenta del empleado,
deberá revertir el gasto de mano de obra del trabajo asociado.

RN-04 – Pagos a Empleados
Un pago solo podrá registrarse para un empleado Activo.
El importe del pago:
no podrá ser negativo ni cero.
Al registrar un pago:
se deberá actualizar el saldo de la cuenta del empleado.
se deberá impactar en la cuenta de pagos de la empresa.
se deberá impactar en la cuenta de caja.
No se permitirá registrar pagos que dejen la cuenta caja en estado inconsistente (según política definida).

RN-05 – Bajas de Pagos
La baja de un pago:
deberá revertir el impacto en la cuenta del empleado.
deberá revertir el impacto en la cuenta de pagos.
deberá revertir el impacto en la cuenta de caja.
Los pagos no podrán modificarse, solo darse de baja y registrarse nuevamente.

RN-06 – Cobros de Trabajos
Al registrar un cobro:
se deberá actualizar la cuenta de cobros del trabajo,
se deberá actualizar la cuenta de cobros de la empresa,
se deberá actualizar la cuenta de caja.
No se permitirá registrar cobros por importes negativos o nulos.

RN-07 – Bajas de Cobros
La baja de un cobro:
deberá revertir el impacto en la cuenta del trabajo,
deberá revertir el impacto en la cuenta de cobros,
deberá revertir el impacto en la cuenta de caja.
Los cobros no podrán modificarse, solo darse de baja.

RN-08 – Gastos
Todo gasto deberá:
tener un concepto.
un importe mayor a cero.
una fecha.
Al registrar una transacción de gasto esta debe impactar en la cuenta de gastos y la cuenta de caja.
No se permitirá registrar gastos asociados a trabajos cancelados (si aplica).

RN-09 – Préstamos
RN-09.1 – Tipo / Sentido del Préstamo
Todo préstamo deberá registrar obligatoriamente su sentido, el cual podrá ser:
Préstamo Otorgado (la empresa presta dinero)
Préstamo Recibido (la empresa recibe dinero)
El sentido del préstamo no podrá modificarse una vez registrado.
RN-09.2 – Impacto Contable según el Sentido
Préstamo Recibido:
incrementa la cuenta de préstamos,
incrementa la cuenta de caja.
Préstamo Otorgado:
incrementa la cuenta de préstamos,
disminuye la cuenta de caja.
Ambos son préstamos, pero el impacto en la caja es opuesto.

RN-09.3 – Registro de Préstamos
Todo préstamo deberá registrar:
monto (mayor a cero),
fecha,
sentido del préstamo,
estado (Activo / Cancelado),
observaciones opcionales.
No se permitirá registrar préstamos con monto negativo o nulo.

RN-09.4 – Cancelación / Baja de Préstamos
La baja o cancelación de un préstamo:
deberá revertir el impacto contable original,
deberá respetar el sentido con el que fue registrado.
Los préstamos no podrán modificarse; solo cancelarse.

RN-10 – Presupuestos
Un presupuesto deberá estar asociado a un cliente.
Un presupuesto podrá tener los estados:
Pendiente
Aprobado
Rechazado
Solo los presupuestos Aprobados podrán convertirse en trabajos.
La importación de presupuestos deberá:
validar formato y consistencia.
evitar duplicados según criterio definido.

RN-11 – Baja de Trabajos
No se permitirá la baja física de trabajos; solo cancelación lógica.
No se eliminan los cobros ni los gastos correspondientes ni transacciones asociadas al trabajo.
RN-12 – Cuentas y Cálculos
Las cuentas de la empresa deberán:
reflejar siempre la sumatoria de las transacciones registradas,
no permitir inconsistencias entre saldo y movimientos.
El saldo de caja deberá calcularse como:
Caja = Σ movimientos de caja registrados en el Libro Diario
RN-13 – Integridad Transaccional
Toda operación que impacte en más de una entidad deberá ejecutarse de forma atómica.
Si alguna parte de la operación falla:
no se deberá persistir ningún cambio.
El sistema deberá impedir estados parciales.

RN-14 – Auditoría
Toda operación crítica deberá registrar:
fecha y hora,
tipo de operación,
entidad afectada.
Las transacciones dadas de baja deberán conservar su historial.
