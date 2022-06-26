import Web3 from 'web3';
import { BadRequestException } from '../exceptions/BadRequestException';

class EthereumService {
    private readonly web3: Web3;
    private readonly rpcURL =
        'https://mainnet.infura.io/v3/6f26211dab1642e297b0e9a12f059f02';

    constructor() {
        this.web3 = new Web3(this.rpcURL);
    }

    public async getEth(): Promise<string> {
        const account = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91';
        const balance = await this.web3.eth.getBalance(
            account,
            (err: Error, wei: string) => {
                return this.web3.utils.fromWei(wei, 'ether');
            },
        );
        console.log(balance);
        if (!balance) {
            throw new BadRequestException();
        }
        return balance;
    }
}

export default new EthereumService();
