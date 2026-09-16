# Plan técnico

## 1. Decisión base

La combinación propuesta es Next.js con TypeScript para la aplicación y PostgreSQL para persistencia. Se usará una versión estable y soportada en el momento de implementación, evitando fijar hoy una versión que pueda quedar obsoleta antes del inicio.

La arquitectura debe permanecer simple: una aplicación desplegable, una base administrada y servicios externos mínimos para correo, analítica y observabilidad.

## 2. Arquitectura lógica

### Capa pública

- Páginas de contenido renderizadas en servidor o generadas estáticamente según necesidad.
- Componentes compartidos para navegación, capacidades, casos y CTA.
- Formulario con mejora progresiva y estados accesibles.
- Metadatos, sitemap y assets optimizados.

### Capa de aplicación

- Endpoint o acción de servidor exclusiva para crear solicitudes.
- Validación centralizada e independiente de la interfaz.
- Idempotencia y controles anti-abuso.
- Servicio de notificaciones desacoplado de la persistencia.
- Registro estructurado sin PII.

### Datos

- PostgreSQL administrado.
- Migraciones versionadas.
- Usuario de aplicación con privilegios mínimos.
- Backups automáticos y procedimiento de restauración probado.
- Pool de conexiones compatible con el entorno de despliegue.

## 3. Modelo conceptual de datos

### `leads`

- identificador interno no secuencial expuesto;
- referencia pública;
- nombre;
- email;
- empresa opcional;
- teléfono opcional;
- descripción;
- etapa opcional;
- timing opcional;
- estado;
- origen permitido;
- evaluación anti-spam;
- fechas de creación y actualización.

### `lead_service_interests`

- lead;
- categoría de servicio.

Separar las categorías evita guardar selecciones múltiples en texto libre y permite analizarlas de forma consistente.

### `consents`

- lead;
- propósito;
- versión del texto;
- fecha de aceptación.

### Para fase interna

- `users` o referencia al proveedor de identidad;
- `lead_assignments`;
- `lead_status_history`;
- `lead_notes`;
- `audit_events`.

El esquema final debe definir índices, restricciones y borrado conforme a la política de retención.

## 4. Decisiones a tomar al iniciar implementación

| Tema | Recomendación | Alternativa |
| --- | --- | --- |
| Hosting | Plataforma con buen soporte para Next.js y previews por PR | Cloud elegido por el cliente si existen requisitos corporativos |
| PostgreSQL | Servicio administrado con backups y pool de conexiones | Base en la nube ya aprobada por el cliente |
| Acceso a datos | ORM/query builder con migraciones claras y SQL inspeccionable | Cliente SQL directo si el equipo mantiene disciplina de migraciones |
| Email | Proveedor transaccional con dominio verificado, reintentos y webhooks | Integración corporativa existente |
| Analítica | Solución privacy-friendly o configuración con consentimiento | Analítica self-hosted si su operación está justificada |
| Error tracking | Servicio con redacción de PII | Observabilidad central existente |
| Identidad interna | Proveedor administrado con MFA | SSO corporativo si ya existe |

La elección de proveedor no debe quedar embebida en el modelo de dominio.

## 5. Ambientes

- **Local:** datos sintéticos; nunca copias directas de leads reales.
- **Preview por PR:** aislado y claramente identificado; formulario en modo seguro o hacia una bandeja de prueba.
- **Staging:** configuración equivalente a producción sin datos productivos.
- **Producción:** accesos mínimos, dominios y correo verificados, backups y alertas activas.

Cada ambiente debe tener secretos independientes. Los previews no deben enviar notificaciones a la bandeja comercial real.

## 6. Seguridad por diseño

- Validar, limitar y normalizar todo input en servidor.
- Consultas parametrizadas a través de la capa de acceso a datos.
- Política de seguridad de contenido y headers apropiados.
- Protección CSRF según el mecanismo de envío elegido.
- Rate limiting y deduplicación.
- Dependencias con actualización y revisión periódicas.
- Análisis de secretos en CI.
- Variables sensibles solo en el gestor de secretos.
- Redacción de PII en logs, trazas y errores.
- Revisión de permisos de base y servicios externos antes del lanzamiento.

## 7. Reliability y manejo de fallos

- La creación del lead y su referencia se confirma solo después de persistir.
- La notificación se reintenta sin volver a crear el lead.
- Los fallos permanentes de correo generan una alerta operativa.
- Las migraciones tienen estrategia de rollback o forward fix documentada.
- La página pública puede seguir disponible si falla el proveedor de email.
- Se definen health checks que no expongan secretos ni datos.
- Se prueba restauración de backup antes de considerar completa la salida a producción.

## 8. Estrategia de pruebas

### Unitarias

- Validación y normalización.
- Reglas de idempotencia.
- Mapeo de estados y categorías.
- Redacción de datos sensibles.

### Integración

- Creación real en una base efímera de prueba.
- Restricciones y migraciones.
- Fallos y reintentos de correo.
- Rate limiting y señales anti-spam.

### End to end

- Navegación y CTA.
- Envío válido.
- Errores de campo.
- Fallo recuperable.
- Prevención de duplicado.
- Recorrido con teclado.
- Responsive en tamaños representativos.

### Quality gates

- Lint y typecheck.
- Pruebas automáticas críticas.
- Auditoría básica de accesibilidad.
- Build de producción.
- Presupuesto de rendimiento.
- Revisión manual exploratoria antes de release.

## 9. CI/CD

Por cada PR:

- validación de formato, tipos y pruebas;
- build de producción;
- revisión de migraciones cuando existan;
- preview aislada;
- controles de dependencias y secretos;
- checklist funcional y visual.

Para producción:

- aprobación definida;
- migraciones compatibles hacia adelante;
- smoke test posterior al despliegue;
- verificación del formulario y correo con un lead de prueba identificable;
- rollback o forward fix ensayado.

## 10. Observabilidad

- Logs estructurados con ID de correlación y sin PII.
- Métricas de éxito/error del formulario.
- Estado de entrega de notificaciones.
- Alertas por aumento de errores, fallo sostenido de correo o indisponibilidad de base.
- Seguimiento de Core Web Vitals cuando haya volumen suficiente.
- Runbook con responsables y acciones ante cada alerta.

## 11. Contenido y CMS

Para el MVP, el contenido puede versionarse junto con la aplicación. Esto reduce costo, superficie de seguridad y complejidad editorial.

Reevaluar un CMS cuando:

- una persona no técnica publique con frecuencia;
- exista blog o biblioteca de casos;
- se necesiten flujos de aprobación editorial;
- el ritmo de cambios de contenido dependa del equipo de desarrollo.

## 12. Internacionalización

Publicar primero en español, pero evitar textos concatenados y estructuras que impidan agregar inglés. La versión bilingüe debe incluir traducción profesional, metadatos localizados y reglas de indexación; no será un simple selector sobre traducción automática.

## 13. Registro de decisiones

Antes de comenzar desarrollo deben quedar registradas al menos estas decisiones:

- proveedor de hosting;
- proveedor y región de PostgreSQL;
- dominio remitente de correo;
- herramienta de analítica y consentimiento;
- política de retención;
- existencia o no de autoresponder;
- necesidad real de panel interno;
- idioma y mercados del primer lanzamiento.
