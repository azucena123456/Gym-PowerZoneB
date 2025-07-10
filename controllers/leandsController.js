const Leads = require('../models/leandsModels');

exports.getAll = async (req, res) => {
  try {
    const leads = await Leads.findAll();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const lead = await Leads.findByPk(req.params.id);
    if (lead) {
      res.json(lead);
    } else {
      res.status(404).json({ message: 'Lead no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevoLead = await Leads.create(req.body);
    res.status(201).json(nuevoLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const lead = await Leads.findByPk(req.params.id);
    if (lead) {
      await lead.update(req.body);
      res.json(lead);
    } else {
      res.status(404).json({ message: 'Lead no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const lead = await Leads.findByPk(req.params.id);
    if (lead) {
      await lead.destroy();
      res.json({ message: 'Lead eliminado' });
    } else {
      res.status(404).json({ message: 'Lead no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
