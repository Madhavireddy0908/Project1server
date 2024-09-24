let express = require("express");
let Appointment = require("../modal/appointmentModal");
let appointmentRouting = express.Router();

appointmentRouting.get("/", async (req,res)=>{
    let appointment = await Appointment.find();
    res.send(appointment);
});

appointmentRouting.post("/", async (req,res)=>{
    let appointment = new Appointment(req.body);
    let result = await appointment.save();
    res.send(result);
});

appointmentRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let appointment = await Appointment.deleteOne({_id:id});
    res.send(appointment);
});

appointmentRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let appointment = await Appointment.updateOne({_id:id},{$set:req.body});
    res.send(appointment);
});

appointmentRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let appointment = await Appointment.findOne({_id:id});
    res.send(appointment);
});

module.exports = appointmentRouting;