const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: { type: String, default: "" },
  office: { type: String, default: "" }
});

mongoose.model("employees", employeeSchema);
