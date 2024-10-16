import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {errorHandler} from '../utils/error.js'; 
export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashpassword = bcryptjs.hashSync(password, 10);
    const data = new User({ name: name, email: email, password: hashpassword });

    await data.save();
    res.status(201).json({ message: "user created sucessfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async(req, res, next) => {
  const { email, password } = req.body;
  try {
    const validuser = await User.findOne({ email });
    
    if (!validuser) return next(errorHandler(404, "user not find"));

    const validpassword = bcryptjs.compareSync(password, validuser.password);

    if (!validpassword) return next(errorHandler(404, "worng credentials"));

    const token=jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);

   const {password:pass,...rest}=validuser._doc
    res
    .cookie("access_token",token,{httpOnly:true})
    .status(200)
    .json(rest)

  } catch (error) {
    next(error)
  }
};

export const google=async(req, res, next)=>{
       const {email, name, photo}=req.body
        
       try{

         const user= await User.findOne({email})
         if(user)
         {
          const token=jwt.sign({id:user._id}, process.env.JWT_SECRET)
          const {password:pass, ...rest}=user._doc
          res
          .cookie("access_token",token,{httpOnly:true})
          .status(200)
          .json(rest)
           
         }else{
          const generatePassword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
          const hashedPassword=bcryptjs.hashSync(generatePassword,10);
          const newUser=new User({name:name.split(" ").join("").toLowerCase()+Math.random().toString(36).slice(-4),email:req.body.email,password:hashedPassword,avatar:photo})
            await newUser.save();
            const token=jwt.sign({id:user._id}, process.env.JWT_SECRET)
            const {password:pass, ...rest}=user._doc
            res
            .cookie("access_token",token,{httpOnly:true})
            .status(200)
            .json(rest)

             
         }
       }catch(error)
       {
        next(error)
       }
 }  
 
 
 

