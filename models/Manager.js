const mongoose = require("mongoose");
const { Schema } = mongoose;

const managerSchema = new Schema({
		userName: {type: String, default:""},
		password: {type: String, default:""},
		name: {type:String, default:""},
		restaurant: {type: String,default:""}
	});

mongoose.model('managers',managerSchema);
