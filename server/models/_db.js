// _db.js
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/tripplanner', {
  logging: false
});

module.exports = db;
