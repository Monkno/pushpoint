# Documentación de PushPoint

La documentación se divide por responsabilidad para evitar una especificación única que
mezcle producto, implementación y estado de ejecución.

## Estructura

| Carpeta | Responsabilidad |
| --- | --- |
| [`product/`](product/PRODUCT_BRIEF.md) | Posicionamiento, audiencias, propuesta de valor y métricas |
| [`prd/`](prd/README.md) | Comportamiento esperado y límites de cada módulo |
| [`architecture/`](architecture/PLAN_TECNICO.md) | Guía técnica y requisitos no funcionales |
| [`delivery/`](delivery/ROADMAP_Y_BACKLOG.md) | Prioridades, fases y decisiones pendientes |
| [`adr/`](adr/README.md) | Decisiones aceptadas que condicionan el trabajo futuro |

## Fuente de verdad

- El **PRD propietario** conserva el alcance y los criterios de aceptación del producto.
- Un **ADR** conserva una decisión de arquitectura o proceso y sus consecuencias.
- Una **épica de GitHub** agrupa un resultado.
- Una **unidad de trabajo de GitHub** representa un PR independiente y demostrable.
- El estado de ejecución vive únicamente en GitHub Issues y milestones.

Si una conversación en un issue cambia el alcance, el PRD debe actualizarse en el mismo
pull request que implementa el cambio.
