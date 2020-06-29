'use strict';

const db = require('./_db'); // contains all of the logic to connect to our PostgreSQL database and exports the "db"
const Sequelize = require('sequelize');


const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
  },
  age_range: {
    type: Sequelize.STRING,
  },
});

module.exports = Activity;
