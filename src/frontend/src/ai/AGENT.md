# Sistema de Agentes Frontend - SyMAH

## Contexto

Este proyecto utiliza agentes para generar código frontend en React (Vite),
basado en una arquitectura modular y en reglas de negocio definidas.

El objetivo es construir interfaces reutilizables, consistentes y alineadas
con el dominio contable del sistema.

---

## Agente Orquestador

### orchestrator.agent.md

Responsable de:

- Interpretar la intención del desarrollador
- Determinar módulo (clientes, trabajos, empleados, transacciones, cuenta)
- Seleccionar agente y skill adecuados
- Coordinar UI Agent + Domain Agent

---

## Agentes de Dominio

### cliente.agent.md

Gestiona:

- ABMC clientes
- Presupuestos asociados

---

### trabajo.agent.md

Gestiona:

- Trabajos
- Estados (En Curso, Pausa, Finalizado, Cancelado)
- Cobros

Reglas clave:

- No operar sobre trabajos cancelados

---

### empleado.agent.md

Gestiona:

- Empleados
- Jornadas
- Pagos

Reglas clave:

- Empleado inactivo no puede:
  - registrar jornadas
  - recibir pagos

---

### transaccion.agent.md

Gestiona:

- Pagos
- Cobros
- Gastos
- Préstamos

Reglas clave:

- RN-04: pagos > 0 y solo a empleados activos
- RN-06: cobros > 0
- RN-08: gastos > 0
- RN-09: préstamos requieren tipo (otorgado/recibido)

Impacto:

- Todas las transacciones afectan cuentas contables

---

### cuenta.agent.md

Gestiona:

- Visualización de cuentas
- Saldos
- Integración con libro diario

Reglas clave:

- RN-12:
  Caja = acumulado + cobros − pagos − gastos − préstamos

- No permitir inconsistencias entre movimientos y saldo

---

### cuentaSymah.agent.md

Gestiona:

- Dashboard financiero
- Métricas:
  - Gasto MO
  - Gastos
  - Gastos fijos
  - Pagado
  - Cobrado
  - Préstamos
  - Ganancia
  - Ingresos
  - Egresos
  - Caja

- Visualización:
  - Tabla resumen
  - Gráfico de barras

Objetivo:

- Representar el estado financiero global del sistema

---

## Agente UI

### ui.agent.md

Responsable de:

- Generar componentes visuales reutilizables
- Aplicar Design System SyMAH

Componentes:

- Navbar (fija)
- PageLayout
- Table
- Modal (con blur)
- Button
- Form
- FloatingButton

Reglas UX (RNF-02):

- Confirmaciones en acciones críticas
- Feedback visual inmediato
- Interfaz clara y consistente

---

## Skills

Ubicadas en:

/frontend/src/ai/skills

Organizadas por dominio:

- cliente/
- trabajo/
- empleado/
- transaccion/
- cuenta/
- cuentaSymah/
- ui/

---

## Reglas Generales

- No duplicar componentes
- Reutilizar Table, Modal y Form
- Separar lógica y presentación
- Respetar reglas de negocio SIEMPRE
- No permitir operaciones inválidas desde UI

---

## Flujo de generación

1. Usuario solicita funcionalidad
2. Orchestrator identifica:
   - página
   - intención
3. Selecciona:
   - agente de dominio
   - skill correspondiente
4. UI Agent construye:
   - layout
   - componentes
5. Se integran reglas de negocio

---

## Objetivo final

Generar un frontend:

- Modular
- Escalable
- Consistente visualmente
- Alineado al modelo contable
- Seguro ante errores de usuario
