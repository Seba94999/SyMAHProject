# Documentación de Desarrollo

Este documento registra de manera cronológica los avances, problemas y soluciones implementadas durante el desarrollo del proyecto.

---

## 18 de marzo de 2026

### Desarrollo de la Entidad `Empleado`

- **Descripción**: Se creó el modelo `Empleado` con los atributos `nombre`, `cargo`, `tarifaHora`, `estado`, `fechaAlta`, `fechaBaja`, `cuentaEmpleado` y `telefono`.
- **Controladores**: Se implementaron los controladores para manejar las operaciones CRUD de la entidad.
- **Rutas**: Se definieron las rutas correspondientes para los endpoints de `Empleado`.
- **Decisión**: Se separó la lógica de negocio del modelo y se delegó a los controladores para mantener la separación de responsabilidades.

### Próximos Pasos

- Configurar el servidor para integrar las rutas de `Empleado`.
- Implementar pruebas unitarias para garantizar el correcto funcionamiento de la entidad y sus endpoints.

---

### Problemas y Soluciones

- **Problema**: Inicialmente, el modelo `Empleado` contenía métodos que mezclaban lógica de negocio con la estructura de datos.
  - **Solución**: Se movieron los métodos al controlador correspondiente, manteniendo el modelo enfocado únicamente en la estructura de datos.

---
