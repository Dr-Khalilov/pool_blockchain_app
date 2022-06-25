import Web3 from 'web3';
import { BadRequestException } from '../errors/BadRequestException';

export class Web3Service {
    private readonly web3: Web3;

    constructor() {
        this.web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    }

    public async getEth(): Promise<string> {
        const version = this.web3.givenProvider();
        console.log(version);
        if (!version) {
            throw new BadRequestException();
        }
        return version;
    }
}
