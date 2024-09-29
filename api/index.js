import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import {router} from './router/userRouter';
 
 
const app=express();
config();

const url=process.env.MONGODB_URL
 mongoose.connect(url)
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