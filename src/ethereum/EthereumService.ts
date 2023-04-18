import Web3 from 'web3';
import { EthereumProvider } from './EthereumProvider';
import { EthereumNetworks } from '../common/enums/EthereumNetworks';
import { IQueryParams } from 'src/common/interfaces/IQueryParams';
import { IBalance } from './IBalance';
import { EthereumIds } from 'src/common/enums/EthereumIds';
import { networkCorrespondenceMap } from 'src/common/utils/networkCorrespondenceMap';

export class EthereumService {
    private readonly web3Service: Web3;

    public async getBalanceByNetwork({
        address,
        network,
    }: IQueryParams): Promise<IBalance> {
        const provider = new EthereumProvider(
            this.web3Service,
            this.getNetworkProvider(network),
        );
        return {
            amount: await provider.getBalance(address),
            currency: network === EthereumIds.GNOSIS ? 'xDAI' : 'ETH',
        };
    }

    private getNetworkProvider(networkId: EthereumIds): EthereumNetworks {
        return networkId && networkCorrespondenceMap[networkId];
    }
}
