const mongoose = require("mongoose");
const { Schema } = mongoose;
const Employee = mongoose.model("employees");

const managerSchema = new Schema({
  userName: { type: String, default: "" },
  password: { type: String, default: "" },
  name: { type: String, default: "" },
  restaurantid: { type: String, default: "" },
  employees: { type: [Schema.Types.ObjectId], ref: Employee, default: [] }
});

mongoose.model("managers", managerSchema);
