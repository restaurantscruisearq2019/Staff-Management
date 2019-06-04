const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mongodb:27017/Staff");
//mongoose.connect("mongodb://localhost/Employee");

require("./models/Employee");
require("./models/Manager");

const app = express();

require("./routes/index")(app);
require("./routes/managers")(app);
require("./routes/employees")(app);

const PORT = process.env.PORT || 5002;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);
