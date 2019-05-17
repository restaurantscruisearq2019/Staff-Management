'use strict';
const mongoose = require('../../config/mongoose'),
	  Schema = mongoose.Schema;

const schemas = {

	managerSchema: new Schema({
		idManager: {type: Number}
		userName: {type: String}
		password: {type: String}
		name: {type:String}
		restaurant: {type: String}
	})

	employeeSchema: new Schema({
		idEmployee: {type: Number}
		name: {type: String}
		office: {type: String}
	})

};

module.exports = schemas;