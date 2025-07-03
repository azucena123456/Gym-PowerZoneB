const db = require('./db');

const Horario = {
  getAll: (callback) => {
    db.query('SELECT * FROM horario', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM horario WHERE horario_id = ?', [id], callback);
  },

  create: (horario, callback) => {
    const { clase_id, dia_semana, hora_inicio, hora_fin } = horario;
    db.query(
      'INSERT INTO horario (clase_id, dia_semana, hora_inicio, hora_fin) VALUES (?, ?, ?, ?)',
      [clase_id, dia_semana, hora_inicio, hora_fin],
      callback
    );
  },

  update: (id, horario, callback) => {
    const { clase_id, dia_semana, hora_inicio, hora_fin } = horario;
    db.query(
      'UPDATE horario SET clase_id = ?, dia_semana = ?, hora_inicio = ?, hora_fin = ? WHERE horario_id = ?',
      [clase_id, dia_semana, hora_inicio, hora_fin, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM horario WHERE horario_id = ?', [id], callback);
  }
};

module.exports = Horario;
