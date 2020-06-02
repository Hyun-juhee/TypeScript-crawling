import { Router } from 'express';
const router = Router();
import express, {Request, Response, NextFunction} from 'express';
// import { response } from '../module/response';
// import { message } from '../module/message';
// import { upload } from '../config/multer';
import {getTop} from '../controllers/plaza';


router.get('/getTop', getTop);


export default router;