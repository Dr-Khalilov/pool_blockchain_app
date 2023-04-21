import Web3 from 'web3';
import { EthereumNetworks } from '../common/enums/EthereumNetworks';
import { IQueryParams } from '../common/interfaces/IQueryParams';
import { IBalance } from './IBalance';
import { EthereumIds } from '../common/enums/EthereumIds';
import { networkCorrespondenceMap } from '../common/utils/networkCorrespondenceMap';

export class EthereumService {
    private web3Service: Web3;

    public async getBalanceByNetwork({
        address,
        network,
    }: IQueryParams): Promise<IBalance> {
        const networkLink = await this.getNetworkProvider(network);
        const balance = await this.getBalanceByProvider(address, networkLink);
        return {
            amount: balance,
            currency: network === EthereumIds.GNOSIS ? 'xDAI' : 'ETH',
        };
    }

    private async getNetworkProvider(
        networkId: EthereumIds,
    ): Promise<EthereumNetworks> {
        return networkId && networkCorrespondenceMap[networkId];
    }

    private async getBalanceByProvider(
        address: string,
        network: EthereumNetworks,
    ): Promise<string> {
        this.web3Service = new Web3(network);
        const weiBalance = await this.web3Service.eth.getBalance(address);
        return this.web3Service.utils.fromWei(weiBalance, 'ether');
    }
}
