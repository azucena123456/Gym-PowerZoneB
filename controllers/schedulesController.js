const Horario = require('../models/schedulesModels');

exports.getAllHorarios = (req, res) => {
  Horario.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getHorarioById = (req, res) => {
  Horario.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Horario no encontrado' });
    res.json(result[0]);
  });
};

exports.createHorario = (req, res) => {
  const horario = req.body;
  const { clase_id, dia_semana, hora_inicio, hora_fin } = horario;

  if (!clase_id || !dia_semana || !hora_inicio || !hora_fin) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  // Validar que dia_semana esté dentro del ENUM permitido
  const diasValidos = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  if (!diasValidos.includes(dia_semana)) {
    return res.status(400).json({ error: 'Día de la semana inválido' });
  }

  Horario.create(horario, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Horario creado correctamente', horarioId: result.insertId });
  });
};

exports.updateHorario = (req, res) => {
  const horario = req.body;
  Horario.update(req.params.id, horario, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Horario actualizado correctamente' });
  });
};

exports.deleteHorario = (req, res) => {
  Horario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Horario eliminado correctamente' });
  });
};
