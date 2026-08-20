DOCUMENTO DE REQUERIMIENTOS — ZOFRANCA CR
1. Introducción y objetivos
1.1 Introducción

En las zonas francas de Costa Rica, la gestión de solicitudes de instalación y el seguimiento del cumplimiento de las empresas puede involucrar procesos manuales, hojas de cálculo y comunicaciones por correo electrónico.

El proceso requiere revisar documentos, registrar información, comparar compromisos con resultados y comunicar las decisiones correspondientes. Esta forma de trabajo puede generar retrasos, errores de transcripción, diferencias de criterio entre analistas y dificultades para mantener una trazabilidad completa.

El proyecto ZoFranca CR propone una plataforma web que permita centralizar y automatizar parte de este proceso. La solución utilizará procesamiento asíncrono mediante JavaScript, un backend simulado con Node.js y json-server, y un componente de inteligencia artificial para realizar una preclasificación de solicitudes y generar alertas.

La inteligencia artificial funcionará como herramienta de apoyo y no tomará la decisión final. La aprobación, modificación o rechazo de una solicitud permanecerá siempre bajo responsabilidad de un analista humano.

1.2 Objetivo general

Diseñar y construir una primera versión funcional de una plataforma web para gestionar solicitudes de instalación y reportes de cumplimiento de empresas de zonas francas, utilizando procesamiento asíncrono en JavaScript, un backend simulado con json-server y un componente de inteligencia artificial que apoye la clasificación y detección de alertas.

1.3 Objetivos específicos
Aplicar técnicas de levantamiento de requerimientos para comprender el problema.
Analizar el proceso manual actual de solicitudes y cumplimiento.
Definir los requerimientos funcionales y no funcionales del sistema.
Validar los requerimientos mediante una IA revisora.
Diseñar los mockups de la plataforma antes de programar la interfaz.
Implementar operaciones asíncronas mediante Promesas, async/await y Promise.all().
Conectar el frontend con un backend simulado mediante Node.js y json-server.
Incorporar un componente de IA para la preclasificación de solicitudes.
Generar alertas automáticas ante posibles incumplimientos.
Mantener la decisión final bajo responsabilidad de un analista humano.
Registrar información suficiente para mantener la trazabilidad.
Trabajar colaborativamente mediante GitHub, ramas y pull requests.
Dar seguimiento al desarrollo mediante un tablero de Trello.
Proponer posibilidades de crecimiento futuro de la plataforma.
2. Descripción del caso
2.1 Caso: ZoFranca CR

El proyecto se desarrolla a partir de la problemática relacionada con la administración de empresas que solicitan instalarse o que ya operan dentro del régimen de zonas francas.

Actualmente, el proceso puede requerir revisar documentos manualmente, transcribir información a hojas de cálculo, comparar compromisos con resultados y enviar respuestas por correo electrónico.

Entre los principales problemas identificados se encuentran:

Procesos lentos.
Errores de transcripción.
Información distribuida.
Criterios inconsistentes.
Detección tardía de incumplimientos.
Falta de alertas automáticas.
Baja trazabilidad.
Dificultad para realizar auditorías.

ZoFranca CR busca centralizar esta información y automatizar tareas repetitivas, manteniendo siempre la supervisión humana.

3. Fase de levantamiento de requerimientos

La fase de levantamiento de requerimientos tiene como propósito comprender detalladamente la problemática relacionada con la gestión de solicitudes de instalación y el seguimiento del cumplimiento de las empresas que operan bajo el régimen de zonas francas.

Para conocer las necesidades del sistema antes de iniciar el desarrollo, se aplicaron cinco técnicas:

Análisis del enunciado.
Entrevista simulada.
Observación del proceso actual.
Definición de reglas de negocio.
Elaboración de un glosario del dominio.
3.1 Análisis del enunciado

Mediante el análisis del caso ZoFranca CR, se identificaron los principales verbos, sustantivos y conceptos que permiten determinar las funciones, usuarios, datos y necesidades que deberá contemplar la plataforma.

Verbos o acciones identificadas
Administrar.
Operar.
Instalarse.
Presentar.
Solicitar.
Revisar.
Leer.
Transcribir.
Comparar.
Cumplir.
Responder.
Reportar.
Consolidar.
Detectar.
Recibir.
Procesar.
Preclasificar.
Generar alertas.
Analizar.
Registrar.
Decidir.

Estas acciones permiten identificar funcionalidades como registrar solicitudes, procesar información, analizar datos, generar alertas y permitir la revisión de un analista.

Sustantivos y elementos identificados
Empresa.
Zona franca.
Solicitud.
Inversión.
Empleos.
Sector.
Documentos.
Analista.
Reporte.
Cumplimiento.
Exportaciones.
Hoja de cálculo.
Excel.
Correo electrónico.
Plataforma.
Inteligencia artificial.
Alertas.
Auditoría.
Hallazgos

A partir del análisis realizado se determinaron los siguientes hallazgos:

El sistema debe permitir registrar información de las empresas.
Las empresas deben poder presentar solicitudes de instalación.
Las solicitudes deben incluir información sobre inversión, empleos, sector y documentación de respaldo.
El sistema debe almacenar y organizar la información recibida.
Se requiere reducir la transcripción manual de datos.
El sistema debe permitir consultar el estado de cada solicitud.
Las empresas deben presentar reportes periódicos de cumplimiento.
El sistema debe comparar los compromisos proyectados con los resultados reales.
Se deben detectar posibles incumplimientos.
La plataforma debe generar alertas cuando se identifiquen situaciones que requieran revisión.
La inteligencia artificial debe apoyar la preclasificación y análisis de la información.
La decisión final debe permanecer bajo responsabilidad de un analista humano.
El sistema debe mantener un historial de las acciones realizadas para facilitar la trazabilidad.
El procesamiento debe realizarse de forma asíncrona para evitar bloquear la interfaz.
La solución debe estar diseñada para permitir futuras ampliaciones.
3.2 Entrevista simulada

Entrevistado: Administración responsable de gestionar solicitudes y cumplimiento.

Entrevistadores: Equipo desarrollador de ZoFranca CR.

Tipo: Entrevista simulada.

Objetivo: Identificar necesidades, problemas, reglas y expectativas relacionadas con el proceso.

Pregunta 1. ¿Cómo se reciben actualmente las solicitudes?

Respuesta: Las solicitudes pueden involucrar documentos y comunicaciones por correo electrónico. La información posteriormente debe ser revisada y trasladada manualmente a hojas de cálculo para su análisis y seguimiento.

Pregunta 2. ¿Qué información debe presentar una empresa?

Respuesta: Debe proporcionar información general de identificación, sector, inversión proyectada, empleos proyectados, exportaciones proyectadas y documentación de respaldo legal y fiscal.

Pregunta 3. ¿Quién revisa las solicitudes?

Respuesta: Las solicitudes son revisadas por analistas encargados de verificar la información proporcionada y determinar si se cumplen los criterios establecidos.

Pregunta 4. ¿Cuáles son los principales problemas?

Respuesta: Los principales problemas son los tiempos prolongados de revisión, errores de transcripción, información distribuida, criterios que pueden variar entre analistas y dificultad para consultar el historial.

Pregunta 5. ¿Qué sucede después de que una empresa es instalada?

Respuesta: La empresa debe cumplir con los compromisos establecidos y presentar periódicamente información sobre empleo, inversión y exportaciones.

Pregunta 6. ¿Qué información debe incluir un reporte?

Respuesta: El reporte debe incluir empleos reales, inversión ejecutada y exportaciones, además de cualquier observación requerida.

Pregunta 7. ¿Cómo se detectan actualmente los incumplimientos?

Respuesta: Los analistas comparan manualmente los resultados reales con los compromisos proyectados. Esto puede provocar que algunos casos sean detectados después de un tiempo considerable.

Pregunta 8. ¿Qué función debe cumplir la IA?

Respuesta: La IA debe apoyar al analista realizando una preclasificación de solicitudes, identificando posibles inconsistencias y generando alertas sobre situaciones que requieran revisión.

Pregunta 9. ¿La IA puede aprobar o rechazar una solicitud?

Respuesta: No. La IA solamente debe proporcionar una clasificación, recomendación o alerta. La decisión final siempre debe quedar en manos de un analista humano.

Pregunta 10. ¿Qué información debe visualizar el analista?

Respuesta: Debe poder consultar los datos de la empresa, la solicitud, el resultado de la IA, las alertas, los reportes de cumplimiento y el historial.

Pregunta 11. ¿Qué características debe tener la plataforma?

Respuesta: Debe permitir centralizar la información, reducir el trabajo manual y facilitar el seguimiento. Estas necesidades se traducen en requisitos verificables de funcionamiento, rendimiento y usabilidad.

Pregunta 12. ¿Qué funcionalidades podrían incorporarse en futuras versiones?

Respuesta: Nuevas zonas francas, diferentes tipos de reportes, integraciones con sistemas externos, mayores capacidades de IA y herramientas avanzadas para análisis y auditoría.

3.3 Observación del proceso actual

La observación permitió identificar cómo se gestionan actualmente las solicitudes y reportes de cumplimiento.

3.3.1 Proceso manual de una solicitud
La empresa prepara la información y documentación necesaria.
La empresa presenta la solicitud mediante los medios disponibles.
La administración recibe los documentos.
Un analista revisa manualmente la información.
El analista identifica los datos importantes.
La información se transcribe a una hoja de cálculo.
Se comparan los datos con los criterios establecidos.
Si existen inconsistencias, el analista realiza una revisión adicional.
Se registra el resultado.
La respuesta se comunica a la empresa.
Problemas identificados
Alta dependencia de procesos manuales.
Posibilidad de errores de transcripción.
Información distribuida.
Tiempo prolongado de procesamiento.
Posibles diferencias de criterio.
Falta de automatización.
Dificultad para consultar el historial.
Baja trazabilidad.
Dificultad para generar alertas oportunamente.
3.3.2 Proceso manual de reporte de cumplimiento
La empresa prepara su reporte periódico.
Envía el reporte a la administración.
El analista recibe la información.
Los datos son revisados manualmente.
La información se consolida en una hoja de cálculo.
Se comparan resultados reales con compromisos proyectados.
El analista identifica diferencias.
Se analiza si representan un posible incumplimiento.
Se registra el resultado.
Se comunica la situación correspondiente.
Problemas identificados
Comparación manual.
Posibles errores humanos.
Falta de alertas automáticas.
Detección tardía.
Información distribuida.
Dificultad para auditorías.
Falta de seguimiento centralizado.
3.4 Reglas de negocio

Los valores numéricos utilizados en este proyecto son parámetros simulados para el prototipo académico y no representan requisitos oficiales del régimen de zonas francas.

ID	Regla	Descripción
RN-01	Datos obligatorios	Una solicitud debe contener todos los datos requeridos antes de poder enviarse.
RN-02	Identificación empresarial	Toda empresa debe contar con una identificación jurídica registrada.
RN-03	Inversión	La solicitud debe registrar la inversión proyectada.
RN-04	Empleo	La solicitud debe registrar la cantidad de empleos proyectados.
RN-05	Sector	Toda solicitud debe indicar el sector empresarial.
RN-06	Documentación	La empresa debe proporcionar la documentación legal y fiscal requerida.
RN-07	Comparación	Los reportes deben compararse con los compromisos originales.
RN-08	Alertas	Se debe generar una alerta cuando el cumplimiento sea inferior al 80 % del compromiso establecido en empleos, inversión o exportaciones.
RN-09	IA	La IA puede realizar preclasificaciones y recomendaciones, pero no tomar la decisión final.
RN-10	Decisión humana	La decisión final debe ser realizada por un analista.
RN-11	Trazabilidad	El sistema debe registrar las acciones relevantes realizadas sobre cada solicitud.
RN-12	Estados	Cada solicitud debe mantener un estado que permita conocer su etapa de procesamiento.
RN-13	Clasificación IA	La clasificación inicial se determinará mediante rangos de puntaje definidos para el prototipo.
Parámetros simulados
Criterio	Valor simulado
Inversión mínima	₡30.000.000
Empleos mínimos	50
Umbral de empleo	Menos del 80 %
Umbral de inversión	Menos del 80 %
Umbral de exportaciones	Menos del 80 %
Rangos simulados de clasificación IA
Puntaje	Clasificación
80–100	Recomendada
50–79	Revisar
0–49	Rechazada

Estos rangos son exclusivamente para el prototipo académico.

Importante: la clasificación generada por IA será únicamente una recomendación inicial y no representará una decisión definitiva.

3.5 Glosario del dominio
Término	Definición
Zona Franca	Área donde operan empresas bajo un régimen especial establecido por la legislación correspondiente.
Régimen de Zona Franca	Conjunto de condiciones, beneficios y obligaciones aplicables a las empresas que operan bajo este régimen.
PROCOMER	Promotora del Comercio Exterior de Costa Rica.
Empresa beneficiaria	Empresa que solicita o posee autorización para operar bajo el régimen correspondiente.
Compromiso de inversión	Inversión que una empresa proyecta realizar como parte de sus compromisos.
Empleo proyectado	Cantidad de puestos de trabajo que una empresa espera generar.
Cumplimiento	Verificación de que una empresa está alcanzando sus compromisos.
Reporte de cumplimiento	Información periódica presentada por una empresa para demostrar sus resultados reales.
Preclasificación	Evaluación inicial realizada por el sistema o IA para categorizar una solicitud.
Alerta	Aviso generado cuando se detecta una situación que requiere atención.
3.6 Resultado del levantamiento

El principal problema identificado es la dependencia de actividades manuales, hojas de cálculo y comunicaciones por correo electrónico.

Esto genera riesgos de errores, retrasos, falta de uniformidad y poca trazabilidad.

Como respuesta, ZoFranca CR propone centralizar la gestión de solicitudes y reportes en una plataforma web que permita registrar información, procesar operaciones de forma asíncrona, comparar compromisos con resultados reales y utilizar IA para preclasificación y generación de alertas.

La IA será una herramienta de apoyo y no sustituirá la decisión humana.

4. Requerimientos del sistema
4.1 Requerimientos funcionales

Los requerimientos funcionales describen las funciones que debe realizar la plataforma.

4.1.1 Gestión de solicitudes de instalación
ID	Requerimiento	Prioridad
RF-01	El sistema permite al administrador registrar una zona franca con nombre, inversión mínima, empleos mínimos y sectores permitidos.	Alta
RF-02	El sistema permite a una empresa registrar y enviar una solicitud con nombre, identificación jurídica, sector, inversión proyectada, empleos proyectados, exportaciones proyectadas y documentos de respaldo.	Alta
RF-03	El sistema guarda y consulta solicitudes de forma asíncrona mediante json-server.	Alta
RF-04	El sistema envía los datos de la solicitud al componente de IA y recibe un puntaje de 0 a 100.	Alta
RF-05	El sistema genera una clasificación inicial según el puntaje obtenido.	Alta
Criterios de aceptación

RF-01: El administrador puede registrar una zona franca indicando nombre, inversión mínima, empleos mínimos y sectores permitidos.

RF-02: El sistema valida los campos obligatorios antes de permitir el envío de una solicitud.

RF-03: La solicitud se guarda mediante una operación asíncrona y permanece disponible después de recargar la página.

RF-04: El componente de IA devuelve un puntaje numérico entre 0 y 100.

RF-05: El sistema clasifica la solicitud utilizando los siguientes rangos:

80–100: Recomendada.
50–79: Revisar.
0–49: Rechazada.
4.1.2 Cumplimiento y reportería
ID	Requerimiento	Prioridad
RF-06	El sistema permite a una empresa instalada enviar un reporte con empleos reales, inversión ejecutada y exportaciones.	Alta
RF-07	El sistema compara los resultados reales con los compromisos originales.	Media
RF-08	El sistema genera alertas cuando un indicador es inferior al 80 % del compromiso establecido.	Alta
RF-09	El sistema permite visualizar un resumen consolidado de cumplimiento.	Media
Criterios de aceptación

RF-06: El formulario permite registrar empleos reales, inversión ejecutada y exportaciones.

RF-07: El sistema muestra para cada indicador el valor comprometido y el valor reportado.

RF-08: Si un indicador es inferior al 80 % del compromiso correspondiente, el sistema genera una alerta visible para el analista.

RF-09: El sistema presenta un resumen con los principales indicadores de cumplimiento.

4.1.3 Inteligencia artificial y procesamiento
ID	Requerimiento	Prioridad
RF-10	El sistema muestra un indicador de carga durante las operaciones asíncronas.	Media
RF-11	El sistema maneja errores de red o datos inválidos y muestra mensajes claros al usuario.	Alta
RF-12	El analista puede confirmar, modificar o rechazar la clasificación sugerida por la IA.	Alta
RF-13	El sistema utiliza Promise.all() cuando existan varias operaciones independientes que puedan procesarse en paralelo.	Alta
Criterios de aceptación

RF-10: Durante una operación asíncrona se muestra un indicador como "Cargando..." o "Procesando...".

RF-11: Cuando ocurre un error, el usuario recibe un mensaje comprensible y la interfaz continúa funcionando.

RF-12: El analista puede aceptar, modificar o rechazar la recomendación generada por la IA.

RF-13: Cuando existan operaciones independientes, estas se ejecutan mediante Promise.all().

4.1.4 Colaboración, trazabilidad y crecimiento
ID	Requerimiento	Prioridad
RF-14	El sistema permite consultar el historial de una empresa, incluyendo solicitudes, reportes, decisiones y fechas.	Media
RF-15	El sistema permite filtrar solicitudes por estado, zona franca, sector y fecha.	Media
RF-16	json-server registra información suficiente para reconstruir el estado de las solicitudes.	Alta
RF-17	La estructura del sistema contempla la incorporación de múltiples zonas francas en futuras versiones.	Baja
RF-18	El sistema contempla un panel con métricas básicas del proceso para futuras versiones.	Baja
Criterios de aceptación

RF-14: El historial muestra las acciones realizadas, el responsable de la acción y la fecha correspondiente.

RF-15: El usuario puede aplicar filtros por estado, zona franca, sector y fecha.

RF-16: Los datos permanecen almacenados en db.json y no dependen exclusivamente de variables del navegador.

RF-17: La documentación explica cómo podrían incorporarse múltiples zonas francas. No es obligatorio implementarlo en esta entrega.

RF-18: La documentación define las métricas que tendría el dashboard. No es obligatorio implementarlo en esta entrega.

4.2 Requerimientos no funcionales
ID	Requerimiento
RNF-01	La interfaz no debe congelarse durante las operaciones asíncronas.
RNF-02	Las operaciones normales deberán mostrar un resultado o error en un máximo de 5 segundos en condiciones normales del entorno local de prueba.
RNF-03	El sistema debe utilizar Promise.all() cuando existan operaciones independientes que puedan ejecutarse en paralelo.
RNF-04	El sistema debe funcionar desde un navegador web sin instalación adicional para el usuario final.
RNF-05	Los errores deben registrarse en consola y comunicarse mediante mensajes claros y no técnicos.
RNF-06	json-server debe poder reiniciarse manteniendo la estructura definida en db.json.
RNF-07	La interfaz debe seguir los mockups aprobados previamente en Stitch.
RNF-08	El historial de commits de GitHub debe reflejar la participación real de ambos integrantes.
RNF-09	La arquitectura debe permitir incorporar nuevas zonas francas y tipos de reportes sin reconstruir completamente la aplicación.
4.3 Priorización
Prioridad alta
RF-01 — Registro de zonas francas.
RF-02 — Registro y envío de solicitudes.
RF-03 — Procesamiento asíncrono.
RF-04 — Preclasificación mediante IA.
RF-05 — Clasificación inicial.
RF-06 — Reportes de cumplimiento.
RF-08 — Alertas de incumplimiento.
RF-11 — Manejo de errores.
RF-12 — Decisión del analista.
RF-13 — Procesamiento paralelo.
RF-16 — Persistencia de datos.
Prioridad media
RF-07 — Comparación de cumplimiento.
RF-09 — Resumen consolidado.
RF-10 — Indicadores de carga.
RF-14 — Historial.
RF-15 — Filtros.
Prioridad baja
RF-17 — Administración de múltiples zonas francas.
RF-18 — Panel de métricas.

Los requerimientos de prioridad baja serán documentados como parte del crecimiento futuro y no serán obligatorios para la primera versión.

4.4 Historias de usuario
US-01 — Registrar zona franca

Como administrador,
quiero registrar una zona franca con sus criterios mínimos,
para establecer los parámetros que utilizará el sistema al evaluar las solicitudes.

RF relacionado: RF-01.

US-02 — Registrar solicitud

Como empresa interesada en instalarse en una zona franca,
quiero registrar y enviar una solicitud con la información requerida,
para que pueda ser evaluada por la administración.

RF relacionados: RF-02, RF-03.

US-03 — Preclasificación mediante IA

Como analista,
quiero recibir una preclasificación generada por IA,
para identificar rápidamente las solicitudes que requieren revisión.

RF relacionados: RF-04, RF-05.

US-04 — Decisión humana

Como analista,
quiero confirmar, modificar o rechazar la recomendación de la IA,
para mantener la decisión final bajo responsabilidad humana.

RF relacionado: RF-12.

US-05 — Reporte de cumplimiento

Como empresa instalada,
quiero enviar un reporte periódico con mis resultados reales,
para demostrar el cumplimiento de mis compromisos.

RF relacionados: RF-06, RF-07.

US-06 — Alertas

Como analista,
quiero recibir alertas cuando una empresa esté por debajo de los umbrales establecidos,
para detectar posibles incumplimientos.

RF relacionado: RF-08.

US-07 — Historial

Como analista,
quiero consultar el historial de una empresa,
para conocer sus solicitudes, reportes y decisiones anteriores.

RF relacionado: RF-14.

US-08 — Filtrar solicitudes

Como analista,
quiero filtrar solicitudes por estado, zona franca, sector y fecha,
para localizar rápidamente los casos que necesito revisar.

RF relacionado: RF-15.

US-09 — Resumen de cumplimiento

Como analista,
quiero visualizar un resumen de cumplimiento,
para conocer rápidamente el estado de las empresas.

RF relacionado: RF-09.

4.5 Criterios de aceptación generales
ID	Criterio
CA-01	El sistema valida los campos obligatorios de una solicitud.
CA-02	Una solicitud válida puede almacenarse en json-server.
CA-03	Los datos permanecen disponibles después de recargar la página.
CA-04	La IA devuelve un puntaje entre 0 y 100.
CA-05	El sistema genera una clasificación según los rangos definidos.
CA-06	Una empresa puede enviar un reporte de cumplimiento.
CA-07	El sistema muestra los valores reales y proyectados para cada indicador.
CA-08	El sistema genera una alerta cuando el cumplimiento es inferior al 80 %.
CA-09	El sistema muestra un resumen de cumplimiento.
CA-10	El sistema muestra un indicador durante operaciones asíncronas.
CA-11	El sistema muestra mensajes claros ante errores.
CA-12	El analista puede modificar la recomendación de la IA.
CA-13	La IA no puede registrar una decisión definitiva.
CA-14	El sistema registra las acciones realizadas, responsable y fecha.
CA-15	El sistema permite filtrar solicitudes.
CA-16	El administrador puede registrar los criterios de una zona franca.
4.6 Matriz de trazabilidad
Historia de usuario	RF	Criterios de aceptación
US-01	RF-01	CA-16
US-02	RF-02, RF-03	CA-01, CA-02, CA-03
US-03	RF-04, RF-05	CA-04, CA-05
US-04	RF-12	CA-12, CA-13
US-05	RF-06, RF-07	CA-06, CA-07
US-06	RF-08	CA-08
US-07	RF-14	CA-14
US-08	RF-15	CA-15
US-09	RF-09	CA-09

Esta matriz permite relacionar cada necesidad del usuario con un requerimiento funcional y con los criterios utilizados para verificar su cumplimiento.

5. Inteligencia artificial

La inteligencia artificial será utilizada como una herramienta de apoyo para la evaluación inicial de las solicitudes y la detección de posibles situaciones de riesgo.

El componente de IA utilizará los datos de la solicitud y los criterios definidos para la zona franca para generar un puntaje de afinidad entre 0 y 100.

La clasificación inicial se realizará de acuerdo con los siguientes rangos:

Puntaje	Resultado
80–100	Recomendada
50–79	Revisar
0–49	Rechazada

La clasificación será únicamente una recomendación inicial.

La IA no tendrá autoridad para aprobar o rechazar definitivamente una solicitud.

El flujo será:

Empresa → Solicitud → Procesamiento → IA → Clasificación/Alerta → Analista → Decisión final

El analista podrá:

Confirmar la recomendación.
Modificar la recomendación.
Rechazar la recomendación.

La decisión definitiva deberá quedar registrada con el responsable y la fecha.

6. Proceso manual vs. proceso automatizado
Proceso actual	ZoFranca CR
Solicitudes mediante correo y documentos	Formulario web
Transcripción manual	Registro digital
Hojas de cálculo dispersas	json-server
Comparación manual	Comparación automática
Revisión manual de cada caso	Preclasificación mediante IA
Detección tardía	Alertas automáticas
Respuestas mediante correo	Estado dentro de la plataforma
Historial disperso	Historial centralizado
Decisión manual sin apoyo	IA como apoyo + decisión humana
Difícil auditoría	Registro de acciones

La automatización busca reducir tareas repetitivas, disminuir errores de transcripción y facilitar la detección de situaciones que requieran atención.

7. Diseño de interfaz

Antes de comenzar la programación de la interfaz se realizarán los mockups correspondientes en Stitch.

Los mockups deberán contemplar como mínimo:

Pantalla principal.
Registro de zona franca.
Registro de solicitud.
Lista de solicitudes.
Detalle de solicitud.
Resultado de IA.
Panel de decisión del analista.
Registro de reporte de cumplimiento.
Alertas.
Historial.

La interfaz implementada deberá respetar los mockups aprobados.

8. Arquitectura y procesamiento

La primera versión utilizará una arquitectura compuesta por:

Frontend
HTML.
CSS.
JavaScript.
Backend simulado
Node.js.
json-server.
db.json.
Procesamiento
Promesas.
async/await.
try/catch.
Promise.all().
Inteligencia artificial
Componente real mediante API o simulación controlada para fines académicos.

Las operaciones de comunicación con el backend y el componente de IA deberán ejecutarse de forma asíncrona para evitar bloquear la interfaz.

9. Colaboración

El desarrollo se realizará en pareja mediante GitHub.

Cada integrante deberá trabajar utilizando ramas asociadas a funcionalidades o tareas específicas.

Ejemplos:

main
│
├── feature/solicitudes
├── feature/ia
├── feature/cumplimiento
└── feature/interfaz

Las funcionalidades terminadas deberán integrarse mediante Pull Requests.

El historial de commits deberá demostrar la participación real de ambos integrantes.

9.1 Trello

El tablero de Trello se utilizará para controlar el estado de las tareas del proyecto.

Las listas serán:

Por definir → En redacción → En validación de IA → Rechazado/Corregir → Aprobado

Cada tarjeta deberá contener:

Nombre de la tarea.
Descripción.
Responsable.
Fecha límite cuando corresponda.
Checklist de actividades.
Evidencia o enlace relacionado, cuando sea necesario.
10. Proyección futura

Aunque la primera versión implementará únicamente una zona franca y un conjunto limitado de reportes, la estructura de ZoFranca CR estará orientada al crecimiento.

Entre las posibles ampliaciones se consideran:

Incorporación de múltiples zonas francas.
Nuevos tipos de reportes.
Integraciones con sistemas externos.
Nuevas métricas.
Mayor automatización de alertas.
Modelos de IA más avanzados.
Herramientas de auditoría.
Reportes avanzados.
Integración con servicios institucionales.

La arquitectura propuesta permitirá que el prototipo pueda evolucionar posteriormente hacia una plataforma de mayor alcance.

11. Conclusión

El levantamiento de requerimientos permitió identificar los principales problemas del proceso manual de gestión de solicitudes y cumplimiento de empresas de zonas francas.

ZoFranca CR propone una solución web que centraliza la información, automatiza tareas repetitivas, utiliza procesamiento asíncrono y emplea inteligencia artificial como herramienta de apoyo.

La IA realizará una preclasificación y generará alertas, pero no sustituirá al analista humano. La decisión final permanecerá bajo responsabilidad del analista.

Los requerimientos funcionales, requerimientos no funcionales, reglas de negocio, historias de usuario y criterios de aceptación establecen una base verificable para el desarrollo de la primera versión del sistema.

La matriz de trazabilidad permite relacionar las necesidades de los usuarios con los requerimientos funcionales y sus criterios de aceptación.

Además, la propuesta de escalabilidad establece una base para incorporar nuevas zonas francas, reportes e integraciones en futuras versiones.
5. Diseño de la solución

El diseño de la solución describe cómo ZoFranca CR transformará el proceso manual actual en un proceso digital y centralizado. La propuesta busca reducir la transcripción manual, mejorar la trazabilidad, facilitar la revisión de solicitudes y detectar oportunamente posibles incumplimientos.

La solución estará compuesta por un frontend web, un backend simulado mediante json-server, procesamiento asíncrono en JavaScript y un componente de inteligencia artificial utilizado como apoyo para la preclasificación de solicitudes.

5.1 Proceso manual — Situación actual

Actualmente, la gestión de solicitudes y reportes de cumplimiento puede depender de correos electrónicos, documentos y hojas de cálculo. Este proceso requiere intervención manual por parte de los analistas y puede generar retrasos, errores y dificultades para mantener la trazabilidad.

El proceso actual se describe de la siguiente manera:

Una empresa interesada prepara y envía su solicitud de instalación mediante correo electrónico junto con los documentos requeridos.
Un analista de la administración recibe los archivos, los abre y revisa manualmente la información proporcionada.
El analista identifica los datos principales de la solicitud y los transcribe manualmente a una hoja de cálculo.
El analista compara la información de la empresa, como inversión y empleos proyectados, con los criterios establecidos para el proceso.
Si existen inconsistencias o información que requiere mayor revisión, el analista realiza un análisis adicional.
El resultado de la revisión se registra y la respuesta correspondiente se comunica a la empresa.
Una vez instalada la empresa, esta presenta periódicamente reportes de cumplimiento con información sobre empleos, inversión y exportaciones.
El analista recibe y revisa los reportes, consolidando nuevamente la información en hojas de cálculo.
Los resultados reales se comparan manualmente con los compromisos originales de la empresa.
Cuando existen diferencias significativas, el analista determina si representan un posible incumplimiento y registra el resultado.
Problemas detectados

A partir de este proceso se identifican los siguientes problemas:

Lentitud en la revisión y procesamiento de solicitudes.
Errores de digitación y transcripción manual.
Información distribuida entre correos, documentos y hojas de cálculo.
Posibles diferencias de criterio entre analistas.
Dificultad para consultar el historial de una solicitud.
Detección tardía de posibles incumplimientos.
Falta de alertas automáticas.
Dificultad para realizar auditorías.
Baja trazabilidad de las acciones realizadas.
Dependencia de tareas manuales repetitivas.
5.2 Proceso automatizado — Situación propuesta

ZoFranca CR propone sustituir las principales actividades manuales por un proceso centralizado mediante una plataforma web.

El proceso automatizado funcionará de la siguiente manera:

La empresa completa una solicitud mediante un formulario web diseñado previamente en Stitch.
El sistema valida que los campos obligatorios de la solicitud estén completos antes de permitir su envío.
La información se envía de forma asíncrona al backend mediante operaciones realizadas con JavaScript y async/await.
El backend simulado mediante json-server almacena la información en db.json, permitiendo que los datos permanezcan disponibles después de recargar la página.
El sistema envía los datos relevantes de la solicitud al componente de inteligencia artificial.
La inteligencia artificial analiza la información proporcionada y devuelve un puntaje de afinidad entre 0 y 100, acompañado de una clasificación inicial y una justificación.
El sistema utiliza los rangos definidos para generar una clasificación inicial:
80–100: Recomendada.
50–79: Revisar.
0–49: Rechazada.
La clasificación generada por la IA se presenta al analista junto con la información de la solicitud para facilitar su revisión.
El analista humano revisa la información y puede confirmar, modificar o rechazar la recomendación generada por la IA.
La decisión final queda registrada en el sistema junto con la fecha y las acciones realizadas, manteniendo la trazabilidad.
Una vez instalada la empresa, esta puede registrar y enviar sus reportes periódicos de cumplimiento mediante la plataforma.
El sistema procesa los reportes de forma asíncrona y compara automáticamente los resultados reales con los compromisos originales.
El sistema verifica los indicadores de empleo, inversión y exportaciones.
Cuando alguno de los indicadores se encuentra por debajo del 80 % del compromiso establecido, el sistema genera una alerta visible para el analista.
El analista puede consultar las alertas, revisar la información correspondiente y registrar las acciones realizadas.
Cuando existan operaciones independientes que puedan ejecutarse simultáneamente, el sistema podrá utilizar Promise.all() para procesarlas en paralelo.
5.3 Flujo general de la solución

El funcionamiento general de ZoFranca CR puede representarse mediante el siguiente flujo:

Empresa

↓

Formulario web

↓

Validación de datos

↓

Backend — json-server

↓

Procesamiento asíncrono

↓

Componente de IA

↓

Puntaje + clasificación + justificación

↓

Analista humano

↓

Decisión final

↓

Registro y trazabilidad

↓

Seguimiento de cumplimiento

↓

Comparación de resultados

↓

Alertas de posibles incumplimientos

5.4 Comparación entre el proceso actual y la solución propuesta
Proceso actual	ZoFranca CR
Solicitudes recibidas por correo	Solicitudes mediante formulario web
Documentos revisados manualmente	Información centralizada en la plataforma
Transcripción a Excel	Registro digital mediante json-server
Comparaciones manuales	Comparaciones automáticas
Criterios variables	Parámetros definidos para el prototipo
Revisión manual de todas las solicitudes	Preclasificación mediante IA
Decisión sin apoyo automatizado	IA como apoyo al analista
Reportes recibidos por correo	Reportes registrados en la plataforma
Comparación manual de cumplimiento	Comparación automática
Detección tardía	Alertas automáticas
Historial distribuido	Historial centralizado
Difícil trazabilidad	Registro de acciones y decisiones
5.5 Participación de la inteligencia artificial

La inteligencia artificial tendrá una función de apoyo, no de decisión definitiva.

Para cada solicitud, el componente de IA recibirá información como:

Sector de la empresa.
Inversión proyectada.
Empleos proyectados.
Exportaciones proyectadas.
Información disponible de la solicitud.

Con estos datos, el componente generará un puntaje simulado entre 0 y 100 y una clasificación inicial.

La IA no podrá aprobar ni rechazar definitivamente una solicitud.

El flujo de decisión será:

Solicitud → IA → Recomendación → Analista → Decisión final

Esto garantiza que la automatización facilite el trabajo del analista sin sustituir su responsabilidad.

5.6 Manejo de alertas

El sistema utilizará los parámetros simulados definidos para el prototipo.

Cuando una empresa presente un reporte de cumplimiento, el sistema comparará los resultados reales con los compromisos registrados originalmente.

Si alguno de los siguientes indicadores es inferior al 80 % del compromiso, se generará una alerta:

Empleos.
Inversión.
Exportaciones.

Por ejemplo:

Compromiso de empleos: 100
Empleos reportados: 70
Cumplimiento: 70 %

Como el resultado es inferior al 80 %, el sistema generará una alerta para revisión del analista.

Las alertas no representarán automáticamente una sanción o rechazo. Su función será identificar casos que requieren revisión humana.

5.7 Procesamiento asíncrono

Las operaciones que impliquen comunicación con el backend o con el componente de inteligencia artificial se realizarán de forma asíncrona.

Se utilizarán:

Promesas.
async/await.
try/catch.
Promise.all() cuando existan operaciones independientes.

Durante las operaciones se mostrará un indicador de estado como:

"Cargando...", "Procesando..." o "Guardando información..."

En caso de producirse un error, el sistema mostrará un mensaje comprensible para el usuario y permitirá continuar utilizando la interfaz.

5.8 Resultado esperado

Con la implementación de ZoFranca CR se espera lograr:

Reducir la transcripción manual de información.
Centralizar solicitudes y reportes.
Facilitar la revisión de los analistas.
Reducir errores de digitación.
Estandarizar los criterios utilizados en el prototipo.
Automatizar la comparación de compromisos y resultados.
Detectar posibles incumplimientos de manera oportuna.
Generar alertas automáticas.
Mantener un historial de acciones y decisiones.
Utilizar la IA como apoyo para priorizar y revisar solicitudes.
Mantener la decisión final bajo responsabilidad humana.

De esta manera, ZoFranca CR permitirá transformar un proceso principalmente manual en un flujo digital, centralizado, verificable y con mayor trazabilidad, manteniendo el alcance definido para el prototipo académico.

 5.3 Rol de la asincronía

La asincronía es fundamental en ZoFranca CR porque permite realizar operaciones de comunicación con el backend y con el componente de inteligencia artificial sin bloquear la interfaz del usuario.

El sistema utilizará los siguientes mecanismos:

Concepto asíncrono	Uso en el sistema
Promesas (Promise)	Encapsular las llamadas al backend mediante json-server y las operaciones realizadas con el componente de IA.
async / await	Permitir escribir de forma clara y secuencial el flujo de evaluación de solicitudes y reportes de cumplimiento.
Promise.all()	Procesar varias solicitudes o reportes independientes en paralelo cuando sea posible, evitando esperar innecesariamente una operación antes de iniciar otra.
try / catch	Capturar y manejar errores relacionados con fallos de red, respuestas inválidas del backend o problemas durante la evaluación mediante IA.
Estados de la interfaz	Mostrar al usuario estados como "Cargando", "Procesando", "Completado" y "Error" durante las operaciones asíncronas. Estos estados deberán estar contemplados en los mockups de Stitch.
Flujo asíncrono general

El procesamiento de una solicitud seguirá, de manera general, el siguiente flujo:

Formulario → fetch() → json-server → Procesamiento IA → Resultado → Actualización de interfaz

Durante este proceso, la interfaz deberá permanecer disponible para el usuario y mostrar el estado actual de la operación.

Por ejemplo:

El usuario envía una solicitud.
El sistema muestra el estado "Procesando...".
La información se guarda en json-server.
El sistema solicita la evaluación del componente de IA.
Se recibe el resultado.
El sistema actualiza la solicitud con el puntaje y la clasificación.
Se muestra el resultado al usuario.
Si ocurre un error, se muestra un mensaje comprensible y se mantiene disponible la interfaz.

La utilización de operaciones asíncronas permitirá que el sistema gestione las comunicaciones con el backend y la IA sin bloquear la interfaz.

5.4 Rol de la inteligencia artificial

La inteligencia artificial será utilizada como herramienta de apoyo para la evaluación inicial de las solicitudes y reportes de cumplimiento.

La IA no sustituirá al analista humano ni tendrá autoridad para aprobar o rechazar definitivamente una solicitud. Su función será generar un puntaje, una clasificación inicial y, cuando corresponda, una justificación o alerta que ayude al analista a tomar una decisión.

El flujo será:

Solicitud → Evaluación IA → Puntaje y justificación → Clasificación inicial → Analista → Decisión final

Para la primera versión del prototipo académico se podrá utilizar uno de los siguientes enfoques:

Opción A — IA real

Se podrá utilizar una API de un modelo de lenguaje que reciba la información de la solicitud o del reporte y devuelva una respuesta estructurada que incluya:

Puntaje de afinidad entre 0 y 100.
Clasificación inicial.
Justificación de la clasificación.
Posibles inconsistencias detectadas.
Alertas que requieran revisión.

La respuesta obtenida deberá ser procesada por el sistema antes de mostrarla al analista.

Opción B — IA simulada

También se podrá implementar una función que simule el comportamiento de un componente de IA.

Esta función deberá:

Obtener los datos de la solicitud desde json-server.
Analizar variables como sector, inversión y empleos proyectados.
Comparar los datos con los criterios definidos para la zona franca.
Calcular un puntaje entre 0 y 100.
Generar una clasificación inicial.
Devolver el resultado dentro de una Promesa (Promise) para simular el tiempo de procesamiento.
Generar una alerta cuando los datos indiquen una posible situación que requiera revisión.

La información utilizada para la evaluación deberá obtenerse desde json-server y no desde un arreglo fijo dentro del código JavaScript.

Clasificación simulada

Para el prototipo se utilizarán los siguientes rangos:

Puntaje	Clasificación
80–100	Recomendada
50–79	Revisar
0–49	Rechazada

Estos rangos son parámetros simulados exclusivamente para el prototipo académico.

Participación del analista

El resultado generado por la IA será una recomendación inicial. El analista podrá:

Confirmar la recomendación.
Modificar la clasificación.
Rechazar la recomendación.
Registrar la decisión final y su justificación.

Por lo tanto, la IA no podrá registrar por sí sola una aprobación o rechazo definitivo.

Esta separación permite aprovechar la automatización sin eliminar la supervisión humana del proceso.

Ejemplo del flujo completo

Empresa
↓
Formulario de solicitud
↓
json-server
↓
Evaluación asíncrona mediante IA
↓
Puntaje + clasificación + justificación
↓
Analista revisa
↓
Decisión final
↓
Registro de la decisión y trazabilidad

⚠️ Corrección clave respecto al texto original

No pongas:

"La IA sustituye la decisión manual..."

Porque contradice tu propio RF-12, donde estableces que el analista puede confirmar, modificar o rechazar la recomendación de IA.

La frase correcta es:

"La IA apoya la decisión del analista mediante una preclasificación, un puntaje, una justificación y alertas, pero no sustituye la decisión humana."

Con estas dos secciones, 5.3 y 5.4 quedan alineadas con tus requerimientos funcionales, reglas de negocio y criterios de aceptación anteriores.