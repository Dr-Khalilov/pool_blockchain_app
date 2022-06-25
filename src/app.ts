import express, { Express } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';

const app: Express = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

export default app;
