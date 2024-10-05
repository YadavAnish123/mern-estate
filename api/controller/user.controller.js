import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import User from "../model/user.model.js"

export const test=(req,res)=>{
    res.json({
        "name":"anishyadav234"
    })
}
export const updateUser=async(req,res,next)=>{
    if(req.user.id!==req.params.id) return next(errorHandler(401,'Unauthorized'))
    
    try{
        if(req.body.password)
        {
            req.body.password=bcryptjs.hashSync(req.body.password,10)

        }
        const updateUser=await User.findByIdAndUpdate(req.params.id,{
            $set:{
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar
    ,
            }
        },{new:true})
        const {password, ...rest}=updateUser._doc
        res.status(200).json(rest)
    }catch(error)
    {
       next(error)
    }
}

  
 