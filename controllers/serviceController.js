const ClaseEntrenador = require('../models/serviceModels');

exports.getAllRelations = (req, res) => {
  ClaseEntrenador.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRelationById = (req, res) => {
  ClaseEntrenador.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Relación no encontrada' });
    res.json(result[0]);
  });
};

exports.createRelation = (req, res) => {
  const { clase_id, entrenador_id } = req.body;
  if (!clase_id || !entrenador_id) {
    return res.status(400).json({ error: 'clase_id y entrenador_id son obligatorios' });
  }

  ClaseEntrenador.create({ clase_id, entrenador_id }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Relación creada correctamente', id: result.insertId });
  });
};

exports.updateRelation = (req, res) => {
  const { clase_id, entrenador_id } = req.body;
  ClaseEntrenador.update(req.params.id, { clase_id, entrenador_id }, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Relación actualizada correctamente' });
  });
};

exports.deleteRelation = (req, res) => {
  ClaseEntrenador.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Relación eliminada correctamente' });
  });
};
