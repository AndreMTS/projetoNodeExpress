const Sequelize = require('sequelize');

const sequelize = new Sequelize('update', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;