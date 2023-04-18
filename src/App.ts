import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { docs } from './app/docs';
import { IController } from './common/interfaces/IController';
import { configuration } from './config/configuration';
import { ErrorHandler } from './common/middlewares/ErrorHandler';
import { NotFoundException } from './common/exceptions/NotFoundException';

export class App {
    private readonly app: Application;
    private readonly port: number;

    constructor(private controllers: IController[]) {
        this.app = express();
        this.port = configuration.SERVER_PORT;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public async listen(): Promise<void> {
        this.app.listen(this.port, () => {
            console.info('\x1b[1m\x1b[32mApplication successfully started!');
            console.info(
                `Application documentation is available at http://localhost:${this.port}/api/docs\x1b[0m`,
            );
        });
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
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(docs));
    }

    private initializeErrorHandling(): void {
        this.app.use('*', (req: Request, res: Response, next: NextFunction) => {
            next(
                new NotFoundException(
                    `The requested path: ${req.path} not found`,
                ),
            );
        });
        this.app.use(ErrorHandler.errorHandler);
    }

    private initializeControllers(controllers: Array<IController>): void {
        controllers.forEach(controller =>
            this.app.use('/api', controller.router),
        );
    }
}
