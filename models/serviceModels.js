const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ClaseEntrenador = sequelize.define('ClaseEntrenador', {
  clase_entrenador_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  clase_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entrenador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'clase_entrenador',
  timestamps: false,
});

module.exports = ClaseEntrenador;
