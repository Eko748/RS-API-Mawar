// models/User.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class User extends Model {}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nama_lengkap: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'tbu_user',
    timestamps: false,
  }
);

module.exports = User;
