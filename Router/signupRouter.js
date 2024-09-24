let express = require("express");
let Signup = require("../modal/signupModal");
let signupRouting = express.Router();

signupRouting.post("/", async (req,res)=>{
    let user = new Signup(req.body);
    let result = await user.save();
    res.send(result);
});

signupRouting.post("/login", async (req,res)=>{
    let {email,password} = req.body;
    let user = await Signup.findOne({email: email});
    if(!user){
        res.send("user not found");
    }
    else if(user.password === password){
        res.send("Valid");
    }
    else{
        res.send("Invalid");
    }
});

module.exports = signupRouting;