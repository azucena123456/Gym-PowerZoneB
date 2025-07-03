const Leads = require('../models/leandsModels');

exports.getAllLeads = (req, res) => {
  Leads.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getLeadById = (req, res) => {
  Leads.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: 'Lead no encontrado' });
    res.json(result[0]);
  });
};

exports.createLead = (req, res) => {
  const lead = req.body;
  if (!lead.nombre_autor || !lead.mensaje || !lead.fecha_envio) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  Leads.create(lead, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Lead creado correctamente', leadId: result.insertId });
  });
};

exports.updateLead = (req, res) => {
  const lead = req.body;
  Leads.update(req.params.id, lead, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Lead actualizado correctamente' });
  });
};

exports.deleteLead = (req, res) => {
  Leads.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Lead eliminado correctamente' });
  });
};
