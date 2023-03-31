import {Response} from 'express';
import {RequestMod} from '../middlewares/jwt.js';


export const indexPage = (req: RequestMod, res: Response) => res.sendFile (__dirname + "/index.html");
