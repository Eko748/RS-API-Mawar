const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('erp_rs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
