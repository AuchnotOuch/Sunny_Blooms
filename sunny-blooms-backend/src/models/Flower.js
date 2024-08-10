// src/models/Flower.js
import { Schema, model } from 'mongoose';

const FlowerSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true }
});

export default model('Flower', FlowerSchema);
