# Skill: Modal

## Responsabilidad

Mostrar contenido en overlay sobre la interfaz principal manteniendo foco visual y jerarquía UX.

Los modals en SYMAH deben sentirse como paneles enterprise flotantes, no como popups básicos.

---

# Filosofía Visual

Los modals deben transmitir:

- claridad
- foco
- profundidad visual
- profesionalismo
- control operativo

Evitar:

- cajas simples
- formularios planos
- overlays básicos
- contenido saturado

---

# Objetivo

Los modals deben utilizarse para:

- registros
- edición
- detalles
- confirmaciones
- resúmenes
- visualización rápida
- acciones críticas

---

# Estructura

Todo modal debe incluir:

- overlay
- contenedor principal
- header
- body
- footer opcional
- botón cerrar

---

# Overlay

## Estilo

- fondo oscuro semi-transparente
- backdrop blur obligatorio
- transición suave
- profundidad visual

---

## Comportamiento

El overlay debe:

- bloquear interacción con fondo
- mantener foco visual
- cerrar modal si corresponde

---

# Caja Principal

## Estilo

- centrada
- fondo oscuro premium
- bordes redondeados
- sombras suaves
- spacing amplio

---

## Tamaño

Debe soportar:

- small
- medium
- large
- fullscreen opcional

---

# Header

## Debe soportar

- título
- subtítulo opcional
- badge de estado
- acciones rápidas
- botón cerrar

---

## Estilo

- separación clara
- jerarquía fuerte
- alineación consistente

---

# Body

## Uso

Utilizar para:

- formularios
- tablas resumidas
- KPIs
- información financiera
- timelines
- métricas
- detalles operativos

---

## Reglas

- agrupar contenido por secciones
- usar grids cuando sea necesario
- evitar stacking excesivo
- mantener claridad visual

---

# Footer

## Uso opcional

Utilizar para:

- acciones
- confirmaciones
- botones principales
- navegación secundaria

---

# Botón Cerrar

## Comportamiento

Debe:

- cerrar correctamente
- tener feedback visual
- mantener accesibilidad

---

## Posición

- esquina superior derecha

---

# Comportamiento

El modal debe:

- abrir/cerrar mediante estado
- bloquear scroll de fondo
- mantener foco activo
- soportar animaciones suaves

---

# Animaciones

## Apertura

- fade in
- scale suave
- transición rápida

---

## Cierre

- fade out
- reducción suave

---

# Props Esperadas

- isOpen
- onClose
- children
- title
- size
- footer opcional

---

# Responsive

Los modals deben:

- adaptarse a mobile
- reorganizar contenido
- mantener legibilidad
- evitar overflow visual

---

# Integración

Los modals deben integrarse correctamente con:

- form
- card
- table
- button
- badge
- statusIcon

---

# UX

Los modals deben:

- mantener foco visual
- reducir distracciones
- facilitar acciones rápidas
- destacar información importante

---

# Restricciones

Nunca:

- usar estilos inline
- usar overlays planos
- saturar contenido
- romper el design system
- generar formularios desordenados

---

# Objetivo Final

Los modals deben funcionar como paneles operativos premium dentro de SYMAH, mejorando claridad, foco y experiencia visual.
