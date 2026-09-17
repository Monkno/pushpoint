# PushPoint — planificación de producto

Este repositorio contiene la documentación funcional y técnica para el sitio web comercial de PushPoint. Esta propuesta no incluye implementación de código.

## Documentos para revisión

1. [Brief de producto](docs/product/PRODUCT_BRIEF.md)
2. [Suite de PRD](docs/prd/README.md)
3. [PRD 01 — Sitio público](docs/prd/PRD_MODULO_01_SITIO_PUBLICO.md)
4. [PRD 02 — Solicitud de servicios](docs/prd/PRD_MODULO_02_SOLICITUD_SERVICIOS.md)
5. [PRD 03 — Gestión interna de oportunidades](docs/prd/PRD_MODULO_03_GESTION_OPORTUNIDADES.md)
6. [Plan técnico](docs/architecture/PLAN_TECNICO.md)
7. [Roadmap y prioridades](docs/delivery/ROADMAP_Y_BACKLOG.md)
8. [Decisiones de arquitectura](docs/adr/README.md)

El backlog operativo vive en [GitHub Issues](https://github.com/Monkno/pushpoint/issues). Los
documentos del repositorio definen producto y decisiones durables; no duplican el estado
de ejecución.

## Alcance recomendado para el primer lanzamiento

El MVP debe resolver una sola tarea de negocio de punta a punta: explicar con claridad qué hace PushPoint y permitir que una persona interesada envíe una solicitud de servicio en pocos minutos.

Incluye:

- sitio responsive en español;
- presentación de servicios agrupados por problema del cliente;
- explicación del modelo de trabajo y del diferencial de Quality Engineering;
- dos casos/productos actuales, sujetos a autorización para publicarlos;
- formulario breve de contacto;
- almacenamiento de solicitudes en PostgreSQL;
- notificación por correo al equipo;
- confirmación y próximos pasos para el usuario;
- analítica, SEO técnico, accesibilidad, seguridad y observabilidad básicas.

No incluye en el MVP:

- cuentas o portal de clientes;
- pagos, presupuestos automáticos o contratación en línea;
- chat en tiempo real;
- panel administrativo completo;
- blog o CMS;
- publicación bilingüe;
- integración obligatoria con un CRM.

Estas capacidades quedan documentadas como extensiones para fases posteriores.
