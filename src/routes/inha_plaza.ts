import { Router } from 'express';
const router = Router();
import express, {Request, Response, NextFunction} from 'express';
import {getTop, insertTop, updateTop} from '../controllers/plaza';

router.get('/', getTop);
router.post('/', insertTop);
router.put('/', updateTop);

export default router;