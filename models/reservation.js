const mongoose=require("mongoose");



const reservationSchema= new mongoose.Schema({
    user_name:String,
    name:String,
    image:String,
    category:String,
    time:String,
    prix:Number,
   
    description:String,
});
const reservation= mongoose.model("reservation", reservationSchema);
module.exports=reservation;