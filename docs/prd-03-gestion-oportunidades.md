# PRD 03 — Gestión interna de oportunidades

## 1. Estado y recomendación

Propuesta para una segunda fase. No bloquea el lanzamiento del sitio si el volumen inicial puede gestionarse con notificaciones y una herramienta existente.

Antes de construir este panel debe evaluarse si un CRM liviano cubre la necesidad con menor costo de mantenimiento. PostgreSQL puede seguir siendo la fuente inicial de recepción e integrarse después.

## 2. Objetivo

Permitir que el equipo autorizado revise, clasifique y dé seguimiento a solicitudes sin depender de búsquedas en correo ni exponer acceso directo a la base de datos.

## 3. Usuarios

- Responsable comercial o de discovery.
- Product/Delivery lead.
- Administrador limitado para altas, bajas y configuración.

## 4. Alcance inicial

- Acceso privado e invite-only.
- Lista de solicitudes ordenada por recencia.
- Búsqueda por referencia, persona o empresa.
- Filtros por estado, capacidad, fecha y responsable.
- Detalle completo del lead.
- Cambio de estado.
- Asignación de responsable.
- Notas internas.
- Historial de cambios relevantes.
- Enlace para responder mediante el cliente de correo.
- Marcado de spam y duplicado.

## 5. Estados recomendados

- `new`: recibido y sin revisar.
- `reviewing`: en evaluación.
- `qualified`: encaja con la oferta y requiere discovery.
- `discovery_scheduled`: llamada coordinada.
- `proposal`: propuesta en preparación o enviada.
- `won`: oportunidad aceptada.
- `lost`: no continuará, con motivo normalizado.
- `spam`: contenido no válido.
- `duplicate`: referencia a otro registro.

Los cambios de estado deben tener dueño de proceso y definición operativa; el software no resuelve por sí solo una disciplina comercial ausente.

## 6. Requisitos funcionales

### Bandeja

- Muestra referencia, fecha, nombre, empresa, capacidad solicitada, estado y responsable.
- Permite ordenar y filtrar sin perder el contexto al volver desde el detalle.
- Distingue solicitudes no vistas sin depender solo del color.
- No muestra la descripción completa en la lista para reducir exposición innecesaria.

### Detalle

- Presenta todos los datos enviados y su origen permitido.
- Permite cambiar estado y responsable.
- Permite agregar notas internas, claramente separadas de los datos del cliente.
- Muestra historial de cambios con actor y fecha.
- Permite copiar la referencia pública.
- No permite editar silenciosamente el mensaje original.

### Notas

- Solo visibles para usuarios autorizados.
- No admiten HTML ejecutable ni adjuntos en la primera versión.
- Registran autor, creación y última edición.
- Una edición deja trazabilidad suficiente para auditoría.

### Exportación

No se incluye por defecto. Si se habilita, debe estar limitada por rol, quedar auditada y evitar exportaciones masivas accidentales.

## 7. Roles y permisos

### Miembro

- Ver leads.
- Cambiar estado.
- Asignarse o asignar según política.
- Crear notas.

### Administrador

- Todo lo anterior.
- Administrar accesos.
- Configurar motivos y destinatarios.
- Ejecutar acciones de retención o eliminación aprobadas.

No se recomienda un modelo granular adicional hasta que exista una necesidad comprobada.

## 8. Seguridad

- Autenticación mediante proveedor administrado y MFA cuando esté disponible.
- Sin registro público.
- Sesiones seguras y expiración apropiada.
- Autorización verificada en servidor para cada acción.
- Protección contra intentos repetidos y sesiones anómalas.
- Auditoría de acceso y cambios sensibles.
- PII excluida de logs y herramientas de analítica.
- Acceso de producción separado de entornos de prueba.

## 9. Requisitos no funcionales

- Vista inicial útil aun con cientos o pocos miles de registros.
- Paginación del lado del servidor.
- Estados vacíos y de error accionables.
- Operaciones críticas idempotentes.
- Accesible por teclado.
- Diseño usable en notebook; soporte móvil de consulta, no necesariamente operación completa.

## 10. Métricas operativas

- Leads nuevos sin atender.
- Tiempo hasta primera revisión.
- Tiempo hasta primera respuesta.
- Conversión por fuente y categoría.
- Motivos de pérdida.
- Volumen de spam y duplicados.

## 11. Criterios de aceptación

- Una persona no autenticada no puede acceder a datos ni inferir su existencia.
- Un miembro autorizado puede encontrar un lead y actualizar su estado.
- Cada cambio de estado, responsable o nota queda atribuido.
- Los filtros pueden compartirse solo si no exponen información sensible en la URL.
- Marcar un lead como spam no lo elimina ni rompe la trazabilidad.
- La eliminación por política de retención exige una acción autorizada y auditable.

## 12. Decisión de construcción

Construir este panel solo si se cumple al menos una condición:

- el volumen hace ineficiente gestionar solicitudes por correo;
- más de una persona necesita coordinar seguimiento;
- se pierden cambios de estado o contexto;
- se requiere auditoría interna;
- las herramientas existentes no satisfacen privacidad, costo o integración.

Si no se cumple, conviene integrar un CRM antes que mantener software interno adicional.
