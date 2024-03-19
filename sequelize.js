const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u778534470_rs_mawar', 'u778534470_rs_mawar', 'RSMawar123', {
  host: 'rs-api-mawar.abdimas.com',
  dialect: 'mysql',
});

module.exports = sequelize;
