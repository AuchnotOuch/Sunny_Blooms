// src/controllers/flowerController.js
import Flower from '../models/Flower.js';

export async function getFlowers(req, res) {
    try {
        const flowers = await find();
        res.json(flowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function createFlower(req, res) {
    const { name, description, price, imageUrl } = req.body;
    const newFlower = new Flower({ name, description, price, imageUrl });

    try {
        const savedFlower = await newFlower.save();
        res.json(savedFlower);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
