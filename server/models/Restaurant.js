'use strict';

const db = require('./_db'); // contains all of the logic to connect to our PostgreSQL database and exports the "db"
const Sequelize = require('sequelize');


const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
    validations: {
      min: 1,
      max: 5
    }
  },
});

module.exports = Restaurant;
