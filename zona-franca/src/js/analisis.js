// src/js/analisis.js

document.addEventListener('DOMContentLoaded', async () => {
  const tablaBody = document.getElementById('tabla-solicitudes-body');

  if (tablaBody) {
    // 1. Obtener las solicitudes del servidor Node.js
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

    // 2. Insertar cada fila en la tabla con Score IA en 0
    solicitudes.forEach((sol) => {
      const inicialEmpresa = sol.sector ? sol.sector.charAt(0).toUpperCase() : 'S';

      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td class="font-bold">
          #ZF-${sol.id.toString().slice(-6)}
          <span class="table-subtext">${sol.fecha || 'Reciente'}</span>
        </td>
        <td>
          <div class="company-cell">
            <div class="company-avatar avatar-teal">${inicialEmpresa}</div>
            <span class="company-name">Sector ${sol.sector}</span>
          </div>
        </td>
        <td>
          <span class="procedure-tag">
            <i class="fa-solid fa-building"></i> Inversión $${sol.inversionProyectada}
          </span>
        </td>
        <td class="text-center">
          <div class="score-circle score-low">
            <span>0</span>
          </div>
        </td>
      `;

      tablaBody.appendChild(fila);
    });
  }
});