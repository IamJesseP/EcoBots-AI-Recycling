import express from 'express';
import { getRecycleInfo } from '../controllers/recycleController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer(); // for memory storage

router.post('/', upload.single('photo'), getRecycleInfo);

export default router;
