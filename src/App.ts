import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';

export class App {
    public readonly app: Application;
    private readonly router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET,POST,DELETE,OPTIONS,PUT',
            );
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.app.use(cors({ origin: 'http://localhost:3000' }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(errorHandler);
    }
}
