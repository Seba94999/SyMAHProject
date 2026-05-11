# Skill: Table

## Responsabilidad

Renderizar tablas reutilizables para visualización de datos operativos y financieros en SYMAH.

Las tablas deben sentirse como paneles empresariales modernos, no como spreadsheets tradicionales.

---

# Filosofía Visual

Las tablas deben transmitir:

- claridad
- organización
- control operativo
- jerarquía visual
- profesionalismo

Evitar:

- tablas HTML básicas
- exceso de líneas
- estructuras planas
- datos desordenados
- exceso de columnas

---

# Objetivo

Las tablas deben permitir:

- visualizar información rápidamente
- ejecutar acciones operativas
- mantener trazabilidad
- facilitar lectura y navegación

---

# Estructura

Toda tabla debe incluir:

- header
- body
- columna acciones opcional
- estados vacíos
- feedback visual

---

# Header

## Estilo

- fondo destacado
- tipografía fuerte
- separación visual clara
- soporte para acento dorado

---

## Reglas

- columnas definidas dinámicamente
- mantener jerarquía visual
- soportar iconografía opcional

---

# Body

## Comportamiento

La tabla debe:

- iterar dinámicamente sobre data
- renderizar filas automáticamente
- mantener consistencia visual

---

## Filas

Las filas deben:

- usar alternancia sutil
- incluir hover iluminado
- mantener spacing uniforme
- facilitar lectura horizontal

---

# Columnas

## Reglas

- definidas dinámicamente
- reutilizables
- configurables
- sin hardcodeo

---

## Tipos soportados

- texto
- moneda
- fecha
- estado
- badge
- acciones
- iconografía

---

# Columna Acciones

## Uso

Debe contener:

- editar
- eliminar
- ver detalle
- acciones rápidas

---

## Comportamiento

Las acciones deben:

- renderizarse dinámicamente
- ejecutar callbacks
- mantener consistencia visual

---

# Estados

## Empty State

Cuando no haya datos:

- mostrar mensaje claro
- mantener estructura visual
- evitar tablas vacías sin feedback

---

## Loading State

Debe soportar:

- skeletons
- loaders
- placeholders visuales

---

# Props Esperadas

- columns
- data
- actions
- loading opcional
- emptyMessage opcional

---

# Responsive

Las tablas deben:

- adaptarse a distintos tamaños
- permitir scroll horizontal controlado
- mantener legibilidad
- reorganizar contenido si es necesario

---

# Integración

Las tablas deben integrarse correctamente con:

- dashboard
- card
- modal
- badge
- button
- pageLayout

---

# UX

Las tablas deben:

- facilitar escaneo visual
- destacar información importante
- reducir ruido visual
- mantener navegación clara

---

# Composición Visual

Priorizar:

- claridad
- spacing consistente
- jerarquía visual
- acciones visibles
- estados semánticos

Las tablas deben complementar la interfaz,
no dominar completamente la pantalla.

---

# Restricciones

Nunca:

- hardcodear columnas
- usar estilos inline
- generar tablas planas
- saturar con demasiadas columnas
- romper el design system

---

# Objetivo Final

Las tablas deben funcionar como paneles operativos reutilizables, modernos y escalables dentro de SYMAH.
