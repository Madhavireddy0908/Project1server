let express = require("express");
let Treatment = require("../modal/treatmentModal");
let treatmentRouting = express.Router();

treatmentRouting.get("/", async (req,res)=>{
    let treatment = await Treatment.find();
    res.send(treatment);
});

treatmentRouting.post("/", async (req,res)=>{
    let treatment = new Treatment(req.body);
    let result = await treatment.save();
    res.send(result);
});

treatmentRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let treatment = await Treatment.deleteOne({_id:id});
    res.send(treatment);
});

treatmentRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let treatment = await Treatment.updateOne({_id:id},{$set:req.body});
    res.send(treatment);
});

treatmentRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let treatment = await Treatment.findOne({_id:id});
    res.send(treatment);
});

module.exports = treatmentRouting;