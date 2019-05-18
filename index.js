const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Manager");
mongoose.connect("mongodb://localhost/Employee");

require("./models/Manager");
require("./models/Employee");

const app = express();

require("./routes/index")(app);
require("./routes/managers")(app);
require("./routes/employees")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);
