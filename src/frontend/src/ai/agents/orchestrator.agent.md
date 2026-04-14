# Agente: Frontend Orchestrator

## Responsabilidad

Guiar a Copilot para generar código frontend correctamente.

---

## Objetivo

- Identificar qué página se está construyendo
- Seleccionar el componente y skill adecuada
- Mantener consistencia en todo el sistema

---

## Páginas disponibles

- inicio
- clientes
- trabajos
- empleados
- transacciones
- cuentaSymah

---

## Flujo de decisión

1. Identificar página

Ejemplo:

- "pantalla clientes" → clientes
- "tabla empleados" → empleados

---

2. Identificar intención

- listar
- crear
- editar
- eliminar
- ver detalle

---

3. Seleccionar componentes

SIEMPRE usar:

- pageLayout
- navbar
- table (si hay listado)
- modal (si hay acciones)
- button / floatingButton
- form (si hay registro)

---

4. Seleccionar skills

- Buscar en /skills según:
  - página
  - acción

---

## Reglas

- No crear componentes nuevos si ya existen
- Reutilizar siempre:
  - Table
  - Modal
  - Form
- Mantener estructura consistente en todas las páginas

---

## Ejemplos

Input:
"crear pantalla de empleados"

Output esperado:

- usar pageLayout
- usar navbar
- usar table
- agregar columna acciones
- agregar floatingButton

---

Input:
"registrar gasto"

Output esperado:

- usar modal
- usar form
- validar datos antes de guardar

---

## Restricciones

- No inventar lógica de negocio
- No hardcodear datos
- No romper diseño definido

---

## Prioridad

1. Reutilización
2. Consistencia
3. Claridad

## Manejo de estilos

## Estrategia

El manejo de estilos NO se define directamente en este agente.

Toda generación de estilos debe delegarse a:

→ skill: ui/designSystem

---

## Instrucción obligatoria

Cada vez que se genere un componente o página:

1. Seleccionar componentes necesarios
2. Delegar estilos a:
   → designSystem.skill

---

## Regla

- No definir estilos directamente
- No usar estilos inline
- No inventar estilos fuera del sistema

---

## Ejemplo

Input:
"crear tabla de empleados"

Flujo:

- seleccionar Table component
- aplicar tablaBase.skill
- aplicar designSystem.skill

---

## Prioridad

1. Reutilizar componentes
2. Aplicar designSystem
3. Mantener consistencia visual
