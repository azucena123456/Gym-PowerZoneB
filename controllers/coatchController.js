const Entrenador = require('../models/coatchModels');

exports.getAllEntrenadores = (req, res) => {
  Entrenador.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getEntrenadorById = (req, res) => {
  Entrenador.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Entrenador no encontrado' });
    res.json(result[0]);
  });
};

exports.createEntrenador = (req, res) => {
  const entrenador = req.body;
  if (!entrenador.nombre_entrenador) {
    return res.status(400).json({ error: 'El nombre del entrenador es obligatorio' });
  }

  Entrenador.create(entrenador, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Entrenador creado correctamente', entrenadorId: result.insertId });
  });
};

exports.updateEntrenador = (req, res) => {
  const entrenador = req.body;
  Entrenador.update(req.params.id, entrenador, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Entrenador actualizado correctamente' });
  });
};

exports.deleteEntrenador = (req, res) => {
  Entrenador.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Entrenador eliminado correctamente' });
  });
};
