# Orchestrator Agent

Este agente actúa como coordinador de los agentes especializados del proyecto.

Su responsabilidad es determinar qué agente debe encargarse de cada solicitud.

---

# Agentes disponibles

DomainAgent
Responsable de lógica del dominio del negocio.

AccountingAgent
Responsable del sistema contable.

BackendAgent
Responsable de la implementación de la API y arquitectura backend.

FrontendAgent
Responsable de componentes React y UI.

---

# Reglas de orquestación

Si la solicitud involucra entidades del dominio:
→ usar DomainAgent

Si la solicitud involucra transacciones financieras:
→ usar AccountingAgent

Si la solicitud involucra endpoints o estructura de backend:
→ usar BackendAgent

Si la solicitud involucra interfaz de usuario:
→ usar FrontendAgent

---

# Prioridad de fuentes de conocimiento

1 Reglas de negocio
2 Requerimientos del sistema
3 Skills del dominio
4 Código existente

---

# Flujo de decisión

1 Analizar la solicitud
2 Identificar el dominio involucrado
3 Delegar en el agente especializado
4 Consolidar la respuesta

## Decisión para el Registro de Pagos a Empleados

Para implementar el registro de pagos a empleados, el orquestador seleccionará el agente basado en los siguientes criterios:

1. **Reglas de Negocio**: El agente debe garantizar que las transacciones financieras sean atómicas y consistentes con el Libro Diario.
2. **Dominio**: El agente debe tener conocimiento de las entidades `Empleado`, `CuentaEmpleado`, `Transaccion` y `LibroDiario`.
3. **Persistencia**: El agente debe interactuar con la base de datos MongoDB para registrar las transacciones y actualizar las cuentas correspondientes.

---

## Agente Seleccionado

El agente seleccionado para esta tarea es el **Agente de Transacciones**. Este agente tiene las siguientes responsabilidades:

- Registrar la transacción de pago en el Libro Diario.
- Actualizar el saldo de la cuenta del empleado.
- Garantizar la trazabilidad de la operación.
- Manejar errores para asegurar la atomicidad de la operación.

---

## Flujo de Trabajo

1. **Entrada**: Datos del pago (empleado, monto, fecha, descripción).
2. **Validación**: Verificar que el empleado esté activo y que el monto sea válido.
3. **Registro**:
   - Crear una transacción de tipo `Pago`.
   - Registrar la transacción en el Libro Diario.
   - Actualizar la cuenta del empleado.
4. **Confirmación**: Retornar un estado de éxito o error.

---

## Implementación

El **Agente de Transacciones** será responsable de implementar esta funcionalidad en la capa de dominio y persistencia, siguiendo los principios definidos en el sistema.
