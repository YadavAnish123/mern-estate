import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import router from './router/user.router.js';
import auth from "./router/auth.router.js";
import propertyrouter from "./router/property.router.js"; // Update the import path
import cors from 'cors';
import cookieParser from "cookie-parser";
//import cookieParser from "cookie-parser";
const app = express();
config(); // Load environment variables
app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser())
 
const url = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(url)
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.error(err);
    });

// Define routes
app.use('/api/user', router);
app.use('/api/auth', auth);
app.use('/api/property', propertyrouter);

// Error-handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000!!!');
});
