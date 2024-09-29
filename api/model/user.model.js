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
    
  } ,{timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User;
