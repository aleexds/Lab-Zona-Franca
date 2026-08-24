// src/js/admin.js

import { obtenerSolicitudes } from '../services/indexServices.js';

document.addEventListener('DOMContentLoaded', async () => {
  // -------------------------------------------------------------
  // 1. Control de Cierre de Sesión (Logout)
  // -------------------------------------------------------------
  const botonesLogout = document.querySelectorAll('.btn-logout, #btnLogout, [data-action="logout"]');

  botonesLogout.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('usuarioActivo');
      localStorage.removeItem('usuarioActivo');
      window.location.href = '../pages/login.html';
    });
  });

  // -------------------------------------------------------------
  // 2. Verificación de Sesión Activa
  // -------------------------------------------------------------
  const usuarioSesion = JSON.parse(sessionStorage.getItem('usuarioActivo'));
  if (usuarioSesion) {
    const elNombre = document.querySelector('.user-name');
    const elRol = document.querySelector('.user-role');
    if (elNombre) elNombre.textContent = usuarioSesion.nombre || 'Administrador';
    if (elRol) elRol.textContent = usuarioSesion.rol ? usuarioSesion.rol.toUpperCase() : 'GERENCIA';
  }

  // -------------------------------------------------------------
  // 3. Carga y Filtros de Datos del Dashboard
  // -------------------------------------------------------------
  const tablaCuerpo = document.getElementById('tabla-admin-cuerpo');
  const inputBusqueda = document.querySelector('.search-box input');
  let solicitudesLocales = [];

  async function cargarDashboard() {
    solicitudesLocales = await obtenerSolicitudes();
    actualizarMetricas(solicitudesLocales);
    renderizarTabla(solicitudesLocales);
  }

  function actualizarMetricas(lista) {
    const total = lista.length;
    const evaluadas = lista.filter(s => s.estado === 'evaluado' || s.score !== null).length;
    const pendientes = lista.filter(s => s.estado === 'pendiente' || !s.estado).length;

    const elTotal = document.getElementById('metric-total');
    const elEvaluadas = document.getElementById('metric-evaluadas');
    const elPendientes = document.getElementById('metric-pendientes');

    if (elTotal) elTotal.textContent = total;
    if (elEvaluadas) elEvaluadas.textContent = evaluadas;
    if (elPendientes) elPendientes.textContent = pendientes;
  }

  function renderizarTabla(lista) {
    if (!tablaCuerpo) return;
    tablaCuerpo.innerHTML = '';

    if (lista.length === 0) {
      tablaCuerpo.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No se encontraron solicitudes.</td></tr>`;
      return;
    }

    lista.forEach((item, index) => {
      const row = document.createElement('tr');
      const scoreVisual = item.score !== null && item.score !== undefined ? `${item.score}/100` : 'N/A';
      const estadoTexto = item.estado ? item.estado.toUpperCase() : 'PENDIENTE';
      const badgeClase = item.estado === 'evaluado' ? 'evaluated' : 'pending';

      row.innerHTML = `
        <td class="font-bold">#${index + 1}</td>
        <td>
          <div class="font-bold">${item.empresa || 'Empresa sin nombre'}</div>
          <div class="text-sm text-muted">${item.sector || 'Sector N/A'}</div>
        </td>
        <td>${item.ubicacion || 'N/A'}</td>
        <td>$${(item.inversionProyectada || 0).toLocaleString()}</td>
        <td><span class="badge-status ${badgeClase}">${estadoTexto}</span></td>
        <td class="font-bold text-center">${scoreVisual}</td>
      `;
      tablaCuerpo.appendChild(row);
    });
  }

  // Buscador en tiempo real
  if (inputBusqueda) {
    inputBusqueda.addEventListener('input', (e) => {
      const termino = e.target.value.toLowerCase();
      const filtradas = solicitudesLocales.filter(s =>
        (s.empresa && s.empresa.toLowerCase().includes(termino)) ||
        (s.sector && s.sector.toLowerCase().includes(termino))
      );
      renderizarTabla(filtradas);
    });
  }

  // Carga inicial
  await cargarDashboard();
});