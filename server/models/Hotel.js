'use strict';

const db = require('./_db'); // contains all of the logic to connect to our PostgreSQL database and exports the "db"
const Sequelize = require('sequelize');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validations: {
      min: 1.0,
      max: 5.0
    }
  },
  amenities: {
    type: Sequelize.STRING,
  },
});

module.exports = Hotel;
