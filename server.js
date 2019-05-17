vconst express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Staff");

require("./models/Staff");

const app = express();

require("./routes/index")(app);
require("./routes/staff")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log("App listening at localhost:" + PORT);
