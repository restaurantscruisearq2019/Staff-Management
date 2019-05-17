const mongoose = require("mongoose");
const { Schema } = mongoose;

const managerSchema: new Schema({
		idManager: {type: Number, default:0}
		userName: {type: String, default:""}
		password: {type: String, default:""}
		name: {type:String, default:""}
		restaurant: {type: String,default:""}
	});

const employeeSchema: new Schema({
		idEmployee: {type: Number, default:0}
		name: {type: String, default:""}
		office: {type: String, default:""}
	})



mongoose.model('managers',managerSchema);
mongoose.model('employees',managerSchema);