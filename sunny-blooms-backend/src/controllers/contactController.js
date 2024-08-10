// src/controllers/contactController.js
import Contact from '../models/Contact.js';

export async function createContact(req, res) {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    try {
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
