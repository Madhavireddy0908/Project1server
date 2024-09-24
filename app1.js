let express = require("express");
require("./dbconfig/dbcon");
let cors = require("cors");
let studentRouting = require("./Router/studentRouter1");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/student1", studentRouting);

app.listen(4000);