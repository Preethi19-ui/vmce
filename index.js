//import part all the packages should be imported here
import express from "express";
import cors from "cors";
import productRoutes from "./Routes/route.js";

import dotenv from "dotenv"
import connectDb from "./Config/db.js";
dotenv.config();
//using express
const app = express();
connectDb();
//default middleware
app.use(express.json());
app.use(cors());
//dummy route for cannot get
app.get("/",(req,res)=>{
  res.send("Welcome to our backend 😍")
})

//original api
app.use("/api/products", productRoutes);

//initalizing port and starting the server
const port = 5000;
app.listen(port,()=>{
    console.log(`server started at ${port} and running`);
    
})