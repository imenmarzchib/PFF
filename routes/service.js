const express=require("express");
const serviceRouter=express.Router();

const Service = require("../models/service");
serviceRouter.post("/add",async(req,res)=>{

    try {

        const newService=new Service(req.body);
        const result=await newService.save();
        res.send({service:result,msg:"service added succsesfully"})
        
    } catch(error){
       console.log(error);
    }
})
serviceRouter.get("/",async(req,res)=>{

    try {

        const result=await Service.find();
        res.send({services:result,msg:"all services "})
    } catch(error){
       console.log(error);
    }
})
// serviceRouter.get("/:id",async(req,res)=>{

//     try {

//         const result=await Service.findById(req.params.id);
//         res.send({service:result,msg:"one service "})
//     } catch(error){
//        console.log(error);
//     }
// })
 serviceRouter.put("/:id",async(req,res)=>{

    try {

      const   result=await Service.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({msg:"service is updeted"})
    } catch(error){
       console.log(error);
    }
})
serviceRouter.delete("/:id",async(req,res)=>{

    try {

      const   result=await Service.findByIdAndDelete(req.params.id);
        res.send({msg:"service is deleted"})
    } catch(error){
       console.log(error);
    }
})








module.exports=serviceRouter;