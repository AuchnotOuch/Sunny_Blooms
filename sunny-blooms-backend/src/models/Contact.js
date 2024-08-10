// src/models/Contact.js
import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default model('Contact', ContactSchema);
