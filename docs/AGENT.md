# AGENT.md

# Configuración del Agente

Este agente debe utilizar la estructura del repositorio para comprender el sistema antes de generar código.

## Fuentes de conocimiento del sistema

El agente debe priorizar la información en el siguiente orden:

1. Reglas de negocio
2. Requerimientos funcionales y no funcionales
3. Skills del dominio
4. Estructura del código
5. Diagrama de clases

Archivos principales:

docs/reglas_negocio.md  
docs/requerimientos.md  
skills/\*.skill.md  
docs/diagrama_clases.png

Las reglas de negocio son la fuente de verdad para la lógica del sistema.

---

# Estructura del repositorio

El proyecto utiliza la siguiente estructura:

src/
backend/
controllers
services
repositories
models
routes
config

frontend/

La arquitectura sigue el patrón:

Controller → Service → Repository → Database

---

# Responsabilidad de cada capa

Controllers

- reciben requests HTTP
- validan datos básicos
- llaman a los servicios del dominio

Services

- implementan las reglas de negocio
- coordinan operaciones entre repositorios
- aplican validaciones del dominio

Repositories

- encapsulan acceso a MongoDB
- utilizan modelos Mongoose

Models

- definen la estructura de datos
- representan entidades del dominio

Routes

- definen endpoints HTTP

---

# Reglas de generación de código

El agente debe:

1. Respetar las reglas de negocio definidas en `docs/reglas_negocio.md`
2. Implementar los requerimientos funcionales definidos en `docs/requerimientos.md`
3. Utilizar la arquitectura del proyecto
4. Separar responsabilidades por capa
5. No colocar lógica de negocio en controllers
6. No acceder directamente a modelos desde controllers

---

# Dominio del sistema

Las entidades principales son:

Empleado  
Cargo  
Cliente  
Trabajo  
HorarioTrabajo  
CuentaEmpleado  
Transaccion  
Presupuesto

Las operaciones principales del sistema incluyen:

- registrar horario de trabajo
- registrar pagos
- registrar cobros
- registrar gastos
- registrar préstamos
- gestionar empleados
- gestionar trabajos
- gestionar presupuestos

---

# Uso de Skills

Las reglas específicas del dominio se encuentran en:

skills/

El agente debe consultar las skills antes de implementar lógica de negocio.

Ejemplos de skills:

empleados.skill.md  
trabajos.skill.md  
transacciones.skill.md  
contabilidad.skill.md

---

# Principios del sistema

1. Toda operación financiera genera una transacción.
2. Las transacciones se registran en el Libro Diario.
3. Las cuentas reflejan la suma de las transacciones.
4. Las operaciones que afectan múltiples entidades deben ser atómicas.
5. Las transacciones no se modifican, solo pueden darse de baja.

---

# Instrucción para el agente

Antes de generar código:

1. Leer las reglas de negocio
2. Identificar entidades involucradas
3. Identificar servicios necesarios
4. Implementar repositorios si no existen
5. Crear endpoints REST si corresponde

## Contexto del Sistema

Este proyecto implementa un sistema de gestión operativa y contable para una empresa de servicios.

El sistema permite:

- gestionar empleados
- registrar horas trabajadas
- administrar trabajos
- registrar pagos, cobros, gastos y préstamos
- mantener un sistema contable basado en libro diario y cuentas

El objetivo principal es mantener consistencia financiera entre transacciones y cuentas.

---

# Arquitectura del Sistema

Stack tecnológico:

Frontend:

- React
- Vite
- CSS

Backend:

- Node.js
- Express

Base de datos:

- MongoDB

Arquitectura:

Frontend
↓
API REST
↓
Dominio (reglas de negocio)
↓
Persistencia (MongoDB)

Las reglas de negocio deben implementarse en la capa de dominio.

---

# Principales Entidades del Dominio

Empleado
Trabajo
Cliente
Cargo
CuentaEmpleado
CuentaEmpresa
Transaccion
LibroDiario
Presupuesto

---

# Concepto Contable

Toda operación financiera genera una transacción.

Las transacciones deben:

- registrarse en el Libro Diario
- impactar las cuentas correspondientes
- mantener trazabilidad histórica

Tipos de transacciones:

- Pago
- Cobro
- Gasto
- Prestamo
- ManoDeObra

---

# Reglas de Consistencia

Las operaciones financieras deben ser atómicas.

Si una parte falla:

- no debe persistirse ningún cambio.

El saldo de las cuentas siempre debe ser consistente con las transacciones registradas.

---

# Estados del Dominio

Empleado

- Activo
- Inactivo

Trabajo

- EnCurso
- EnPausa
- Finalizado
- Cancelado

Presupuesto

- Pendiente
- Aprobado
- Rechazado

---

# Principios de Implementación

1. No modificar transacciones financieras.
2. Las correcciones se realizan mediante bajas.
3. Toda operación financiera impacta el Libro Diario.
4. Las cuentas se calculan a partir de las transacciones.
