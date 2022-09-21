const express=require("express");
const coursRouter=express.Router();

const cours = require("../models/cours");
coursRouter.post("/add",async(req,res)=>{

    try {

        const newCours=new Cours(req.body);
        const result=await newCours.save();
        res.send({cours:result,msg:"cours added succsesfully"})
        
    } catch(error){
       console.log(error);
    }
})
coursRouter.get("/",async(req,res)=>{

    try {

        const result=await cours.find();
        res.send({cours:result,msg:"all cours "})
    } catch(error){
       console.log(error);
    }
})

coursRouter.put("/:id",async(req,res)=>{

    try {

      const   result=await cours.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({msg:"cours is updeted"})
    } catch(error){
       console.log(error);
    }
})
coursRouter.delete("/:id",async(req,res)=>{

    try {

      const   result=await cours.findByIdAndDelete(req.params.id);
        res.send({msg:"cours is deleted"})
    } catch(error){
       console.log(error);
    }
})








module.exports=coursRouter;