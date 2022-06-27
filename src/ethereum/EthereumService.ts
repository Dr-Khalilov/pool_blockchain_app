import Web3 from 'web3';
import { BadRequestException } from '@src/exceptions/BadRequestException';
import { EthereumNetworks } from '@src/enums/EthereumNetworksEnum';
import { IQueryParams } from '@src/interfaces/IQueryParams';

export class EthereumService {
    private readonly web3: Web3;
    private readonly rpcUrl: string;

    constructor() {
        this.rpcUrl = EthereumNetworks.ETHEREUM;
        this.web3 = new Web3(this.rpcUrl);
    }

    public async getBalanceInNetwork(query: IQueryParams): Promise<object> {
        const { address, network } = query;
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
        return { amount: convertedToEthereumBalance, unitName: 'ETH' };
    }
}
