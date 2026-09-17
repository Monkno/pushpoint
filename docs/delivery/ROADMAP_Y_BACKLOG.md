# Roadmap, prioridades y decisiones pendientes

El estado ejecutable vive en [GitHub Issues](https://github.com/Monkno/pushpoint/issues).
Este documento conserva la intención de producto, las fases y los criterios de
priorización; no refleja avance, asignaciones ni bloqueos actuales.

## 1. Estrategia de entrega

Construir en cortes verticales que puedan revisarse de punta a punta. La primera demo útil debe incluir Home, una versión mínima de Servicios y un envío de contacto persistido en un ambiente seguro; no conviene dejar la integración del formulario para el final.

Estimación orientativa para un equipo pequeño senior: 4 a 6 semanas calendario. Debe recalibrarse después de confirmar contenido, identidad, proveedores e integraciones. La aprobación tardía de copy, legales o casos puede ser el principal riesgo de calendario.

## 2. Fases

### Fase 0 — Alineación y contenido

Duración orientativa: 2 a 4 días.

- Confirmar audiencia, mercados e idioma.
- Aprobar arquitectura de mensajes.
- Priorizar capacidades.
- Reunir logotipo, assets y materiales de casos.
- Definir destinatarios, dueño y SLA de los leads.
- Resolver decisiones legales y de datos.
- Aprobar alcance del MVP y no objetivos.

Salida: brief aprobado, inventario de contenido y decisiones bloqueantes resueltas.

### Fase 1 — UX y dirección visual

Duración orientativa: 4 a 6 días.

- Wireframes mobile-first de páginas clave.
- Prototipo del recorrido Home → Servicio → Contacto → Confirmación.
- Exploración visual de Home y sistema base.
- Prueba rápida de comprensión con 3 a 5 personas similares al cliente objetivo.
- Ajuste de copy, jerarquía y campos.

Salida: prototipo aprobable, contenidos casi finales y criterios visuales definidos.

### Fase 2 — Primer corte funcional

Duración orientativa: 5 a 8 días.

- Estructura pública y navegación.
- Home y Servicios.
- Formulario accesible.
- Persistencia en PostgreSQL.
- Notificación interna y estados principales.
- Primeras pruebas automáticas del flujo crítico.

Salida: solicitud de servicio funcional de punta a punta en staging.

### Fase 3 — Confianza y contenido completo

Duración orientativa: 4 a 6 días.

- Cómo trabajamos.
- Casos/productos.
- AI, Quality Engineering y modelo de equipo.
- Privacidad, 404 y estados de error.
- SEO y vistas para compartir.
- Analítica sin PII.

Salida: sitio completo para revisión de negocio.

### Fase 4 — Hardening y lanzamiento

Duración orientativa: 3 a 5 días.

- QA exploratorio y regresión.
- Revisión de accesibilidad y responsive.
- Rendimiento y seguridad.
- Pruebas de fallos de correo y base.
- Alertas, backups, restore test y runbook.
- Revisión de contenidos y legales.
- Smoke test y publicación.

Salida: producción monitoreada y flujo comercial operativo.

### Fase 5 — Aprendizaje

Primeros 30 días.

- Revisar embudo y calidad de solicitudes.
- Analizar preguntas repetidas en discovery.
- Ajustar copy y campos.
- Decidir agenda, CRM, panel interno, inglés o contenidos según evidencia.

## 3. Prioridades de producto

### P0 — Necesario para lanzar

- Arquitectura de información y navegación.
- Home.
- Servicios agrupados.
- Cómo trabajamos.
- Trabajo/casos aprobados.
- Contacto y confirmación.
- Persistencia de leads.
- Notificación interna con manejo de fallos.
- Privacidad y consentimiento.
- SEO técnico básico.
- Accesibilidad del recorrido crítico.
- Analítica del embudo sin PII.
- Observabilidad, backups y runbook.

### P1 — Después de validar el MVP

- Agenda de discovery integrada.
- Acuse automático al usuario.
- Versión en inglés.
- Integración con CRM.
- Casos adicionales con métricas.
- Experimentos de copy y formulario.
- Panel interno si el proceso lo justifica.

### P2 — Solo con evidencia de necesidad

- CMS y blog.
- Recursos descargables.
- Calculadora o configurador de proyecto.
- Portal de clientes.
- Chat o asistente conversacional.
- Automatizaciones avanzadas de nurturing.

## 4. Historias de usuario principales

| ID | Historia | Prioridad |
| --- | --- | --- |
| US-01 | Como fundador, quiero entender si PushPoint puede llevar mi idea a un producto para decidir si contacto al equipo | P0 |
| US-02 | Como product leader, quiero conocer capacidades y forma de trabajo para evaluar encaje | P0 |
| US-03 | Como responsable técnico, quiero ver que calidad, cloud y mantenimiento son parte del servicio | P0 |
| US-04 | Como visitante, quiero describir mi necesidad sin crear una cuenta | P0 |
| US-05 | Como visitante, quiero saber que mi solicitud fue recibida y qué pasará después | P0 |
| US-06 | Como responsable de PushPoint, quiero recibir y recuperar cada solicitud aunque falle el correo | P0 |
| US-07 | Como responsable comercial, quiero medir el embudo sin exponer datos personales | P0 |
| US-08 | Como visitante internacional, quiero leer el sitio en inglés | P1 |
| US-09 | Como responsable comercial, quiero coordinar una llamada desde el sitio | P1 |
| US-10 | Como equipo, quiero clasificar y seguir oportunidades en una bandeja privada | P1 condicional |

## 5. Matriz de responsabilidades sugerida

| Área | Responsable primario | Participación necesaria |
| --- | --- | --- |
| Posicionamiento y oferta | Founder/negocio | Product/Delivery |
| Copy y arquitectura de contenido | Product/Content | Negocio, UX |
| UX/UI | Diseño | Product, Engineering, QA |
| Arquitectura técnica | Engineering | DevOps, QA |
| Estrategia de calidad | Quality Engineering | Engineering, Product |
| Infraestructura y release | DevOps/Engineering | QA |
| Privacidad y términos | Responsable de negocio/legal | Product, Engineering |
| Atención de leads | Dueño comercial definido | Product/Delivery |

Una misma persona puede cubrir más de un rol; la responsabilidad debe seguir siendo explícita.

## 6. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
| --- | --- | --- |
| Oferta demasiado amplia | El visitante no se reconoce | Agrupar por cinco capacidades y situaciones |
| Copy genérico | Baja confianza | Usar casos, proceso y entregables verificables |
| Casos sin autorización | Riesgo reputacional/legal | Anonimizar o retirar hasta aprobación |
| Formulario largo | Menor conversión | Cinco elementos obligatorios y resto opcional |
| Lead guardado pero no atendido | Oportunidad perdida | Dueño, SLA, alertas y revisión operativa |
| Dependencia del email | Pérdida silenciosa | PostgreSQL como fuente de verdad y reintentos |
| Scope creep hacia CRM/CMS | Retraso del lanzamiento | Mantener P1/P2 fuera de P0 |
| Uso de AI mal comunicado | Pérdida de confianza | Acelerador con validación humana y ownership |
| PII en analítica o logs | Riesgo de privacidad | Redacción, schemas permitidos y pruebas |
| Accesibilidad tardía | Retrabajo | Criterios y QA desde diseño |

## 7. Decisiones pendientes para revisión

Estas preguntas no bloquean la revisión de los PRD, pero sí el inicio de implementación:

1. ¿El primer lanzamiento será solo en español? ¿Qué países son prioritarios?
2. ¿Qué dominio y razón social se mostrarán?
3. ¿Qué correo recibirá las solicitudes y quién será su dueño?
4. ¿Qué tiempo de respuesta puede prometerse de forma sostenible?
5. ¿Se ofrecerá agenda directa o primero se calificará por correo?
6. ¿Los dos productos actuales pueden publicarse con nombre, screenshots y métricas?
7. ¿Existen testimonios aprobados?
8. ¿Hay logotipo, tipografías y colores exactos o deben definirse?
9. ¿Qué proveedor de hosting y PostgreSQL prefiere el equipo?
10. ¿Qué política de retención y eliminación de leads corresponde?
11. ¿Hace falta un CRM desde el inicio o el volumen permite esperar?
12. ¿Quién aprobará contenido, diseño, seguridad y salida a producción?

## 8. Gate de aprobación antes de desarrollar

Se considera listo para desarrollo cuando:

- el alcance P0 está aceptado;
- las páginas y capacidades están aprobadas;
- el formulario y sus campos están aprobados;
- existe dueño y proceso de atención de leads;
- los contenidos y casos tienen fuente y autorización;
- las decisiones de hosting, base, correo y analítica tienen dueño y fecha;
- privacidad y consentimiento tienen revisión apropiada;
- los criterios de aceptación de los PRD no tienen contradicciones abiertas.

## 9. Guion sugerido para revisar este paquete

1. Validar posicionamiento, audiencias y propuesta de valor en el brief.
2. Aprobar páginas, mensajes y dirección visual del PRD 01.
3. Reducir o confirmar campos y operación del PRD 02.
4. Decidir si el PRD 03 pasa a P1 o se reemplaza por un CRM.
5. Elegir proveedores y responsables del plan técnico.
6. Cerrar las doce decisiones pendientes.
7. Convertir P0 en issues y estimar con el equipo que implementará.
