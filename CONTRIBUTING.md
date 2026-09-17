# Colaborar en PushPoint

PushPoint se entrega mediante unidades pequeñas, revisables y trazables desde GitHub.

## Antes de trabajar

1. Leer el brief, el PRD propietario y los ADR aplicables.
2. Elegir una unidad de GitHub sin bloqueadores abiertos.
3. Crear una rama breve que incluya su identificador, por ejemplo `m02-01-contacto`.
4. No ampliar el alcance del issue sin actualizar primero el PRD correspondiente.

## Unidades de trabajo

Una unidad debe caber en un pull request y poder verificarse de manera independiente.

- `tipo:slice`: entrega una experiencia visible y las operaciones necesarias para que
  funcione de punta a punta.
- `tipo:tecnica`: agrega soporte no visible y se demuestra con pruebas o evidencia
  operativa.

No se mezclan refactors amplios, mejoras opcionales ni otro módulo salvo que sean
indispensables para completar los criterios de aceptación.

## Criterio de terminado para un slice

- Cumple todos los criterios del issue y del PRD propietario.
- Incluye estados normal, vacío, carga, éxito y error aplicables.
- Funciona en móvil y escritorio en las superficies públicas.
- Es operable con teclado, foco visible y mensajes accesibles.
- Las reglas sensibles se verifican en servidor.
- Incluye pruebas proporcionales al riesgo y evidencia visual.
- No registra PII en URLs, analítica, logs ni errores.
- Declara con claridad lo que continúa fuera de alcance.

## Criterio de terminado para una unidad técnica

- Cumple todos los criterios del issue y la decisión técnica aplicable.
- Incluye pruebas que demuestran el comportamiento y los fallos relevantes.
- Agrega migraciones versionadas si cambia el modelo de datos.
- Documenta rollback o forward fix cuando corresponda.
- No expone secretos ni datos reales.
- Incluye observabilidad y runbook cuando incorpora una dependencia operativa.

## Pull requests

El pull request debe indicar:

- issue que resuelve;
- resultado para el usuario o el sistema;
- pasos de verificación manual;
- comandos ejecutados y resultados;
- capturas si cambia una interfaz;
- comportamiento simulado, diferido o fuera de alcance.

Los hallazgos posteriores se registran como issues nuevos. No se amplía silenciosamente
un pull request ya enfocado.
