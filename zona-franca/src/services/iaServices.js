// src/services/iaServices.js

export async function obtenerConfiguracionIA() {
  try {
    const respuesta = await fetch('http://localhost:3000/configuracionIA');
    if (!respuesta.ok) throw new Error('No se pudo obtener la configuración');
    return await respuesta.json();
  } catch (error) {
    console.warn('Error cargando configuración:', error);
    return null;
  }
}

export function evaluarSolicitudIA(solicitud, config) {
  let puntaje = 0;
  const justificacion = [];

  // A. Evaluación de Sector Estratégico
  if (config.sectoresPermitidos.includes(solicitud.sector)) {
    puntaje += config.puntosSector;
    justificacion.push(`+${config.puntosSector} pts: Sector prioritario PROCOMER (${solicitud.sector}).`);
  } else {
    justificacion.push(`+0 pts: Sector (${solicitud.sector || 'N/A'}) fuera de la lista prioritaria.`);
  }

  // B. Ubicación Geográfica (Incentivo territorial)
  if (solicitud.ubicacion === 'Fuera de GAMA') {
    puntaje += config.puntosUbicacionFueraGAMA;
    justificacion.push(`+${config.puntosUbicacionFueraGAMA} pts: Proyecto ubicado fuera de GAMA (Desarrollo regional).`);
  } else {
    justificacion.push(`+0 pts: Ubicación dentro de GAMA.`);
  }

  // C. Inversión Proyectada vs Requerida por Ley
  const invMinima = Number(solicitud.inversionMinima) || 
    (solicitud.ubicacion === 'Fuera de GAMA' ? config.umbralInversionFueraGAMA : config.umbralInversionDentroGAMA);
  const invProyectada = Number(solicitud.inversionProyectada) || 0;

  if (invProyectada >= invMinima * 1.5 && invProyectada > 0) {
    puntaje += config.puntosInversionSobresaliente;
    justificacion.push(`+${config.puntosInversionSobresaliente} pts: Inversión supera el mínimo legal por más del 50%.`);
  } else if (invProyectada >= invMinima && invProyectada > 0) {
    puntaje += config.puntosInversionBase;
    justificacion.push(`+${config.puntosInversionBase} pts: Cumple con la inversión mínima de $${invMinima}.`);
  } else {
    justificacion.push(`+0 pts: Inversión no alcanza el umbral legal obligatorio ($${invMinima}).`);
  }

  // D. Generación de Empleo Calificado
  const empleos = Number(solicitud.empleosEsperados) || 0;
  if (empleos >= config.umbralEmpleoAlto) {
    puntaje += config.puntosEmpleoAlto;
    justificacion.push(`+${config.puntosEmpleoAlto} pts: Fuerte impacto en empleo (${empleos} plazas).`);
  } else if (empleos >= config.umbralEmpleoBase) {
    puntaje += config.puntosEmpleoBase;
    justificacion.push(`+${config.puntosEmpleoBase} pts: Cumple cuota mínima de empleo (${empleos} plazas).`);
  } else {
    justificacion.push(`+0 pts: Generación de empleo por debajo de ${config.umbralEmpleoBase} plazas.`);
  }

  // E. Encadenamientos Productivos Locales (Compras a PYMES)
  const comprasLocales = Number(solicitud.comprasLocales) || 0;
  if (comprasLocales >= 30) {
    puntaje += config.puntosEncadenamiento;
    justificacion.push(`+${config.puntosEncadenamiento} pts: Promueve encadenamiento local (>= 30% compras internas).`);
  }

  // F. Sostenibilidad y Medio Ambiente
  if (solicitud.certificacionAmbiental === 'Sí' || solicitud.certificacionAmbiental === true) {
    puntaje += config.puntosSostenibilidad;
    justificacion.push(`+${config.puntosSostenibilidad} pts: Posee certificaciones ambientales/Carbono Neutral.`);
  }

  // Dictamen Final
  let estadoSugerido = 'Rechazada';
  if (puntaje >= config.umbralRecomendada) {
    estadoSugerido = 'Recomendada';
  } else if (puntaje >= config.umbralRevisar) {
    estadoSugerido = 'Revisar';
  }

  return { puntaje, estadoSugerido, justificacion };
}

export async function procesarEvaluacion(idSolicitud) {
  try {
    const [respSol, config] = await Promise.all([
      fetch(`http://localhost:3000/solicitudes/${idSolicitud}`),
      obtenerConfiguracionIA()
    ]);

    if (!respSol.ok) throw new Error('No se encontró la solicitud.');
    const solicitud = await respSol.json();

    const resultadoIA = evaluarSolicitudIA(solicitud, config);

    const respuestaPatch = await fetch(`http://localhost:3000/solicitudes/${idSolicitud}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        evaluacionIA: resultadoIA,
        estado: resultadoIA.estadoSugerido
      })
    });

    if (respuestaPatch.ok) {
      return { success: true, evaluacion: resultadoIA };
    } else {
      return { success: false, mensaje: 'Error guardando en el servidor.' };
    }
  } catch (error) {
    console.error('Error en procesarEvaluacion:', error);
    return { success: false, mensaje: error.message };
  }
}