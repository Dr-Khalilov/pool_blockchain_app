import { EthereumNetworksIds } from '../enums/EthereumNetworkIdsEnum';

export interface IQueryParams {
    readonly network: EthereumNetworksIds;
    readonly address: string;
}
