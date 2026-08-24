// src/services/indexServices.js

// ==========================================
// 1. SERVICIOS DE AUTENTICACIÓN / LOGIN
// ==========================================

async function obtenerBaseDatos() {
  try {
    const respuesta = await fetch('../../db.json'); 
    if (!respuesta.ok) {
      throw new Error('No se pudo cargar el archivo db.json');
    }
    return await respuesta.json();
  } catch (error) {
    console.error('Error en indexServices:', error);
    return null;
  }
}

async function autenticarUsuario(correo, password) {
  const db = await obtenerBaseDatos();

  if (!db || !db.usuarios) {
    return { success: false, mensaje: 'Error al conectar con la base de datos.' };
  }

  const usuarioEncontrado = db.usuarios.find(
    u => u.correo.toLowerCase() === correo.toLowerCase() && u.password === password
  );

  if (!usuarioEncontrado) {
    return { success: false, mensaje: 'Correo o contraseña incorrectos.' };
  }

  let redirectUrl = '';
  if (usuarioEncontrado.rol === 'admin') {
    redirectUrl = './admin-dashboard.html'; 
  } else if (usuarioEncontrado.rol === 'analista') {
    redirectUrl = './analista-dashboard.html'; 
  }

  return {
    success: true,
    usuario: {
      nombre: usuarioEncontrado.nombre,
      correo: usuarioEncontrado.correo,
      rol: usuarioEncontrado.rol
    },
    redirectUrl: redirectUrl
  };
}


// ==========================================
// 2. SERVICIOS DE SOLICITUDES (CONEXIÓN A NODE.JS)
// ==========================================

// Enviar una nueva solicitud al servidor Node (Usado en index.html)
async function crearSolicitud(datosFormulario) {
  try {
    const respuesta = await fetch('http://localhost:3000/solicitudes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosFormulario)
    });
    return await respuesta.json();
  } catch (error) {
    console.error('Error enviando solicitud:', error);
    return { success: false, mensaje: 'No se pudo conectar con el servidor.' };
  }
}

// Obtener todas las solicitudes guardadas (Usado en analista-dashboard.html)
async function obtenerSolicitudes() {
  try {
    const respuesta = await fetch('http://localhost:3000/solicitudes');
    return await respuesta.json();
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);
    return [];
  }
}