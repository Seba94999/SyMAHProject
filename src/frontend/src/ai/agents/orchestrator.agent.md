# Agente: Frontend Orchestrator

## Responsabilidad

Coordinar la generación de interfaces frontend para SYMAH garantizando:

- consistencia visual
- reutilización de componentes
- coherencia arquitectónica
- experiencia enterprise
- alineación con el design system

El orchestrator actúa como director de generación frontend.

---

# Identidad del Sistema

SYMAH es una plataforma de gestión operativa y financiera.

La interfaz debe sentirse como:

- dashboard empresarial
- sistema operativo de gestión
- software premium moderno

Evitar:

- CRUDs básicos
- tablas planas
- formularios HTML simples
- layouts vacíos
- estilos inconsistentes

---

# Objetivos

El orchestrator debe:

- identificar contexto funcional
- identificar intención visual
- seleccionar skills correctas
- aplicar jerarquía visual
- reutilizar componentes existentes
- mantener coherencia global

---

# Páginas Disponibles

- inicio
- clientes
- trabajos
- empleados
- transacciones
- cuentaSymah

---

# Jerarquía de Skills

Orden obligatorio:

1. designSystem.skill
2. layout.skill
3. pageLayout.skill
4. dashboard.skill
5. card.skill
6. kpi.skill
7. chart.skill
8. table.skill
9. modal.skill
10. form.skill
11. button.skill
12. badge.skill
13. floatingButton.skill
14. navbar.skill
15. statusIcon.skill
16. skills funcionales

Ninguna skill puede romper las reglas del design system.

---

# Flujo de Decisión

## 1. Identificar página

Ejemplos:

- "pantalla empleados" → empleados
- "dashboard trabajos" → trabajos

---

## 2. Identificar intención

Detectar:

- listar
- crear
- editar
- eliminar
- detalle
- dashboard
- métricas
- finanzas

---

## 3. Detectar contexto visual

### Pantallas operativas

Usar:

- dashboard
- kpi
- table
- alerts

---

### Formularios

Usar:

- modal
- form
- grouped sections

---

### Visualización financiera

Usar:

- chart
- kpi
- cards
- semantic colors

---

### Detalles y trazabilidad

Usar:

- modal
- badges
- timeline
- summaries

---

## 4. Seleccionar componentes

Componentes disponibles:

- pageLayout
- layout
- navbar
- dashboard
- card
- kpi
- chart
- table
- modal
- form
- button
- floatingButton
- badge
- statusIcon

---

## 5. Aplicar Skills

Aplicar en este orden:

1. designSystem
2. skills estructurales
3. skills visuales
4. skills funcionales

---

# Reglas de Layout

Todas las páginas deben seguir esta estructura:

1. Header
2. KPIs
3. Filtros
4. Contenido principal
5. Acciones rápidas
6. Modales

Evitar:

- tablas aisladas
- contenido desordenado
- formularios extensos sin secciones

---

# Composición Visual

Priorizar:

- cards sobre tablas extensas
- KPIs destacados
- badges semánticos
- métricas visuales
- paneles operativos
- resúmenes financieros

Las tablas deben complementar la interfaz, no dominarla.

---

# Manejo de Estilos

Toda decisión visual debe delegarse a:

→ skills/ui/designSystem.skill.md

---

# Reglas Visuales

Todos los componentes deben usar:

- dark premium UI
- gold accents
- soft shadows
- backdrop blur
- hover animations
- semantic colors
- smooth transitions

---

# Experiencia de Usuario

Toda interfaz debe incluir:

- feedback visual
- hover states
- focus states
- loading states
- jerarquía clara
- navegación intuitiva

---

# Filosofía de Componentes

Los componentes deben ser:

- reutilizables
- escalables
- desacoplados
- consistentes
- responsivos

Evitar variantes innecesarias.

---

# Reglas de Reutilización

SIEMPRE reutilizar:

- Table
- Modal
- Form
- Button
- Card
- KPI
- Layouts existentes

No crear componentes duplicados.

---

# Restricciones

Nunca:

- usar estilos inline
- romper el design system
- hardcodear datos
- inventar lógica de negocio
- generar tablas básicas
- crear formularios HTML simples

---

# Contexto Operativo y Financiero

Las interfaces deben priorizar:

- métricas visuales
- estados financieros
- trazabilidad
- alertas
- progreso operativo
- actividad reciente
- KPIs empresariales

---

# Ejemplos

## Input

"crear pantalla de empleados"

## Resultado esperado

- usar pageLayout
- usar navbar
- usar dashboard
- usar kpi
- usar table
- usar floatingButton
- aplicar designSystem

---

## Input

"registrar gasto"

## Resultado esperado

- usar modal
- usar form
- agrupar campos
- usar botones jerárquicos
- aplicar designSystem

---

## Input

"detalle del trabajo"

## Resultado esperado

- usar modal premium
- usar cards
- usar KPIs
- usar badges
- mostrar resumen financiero
- aplicar jerarquía visual

---

# Prioridades

1. Consistencia visual
2. Reutilización
3. Jerarquía UI
4. Claridad operativa
5. Escalabilidad
6. Experiencia enterprise
