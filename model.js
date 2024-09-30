const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
Title:String,
Content:String,
CreatedBy:String,
Likes:Number,
Comments:Number
});

const blogSchema=mongoose.model('blogdata',schema);




//Write missing code here
module.exports=blogSchema;
