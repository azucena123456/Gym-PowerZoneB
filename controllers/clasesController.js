const Clase = require('../models/clasesModel');

exports.getAllClases = (req, res) => {
  Clase.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getClaseById = (req, res) => {
  Clase.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Clase no encontrada' });
    res.json(result[0]);
  });
};

exports.createClase = (req, res) => {
  const clase = req.body;
  const { nombre_clase, precio_clase } = clase;

  if (!nombre_clase || precio_clase == null) {
    return res.status(400).json({ error: 'Nombre y precio de la clase son obligatorios' });
  }

  Clase.create(clase, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Clase creada correctamente', claseId: result.insertId });
  });
};

exports.updateClase = (req, res) => {
  const clase = req.body;
  Clase.update(req.params.id, clase, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Clase actualizada correctamente' });
  });
};

exports.deleteClase = (req, res) => {
  Clase.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Clase eliminada correctamente' });
  });
};
