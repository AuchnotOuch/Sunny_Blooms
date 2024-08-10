// src/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import flowerRoutes from './routes/flowers.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
