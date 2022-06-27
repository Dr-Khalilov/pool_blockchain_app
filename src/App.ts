import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';
import { IController } from './interfaces/IController';

export class App {
    public readonly app: Application;
    private readonly port: number;

    constructor(controllers, port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen(): void {
        this.app.listen(this.port, () =>
            console.info(
                '\x1b[1m',
                '\x1b[32m',
                `Express App started on http://localhost:${this.port}`,
            ),
        );
    }

    private initializeMiddlewares(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET,POST,DELETE,OPTIONS,PUT',
            );
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(errorHandler);
    }

    private initializeControllers(controllers: Array<IController>): void {
        controllers.forEach(controller =>
            this.app.use('/api', controller.router),
        );
    }
}
