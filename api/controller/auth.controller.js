import User from "../model/user.model.js"

const signup=async(req,res)=>{
    try{
     const {name,email,password}=req.body
     const data=new User({name:name,email:email,password:password})
      await data.save()
      res.status(201).json({"message":"user created sucessfully"})
    }catch(error)
    {
        res.status(401).json({
            message:error.message
        })
    }
}

export default signup;