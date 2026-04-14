# Skill: Design System

## Responsabilidad

Definir los estilos visuales del sistema por componente.

---

## Reglas generales

- Tema oscuro
- Uso de CSS por componente
- No usar estilos inline
- Mantener consistencia visual

---

## 🎨 Colores base

- Fondo principal: negro / gris oscuro
- Color principal: dorado
- Gris: elementos secundarios
- Estados:
  - Verde → éxito
  - Rojo → error

---

# COMPONENTES

---

## Navbar

### Estilo

- Posición fija (top)
- Fondo oscuro
- Altura constante

### Elementos

- Lista horizontal
- Espaciado uniforme

### Estado activo

- Color dorado
- Indicador visual (subrayado o fondo)

---

## Page Layout

### Estilo

- Fondo general oscuro
- Contenedor centrado

### Comportamiento

- Espaciado superior para navbar
- Padding lateral consistente

---

## Table

### Contenedor

- Fondo oscuro
- Bordes suaves

### Header

- Fondo más oscuro o destacado
- Texto claro
- Puede usar acento dorado

### Filas

- Alternancia de tonos oscuros
- Hover con iluminación leve

### Columna acciones

- Botones alineados
- Espaciado entre acciones

---

## Modal

### Overlay

- Fondo oscuro semi-transparente
- Efecto blur

### Caja

- Centrada
- Fondo oscuro
- Bordes redondeados

### Botón cerrar

- Ubicación superior derecha

---

## Button

### Tipos

- primary → dorado
- secondary → gris
- danger → rojo

### Estilo

- Bordes redondeados
- Padding uniforme

### Hover

- Cambio leve de brillo

---

## Floating Button

### Estilo

- Circular
- Color principal (dorado)

### Posición

- Fijo abajo derecha

### Comportamiento

- Siempre visible sobre contenido

---

## Form

### Inputs

- Fondo oscuro
- Bordes suaves
- Texto claro

### Espaciado

- Separación vertical entre campos

### Estados

- Error → borde rojo
- Focus → resaltado

---

## Status Icon

### Comportamiento

- Representación visual de estado

### Colores

- Verde → activo / correcto
- Rojo → error / inactivo
- Amarillo o gris → estados intermedios

---

## Reglas finales

- Cada componente aplica SOLO sus estilos
- No duplicar estilos entre componentes
- Mantener coherencia visual en todo el sistema
- Priorizar claridad sobre complejidad
- Cada estilo de componente CSS sera guardado en la ruta C:\Users\Usuario\Desktop\PS\proyecto\symah2\src\frontend\src\styles
