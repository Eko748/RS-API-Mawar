// models/LowonganKerja.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const LowonganKerja = sequelize.define('LowonganKerja', {
    id_lowongan_kerja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    requirement: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    expire: {
        type: DataTypes.DATE,
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
    delete_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'tbh_lowongan_kerja',
    timestamps: false,
});

module.exports = LowonganKerja;
