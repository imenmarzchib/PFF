const mongoose=require("mongoose");



const coursSchema= new mongoose.Schema({
   
    image:String,
    title:String,
    description:String,
    longdescription:String,
    link:String,
    categorie:String,
});
const Cours = mongoose.model("cours", coursSchema);
module.exports=Cours;