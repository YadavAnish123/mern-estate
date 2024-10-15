import Property from "../model/property.js"; // Adjust the import path accordingly

export const addProperty=async(req,res,next)=>{
    const newProperty = new Property(req.body);
  try {
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(500).json(err);
  }

}

// export const likeProperty = async (req, res, next) => {
//   const { userId } = req.body; // Ensure you pass the user ID in the request body
//   const propertyId = req.params.id; // Get property ID from the request params

//   try {
//     // Find the property by ID
//     const property = await Property.findById(propertyId);
//     if (!property) return next(errorHandler(404, "Property not found"));

//     // Check if the user has already liked the property
//     if (!property.likes.includes(userId)) {
//       property.likes.push(userId); // Add user ID to likes
//     }

//     await property.save(); // Save the updated property
//     res.status(200).json(property); // Send back the updated property
//   } catch (error) {
//     next(error);
//   }
// };

export const likeProperty = async (req, res, next) => {
    const { userId } = req.body;
    const propertyId = req.params.id;
  
    try {
      const property = await Property.findById(propertyId);
      if (!property) return next(errorHandler(404, "Property not found"));
  
      // Check if the user has already disliked the property
      if (property.dislikes.includes(userId)) {
        // Remove the user from dislikes if they are trying to like
        property.dislikes = property.dislikes.filter(id => id !== userId);
      }
  
      // Check if the user has already liked the property
      if (!property.likes.includes(userId)) {
        property.likes.push(userId);
      }
  
      await property.save();
      res.status(200).json(property);
    } catch (error) {
      next(error);
    }
  };
  
// export const dislikeProperty=async(req,res,next)=>{
//     try {
//         const property = await Property.findById(req.params.id);
//         if (!property) return res.status(404).json({ message: "Property not found" });
    
//         if (!property.dislikes.includes(req.body.userId)) {
//           property.dislikes.push(req.body.userId);
//           await property.save();
//         }
//         res.status(200).json(property);
//       } catch (err) {
//         res.status(500).json(err);
//       }
// }
export const dislikeProperty = async (req, res, next) => {
    const { userId } = req.body;
    const propertyId = req.params.id;
  
    try {
      const property = await Property.findById(propertyId);
      if (!property) return next(errorHandler(404, "Property not found"));
  
      // Check if the user has already liked the property
      if (property.likes.includes(userId)) {
        // Remove the user from likes if they are trying to dislike
        property.likes = property.likes.filter(id => id !== userId);
      }
  
      // Check if the user has already disliked the property
      if (!property.dislikes.includes(userId)) {
        property.dislikes.push(userId);
      }
  
      await property.save();
      res.status(200).json(property);
    } catch (error) {
      next(error);
    }
  };
  

  export const messageProperty = async (req, res, next) => {
    const propertyId = req.params.id;
  
    try {
      const property = await Property.findById(propertyId);
      if (!property) return res.status(404).json({ message: "Property not found" });
  
      // Ensure userId and message are provided in the request body
      const { userId, message } = req.body;
      if (!userId || !message) {
        return res.status(400).json({ message: "User ID and message are required." });
      }
  
      // Add the message to the property
      property.messages.push({ userId, message });
      await property.save();
      res.status(200).json(property);
    } catch (err) {
      next(err); // Call the next error handler
    }
  };
  


export const getALLProperty=async(req,res,next)=>{
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
      } catch (err) {
        res.status(500).json(err);
      }
}
