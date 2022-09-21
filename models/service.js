const mongoose=require("mongoose");



const serviceSchema= new mongoose.Schema({
    name:String,
    image:String,
    category:String,
    time:String,
    prix:String,
   
    description:String,
});
const Service = mongoose.model("service", serviceSchema);
module.exports=Service;