import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import router from './router/userRouter.js';
 
 
const app=express();
config();

const url=process.env.MONGODB_URL
const ur=process.env.ur
 mongoose.connect(ur)
 .then(()=>{
    console.log("Connected to database")
 })
 .catch(err=>{
    console.error(err)
 })

app.listen(3000,()=>{
    console.log('server running on port 3000!!!')
})

//app.use('/api/user', router)