const express=require("express");
const cors=require("cors");
const connectDb=require("./config/dbConnect");
const app=express();
//importing dotenv
require("dotenv").config();
//connect to db
connectDb();
//routes
//convert json to middelware
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"))
app.use("/service",require("./routes/service"))
app.use("/reservation",require("./routes/reservation"))

//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=>{
    err ? console.log(error):console.log(`server is ranning on ${PORT}`)
});