// src/routes/flowers.js
import { Router } from 'express';
const router = Router();
import { getFlowers, createFlower } from '../controllers/flowerController.js';

// Get all flowers
router.get('/', getFlowers);

// Create a new flower
router.post('/', createFlower);

export default router;
