'use strict';
const mongoose = require('../../config/mongoose'),
 	  managerSchema = require('./schemas').managerSchema,
 	  employeeSchema = require('./schemas').employeeSchema;

const models = {

Manager: mongoose.model('manager', managerSchema)
Employee: mongoose.model('employee', employeeSchema)

};

module.exports = models;