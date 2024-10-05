import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import router from './router/user.router.js';
import auth from "./router/auth.router.js";
import cors from 'cors';
const app = express();
config(); // Load environment variables
app.use(express.json()); // Middleware to parse JSON
app.use(cors())
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
