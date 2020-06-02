import { Router } from 'express';
const router = Router();
import fs from 'fs';
import inha_plaza from './inha_plaza'
router.get('/', (request, response) => {
    fs.readFile('HTMLPage.html', (error, data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data);
    });
});
router.use('/inha_plaza', inha_plaza);


export default router;