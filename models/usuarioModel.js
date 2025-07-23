const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuarios', {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  ultima_conexion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  direccion_envio: {
    type: DataTypes.TEXT,
  },
  telefono: {
    type: DataTypes.STRING(20),
  }
}, {
  timestamps: false,
});

module.exports = Usuario;
