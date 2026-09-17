# Suite de PRD de PushPoint

- Estado: propuesta lista para revisión.
- Regla: un archivo posee el alcance de un módulo.
- Backlog: vive en GitHub Issues, no en estos documentos.

## Módulos

| ID | Módulo | Prioridad | Depende de |
| --- | --- | --- | --- |
| M01 | [Sitio público](PRD_MODULO_01_SITIO_PUBLICO.md) | P0 | Brief de producto |
| M02 | [Solicitud de servicios](PRD_MODULO_02_SOLICITUD_SERVICIOS.md) | P0 | M01 y plan técnico |
| M03 | [Gestión interna de oportunidades](PRD_MODULO_03_GESTION_OPORTUNIDADES.md) | P1 condicional | M02 y validación operativa |

## Requisitos transversales

Todos los módulos heredan estos requisitos, aunque su comportamiento concreto se detalle
en el PRD propietario o el plan técnico:

- accesibilidad WCAG 2.2 AA en los recorridos críticos;
- diseño responsive y mobile-first;
- datos personales fuera de URLs, analítica y logs;
- validación y autorización en servidor;
- estados normal, vacío, carga, éxito y error donde correspondan;
- observabilidad sin exponer información sensible;
- contenido en español preparado para una futura versión en inglés;
- QA desde la definición, no únicamente antes de publicar.

## Convención de unidades

- `tipo:slice`: cambio visible y verificable por producto/QA.
- `tipo:tecnica`: cambio sin superficie visible, verificado mediante pruebas o evidencia
  operativa.
- `P0`: necesario para publicar V1.
- `P1`: siguiente incremento o capacidad condicionada por evidencia.
- `P2`: mejora posterior sin compromiso de fecha.
- `modulo:NN`: identifica el PRD o requisito propietario.

Cada unidad debe ser un pull request que pueda integrarse sin romper la aplicación. El
cuerpo del issue debe incluir contexto, criterios de aceptación, fuera de alcance,
dependencias y referencias.
