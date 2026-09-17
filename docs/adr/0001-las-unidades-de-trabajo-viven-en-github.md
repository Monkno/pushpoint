# ADR 0001 — Las unidades de trabajo viven en GitHub

- Fecha: 2026-09-17.
- Estado: aceptada.

## Contexto

PushPoint tiene brief, PRD, plan técnico y roadmap versionados. Convertir el roadmap en
otra lista de tareas dentro del repositorio haría que el estado de ejecución se duplicara
y pudiera contradecir a GitHub.

## Decisión

- El repositorio conserva producto, requisitos y decisiones durables.
- Las épicas y unidades ejecutables viven únicamente en GitHub Issues.
- Una épica agrupa un resultado; una unidad es un pull request independiente.
- Las unidades se clasifican como `tipo:slice` o `tipo:tecnica`.
- Toda unidad declara prioridad `P0`, `P1` o `P2` y un `modulo:NN`.
- Los milestones representan versiones, no equipos ni épicas.
- El cuerpo de cada unidad debe ser autocontenido y enlazar su PRD propietario.
- Las dependencias se expresan en la épica y en el cuerpo de la unidad.
- Un cambio de alcance se registra en el PRD propietario, no únicamente en comentarios.

## Consecuencias

- GitHub es la única vista del estado real del trabajo.
- Los documentos no llevan porcentajes ni estados por issue.
- Cada pull request referencia la unidad que resuelve.
- Una unidad que no puede demostrarse o verificarse de forma independiente debe dividirse.
- Las decisiones de producto siguen sujetas a revisión por pull request.

## Alcance de la referencia

Esta convención toma como guía la separación entre documentación durable y trabajo
ejecutable usada en `Monkno/chef`. No adopta sus módulos, arquitectura de dominio,
criterios gastronómicos ni decisiones de implementación.
