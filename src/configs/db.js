const mongoose= require("mongoose");


const connect =()=>{
    return mongoose.connect("mongodb+srv://SnehaNaik:sneha12347@cluster0.1cxuc.mongodb.net/eval-c3?retryWrites=true&w=majority")
}

module.exports=connect;