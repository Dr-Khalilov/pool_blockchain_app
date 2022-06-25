import { Application } from 'express';
import { Web3Controller } from '../controllers/Web3Controller';

export class Routes {
    public web3Controller: Web3Controller;

    constructor() {
        this.web3Controller = new Web3Controller();
    }

    public routes(app: Application): void {
        app.route('/api/block').get(this.web3Controller.getEth);
    }
}
