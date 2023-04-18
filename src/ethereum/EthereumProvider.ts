import Web3 from 'web3';
import { EthereumNetworks } from '../common/enums/EthereumNetworks';

export class EthereumProvider {
    constructor(
        private readonly web3Service: Web3,
        private readonly network: EthereumNetworks,
    ) {
        this.network = network;
        this.web3Service = new Web3(this.network);
    }

    public async getBalance(address: string): Promise<string> {
        const weiBalance = await this.web3Service.eth.getBalance(address);
        return this.web3Service.utils.fromWei(weiBalance, 'ether');
    }
}
