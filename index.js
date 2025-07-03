require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/clases', require('./routes/clasesRoutes'));
app.use('/api/entrenadores', require('./routes/coatchRoutes'));
app.use('/api/horarios', require('./routes/scheludesRoutes'));
app.use('/api/leads', require('./routes/leandsRoutes'));
app.use('/api/membresias', require('./routes/memberRoutes'));
app.use('/api/clase_entrenador', require('./routes/serviceRoutes'));

app.get('/', (req, res) => {
  res.send('Backend Gym PowerZone funcionando');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
