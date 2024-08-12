// src/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet'
import path from 'path'; // Add this line
import { fileURLToPath } from 'url';

import flowerRoutes from './routes/flowers.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
        },
    })
);

// Database connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.use('/api/flowers', flowerRoutes);
app.use('/api/contact', contactRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../sunny-blooms-frontend/build/index.html'));
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
