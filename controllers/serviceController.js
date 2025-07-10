const ClaseEntrenador = require('../models/serviceModels');

exports.getAllRelations = async (req, res) => {
  try {
    const relaciones = await ClaseEntrenador.findAll();
    res.json(relaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRelationById = async (req, res) => {
  try {
    const relacion = await ClaseEntrenador.findByPk(req.params.id);
    if (relacion) {
      res.json(relacion);
    } else {
      res.status(404).json({ message: 'Relación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRelation = async (req, res) => {
  try {
    const { clase_id, entrenador_id } = req.body;
    if (!clase_id || !entrenador_id) {
      return res.status(400).json({ error: 'clase_id y entrenador_id son obligatorios' });
    }

    const nuevaRelacion = await ClaseEntrenador.create({ clase_id, entrenador_id });
    res.status(201).json(nuevaRelacion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRelation = async (req, res) => {
  try {
    const relacion = await ClaseEntrenador.findByPk(req.params.id);
    if (relacion) {
      await relacion.update(req.body);
      res.json(relacion);
    } else {
      res.status(404).json({ message: 'Relación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRelation = async (req, res) => {
  try {
    const relacion = await ClaseEntrenador.findByPk(req.params.id);
    if (relacion) {
      await relacion.destroy();
      res.json({ message: 'Relación eliminada correctamente' });
    } else {
      res.status(404).json({ message: 'Relación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
