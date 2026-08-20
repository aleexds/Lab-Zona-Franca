async function obtenerSolicitudes() {
try {

    const respuesta = await fetch('http://localhost:3001/solicitudes');
    
    if (!respuesta.ok) throw new Error('Error al consultar las solicitudes');

    const listaSolicitudes = await respuesta.json();
    console.log("Solicitudes desde db.json:", listaSolicitudes);

} catch (error) {
    console.error("No se pudieron cargar los datos:", error);
}
}