# Sistema de Agentes Frontend - SYMAH

## Contexto

SYMAH utiliza una arquitectura basada en agentes y skills para generar interfaces frontend en React + Vite.

El sistema está orientado a:

- gestión operativa
- control financiero
- visualización empresarial
- modularidad
- reutilización
- escalabilidad

La interfaz debe sentirse como:

- dashboard empresarial
- sistema operativo de gestión
- software financiero moderno

---

# Arquitectura General

El sistema se divide en:

- Agente Orquestador
- Agentes de Dominio
- Agente UI
- Skills especializadas
- Design System centralizado

---

# Agente Orquestador

## orchestrator.agent.md

Responsable de:

- interpretar intención del desarrollador
- identificar módulo y contexto
- seleccionar skills adecuadas
- coordinar UI + dominio
- mantener coherencia visual
- aplicar jerarquía de diseño

Debe priorizar:

- reutilización
- consistencia
- experiencia enterprise
- arquitectura escalable

---

# Agentes de Dominio

## clientes.skill.md

Gestiona:

- ABMC clientes
- presupuestos
- relación cliente-trabajos

---

## trabajos.skill.md

Gestiona:

- trabajos
- estados operativos
- cobros
- progreso

Estados:

- En Curso
- En Pausa
- Finalizado
- Cancelado

Reglas:

- no operar trabajos cancelados
- mantener trazabilidad
- controlar estado operativo

---

## empleados.skill.md

Gestiona:

- empleados
- jornadas
- pagos
- actividad laboral

Reglas:

- empleados inactivos no pueden:
  - registrar jornadas
  - recibir pagos

---

## transacciones.skill.md

Gestiona:

- pagos
- cobros
- gastos
- préstamos

Reglas:

- pagos > 0
- cobros > 0
- gastos > 0
- préstamos requieren tipo

Toda transacción impacta cuentas contables.

---

## contabilidad.skill.md

Gestiona:

- cuentas
- movimientos
- saldos
- libro diario

Reglas:

- mantener integridad contable
- evitar inconsistencias
- sincronizar movimientos y saldo

Caja:

acumulado + cobros − pagos − gastos − préstamos

---

## cuentaSymah.skill.md

Gestiona dashboard financiero global.

Métricas:

- gasto MO
- gastos
- gastos fijos
- pagado
- cobrado
- préstamos
- ingresos
- egresos
- ganancia
- caja

Visualización:

- KPIs
- tablas resumen
- gráficos
- métricas operativas

---

# Agente UI

## ui.agent.md

Responsable de:

- generar componentes reutilizables
- aplicar design system
- mantener consistencia visual
- construir layouts enterprise

---

# Componentes Base

Componentes reutilizables:

- Navbar
- PageLayout
- Layout
- Dashboard
- Card
- KPI
- Chart
- Table
- Modal
- Form
- Button
- FloatingButton
- Badge
- StatusIcon

---

# Design System

Toda decisión visual debe alinearse con:

```txt
skills/ui/designSystem.skill.md
```
