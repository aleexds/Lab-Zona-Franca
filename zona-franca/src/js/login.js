// src/js/login.js

// src/js/login.js

import { autenticarUsuario } from '../services/indexServices.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form') || document.querySelector('form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const correoInput = loginForm.querySelector('input[type="email"]').value.trim();
      const passwordInput = loginForm.querySelector('input[type="password"]').value.trim();

      if (!correoInput || !passwordInput) {
        alert('Por favor llene todos los campos.');
        return;
      }

      console.log('Intentando autenticar:', correoInput);

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

document.addEventListener('DOMContentLoaded', () => {
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

      console.log('Intentando autenticar:', correoInput);

      // Llamada al servicio
      const resultado = await autenticarUsuario(correoInput, passwordInput);

      if (resultado.success) {
        // Guardar la sesión en el navegador
        sessionStorage.setItem('usuarioActivo', JSON.stringify(resultado.usuario));

        // Redirigir al dashboard correspondiente
        window.location.href = resultado.redirectUrl;
      } else {
        alert(resultado.mensaje);
      }
    });
  }
});