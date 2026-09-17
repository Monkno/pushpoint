# PRD 01 — Sitio público

## 1. Estado

Propuesta para revisión.

## 2. Objetivo

Crear un sitio público que explique de forma rápida qué problemas resuelve PushPoint, cómo trabaja y por qué su enfoque reduce riesgo, y que conduzca al visitante hacia una solicitud de servicio.

## 3. Alcance del MVP

### Páginas

- `/` — Home.
- `/servicios` — capacidades, situaciones de uso y entregables típicos.
- `/como-trabajamos` — proceso, composición flexible del equipo, calidad y uso responsable de AI.
- `/trabajo` — productos/casos actuales.
- `/contacto` — solicitud de servicio y alternativas de contacto.
- `/privacidad` — tratamiento de datos del formulario.
- página 404 y estados de error.

“Nosotros” puede resolverse como una sección de Home o “Cómo trabajamos” en el MVP. No necesita una página propia hasta contar con contenido diferencial suficiente.

## 4. Navegación global

- Logotipo PushPoint con retorno a Home.
- Servicios.
- Cómo trabajamos.
- Trabajo.
- CTA destacado: **Contanos tu proyecto**.

En móvil, la navegación debe poder operarse por teclado y lector de pantalla, mantener el CTA visible y cerrar el menú de forma predecible.

## 5. Requisitos por página

### Home

Debe incluir, en este orden recomendado:

1. Hero con propuesta de valor, CTA principal y CTA secundario.
2. Situaciones en las que PushPoint puede ayudar: lanzar, evolucionar, estabilizar o sumar capacidad.
3. Cinco capacidades principales.
4. Diferencial de Quality Engineering desde el inicio.
5. Forma de trabajo: equipo senior, pequeño, flexible y multidisciplinario.
6. Productos/casos destacados.
7. Uso de AI con validación humana.
8. CTA final con expectativa de respuesta.

#### Criterios de aceptación

- El visitante puede identificar qué ofrece PushPoint sin desplazarse más allá del primer bloque.
- El CTA principal aparece en hero, navegación y cierre de página.
- Cada capacidad enlaza a su detalle dentro de Servicios.
- La página no depende de animaciones para comprender el contenido.
- Los casos no publican nombres, marcas o métricas sin aprobación explícita.

### Servicios

Debe presentar las cinco capacidades definidas en el brief. Cada una debe responder:

- qué problema atiende;
- en qué situaciones conviene;
- qué puede hacer PushPoint;
- qué resultado o entregable puede esperar el cliente;
- qué disciplinas pueden participar;
- CTA contextual.

Ejemplos de entregables posibles: discovery, PRD, backlog inicial, aplicación web, API, suite automatizada, pipeline de entrega, diagnóstico de estabilidad o plan de mantenimiento. No se deben prometer todos en todos los proyectos.

#### Criterios de aceptación

- Los servicios aparecen agrupados y no como trece ofertas equivalentes.
- Cada bloque usa lenguaje comprensible para una persona no técnica.
- Se distingue claramente Product Definition de desarrollo.
- Quality Engineering tiene el mismo peso visual que Engineering.

### Cómo trabajamos

Debe explicar un proceso adaptable de cinco momentos:

1. Entender el problema y el contexto.
2. Definir alcance, riesgos y criterios de éxito.
3. Construir en incrementos observables.
4. Validar calidad de forma continua.
5. Lanzar, medir, estabilizar y evolucionar.

También debe explicar:

- cómo cambia la composición del equipo según la etapa;
- cómo se toman decisiones y se comunica el avance;
- cómo se incorporan QA, automatización, cloud y delivery;
- cómo se usa AI y dónde se exige validación humana;
- que la modalidad comercial y el alcance se acuerdan después del discovery.

#### Criterios de aceptación

- El proceso no se presenta como rígido ni idéntico para todos los clientes.
- La página expresa ownership y comunicación directa con ejemplos concretos.
- AI se comunica como acelerador y no como reemplazo del equipo.

### Trabajo

Casos iniciales:

- Plataforma web para ofrecer y gestionar servicios de Marketing Digital.
- Aplicación web de gestión para kioscos, almacenes y pequeños comercios: inventario, ventas, gastos y operación diaria.

Cada caso debería usar la estructura: contexto, problema, intervención de PushPoint, capacidades aplicadas y resultado. Si todavía no existen métricas o autorización del cliente, se usarán resultados cualitativos verificables y se indicará que el caso está anonimizado.

#### Criterios de aceptación

- No se inventan métricas, testimonios ni nombres de clientes.
- Cada caso relaciona el trabajo realizado con una capacidad del sitio.
- La ausencia de imágenes de producto no bloquea la publicación; puede usarse una representación visual aprobada.

### Contacto

La página implementará el flujo definido en el PRD 02 y ofrecerá:

- formulario principal;
- correo directo visible;
- tiempo de respuesta esperado, una vez acordado internamente;
- enlace de agenda solo si existe una cuenta y disponibilidad operativa para atenderla.

## 6. Dirección visual

### Personalidad

Moderna, técnica, precisa y cercana. Debe sentirse boutique y senior, no fría ni masiva.

### Paleta conceptual

- Navy blue como base de confianza y profundidad.
- Negro o carbón para texto y superficies de alto contraste.
- Morado como acento para acciones y momentos de énfasis.
- Neutros claros para respiración y legibilidad.

Los valores exactos se definirán y validarán por contraste antes de implementación. No se usará el morado como único indicador de estado.

### Sistema visual

- Tipografía sans serif legible.
- Retícula amplia y composición limpia.
- Bordes, gradientes o iluminación sutiles; evitar el exceso de estética “AI genérica”.
- Iconografía consistente y funcional.
- Motion breve y opcional.
- Componentes con estados hover, focus, active, disabled, loading, success y error.

## 7. Contenido necesario antes de publicar

- Logotipo y variantes autorizadas.
- Dominio y datos legales.
- Correo receptor de contactos.
- Tiempo de respuesta realista.
- Nombre público o anonimización de cada caso.
- Alcance y resultados verificables de los dos productos.
- Links sociales que realmente se mantendrán.
- Texto legal de privacidad adaptado a las jurisdicciones aplicables.

## 8. SEO y compartibilidad

- Título y descripción únicos por página.
- URL canónica y sitemap.
- Metadatos para compartir en redes.
- Datos estructurados de organización y servicios solo cuando el contenido publicado los respalde.
- Jerarquía correcta de encabezados.
- Contenido indexable sin depender de JavaScript en el cliente.
- Página de gracias no indexable si contiene parámetros de campaña o información de una solicitud.

## 9. Accesibilidad

Objetivo: WCAG 2.2 nivel AA en los recorridos principales.

- Navegación completa por teclado.
- Focus visible.
- Contraste suficiente.
- Labels e instrucciones asociadas a campos.
- Errores identificables sin depender solo del color.
- Zonas táctiles adecuadas.
- Zoom y reflow sin pérdida de contenido.
- Respeto por `prefers-reduced-motion` durante la implementación.

## 10. Rendimiento y compatibilidad

- Experiencia prioritaria en móvil y conexiones medias.
- Imágenes optimizadas y carga diferida fuera del primer viewport.
- Fuentes con estrategia que evite saltos de layout.
- Objetivo de Core Web Vitals en rango “good” para el percentil 75 cuando exista tráfico suficiente.
- Soporte para las dos últimas versiones estables de navegadores principales.

## 11. Analítica mínima

Eventos sin contenido personal:

- `cta_project_click`, con ubicación del CTA.
- `service_view`, con categoría.
- `case_view`, con caso.
- `contact_form_start`.
- `contact_form_submit_success`.
- `contact_form_submit_error`, con categoría técnica y sin datos del usuario.
- `direct_email_click`.
- `schedule_call_click`, si se habilita.

La analítica debe respetar consentimiento y normativa aplicable. No debe capturar el texto libre del formulario.

## 12. Fuera de alcance

- CMS editable por usuarios no técnicos.
- Blog.
- Chatbot.
- Área privada.
- Catálogo con precios cerrados.
- Cotización automática.
- Traducción al inglés en el primer release.

## 13. Definition of Done

- Contenidos aprobados por PushPoint.
- Recorrido completo revisado en móvil y desktop.
- Revisión de accesibilidad sin bloqueantes críticos.
- Presupuesto de rendimiento acordado y validado.
- Metadatos y vistas para compartir configurados.
- Analítica verificada sin PII.
- Enlaces, 404 y estados de error probados.
- Privacidad y consentimiento aprobados.
- Solicitud de servicio probada de punta a punta según el PRD 02.
