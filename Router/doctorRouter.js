let express = require("express");
let Doctor = require("../modal/doctorModal");
let doctorRouting = express.Router();

doctorRouting.get("/", async (req,res)=>{
    let doctor = await Doctor.find();
    res.send(doctor);
});

doctorRouting.post("/", async (req,res)=>{
    let doctor = new Doctor(req.body);
    let result = await doctor.save();
    res.send(result);
});

doctorRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let doctor = await Doctor.deleteOne({_id:id});
    res.send(doctor);
});

doctorRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let doctor = await Doctor.updateOne({_id:id},{$set:req.body});
    res.send(doctor);
});

doctorRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let doctor = await Doctor.findOne({_id:id});
    res.send(doctor);
});

module.exports = doctorRouting;