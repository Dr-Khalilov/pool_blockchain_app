import Web3 from 'web3';
import { IQueryParams } from '@src/interfaces/IQueryParams';
import { EthereumProvider } from '@src/ethereum/EthereumProvider';
import { EthereumNetworks } from '@src/enums/EthereumNetworksEnum';
import { EthereumNetworksIds } from '@src/enums/EthereumNetworkIdsEnum';

export class EthereumService {
    private readonly web3Service: Web3;

    public async getBalanceInNetwork(query: IQueryParams): Promise<object> {
        const { address, network } = query;
        const provider = new EthereumProvider(
            this.web3Service,
            this.getNetworkProvider(network),
        );
        return {
            amount: await provider.getBalance(address),
            unitName: network === EthereumNetworksIds.GNOSIS ? 'xDAI' : 'ETH',
        };
    }

    private getNetworkProvider(
        networkId: EthereumNetworksIds,
    ): EthereumNetworks {
        switch (networkId) {
            case EthereumNetworksIds.ETH:
                return EthereumNetworks.ETHEREUM;
            case EthereumNetworksIds.GNOSIS:
                return EthereumNetworks.GNOSISXDAI;
            case EthereumNetworksIds.ARBITRUM:
                return EthereumNetworks.ARBITRUM;
            case EthereumNetworksIds.OPTIMISM:
                return EthereumNetworks.OPTIMISM;
        }
    }
}
