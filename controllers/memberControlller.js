const Membresia = require('../models/memberModels');

exports.getAll = async (req, res) => {
  try {
    const membresias = await Membresia.findAll();
    res.json(membresias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const membresia = await Membresia.findByPk(req.params.id);
    if (membresia) {
      res.json(membresia);
    } else {
      res.status(404).json({ message: 'Membresía no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevaMembresia = await Membresia.create(req.body);
    res.status(201).json(nuevaMembresia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const membresia = await Membresia.findByPk(req.params.id);
    if (membresia) {
      await membresia.update(req.body);
      res.json(membresia);
    } else {
      res.status(404).json({ message: 'Membresía no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const membresia = await Membresia.findByPk(req.params.id);
    if (membresia) {
      await membresia.destroy();
      res.json({ message: 'Membresía eliminada' });
    } else {
      res.status(404).json({ message: 'Membresía no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
