// src/js/analisis.js

import { inicializarBotonCerrarSesion } from './services/auth.js';

import { obtenerSolicitudes } from '../services/indexServices.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderizarTabla();
});

async function renderizarTabla() {
  const tablaBody = document.getElementById('tabla-solicitudes-body');
  if (!tablaBody) return;

  // 1. Obtener las solicitudes sincronizadas del servidor
  const solicitudes = await obtenerSolicitudes();

  tablaBody.innerHTML = '';

  if (!solicitudes || solicitudes.length === 0) {
    tablaBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 2rem; color: #666;">
          No hay solicitudes registradas actualmente.
        </td>
      </tr>
    `;
    return;
  }

  // 2. Tomar únicamente las últimas 4 solicitudes más recientes
  const ultimasSolicitudes = solicitudes.slice().reverse().slice(0, 4);

  // 3. Insertar cada fila en la tabla
  ultimasSolicitudes.forEach((sol) => {
    const empresaNombre = sol.empresa || `Sector ${sol.sector || 'General'}`;
    const inicialEmpresa = empresaNombre.charAt(0).toUpperCase();
    
    // Obtener puntaje de la IA asignado desde solicitudes.html (score o evaluacionIA.puntaje)
    let puntajeIA = '--';
    let scoreClass = 'score-low';

    if (sol.score !== null && sol.score !== undefined) {
      puntajeIA = sol.score;
      scoreClass = sol.score >= 80 ? 'score-high' : 'score-medium';
    } else if (sol.evaluacionIA && sol.evaluacionIA.puntaje) {
      puntajeIA = sol.evaluacionIA.puntaje;
      scoreClass = puntajeIA >= 75 ? 'score-high' : 'score-medium';
    }

    const inversionText = sol.inversionMinima || sol.inversion || (sol.inversionProyectada ? `$${sol.inversionProyectada}` : '$0M');
    const idFormatted = sol.id.toString().startsWith('#') ? sol.id : `#ZF-${sol.id.toString().slice(-6)}`;

    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td class="font-bold">
        ${idFormatted}
        <span class="table-subtext">${sol.fechaFormatted || sol.fecha || 'Reciente'}</span>
      </td>
      <td>
        <div class="company-cell">
          <div class="company-avatar avatar-teal">${inicialEmpresa}</div>
          <span class="company-name">${empresaNombre}</span>
        </div>
      </td>
      <td>
        <span class="procedure-tag">
          <i class="fa-solid fa-building"></i> Inversión ${inversionText}
        </span>
      </td>
      <td class="text-center">
        <div class="score-circle ${scoreClass}">
          <span>${puntajeIA}</span>
        </div>
      </td>
    `;

    tablaBody.appendChild(fila);
  });

  document.addEventListener('DOMContentLoaded', () => {
  inicializarBotonCerrarSesion();
});
}