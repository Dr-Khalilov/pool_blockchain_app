import { NextFunction, Request, Response, Router } from 'express';
import { IController } from '../interfaces/IController';
import { EthereumService } from './EthereumService';
import { validationQueryParams } from '../middlewares/validationQueryParams';
import { QueryParamDto } from './QueryParamDto';
import { IQueryParams } from '../interfaces/IQueryParams';

export class EthereumController implements IController {
    public readonly path = '/eth-coins';
    public readonly router = Router();
    private readonly ethereumService = new EthereumService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get(
            this.path,
            validationQueryParams(QueryParamDto),
            this.getBalance,
        );
    }

    private getBalance = async (
        { query: { address, network } }: Request,
        res: Response,
        next: NextFunction,
    ): Promise<object> => {
        try {
            const balance = await this.ethereumService.getBalanceInNetwork(<
                IQueryParams
            >{
                address,
                network,
            });
            return res.status(200).send({ data: balance });
        } catch (err) {
            next(err);
        }
    };
}
