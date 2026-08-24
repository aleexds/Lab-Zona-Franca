// src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Manejo del Formulario de Solicitud Zona Franca
  // -------------------------------------------------------------
  const formSolicitud = document.getElementById('form-zona-franca');
  const modal = document.getElementById('modal-solicitud');

  if (formSolicitud) {
    formSolicitud.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopImmediatePropagation(); // Detiene cualquier otra ejecución en cadena

      const btnSubmit = formSolicitud.querySelector('button[type="submit"]');
      if (btnSubmit) btnSubmit.disabled = true;

      const nuevaSolicitud = {
        sector: document.getElementById('sector').value,
        inversionMinima: Number(document.getElementById('inversion-minima').value),
        inversionProyectada: Number(document.getElementById('inversion-proyectada').value),
        empleosEsperados: Number(document.getElementById('empleos').value),
        fecha: new Date().toLocaleDateString('es-CR')
      };

      try {
        const respuesta = await crearSolicitud(nuevaSolicitud);

        if (respuesta && respuesta.success) {
          alert('¡Solicitud registrada correctamente!');
          formSolicitud.reset();
          if (modal) modal.classList.remove('active');
        } else {
          alert(respuesta?.mensaje || 'No se pudo guardar la solicitud.');
        }
      } catch (error) {
        console.error('Error enviando la solicitud:', error);
        alert('No se pudo conectar con el servidor.');
      } finally {
        if (btnSubmit) btnSubmit.disabled = false;
      }
    });
  }

  // -------------------------------------------------------------
  // 2. Control de Apertura y Cierre de la Modal
  // -------------------------------------------------------------
  const btnClose = document.getElementById('modal-close');
  const btnCancel = document.getElementById('modal-cancel');
  const openModalButtons = document.querySelectorAll('.btn-open-modal');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modal) modal.classList.add('active');
  };

  const closeModal = () => {
    if (modal) modal.classList.remove('active');
  };

  openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // -------------------------------------------------------------
  // 3. Manejo del Login de Usuarios
  // -------------------------------------------------------------
  const loginForm = document.querySelector('.login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const correoInput = loginForm.querySelector('input[type="email"]').value.trim();
      const passwordInput = loginForm.querySelector('input[type="password"]').value.trim();

      if (!correoInput || !passwordInput) {
        alert('Por favor llene todos los campos.');
        return;
      }

      const resultado = await autenticarUsuario(correoInput, passwordInput);

      if (resultado.success) {
        sessionStorage.setItem('usuarioActivo', JSON.stringify(resultado.usuario));
        window.location.href = resultado.redirectUrl;
      } else {
        alert(resultado.mensaje);
      }
    });
  }
});