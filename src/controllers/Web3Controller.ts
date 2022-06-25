import { NextFunction, Request, Response } from 'express';
import { Web3Service } from '../services/Web3Service';

export class Web3Controller {
    private readonly web3Service: Web3Service;

    constructor() {
        this.web3Service = new Web3Service();
    }

    async getEth(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<object> {
        try {
            const version = 'lalalallallala';
            return res.status(200).send({ data: version });
        } catch (err) {
            next(err);
        }
    }
}
