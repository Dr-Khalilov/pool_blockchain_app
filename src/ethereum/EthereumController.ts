import { NextFunction, Request, Response, Router } from 'express';
import ethereumService from './EthereumService';
import { IController } from '../interfaces/IController';

export class EthereumController implements IController {
    public readonly path = '/eth-coin';
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getBalance);
    }

    async getBalance(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<object> {
        try {
            const balance = await ethereumService.getBalance();
            return res.status(200).send({ data: balance });
        } catch (err) {
            next(err);
        }
    }
}
