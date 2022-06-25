import { Application } from 'express';
import { Web3Controller } from '../controllers/Web3Controller';

export class Routes {
    private readonly web3Controller: Web3Controller;

    constructor() {
        this.web3Controller = new Web3Controller();
    }

    public routes(app: Application): void {
        app.route('/eth-coin');
        app.use('/api', this.web3Controller.getEth);
    }
}
