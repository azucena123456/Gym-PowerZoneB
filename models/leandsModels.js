const db = require('./db');

const Leads = {
  getAll: (callback) => {
    db.query('SELECT * FROM leads', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM leads WHERE leads_id = ?', [id], callback);
  },

  create: (lead, callback) => {
    const { nombre_autor, mensaje, fecha_envio } = lead;
    db.query(
      'INSERT INTO leads (nombre_autor, mensaje, fecha_envio) VALUES (?, ?, ?)',
      [nombre_autor, mensaje, fecha_envio],
      callback
    );
  },

  update: (id, lead, callback) => {
    const { nombre_autor, mensaje, fecha_envio } = lead;
    db.query(
      'UPDATE leads SET nombre_autor = ?, mensaje = ?, fecha_envio = ? WHERE leads_id = ?',
      [nombre_autor, mensaje, fecha_envio, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM leads WHERE leads_id = ?', [id], callback);
  }
};

module.exports = Leads;
