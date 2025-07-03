const db = require('./db');

const Clase = {
  getAll: (callback) => {
    db.query('SELECT * FROM clase', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM clase WHERE clase_id = ?', [id], callback);
  },

  create: (clase, callback) => {
    const { nombre_clase, descripcion, precio_clase, imagen_url } = clase;
    db.query(
      'INSERT INTO clase (nombre_clase, descripcion, precio_clase, imagen_url) VALUES (?, ?, ?, ?)',
      [nombre_clase, descripcion, precio_clase, imagen_url],
      callback
    );
  },

  update: (id, clase, callback) => {
    const { nombre_clase, descripcion, precio_clase, imagen_url } = clase;
    db.query(
      'UPDATE clase SET nombre_clase = ?, descripcion = ?, precio_clase = ?, imagen_url = ? WHERE clase_id = ?',
      [nombre_clase, descripcion, precio_clase, imagen_url, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM clase WHERE clase_id = ?', [id], callback);
  }
};

module.exports = Clase;
