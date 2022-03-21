
const mongoose=require("mongoose");


const bookSchema= new mongoose.Schema({
    likes:{type:Number,
        default:0},
   coverImage:{type:String,required:true},
   content:{type:String,required:true},
   publicationId:{type:mongoose.Types.ObjectId,
    ref:"book",
    required:true
},
userId:{type:mongoose.Types.ObjectId,
    ref:"user",
    required:true
},


},{
    versionKey:false,
    timestamps:true
})

const Book = mongoose.model("book",bookSchema);

module.exports=Book;










// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)