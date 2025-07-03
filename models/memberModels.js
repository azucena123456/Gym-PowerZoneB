const db = require('./db');

const Membresia = {
  getAll: (callback) => {
    db.query('SELECT * FROM membresia', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM membresia WHERE membresia_id = ?', [id], callback);
  },

  create: (membresia, callback) => {
    const { tipo, precio_membresia, fecha_expiracion, descripcion } = membresia;
    db.query(
      'INSERT INTO membresia (tipo, precio_membresia, fecha_expiracion, descripcion) VALUES (?, ?, ?, ?)',
      [tipo, precio_membresia, fecha_expiracion, descripcion],
      callback
    );
  },

  update: (id, membresia, callback) => {
    const { tipo, precio_membresia, fecha_expiracion, descripcion } = membresia;
    db.query(
      'UPDATE membresia SET tipo = ?, precio_membresia = ?, fecha_expiracion = ?, descripcion = ? WHERE membresia_id = ?',
      [tipo, precio_membresia, fecha_expiracion, descripcion, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM membresia WHERE membresia_id = ?', [id], callback);
  }
};

module.exports = Membresia;
