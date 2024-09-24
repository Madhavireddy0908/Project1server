let express = require("express");
let Enquiry = require("../modal/enquiryModal");
let enquiryRouting = express.Router();

enquiryRouting.get("/", async (req,res)=>{
    let enquiry = await Enquiry.find();
    res.send(enquiry);
});

enquiryRouting.post("/", async (req,res)=>{
    let enquiry = new Enquiry(req.body);
    let result = await enquiry.save();
    res.send(result);
});

enquiryRouting.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let enquiry = await Enquiry.deleteOne({_id:id});
    res.send(enquiry);
});

enquiryRouting.put("/:id", async (req,res)=>{
    let id = req.params.id;
    let enquiry = await Enquiry.updateOne({_id:id},{$set:req.body});
    res.send(enquiry);
});

enquiryRouting.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let enquiry = await Enquiry.findOne({_id:id});
    res.send(enquiry);
});

module.exports = enquiryRouting;