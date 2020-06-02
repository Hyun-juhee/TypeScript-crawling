import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import {createConnection, getConnectionOptions, getConnection, getConnectionManager, ConnectionManager} from "typeorm"
import indexRouter from './routes/index';
const app = express();


createConnection().then(async connection => {
    app.use(json());
    app.use((err: Error, req: express.Request, res: Response, next: NextFunction) => {
        res.status(500).json({message: err.message});
    });

    // app.get('/', (req: express.Request, res: Response, next: NextFunction) => {
    //     res.send("test");
    // });
    app.use('/', indexRouter);
    app.listen(3000);
}).catch(error => console.log("TypeORM connection error: ", error));