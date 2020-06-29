'use strict';

const db = require('./_db');


const Hotel = require('./Hotel');
const Restaurant = require('./Restaurant');
const Activity = require('./Activity');
const Place = require('./Place');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = { Hotel, Restaurant, Activity, Place, db };
