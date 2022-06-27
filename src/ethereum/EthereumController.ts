import { NextFunction, Request, Response, Router } from 'express';
import { EthereumService } from '@src/ethereum/EthereumService';
import { IController } from '@src/interfaces/IController';
import { IQueryParams } from '@src/interfaces/IQueryParams';
import { validationQueryParams } from '@src/middlewares/validationQueryParams';
import { QueryParamDto } from '@src/ethereum/QueryParamDto';

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
