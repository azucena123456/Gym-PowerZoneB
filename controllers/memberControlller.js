const Membresia = require('../models/memberModels');

exports.getAllMembresias = (req, res) => {
  Membresia.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getMembresiaById = (req, res) => {
  Membresia.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Membresía no encontrada' });
    res.json(result[0]);
  });
};

exports.createMembresia = (req, res) => {
  const membresia = req.body;
  const { tipo, precio_membresia, fecha_expiracion } = membresia;

  if (!tipo || precio_membresia == null || !fecha_expiracion) {
    return res.status(400).json({ error: 'Tipo, precio y fecha de expiración son obligatorios' });
  }

  Membresia.create(membresia, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Membresía creada correctamente', membresiaId: result.insertId });
  });
};

exports.updateMembresia = (req, res) => {
  const membresia = req.body;
  Membresia.update(req.params.id, membresia, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Membresía actualizada correctamente' });
  });
};

exports.deleteMembresia = (req, res) => {
  Membresia.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Membresía eliminada correctamente' });
  });
};
