const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Leads = sequelize.define('Leads', {
  leads_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_autor: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  fecha_envio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'leads',
  timestamps: false,  // Desactiva createdAt/updatedAt
});

module.exports = Leads;
