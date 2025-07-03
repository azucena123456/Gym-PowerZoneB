const db = require('./db');

const ClaseEntrenador = {
  getAll: (callback) => {
    db.query('SELECT * FROM clase_entrenador', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM clase_entrenador WHERE clase_entrenador_id = ?', [id], callback);
  },

  create: (relation, callback) => {
    const { clase_id, entrenador_id } = relation;
    db.query(
      'INSERT INTO clase_entrenador (clase_id, entrenador_id) VALUES (?, ?)',
      [clase_id, entrenador_id],
      callback
    );
  },

  update: (id, relation, callback) => {
    const { clase_id, entrenador_id } = relation;
    db.query(
      'UPDATE clase_entrenador SET clase_id = ?, entrenador_id = ? WHERE clase_entrenador_id = ?',
      [clase_id, entrenador_id, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM clase_entrenador WHERE clase_entrenador_id = ?', [id], callback);
  }
};

module.exports = ClaseEntrenador;
