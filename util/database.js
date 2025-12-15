const Sequelize = require('sequelize');

const sequelize = new Sequelize('node learn', 'root', 'Shiv#1707', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
