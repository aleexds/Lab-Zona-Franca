const API_URL = 'http://localhost:3000/usuarios';

export async function obtenerUsuarioPorUsername(username) {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al conectar con el servidor.');
    }
    const usuarios = await response.json();
    
    // Filtrado exacto dentro de JS
    const usuarioEncontrado = usuarios.find(u => u.username.toLowerCase() === username.toLowerCase());
    return usuarioEncontrado || null;
  } catch (error) {
    console.error('Error en obtenerUsuarioPorUsername:', error);
    throw error;
  }
}