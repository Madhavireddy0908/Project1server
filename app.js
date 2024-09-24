let express = require("express");
require("./dbconfig/dbcon");
let cors = require("cors");
let studentRouting = require("./Router/studentRouter");
const empRouting = require("./Router/empRouter");
const signupRouting = require("./Router/signupRouter");
const treatmentRouting = require("./Router/treatmentRouter");
const offerRouting = require("./Router/offerRouter");
const appointmentRouting = require("./Router/appointmentRouter");
const enquiryRouting = require("./Router/enquiryRouter");
const doctorRouting = require("./Router/doctorRouter");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/student", studentRouting);
app.use("/employee", empRouting);
app.use("/signup", signupRouting);
app.use("/treatment", treatmentRouting);
app.use("/offer", offerRouting);
app.use("/appointment", appointmentRouting);
app.use("/enquiry", enquiryRouting);
app.use("/doctor", doctorRouting);

app.listen(4000);