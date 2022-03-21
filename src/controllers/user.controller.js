const express= require("express");
const User = require("../models/user.model");


const { body, validationResult } = require('express-validator');


const router = express.Router();

router.post("/",
body("firstName").not().isEmpty().isLength({ min: 5, max:30 }),
body("lastName").not().isEmpty().isLength({ min: 5, max:30 }),
body("email")
.isEmail()
.custom(async(value)=>{
    const user = await User.findOne({email:value});
    if(user){
        throw new Error("Email is already taken");
    }
    return true;
}),
body("age").not().isEmpty().isNumeric()
.custom((value)=>{
    if(value<1 || value>150){
        throw new Error("Incorrect age provided")
    }
    return true;
}),

async (req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array()})
    }
    const user = await User.create(req.body);
    return res.status(201).send(user);
} 
    catch (error) {
        return res.status(500).send({message:error.message})
    }
}

)


module.exports=router;

