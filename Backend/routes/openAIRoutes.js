import express from 'express';
import { getAIResponse } from '../controllers/openAIController.js';

const router = express.Router();

router.post('/', getAIResponse);

export default router;
