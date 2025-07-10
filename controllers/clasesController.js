const Clase = require('../models/clasesModel');

exports.getAll = async (req, res) => {
  try {
    const clases = await Clase.findAll();
    res.json(clases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const clase = await Clase.findByPk(req.params.id);
    if (clase) {
      res.json(clase);
    } else {
      res.status(404).json({ message: 'Clase no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevaClase = await Clase.create(req.body);
    res.status(201).json(nuevaClase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const clase = await Clase.findByPk(req.params.id);
    if (clase) {
      await clase.update(req.body);
      res.json(clase);
    } else {
      res.status(404).json({ message: 'Clase no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const clase = await Clase.findByPk(req.params.id);
    if (clase) {
      await clase.destroy();
      res.json({ message: 'Clase eliminada' });
    } else {
      res.status(404).json({ message: 'Clase no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
