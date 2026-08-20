3. Fase de levantamiento de requerimientos
La fase de levantamiento de requerimientos tiene como propósito comprender detalladamente la problemática actual relacionada con la gestión de solicitudes de instalación y el seguimiento del cumplimiento de las empresas que operan bajo el régimen de zonas francas en Costa Rica.
Para conocer las necesidades del sistema antes de iniciar el desarrollo, se aplicaron cinco técnicas: análisis del enunciado, entrevista simulada, observación del proceso actual, definición de reglas de negocio y elaboración de un glosario del dominio.
3.1 Análisis del enunciado

Mediante el análisis del caso “ZoFranca CR”, se identificaron los principales verbos, sustantivos y conceptos que permiten determinar las funciones, usuarios, datos y necesidades que deberá contemplar la plataforma.
Verbos o acciones identificadas
Entre las principales acciones identificadas en el enunciado se encuentran:
Administrar
Operar
Instalarse
Presentar
Solicitar
Revisar
Leer
Transcribir
Comparar
Cumplir
Responder
Reportar
Consolidar
Detectar
Recibir
Procesar
Pre-clasificar
Generar alertas
Analizar
Registrar
Decidir

Estas acciones permiten identificar varias funcionalidades necesarias para la plataforma, como registrar solicitudes, procesar información, analizar datos, generar alertas y permitir la revisión de un analista.
Sustantivos y elementos identificados







Los principales elementos encontrados fueron:
Empresa
Zona franca
Solicitud
Inversión
Empleos
Sector
Documentos
Analista
Reporte
Cumplimiento
Exportaciones
Hoja de cálculo
Excel
Correo electrónico
Plataforma
Inteligencia artificial
Alertas
Auditoría




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
La inteligencia artificial debe apoyar la pre-clasificación y análisis de la información.
La decisión final debe permanecer bajo responsabilidad de un analista humano.
El sistema debe mantener un historial de las acciones realizadas para facilitar la trazabilidad.
El procesamiento debe realizarse de forma asíncrona para evitar bloquear la interfaz.
La solución debe estar diseñada para permitir futuras ampliaciones.




3.2 Entrevista simulada
Para complementar el análisis del enunciado, se realizó una entrevista simulada a la administración responsable de gestionar las solicitudes y el cumplimiento de las empresas.
Entrevistado: Administración de la zona franca
Entrevistadores: Equipo desarrollador de ZoFranca CR
Tipo de entrevista: Simulada
Objetivo: Identificar necesidades, problemas, reglas y expectativas relacionadas con el proceso.
Pregunta 1. ¿Cómo se reciben actualmente las solicitudes de las empresas?

Respuesta: Actualmente las solicitudes pueden involucrar documentos y comunicaciones por correo electrónico. La información debe ser revisada y posteriormente trasladada manualmente a hojas de cálculo para su análisis y seguimiento.

Pregunta 2. ¿Qué información debe presentar una empresa al solicitar su instalación?

Respuesta: La empresa debe proporcionar información general de identificación, sector al que pertenece, inversión proyectada, cantidad de empleos que espera generar, exportaciones proyectadas y documentación de respaldo legal y fiscal.

Pregunta 3. ¿Quién se encarga de revisar las solicitudes?

Respuesta: Las solicitudes son revisadas por analistas encargados de verificar la información proporcionada y determinar si se cumplen los criterios establecidos.

Pregunta 4. ¿Cuáles son los principales problemas del proceso actual?

Respuesta: Los principales problemas son los tiempos prolongados de revisión, errores de transcripción, información distribuida en diferentes archivos, criterios que pueden variar entre analistas y dificultad para consultar el historial de una solicitud.

Pregunta 5. ¿Qué sucede después de que una empresa es instalada?

Respuesta: La empresa debe cumplir con los compromisos establecidos y presentar periódicamente información que permita comprobar su desempeño, incluyendo aspectos como empleo, inversión y exportaciones.

Pregunta 6. ¿Qué información debe incluir un reporte de cumplimiento?

Respuesta: El reporte debe incluir los resultados reales de la empresa, principalmente la cantidad de empleos generados, inversión realizada y exportaciones, además de cualquier observación o información adicional requerida.

Pregunta 7. ¿Cómo se detectan actualmente los posibles incumplimientos?

Respuesta: Los analistas revisan los reportes y comparan manualmente los resultados reales con los compromisos proyectados. Este proceso puede provocar que algunos casos sean detectados después de un tiempo considerable.

Pregunta 8. ¿Qué función debería cumplir la inteligencia artificial?

Respuesta: La inteligencia artificial debería apoyar al analista realizando una pre-clasificación de las solicitudes, identificando posibles inconsistencias y generando alertas sobre situaciones que podrían requerir una revisión más detallada.

Pregunta 9. ¿La inteligencia artificial puede aprobar o rechazar una solicitud?

Respuesta: No. La inteligencia artificial solamente debe proporcionar una clasificación, recomendación o alerta. La decisión final siempre debe quedar en manos de un analista humano.

Pregunta 10. ¿Qué información debería visualizar el analista?

Respuesta: El analista debería poder consultar los datos de la empresa, información de la solicitud, resultados de la pre-clasificación de IA, alertas, reportes de cumplimiento y el historial de acciones realizadas.

Pregunta 11. ¿Qué características debería tener la nueva plataforma?

Respuesta: Debe ser organizada, fácil de utilizar, rápida, segura y permitir centralizar la información para reducir el trabajo manual y facilitar el seguimiento de los casos.

Pregunta 12. ¿Qué funcionalidades podrían incorporarse en futuras versiones?

Respuesta: Se podrían incorporar nuevas zonas francas, diferentes tipos de reportes, integraciones con sistemas externos, mayores capacidades de inteligencia artificial y herramientas avanzadas para análisis y auditoría.





3.3 Observación del proceso actual
La observación del proceso permitió identificar cómo se gestionan actualmente las solicitudes y los reportes de cumplimiento.
3.3.1 Proceso manual de una solicitud
El proceso actual puede describirse de la siguiente manera:
1.	La empresa prepara la información y documentación necesaria. 
2.	La empresa presenta la solicitud mediante los medios disponibles. 
3.	La administración recibe los documentos. 
4.	Un analista revisa manualmente la información. 
5.	El analista identifica los datos importantes. 
6.	La información es transcrita a una hoja de cálculo. 
7.	Se comparan los datos proporcionados con los criterios establecidos. 
8.	Si existen inconsistencias, el analista realiza una revisión adicional. 
9.	Se registra el resultado del análisis. 
10.	La respuesta se comunica a la empresa, principalmente mediante correo electrónico.
Problemas identificados
Durante la observación se identificaron los siguientes problemas:
•	Alta dependencia de procesos manuales. 
•	Posibilidad de errores de transcripción. 
•	Información distribuida en diferentes archivos. 
•	Tiempo prolongado para procesar las solicitudes. 
•	Posibles diferencias de criterio entre analistas. 
•	Falta de automatización. 
•	Dificultad para consultar el historial. 
•	Baja trazabilidad. 
•	Dificultad para generar alertas de manera oportuna.



3.3.2 Proceso manual de reporte de cumplimiento
El proceso actual para el seguimiento del cumplimiento puede describirse así:
1.	La empresa prepara su reporte periódico. 
2.	Envía el reporte a la administración. 
3.	El analista recibe la información. 
4.	Los datos son revisados manualmente. 
5.	La información se consolida en una hoja de cálculo. 
6.	Se comparan los resultados reales con los compromisos proyectados. 
7.	El analista identifica posibles diferencias. 
8.	Se analiza si las diferencias representan un posible incumplimiento. 
9.	Se registra el resultado. 
10.	Se comunica la situación correspondiente. 
Problemas identificados
•	Comparación manual de datos. 
•	Posibles errores humanos. 
•	Falta de alertas automáticas. 
•	Detección tardía de posibles incumplimientos. 
•	Información distribuida. 
•	Dificultad para realizar auditorías. 
•	Falta de seguimiento centralizado.









3.4 Reglas de negocio
Las reglas de negocio establecen los criterios que deberá considerar el sistema para gestionar solicitudes y reportes de cumplimiento.
Los valores numéricos incluidos como umbrales se consideran parámetros simulados para el prototipo académico y no deben interpretarse como requisitos oficiales del régimen de zonas francas.
ID	Regla de negocio	Descripción
RN-01	Datos obligatorios	Una solicitud debe contener todos los datos requeridos antes de poder ser enviada.
RN-02	Identificación empresarial	Toda empresa debe contar con una identificación jurídica registrada.
RN-03	Información de inversión	La solicitud debe registrar la inversión proyectada de la empresa.
RN-04	Información de empleo	La solicitud debe registrar la cantidad de empleos proyectados.
RN-05	Sector empresarial	Toda solicitud debe indicar el sector al que pertenece la empresa.
RN-06	Documentación	La empresa debe proporcionar la información legal y fiscal requerida.
RN-07	Comparación de cumplimiento	Los reportes deben permitir comparar los resultados reales con los compromisos proyectados.
RN-08	Generación de alertas	El sistema debe generar una alerta cuando detecte una diferencia significativa respecto a los compromisos.
RN-09	Participación de IA	La IA puede realizar una pre-clasificación y generar recomendaciones, pero no puede tomar la decisión final.
RN-10	Decisión humana	La decisión final sobre una solicitud debe ser realizada por un analista.
RN-11	Trazabilidad	El sistema debe registrar las acciones relevantes realizadas sobre cada solicitud.
RN-12	Estados	Cada solicitud debe mantener un estado que permita conocer su etapa de procesamiento.
Parámetros simulados del prototipo
Para efectos de la primera versión del sistema se utilizarán los siguientes valores de prueba:
Criterio	Valor simulado
Inversión mínima	₡30.000.000
Empleos mínimos	50
Umbral de alerta de empleo	Menos del 80 % del compromiso
Umbral de alerta de inversión	Menos del 80 % del compromiso
Umbral de alerta de exportaciones	Menos del 80 % del compromiso
Estos valores podrán ser modificados posteriormente de acuerdo con los requisitos reales que se definan para una implementación productiva.
________________________________________
3.5 Glosario del dominio
A continuación se presentan los principales términos relacionados con el dominio del proyecto.
Término	Definición
Zona Franca	Área delimitada donde operan empresas bajo un régimen especial establecido por la legislación correspondiente.
Régimen de Zona Franca	Conjunto de condiciones, beneficios y obligaciones aplicables a las empresas que operan bajo este régimen.
PROCOMER	Promotora del Comercio Exterior de Costa Rica, institución relacionada con la promoción y gestión de aspectos vinculados al comercio exterior y zonas francas.
Empresa beneficiaria	Empresa que solicita o posee autorización para operar bajo el régimen correspondiente.
Compromiso de inversión	Inversión que una empresa proyecta realizar como parte de los compromisos establecidos.
Empleo proyectado	Cantidad de puestos de trabajo que una empresa espera generar.
Cumplimiento	Verificación de que una empresa está alcanzando los compromisos establecidos.
Reporte de cumplimiento	Información periódica presentada por una empresa para demostrar sus resultados reales.
Preclasificación	Evaluación inicial realizada por el sistema o componente de IA para categorizar una solicitud y facilitar su revisión.
Alerta	Aviso generado por el sistema cuando se detecta una situación que requiere atención o revisión.
________________________________________
3.6 Resultado del levantamiento
A partir de las técnicas utilizadas se concluye que el principal problema del proceso actual es la dependencia de actividades manuales, hojas de cálculo y comunicaciones por correo electrónico. Esto genera riesgos de errores, retrasos, falta de uniformidad en los criterios y poca trazabilidad.
Como respuesta a estas necesidades, ZoFranca CR propone centralizar la gestión de solicitudes y reportes en una plataforma web. El sistema permitirá registrar y consultar información, procesar datos de forma asíncrona, comparar compromisos con resultados reales y utilizar un componente de inteligencia artificial para realizar pre-clasificaciones y generar alertas.
La inteligencia artificial tendrá un papel de apoyo al analista, pero no sustituirá la decisión humana. De esta forma, el sistema automatizará tareas repetitivas y ayudará a identificar casos que requieren atención, manteniendo la responsabilidad de la decisión final en el personal encargado.




