document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'http://127.0.0.1:3000/solicitudes';

  let solicitudes = [];
  let currentTab = 'todas';
  let currentScoreFilter = 'todos';
  let dateOrderDesc = true;
  let searchQuery = '';
  let selectedSolicitud = null;

  const tableBody = document.getElementById('table-body');
  const totalCountSpan = document.getElementById('total-count');
  const tabs = document.querySelectorAll('.tab-btn');
  const btnScoreDropdown = document.getElementById('btn-score-dropdown');
  const menuScore = document.getElementById('menu-score');
  const btnOrderDate = document.getElementById('btn-order-date');
  const inputSearch = document.getElementById('input-search');

  // Elementos del Drawer
  const sideDrawer = document.getElementById('side-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const btnAprobar = document.getElementById('btn-aprobar');
  const btnRechazar = document.getElementById('btn-rechazar');

  // Helper para parsear cualquier formato de fecha a Timestamp de forma segura
  function parseFecha(fechaStr) {
    if (!fechaStr) return 0;
    const timestamp = Date.parse(fechaStr);
    if (!isNaN(timestamp)) return timestamp;

    const meses = { jan: 0, ene: 0, feb: 1, mar: 2, apr: 3, abr: 3, may: 4, jun: 5, jul: 6, aug: 7, ago: 7, sep: 8, oct: 9, nov: 10, dec: 11, dic: 11 };
    const partes = fechaStr.replace(',', '').split(' ');
    if (partes.length === 3) {
      const dia = parseInt(partes[0], 10);
      const mes = meses[partes[1].toLowerCase().slice(0, 3)] ?? 0;
      const anio = parseInt(partes[2], 10);
      return new Date(anio, mes, dia).getTime();
    }
    return 0;
  }

  async function fetchSolicitudes() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      
      solicitudes = await response.json();
      renderTable();
    } catch (error) {
      console.error('Error al obtener solicitudes:', error);
      if (tableBody) {
        tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding: 24px; color: #e11d48;">Error al conectar con la base de datos (${error.message}).</td></tr>`;
      }
    }
  }

  function getFilteredData() {
    return solicitudes.filter(item => {
      const esPendiente = item.estado === 'pendiente' || !item.estado;

      // 1. Filtro por Pestañas
      if (currentTab === 'pendiente' && !esPendiente) return false;
      if (currentTab === 'aprobada' && esPendiente) return false;

      // 2. Búsqueda por texto
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchEmpresa = item.empresa?.toLowerCase().includes(query);
        const matchId = item.id?.toLowerCase().includes(query);
        const matchSector = item.sector?.toLowerCase().includes(query);
        if (!matchEmpresa && !matchId && !matchSector) return false;
      }

      // 3. Filtro por Score IA
      if (currentScoreFilter === 'alto' && (item.score === null || item.score <= 80)) return false;
      if (currentScoreFilter === 'medio' && (item.score === null || item.score < 50 || item.score > 80)) return false;
      if (currentScoreFilter === 'bajo' && (item.score === null || item.score >= 50)) return false;

      return true;
    }).sort((a, b) => {
      // 4. Ordenamiento por Fechas
      const timeA = parseFecha(a.fecha || a.fechaFormatted);
      const timeB = parseFecha(b.fecha || b.fechaFormatted);

      return dateOrderDesc ? timeB - timeA : timeA - timeB;
    });
  }

  function renderTable() {
    if (!tableBody) return;

    const data = getFilteredData();
    if (totalCountSpan) totalCountSpan.textContent = solicitudes.length;

    if (data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding: 24px;">No se encontraron registros.</td></tr>`;
      return;
    }

    tableBody.innerHTML = data.map(item => {
      const inversionVal = item.inversionMinima || item.inversion || '$0M';

      let scoreHtml = `<div class="score-circle pending">--</div>`;
      if (item.score !== null && item.score !== undefined) {
        let scoreClass = item.score >= 80 ? 'evaluated' : 'medium';
        scoreHtml = `<div class="score-circle ${scoreClass}">${item.score}</div>`;
      }

      const estadoActual = item.estado || 'pendiente';
      const esPendiente = estadoActual === 'pendiente';

      let badgeClass = 'pending';
      let estadoTexto = 'PENDIENTE';

      if (estadoActual === 'aprobada') {
        badgeClass = 'evaluated';
        estadoTexto = 'APROBADA';
      } else if (estadoActual === 'rechazada') {
        badgeClass = 'review';
        estadoTexto = 'RECHAZADA';
      }
      
      let actionHtml = esPendiente 
        ? `<button class="btn-evaluar" onclick="evaluarSolicitud('${item.id}')"><i class="fa-solid fa-wand-magic-sparkles"></i> Evaluar</button>` 
        : `<span class="text-muted text-sm">${estadoTexto}</span>`;

      return `
        <tr>
          <td>
            <div class="font-bold">${item.id}</div>
            <div class="text-muted text-sm">${item.fechaFormatted || item.fecha || 'N/A'}</div>
          </td>
          <td class="company-cell" onclick="openDrawer('${item.id}')">
            <div class="font-bold company-name-link">${item.empresa || 'Empresa Sin Nombre'}</div>
            <span class="badge badge-teal">${item.sector || 'GENERAL'}</span>
          </td>
          <td>
            <div><span class="font-bold">${inversionVal}</span> <span class="text-muted text-sm">Inversión Mínima</span></div>
          </td>
          <td class="text-center">${scoreHtml}</td>
          <td class="text-center">
            <span class="badge-status ${badgeClass}">
              ● ${estadoTexto}
            </span>
          </td>
          <td class="text-center">${actionHtml}</td>
        </tr>
      `;
    }).join('');
  }

  // Genera evaluación IA manteniendo el estado en PENDIENTE
  window.evaluarSolicitud = async function(id) {
    const newScore = Math.floor(Math.random() * (99 - 65 + 1)) + 65;
    const updatedData = {
      score: newScore,
      estado: 'pendiente',
      estadoTexto: 'PENDIENTE'
    };

    try {
      const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) throw new Error('Error al actualizar registro');

      const itemToUpdate = solicitudes.find(s => s.id === id);
      if (itemToUpdate) {
        itemToUpdate.score = newScore;
        itemToUpdate.estado = 'pendiente';
        itemToUpdate.estadoTexto = 'PENDIENTE';
        renderTable();
      }
    } catch (error) {
      console.error('Error al evaluar:', error);
      alert('Error guardando los datos en db.json');
    }
  };

  // Abre el panel lateral al hacer clic sobre la Empresa / Sector
  window.openDrawer = function(id) {
    selectedSolicitud = solicitudes.find(s => s.id === id);
    if (!selectedSolicitud) return;

    document.getElementById('drawer-empresa-nombre').textContent = selectedSolicitud.empresa || 'Empresa Sin Nombre';
    document.getElementById('drawer-empresa-id').textContent = `#${selectedSolicitud.id}`;
    
    const circle = document.getElementById('drawer-score-circle');
    const title = document.getElementById('drawer-score-title');
    const desc = document.getElementById('drawer-score-desc');

    if (selectedSolicitud.score !== null && selectedSolicitud.score !== undefined) {
      circle.textContent = selectedSolicitud.score;
      if (selectedSolicitud.score >= 80) {
        circle.className = 'drawer-circle evaluated';
        title.textContent = 'Recomendación Favorable';
        desc.textContent = 'El modelo predictivo sugiere que este proyecto es altamente apto para pre-aprobación, destacando su impacto en inversión extranjera directa tecnológica.';
      } else {
        circle.className = 'drawer-circle medium';
        title.textContent = 'Recomendación Moderada';
        desc.textContent = 'El modelo predictivo sugiere revisión detallada de requisitos mínimos antes de procedencia.';
      }
    } else {
      circle.textContent = '--';
      circle.className = 'drawer-circle pending';
      title.textContent = 'Sin Evaluación IA';
      desc.textContent = 'Presione el botón "Evaluar" en la tabla para ejecutar el modelo predictivo sobre esta solicitud.';
    }

    document.getElementById('drawer-inversion-text').textContent = `Supera umbral mínimo (${selectedSolicitud.inversionMinima || selectedSolicitud.inversion || '$0M'} proyectado)`;
    document.getElementById('drawer-sector-text').textContent = `Alineado con sector de ${selectedSolicitud.sector || 'General'}.`;

    sideDrawer.classList.add('show');
    drawerOverlay.classList.add('show');
  };

  function closeDrawer() {
    sideDrawer.classList.remove('show');
    drawerOverlay.classList.remove('show');
    selectedSolicitud = null;
  }

  async function actualizarEstadoSolicitud(nuevoEstado) {
    if (!selectedSolicitud) return;

    const updatedData = {
      estado: nuevoEstado,
      estadoTexto: nuevoEstado.toUpperCase()
    };

    try {
      const response = await fetch(`${API_URL}/${encodeURIComponent(selectedSolicitud.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) throw new Error('Error al actualizar el estado');

      selectedSolicitud.estado = nuevoEstado;
      selectedSolicitud.estadoTexto = nuevoEstado.toUpperCase();
      renderTable();
      closeDrawer();
    } catch (error) {
      console.error('Error al actualizar estado:', error);
      alert('Error al actualizar el estado en el servidor.');
    }
  }

  // Event Listeners Drawer
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  if (btnAprobar) {
    btnAprobar.addEventListener('click', () => actualizarEstadoSolicitud('aprobada'));
  }

  if (btnRechazar) {
    btnRechazar.addEventListener('click', () => actualizarEstadoSolicitud('rechazada'));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      const btn = e.currentTarget;
      btn.classList.add('active');
      currentTab = btn.getAttribute('data-filter');
      renderTable();
    });
  });

  if (btnOrderDate) {
    btnOrderDate.addEventListener('click', () => {
      dateOrderDesc = !dateOrderDesc;
      
      const labelDate = document.getElementById('label-date');
      if (labelDate) {
        labelDate.textContent = dateOrderDesc ? 'Fecha más reciente' : 'Fecha más antigua';
      }
      
      renderTable();
    });
  }

  if (btnScoreDropdown && menuScore) {
    btnScoreDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      menuScore.classList.toggle('show');
    });

    document.addEventListener('click', () => menuScore.classList.remove('show'));

    document.querySelectorAll('#menu-score .dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        currentScoreFilter = e.target.getAttribute('data-score');
        document.getElementById('label-score').textContent = e.target.textContent;
        renderTable();
      });
    });
  }

  if (inputSearch) {
    inputSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderTable();
    });
  }

  fetchSolicitudes();
});