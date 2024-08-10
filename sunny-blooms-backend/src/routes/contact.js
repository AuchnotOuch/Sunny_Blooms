// src/routes/contact.js
import { Router } from 'express';
const router = Router();
import { createContact } from '../controllers/contactController.js';

// Submit a contact form
router.post('/', createContact);

export default router;
