Lista de Requerimientos Funcionales
RF-01 – Gestionar Empleados
Objetivo: Permitir la administración de los empleados y sus datos asociados.
El sistema deberá permitir:
ABMC Empleado
Registrar un empleado estableciendo cargo, tarifa por hora y estado Activo.
Registrar la baja lógica de un empleado estableciendo el estado Inactivo.
Modificar los datos de un empleado previamente registrado.
Consultar el listado de empleados registrados.
Consultar el detalle de un empleado, incluyendo sus datos personales y el estado de su cuenta.
Cada empleado deberá poseer una CuentaEmpleado donde se registrarán los movimientos derivados de horarios de trabajo y pagos.
RF-02 – Gestionar Horarios de Trabajo
Objetivo: Registrar y administrar las horas trabajadas por los empleados.
El sistema deberá permitir:
ABC Horario de Trabajo
Registrar un horario de trabajo de un empleado, actualizando:
el saldo de la cuenta del empleado,
el gasto en mano de obra del trabajo asociado.
El registro de un horario de trabajo deberá generar una transacción de gasto de mano de obra en el sistema contable.
Registrar la baja de un horario de trabajo previamente registrado, actualizando las cuentas correspondientes.
Consultar el listado de horarios de trabajo registrados por empleado.
RF-03 – Gestionar Trabajos
Objetivo: Administrar los trabajos realizados para los clientes.
El sistema deberá permitir:
ABMC Trabajo
Registrar un trabajo asociado a un cliente registrado, estableciendo los datos del trabajo y el estado inicial En Curso.
Registrar la baja de un trabajo.
Modificar los datos de un trabajo registrado.
Consultar el listado de trabajos registrados.
Consultar el detalle de un trabajo previamente registrado.
RF-04 – Administrar Cargos
Objetivo: Gestionar los cargos asignables.
El sistema deberá permitir:
ABMC Cargo
Registrar un cargo.
Registrar la baja de un cargo registrado.
Modificar los datos de un cargo registrado.
Consultar los datos de un cargo registrado.
RF-05 – Administrar Clientes
Objetivo: Gestionar clientes.
El sistema deberá permitir:
ABMC Cliente
Registrar un cliente.
Registrar la baja de un cliente registrado.
Modificar los datos de un cliente registrado.
Consultar los datos de un cliente registrado.
RF-06 – Gestionar Transacciones
Objetivo: Administrar pagos, cobros, gastos y préstamos.
El sistema deberá permitir:
AB Pago
Registrar un pago asociado a un empleado, actualizando la cuenta del empleado.
Registrar la baja de un pago registrado, ajustando la cuenta del empleado.
AB Cobro
Registrar un cobro asociado a un trabajo, actualizando la cuenta de cobros del trabajo.
Registrar la baja de un cobro registrado, ajustando la cuenta correspondiente.
AB Gasto
Registrar un gasto, actualizando la cuenta de gastos.
Registrar la baja de un gasto registrado, ajustando la cuenta de gastos.
AB Préstamo
Registrar un préstamo, actualizando la cuenta de préstamos.
Registrar la baja de un préstamo registrado, ajustando la cuenta de préstamos.
Consulta de Transacciones
Consultar el listado de transacciones registradas (pagos, cobros, gastos y préstamos).
Cada transacción deberá:
registrarse en el Libro Diario
impactar las cuentas correspondientes
mantener trazabilidad histórica.

RF-07 – Gestionar Cuenta Empresa
Objetivo: Controlar las cuentas generales.
El sistema deberá permitir:
Actualización de Cuentas
Las cuentas de la empresa deberán reflejar automáticamente el saldo resultante de las transacciones registradas en el Libro Diario.
Actualizar la cuenta de caja como:
Caja acumulada + cobros del mes − pagos y gastos del mes.
Informe Mensual
Generar y emitir un informe mensual con el resultado de las cuentas de la empresa.

RF-08 – Administrar Presupuestos
Objetivo: Gestionar presupuestos.
El sistema deberá permitir:
ABMC Presupuesto
Registrar un presupuesto.
Registrar la baja de un presupuesto registrado.
Consultar los datos de un presupuesto registrado.
Consultar el listado de presupuestos registrados.

RF-09 – Consultar información contable
Objetivo: Consultar información de las cuentas pertenecientes a distintas entidades.
El sistema deberá permitir consultar:
saldo de cuentas
movimientos registrados
historial de transaccione
estado financiero de trabajos

RF-10 – Gestionar estados de trabajo
Objetivo: Gestionar los diferentes estados de un trabajo
El sistema deberá permitir cambiar el estado de un trabajo entre:
en proceso
finalizado
cobrado
cancelado
Requerimientos No Funcionales
RNF-01 – Arquitectura y Tecnologías
Objetivo: Definir la arquitectura tecnológica del sistema.
El sistema deberá estar desarrollado bajo una arquitectura cliente-servidor.
El frontend deberá implementarse utilizando Vite + React y hojas de estilo CSS.
El backend deberá implementarse utilizando Node.js con JavaScript.
La persistencia de datos deberá realizarse mediante MongoDB.
La arquitectura deberá permitir la separación entre:
interfaz de usuario,
lógica de negocio,
acceso a datos.
Este RNF impacta directamente en:
separación de capas
diagramas de secuencia (Frontend → API → Dominio → DB)

RNF-02 – Usabilidad
Objetivo: Facilitar el uso del sistema por parte del usuario administrador.
La interfaz deberá ser clara, consistente y orientada a la gestión.
Las operaciones principales deberán ser accesibles en pocos pasos.
El sistema deberá mostrar mensajes de confirmación y advertencia en acciones críticas.

RNF-03 – Rendimiento
Objetivo: Garantizar tiempos de respuesta aceptables.
Las operaciones de consulta y registro deberán responder en tiempos adecuados bajo condiciones normales de uso.
La generación de informes y exportaciones deberá ejecutarse sin bloquear la interfaz del usuario.
El sistema deberá manejar volúmenes crecientes de datos sin degradación significativa.
RNF-04 – Integridad y Consistencia de Datos
Objetivo: Garantizar la coherencia de la información persistida.
El sistema deberá asegurar que las operaciones que impactan en cuentas y transacciones sean atómicas.
No deberán existir estados inconsistentes entre transacciones y cuentas.
Las bajas de entidades críticas deberán ser lógicas cuando corresponda.
Ante errores durante una operación, el sistema deberá mantener el estado consistente de los datos.
Este RNF define reglas de negocio y secuencias transaccionales.

RNF-05 – Seguridad
Objetivo: Proteger el acceso y la información del sistema.
El sistema deberá requerir autenticación para el acceso.
El acceso a las funcionalidades deberá estar restringido a usuarios autorizados.
Las operaciones críticas deberán requerir confirmación explícita.
La información almacenada deberá protegerse contra accesos no autorizados.

RNF-06 – Persistencia y Modelo de Datos
Objetivo: Asegurar flexibilidad en la persistencia.
El sistema deberá utilizar un modelo de datos compatible con una base NoSQL.
El diseño del modelo deberá permitir:
embebido o referenciado de documentos según el caso,
crecimiento del esquema sin afectar datos existentes.
La persistencia deberá ser independiente de la lógica de presentación.

RNF-07 – Importación y Exportación de Datos
Objetivo: Permitir el intercambio de información con sistemas externos.
El sistema deberá permitir importar presupuestos desde archivos externos.
El sistema deberá permitir exportar presupuestos a formatos intercambiables.
Las operaciones de importación deberán validar la consistencia de los datos antes de persistirlos.
El sistema deberá informar errores de formato o datos inválidos durante la importación.

RNF-08 – Generación de Informes
Objetivo: Facilitar la obtención de información consolidada.
El sistema deberá permitir generar informes de cuentas y resultados.
Los informes deberán poder exportarse en formato PDF.
La generación de informes deberá basarse en datos persistidos y reglas de negocio consistentes.
El formato de los informes deberá ser claro y legible.

RNF-09 – Trazabilidad y Auditoría
Objetivo: Permitir el seguimiento de operaciones.
El sistema deberá registrar la fecha y hora de las operaciones relevantes.
Las transacciones deberán conservar su historial.
El sistema deberá permitir reconstruir el origen de cada movimiento económico.

RNF-10 – Mantenibilidad y Evolución
Objetivo: Facilitar la evolución del sistema.
El código deberá estar modularizado.
Las reglas de negocio deberán estar desacopladas del frontend.
El sistema deberá permitir incorporar nuevas funcionalidades sin afectar las existentes.
