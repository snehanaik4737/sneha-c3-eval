const User =require("../models/user.model")


const jwt = require("jsonwebtoken");


const generateToken= (user)=>{
    return jwt.sign({user},process.env.SECRET_KEY);
}
const register =async(req,res)=>{


    try {
        
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"email already exist"})

           
        }

        user = await User.create(req.body);

        const token =generateToken(user)
        return res.status(200).send({user,token})
        
    } catch (error) {
        res.status(400).send({message:error.message});
    }
}









mocule.exports=register;
