import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // Corrected from 'require' to 'required'
    },
    email: {
      type: String,
      required: true, // Corrected from 'require' to 'required'
      unique: true,    // Added 'true' for uniqueness
    },
    password: {
      type: String,
      required: true, // Corrected from 'require' to 'required'
      unique: true,    // Added 'true' for uniqueness
    },
    avatar:{
      type: String,
      default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
    
  } ,{timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User;
