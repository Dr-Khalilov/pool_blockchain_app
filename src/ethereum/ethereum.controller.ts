import { NextFunction, Request, Response, Router } from 'express';
import ethereumService from './ethereum.service';
import { IController } from '../interfaces/controller.interface';

export class EthereumController implements IController {
    public readonly path = '/eth-coin';
    public readonly router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getEth);
    }

    async getEth(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<object> {
        try {
            const version = await ethereumService.getEth();
            return res.status(200).send({ data: version });
        } catch (err) {
            next(err);
        }
    }
}
