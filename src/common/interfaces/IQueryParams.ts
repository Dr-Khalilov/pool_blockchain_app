import { EthereumIds } from '../enums/EthereumIds';

export interface IQueryParams {
    readonly network: EthereumIds;
    readonly address: string;
}
