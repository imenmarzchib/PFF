const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const User=require("../models/User");
const jwt=require("jsonwebtoken");
const{loginRules,registerRules,validation}=require("../middleware/validator");
const isAuth=require("../middleware/passport");
 //router.get("/",(req,res)=>{
         //res.send("heloo");
// })
//register
router.post("/register",registerRules(),validation,async (req,res)=>{
 const{name,lastName,email,password}=req.body;
 try {
    const newUser= new User(req.body);
//check if email exist
const searchUser=await User.findOne({email});
if(searchUser){
    return res.send({msg:"email already exist"})
}

        //hash password
        const salt=10;
        const genSalt= await bcrypt.genSalt(salt);
        const hashedPassword= await bcrypt.hash(password,genSalt);
        newUser.password=hashedPassword
      console.log(hashedPassword);
       newUser.password=hashedPassword;

       //save user
        const result=await newUser.save();
          //generate a token
          const payload={
            _id:result._id,
            name:result.name,
            
        }
        const token=await jwt.sign(payload,process.env.SecretOrKey,{
            expiresIn:333600,
        });
        res.send({newUserToken:result,msg:"user is saved",token:`Bearer ${token}`})
    } catch (error) {
      res.send("can not save the user") ;
      console.log(error)
    }
});
//login

router.post("/login",loginRules(),validation,async(req,res)=>{
    const{email,password}=req.body
    try {
          //fin of the user exist
    const searchedUser=await User.findOne({email});
    //if the email not exist
    if(!searchedUser){
        return res.status(400).send({msg:"bad credential"});
    }
    //password are eqaual
    const match=await bcrypt.compare(password,searchedUser.password);

    if(!match){
        return res.status(400).send({msg:"bad credential"});
    }
    //cree un token
    const payload={
        _id:searchedUser._id,
        name:searchedUser.name,
    }
    const token=await jwt.sign(payload,process.env.SecretOrKey,{
        expiresIn:3600,});
   
    //send the user
        res.status(200).send({user:searchedUser,msg:"success",token:`Bearer ${token}`})
} catch (error) {
    res.status(500).send({msg:"can not get the user"});
}
})
router.get ("/current", isAuth(), (req,res)=> {
   
   res.status(200).send({user:req.user});

}); 

router.get("/",async(req,res)=>{

    try {

        const result=await User.find();
        res.send({user:result,msg:"all users "})
    } catch(error){
       console.log(error);
    }
})

 
router.delete("/:id",async(req,res)=>{

    try {

      const   result=await User.findByIdAndDelete(req.params.id);
        res.send({msg:"user is deleted"})
    } catch(error){
       console.log(error);
    }
}) 
router.put("/:id",async(req,res)=>{

    try {

      const   result=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({msg:"user is updeted"})
    } catch(error){
       console.log(error);
    }
}) 






module.exports=router;