'use strict';

const db = require('./_db'); // contains all of the logic to connect to our PostgreSQL database and exports the "db"
const Sequelize = require('sequelize');


const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  location: { // location (lat, lon float array)
    type: Sequelize.ARRAY(Sequelize.FLOAT),
  }
});

module.exports = Place;
