# PRD 02 — Solicitud de servicios

## 1. Estado

Propuesta para revisión.

## 2. Objetivo

Permitir que una persona interesada describa su necesidad y entregue datos suficientes para que PushPoint prepare una primera conversación, con la menor fricción razonable.

## 3. Principio del flujo

El formulario no debe funcionar como una licitación ni pedir al usuario que defina por sí mismo una solución técnica. Debe capturar el problema, el contexto y una forma de contacto. El discovery completa lo que falte.

## 4. Entrada al flujo

Todos los CTA “Contanos tu proyecto” llevan a `/contacto`. Si el CTA nace desde un servicio, la categoría puede llegar preseleccionada pero siempre debe poder cambiarse.

No se exige registro ni autenticación.

## 5. Formulario recomendado

Una sola página, con agrupación visual clara. El número de pasos solo debe aumentar si pruebas de usabilidad demuestran que mejora la finalización.

| Campo | Tipo | Obligatorio | Nota |
| --- | --- | --- | --- |
| Nombre | texto | Sí | Cómo dirigirse a la persona |
| Email de trabajo | email | Sí | Se acepta cualquier email válido; no bloquear dominios públicos |
| Empresa | texto | No | Útil para preparar la conversación |
| ¿En qué podemos ayudarte? | selección múltiple | Sí | Una o más de las cinco capacidades, más “No estoy seguro” |
| Contanos brevemente qué necesitás | texto largo | Sí | Orientar con ejemplos; límite razonable y contador opcional |
| Momento del proyecto | selección simple | No | Idea, definición, construcción, producto activo, estabilización/mantenimiento |
| Cuándo te gustaría empezar | selección simple | No | Lo antes posible, 1–3 meses, 3–6 meses, explorando opciones |
| Teléfono | teléfono | No | Nunca necesario para enviar |
| Consentimiento | checkbox | Sí | Aceptación del uso de datos para responder la consulta |

No se recomienda pedir presupuesto en el primer contacto del MVP. Puede probarse más adelante como campo opcional si el equipo demuestra que es indispensable para calificar.

CTA de envío: **Enviar solicitud**.

## 6. Estados de experiencia

### Inicial

- Campos vacíos y labels persistentes.
- Explicación breve del próximo paso.
- Alternativa de correo directo visible.

### Validación

- Validación de formato en cliente para respuesta inmediata y repetida en servidor por seguridad.
- Los errores aparecen junto al campo y en un resumen accesible.
- El texto ingresado se conserva ante un error corregible.
- No se usa el botón deshabilitado como única explicación de qué falta.

### Envío

- El botón evita envíos duplicados y comunica que el proceso está en curso.
- Una respuesta lenta no borra el contenido.

### Éxito

- Confirmación inequívoca.
- Resumen del próximo paso y tiempo de respuesta acordado.
- Identificador de referencia legible, sin exponer IDs secuenciales internos.
- Enlace para volver a Home.
- Evento de conversión emitido una sola vez.

### Error recuperable

- Mensaje claro, conservación de datos y acción para reintentar.
- Correo alternativo visible.
- El usuario no debe adivinar si la solicitud fue recibida.

## 7. Flujo del sistema

1. El usuario envía el formulario.
2. El servidor valida y normaliza la información.
3. Los controles anti-spam evalúan la solicitud.
4. Se crea un registro en PostgreSQL con estado `new` o `spam_review`.
5. Se registra el consentimiento con fecha y versión del texto aceptado.
6. Se envía una notificación al equipo.
7. Se responde al usuario con éxito e identificador de referencia.
8. Opcional después de validar entregabilidad: se envía acuse por correo al usuario.

La persistencia es la fuente de verdad. Un fallo del correo interno no debe descartar un lead ya guardado; debe generar una alerta y un reintento controlado.

## 8. Reglas funcionales

- Un mismo envío no debe crear múltiples registros por doble click o reintento inmediato.
- Todos los campos se vuelven a validar en servidor.
- Los textos se almacenan como datos, nunca se interpretan como HTML.
- La categoría preseleccionada por URL no se considera confiable sin validación.
- El email se normaliza sin alterar su significado.
- La notificación interna incluye un link seguro al registro solo si existe el panel interno.
- El autoresponder, si se activa, no debe prometer horarios no acordados.

## 9. Anti-spam y abuso

- Campo honeypot invisible para humanos y correctamente excluido de lectores de pantalla.
- Límite de frecuencia por señales técnicas, con cuidado de no bloquear redes compartidas.
- Token anti-bot o challenge progresivo solo ante riesgo; evitar CAPTCHA intrusivo por defecto.
- Tamaño máximo por campo y por request.
- Registro técnico suficiente para investigar abuso, sin retención indiscriminada.
- Cola de revisión para casos dudosos en lugar de rechazarlos silenciosamente cuando sea viable.

## 10. Privacidad y seguridad

- Recopilar solo datos necesarios para responder y calificar la consulta.
- HTTPS en todos los entornos públicos.
- Secretos fuera del repositorio.
- Acceso al contenido de leads limitado a personas autorizadas.
- Registro del texto de consentimiento y su versión.
- Política definida de retención, eliminación y atención de solicitudes de datos.
- Datos personales excluidos de URLs, analítica, logs de aplicación y herramientas de error tracking.
- Backups cifrados y restauración verificada según el proveedor elegido.

La política legal definitiva debe ser revisada según la entidad y jurisdicciones de PushPoint; este PRD no sustituye asesoramiento legal.

## 11. Datos mínimos del lead

| Grupo | Datos |
| --- | --- |
| Identidad | ID interno, referencia pública, nombre, email, empresa y teléfono opcionales |
| Necesidad | categorías, descripción, etapa y timing |
| Origen | página de origen, campaña permitida y referrer cuando corresponda |
| Operación | estado, fecha de creación y actualización |
| Consentimiento | versión del texto, fecha y fuente |
| Riesgo | resultado anti-spam y motivo técnico no sensible |

## 12. Integraciones

### MVP

- Proveedor de correo transaccional para notificación interna.
- PostgreSQL como fuente de verdad.
- Analítica del embudo sin PII.
- Observabilidad para errores y fallos de entrega.

### Posterior

- CRM, cuando exista un proceso comercial estable y un dueño claro.
- Calendario para discovery.
- Automatizaciones de seguimiento.
- Enriquecimiento empresarial, solo con base legal y necesidad comprobada.

## 13. Métricas

- Tasa de inicio y finalización.
- Abandono por campo, sin capturar el valor introducido.
- Tiempo medio de finalización.
- Error técnico por envío.
- Porcentaje identificado como spam.
- Tiempo desde envío hasta primera respuesta humana.
- Porcentaje de leads calificados.
- Porcentaje que agenda discovery.

## 14. Criterios de aceptación

- El formulario puede completarse correctamente con solo los cinco elementos obligatorios: nombre, email, categoría, descripción y consentimiento.
- Funciona con teclado y lector de pantalla en el recorrido crítico.
- Es usable en una pantalla móvil pequeña sin scroll horizontal.
- Un envío válido genera exactamente un lead persistido.
- Si falla la notificación, el lead persiste y el equipo recibe una alerta operativa.
- Los datos personales no aparecen en eventos de analítica ni URLs.
- Los mensajes de error no revelan detalles internos.
- Existe un camino alternativo por correo.
- Se prueba éxito, validación inválida, duplicación, rate limit, fallo de correo y fallo de base de datos.

## 15. Definition of Done

- Texto y campos aprobados.
- Política de privacidad enlazada y consentimiento versionado.
- Destinatarios y SLA de respuesta definidos.
- Flujo feliz y fallos principales cubiertos por pruebas.
- Revisión de accesibilidad completada.
- Anti-spam configurado y monitoreado.
- Notificaciones verificadas en producción.
- Runbook de recuperación de leads disponible.
