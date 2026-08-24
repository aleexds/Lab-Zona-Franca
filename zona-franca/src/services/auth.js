// src/services/auth.js

/**
 * Cierra la sesión activa borrando los datos de almacenamiento
 * y redirige al portal principal.
 */
export function cerrarSesion() {
  // 1. Limpiar datos de sesión guardados en el navegador
  localStorage.removeItem('usuarioActivo');
  sessionStorage.clear();

  // 2. Redirigir a la página de inicio/login
  window.location.href = './index.html';
}

/**
 * Asigna el evento click a cualquier botón de cerrar sesión presente en el DOM.
 * Debe ejecutarse al cargar la página en las vistas protegidas (admin, analista, etc.).
 */
export function inicializarBotonCerrarSesion() {
  const botonesCerrarSesion = document.querySelectorAll('.btn-logout, #btnLogout, [data-action="logout"]');

  botonesCerrarSesion.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();
      cerrarSesion();
    });
  });
}