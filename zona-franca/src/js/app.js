import { obtenerUsuarioPorUsername } from '../services/indexServices.js';

let rolPestañaActiva = 'admin';

window.seleccionarRol = function (rol, elemento) {
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  elemento.classList.add('active');

  if (rol === 'Empresa') {
    rolPestañaActiva = 'cliente';
  } else {
    rolPestañaActiva = 'admin';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('formLogin');
  const mensajeDiv = document.getElementById('mensajeEstado');

  if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();

      const usernameInput = document.getElementById('username').value.trim();
      const passwordInput = document.getElementById('password').value.trim();

      mensajeDiv.style.color = '#004481';
      mensajeDiv.textContent = 'Verificando credenciales...';

      try {
        const usuario = await obtenerUsuarioPorUsername(usernameInput);

        console.log('Usuario obtenido de la DB:', usuario); // Debugger para verificar en consola

        if (!usuario || usuario.password !== passwordInput) {
          mensajeDiv.style.color = '#e53e3e';
          mensajeDiv.textContent = 'Credenciales incorrectas.';
          return;
        }

        localStorage.setItem('usuarioSesion', JSON.stringify(usuario));

        mensajeDiv.style.color = '#38a169';
        mensajeDiv.textContent = `¡Bienvenido! Redirigiendo a panel de ${usuario.rol}...`;

        // REDIRECCIÓN CON RUTA ABSOLUTA LOCAL
        setTimeout(() => {
          if (usuario.rol === 'admin') {
            window.location.assign('./src/pages/admin.html'); // Usar assign con ./ asegura el cambio de ruta
          } else if (usuario.rol === 'cliente') {
            window.location.assign('./src/pages/cliente.html');
          }
        }, 1000);

      } catch (error) {
        mensajeDiv.style.color = '#e53e3e';
        mensajeDiv.textContent = 'Error al conectar con el servidor (Asegúrese que json-server esté corriendo).';
      }
    });
  }
});