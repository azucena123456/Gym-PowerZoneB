const db = require('./db');

const Entrenador = {
  getAll: (callback) => {
    db.query('SELECT * FROM entrenador', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM entrenador WHERE entrenador_id = ?', [id], callback);
  },

  create: (entrenador, callback) => {
    const { nombre_entrenador, especialidad, foto_url, contacto_entrenador } = entrenador;
    db.query(
      'INSERT INTO entrenador (nombre_entrenador, especialidad, foto_url, contacto_entrenador) VALUES (?, ?, ?, ?)',
      [nombre_entrenador, especialidad, foto_url, contacto_entrenador],
      callback
    );
  },

  update: (id, entrenador, callback) => {
    const { nombre_entrenador, especialidad, foto_url, contacto_entrenador } = entrenador;
    db.query(
      'UPDATE entrenador SET nombre_entrenador = ?, especialidad = ?, foto_url = ?, contacto_entrenador = ? WHERE entrenador_id = ?',
      [nombre_entrenador, especialidad, foto_url, contacto_entrenador, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM entrenador WHERE entrenador_id = ?', [id], callback);
  }
};

module.exports = Entrenador;
