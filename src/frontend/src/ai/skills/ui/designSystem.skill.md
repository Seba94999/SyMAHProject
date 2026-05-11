# Skill: Design System

## Responsabilidad

Definir el lenguaje visual global de SYMAH.

Esta skill tiene máxima prioridad visual y debe ser aplicada por todos los componentes y páginas del sistema.

---

# Identidad Visual

SYMAH debe sentirse como:

- dashboard empresarial
- sistema operativo de gestión
- plataforma financiera moderna
- software premium industrial

La interfaz debe transmitir:

- claridad
- control
- jerarquía
- profesionalismo
- consistencia

Evitar:

- CRUDs básicos
- estilos HTML simples
- tablas planas
- layouts vacíos
- interfaces tipo spreadsheet

---

# Reglas Generales

- Tema oscuro obligatorio
- No usar estilos inline
- Usar CSS modular por componente
- Mantener consistencia visual global
- Reutilizar estilos existentes
- Mantener spacing uniforme
- Priorizar legibilidad y jerarquía

Todos los estilos CSS deben guardarse en:

C:\Users\Usuario\Desktop\PS\proyecto\symah2\src\frontend\src\styles

---

# Paleta de Colores

## Fondos

- Background Main → #0D0D0D
- Background Surface → #171717
- Background Elevated → #202020
- Background Modal → rgba(35,35,35,0.92)

---

## Colores Principales

- Gold Primary → #F4C542
- Gold Hover → #FFD95E
- Gold Soft → rgba(244,197,66,0.12)

---

## Texto

- Text Primary → #FFFFFF
- Text Secondary → #B3B3B3
- Text Muted → #7A7A7A

---

## Estados

- Success → #7CFF6B
- Danger → #FF6B6B
- Warning → #FFC857
- Info → #4DA3FF

---

# Sombras

## Cards

box-shadow: 0 0 20px rgba(0,0,0,0.45);

---

## Glow Dorado

box-shadow: 0 0 12px rgba(244,197,66,0.12);

---

# Bordes

- Radius Small → 10px
- Radius Medium → 16px
- Radius Large → 22px

---

# Animaciones

Todos los elementos interactivos deben usar:

transition: all 0.25s ease;

Hover:

- leve elevación
- glow suave
- mejor contraste

---

# Tipografía

## Títulos

- font-weight: 800
- letter-spacing: -1px

---

## Secciones

- font-weight: 700

---

## Texto General

- font-weight: 500

---

# Layout General

Todas las páginas deben usar:

- spacing amplio
- jerarquía visual clara
- contenido agrupado
- márgenes consistentes
- diseño responsive

Evitar:

- contenido edge-to-edge
- exceso de tablas
- layouts comprimidos

---

# COMPONENTES

---

# Navbar

## Estilo

- posición fija superior
- fondo oscuro translúcido
- backdrop blur
- altura consistente
- borde inferior sutil

---

## Elementos

- navegación horizontal
- spacing uniforme
- iconografía clara

---

## Estado Activo

- color dorado
- glow sutil
- indicador visual

---

# Page Layout

## Estilo

- fondo oscuro global
- contenido centrado
- spacing superior para navbar

---

## Comportamiento

- padding lateral consistente
- estructura responsive
- soporte para dashboards

---

# Card

## Estilo

- fondo elevado oscuro
- bordes suaves
- sombras suaves
- padding amplio

---

## Uso

Utilizar para:

- KPIs
- métricas
- resúmenes
- paneles operativos

---

# Table

## Filosofía

Las tablas deben sentirse como paneles operativos, no como spreadsheets.

---

## Contenedor

- fondo oscuro elevado
- bordes suaves
- separación visual

---

## Header

- fondo destacado
- tipografía fuerte
- acento dorado

---

## Filas

- alternancia sutil
- hover iluminado
- transición suave

---

## Acciones

- botones alineados
- spacing consistente

---

# Modal

## Overlay

- fondo oscuro semi-transparente
- backdrop blur

---

## Caja

- centrada
- fondo oscuro premium
- bordes redondeados
- sombras profundas

---

## Layout Interno

- agrupar contenido por secciones
- usar grids y cards cuando sea necesario
- evitar formularios extensos sin jerarquía

---

## Botón Cerrar

- esquina superior derecha
- hover visual

---

# Button

## Tipos

### Primary

- dorado
- texto oscuro
- glow hover

---

### Secondary

- gris oscuro
- borde sutil

---

### Danger

- rojo suave
- feedback visual claro

---

## Estilo

- bordes redondeados
- padding uniforme
- transición suave

---

# Floating Button

## Estilo

- circular
- dorado
- glow suave
- elevado sobre contenido

---

## Posición

- fijo abajo derecha

---

## Comportamiento

- siempre visible
- hover con escala leve
- soporte para menú expandible

---

# Form

## Inputs

- fondo oscuro
- texto claro
- bordes suaves
- sombras internas sutiles

---

## Focus

- borde dorado
- glow suave

---

## Estados

### Error

- borde rojo
- feedback visual claro

---

## Layout

- separación consistente
- formularios agrupados por secciones
- evitar stacking excesivo

---

# KPI

## Estilo

- métricas grandes
- tipografía destacada
- iconografía clara
- indicadores visuales

---

## Uso

- caja
- ingresos
- gastos
- cobros
- ganancias
- actividad

---

# Chart

## Estilo

- colores semánticos
- contraste alto
- diseño minimalista
- integración con dark theme

---

# Status Icon / Badge

## Función

Representar estados visualmente.

---

## Colores

- Verde → éxito / activo
- Rojo → error / cancelado
- Amarillo → advertencia
- Azul → información
- Gris → neutro

---

# Reglas Finales

- Cada componente aplica solo sus estilos
- No duplicar estilos entre componentes
- Mantener coherencia visual global
- Reutilizar componentes existentes
- Priorizar claridad sobre complejidad
- Toda interfaz debe sentirse moderna y enterprise
