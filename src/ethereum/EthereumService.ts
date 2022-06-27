import Web3 from 'web3';
import { BadRequestException } from '../exceptions/BadRequestException';

class EthereumService {
    private readonly web3: Web3;
    private readonly rpcUrl: string;

    constructor() {
        this.rpcUrl = process.env.INFURA_URL_RPC;
        this.web3 = new Web3(this.rpcUrl);
    }

    public async getBalance(): Promise<object> {
        const address = '0xe2211d98f0f89a9c5b61e39fc80fde9056d8e2c0';
        const weiBalance = await this.web3.utils.toBN(
            await this.web3.eth.getBalance(address),
        );
        const convertedToEthereumBalance = this.web3.utils.fromWei(
            weiBalance,
            'ether',
        );
        if (!convertedToEthereumBalance) {
            throw new BadRequestException();
        }
        return { balance: `${convertedToEthereumBalance} ETH` };
    }
}

export default new EthereumService();
