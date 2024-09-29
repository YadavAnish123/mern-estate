import User from "../model/user.model.js"
 import bcryptjs from 'bcryptjs'

const signup=async(req,res,next)=>{
    try{
     const {name,email,password}=req.body
     const hashpassword=bcryptjs.hashSync(password,10)
     const data=new User({name:name,email:email,password:hashpassword})
     
      await data.save()
      res.status(201).json({"message":"user created sucessfully"})
    }catch(error)
    {
        next(error)
    }
}

export default signup;