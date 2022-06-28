import Web3 from 'web3';
import { EthereumNetworks } from '@src/enums/EthereumNetworksEnum';
import { BadRequestException } from '@src/exceptions/BadRequestException';

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
        const convertedToEthereumBalance = this.web3Service.utils.fromWei(
            weiBalance,
            'ether',
        );
        if (!convertedToEthereumBalance) {
            throw new BadRequestException();
        }
        return convertedToEthereumBalance;
    }
}
