import mongoose from "mongoose";
const { Schema } = mongoose;

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    likes: {
      type: [String], // Array of user IDs who liked the property
      default: [],
    },
    dislikes: {
      type: [String], // Array of user IDs who disliked the property
      default: [],
    },
    messages: [
      {
        userId: { type: String, required: true },
        message: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
