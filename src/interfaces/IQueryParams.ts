import { EthereumNetworksIds } from '@src/enums/EthereumNetworkIdsEnum';

export interface IQueryParams {
    readonly network: EthereumNetworksIds;
    readonly address: string;
}
