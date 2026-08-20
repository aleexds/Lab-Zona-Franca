let rolSeleccionado = 'admin'; // Rol por defecto

// 1. Cambiar estado visual de las pestañas de Rol
function seleccionarRol(rol, elemento) {
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  elemento.classList.add('active');
  
  // Mapeo visual a rol interno
  if (rol === 'Empresa') rolSeleccionado = 'cliente';
  else rolSeleccionado = 'admin'; 
}

// 2. Evento de inicio de sesión
document.getElementById('formLogin').addEventListener('submit', async function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username').value.trim();
  const passwordInput = document.getElementById('password').value.trim();
  const mensajeDiv = document.getElementById('mensajeEstado');

  mensajeDiv.style.color = "blue";
  mensajeDiv.textContent = "Verificando credenciales...";

  try {
    // Consulta asíncrona a db.json
    const response = await fetch(`http://localhost:3001/usuarios?username=${encodeURIComponent(usernameInput)}`);
    
    if (!response.ok) throw new Error("Error de comunicación con el servidor.");

    const usuarios = await response.json();

    // Validar usuario y contraseña
    if (usuarios.length === 0 || usuarios[0].password !== passwordInput) {
      mensajeDiv.style.color = "red";
      mensajeDiv.textContent = "Credenciales incorrectas.";
      return;
    }

    const usuario = usuarios[0];

    // Guardar sesión local
    localStorage.setItem('usuarioSesion', JSON.stringify(usuario));

    mensajeDiv.style.color = "green";
    mensajeDiv.textContent = `¡Bienvenido! Redirigiendo a panel de ${usuario.rol}...`;

    // Redirección según rol obtenido del JSON
    setTimeout(() => {
      if (usuario.rol === 'admin') {
        window.location.href = 'admin-dashboard.html';
      } else {
        window.location.href = 'cliente-dashboard.html';
      }
    }, 1000);

  } catch (error) {
    console.error(error);
    mensajeDiv.style.color = "red";
    mensajeDiv.textContent = "No se pudo conectar con json-server (Puerto 3001).";
  }
});