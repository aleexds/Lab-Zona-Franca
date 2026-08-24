// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DB_PATH = path.join(__dirname, 'db.json');

// Función auxiliar para leer el JSON
const leerDB = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

// Función auxiliar para escribir en el JSON
const escribirDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');

const server = http.createServer((req, res) => {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- ENDPOINT: CREAR SOLICITUD (POST) ---
  if (req.url === '/api/solicitudes' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());

    req.on('end', () => {
      try {
        const nuevaSolicitud = JSON.parse(body);
        const db = leerDB();

        // Asignamos metadatos a la solicitud
        nuevaSolicitud.id = Date.now();
        nuevaSolicitud.fecha = new Date().toLocaleDateString('es-CR');
        nuevaSolicitud.estado = 'Pendiente';

        // Guardar en el arreglo de solicitudes del db.json
        db.solicitudes.push(nuevaSolicitud);
        escribirDB(db);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, mensaje: 'Solicitud guardada con éxito' }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, mensaje: 'Error al procesar los datos' }));
      }
    });
  }

  // --- ENDPOINT: OBTENER SOLICITUDES PARA EL ANALISTA (GET) ---
  else if (req.url === '/api/solicitudes' && req.method === 'GET') {
    const db = leerDB();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db.solicitudes || []));
  } 

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: 'Ruta no encontrada' }));
  }
});

server.listen(PORT, () => console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`));