const express = require('express');
const router = express.Router();
const leadsController = require('../controllers/leandsController');

router.get('/', leadsController.getAllLeads);
router.get('/:id', leadsController.getLeadById);
router.post('/', leadsController.createLead);
router.put('/:id', leadsController.updateLead);
router.delete('/:id', leadsController.deleteLead);

// routes/leads.routes.js
router.get('/calendly', (req, res) => {
  const { nombre, correo } = req.query;

  if (!nombre || !correo) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  const fecha = new Date().toISOString().split('T')[0];
  const mensaje = 'Reservó una cita vía Calendly';

  db.query(
    'INSERT INTO leads (nombre_autor, mensaje, fecha_envio) VALUES (?, ?, ?)',
    [nombre, mensaje, fecha],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.send('<h3>¡Gracias por agendar! Te esperamos en tu clase 😊</h3>');
    }
  );
});

module.exports = router;
