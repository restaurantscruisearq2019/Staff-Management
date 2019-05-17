'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/staff_man');

module.exports = mongoose;
