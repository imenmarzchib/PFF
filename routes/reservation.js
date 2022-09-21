const express=require("express");
const reservationRouter=express.Router();

const Reservation = require("../models/reservation");
reservationRouter.post("/add",async(req,res)=>{

    try {

        const newreservation=new Reservation(req.body);
        const result=await newreservation.save();
        res.send({reservation:result,msg:"reservation added succsesfully"})
        
    } catch(error){
       console.log(error);
    }
})
reservationRouter.get("/",async(req,res)=>{

    try {

        const result=await Reservation.find();
        res.send({reservation:result,msg:"all reservation "})
    } catch(error){
       console.log(error);
    }
})

 
reservationRouter.delete("/:id",async(req,res)=>{

    try {

      const   result=await Reservation.findByIdAndDelete(req.params.id);
        res.send({msg:"reservation is deleted"})
    } catch(error){
       console.log(error);
    }
})








module.exports=reservationRouter;