import { IsEnum, IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { EthereumNetworksIds } from '../enums/EthereumNetworkIdsEnum';

export class QueryParamDto {
    @IsEthereumAddress({ message: 'Enter a valid ethereum address' })
    @IsNotEmpty({ message: 'Parameter address cannot be an empty' })
    readonly address: string;

    @IsEnum(EthereumNetworksIds, {
        message: 'Parameter network must be a valid network',
    })
    @IsNotEmpty({ message: 'Parameter network cannot be an empty' })
    readonly network: EthereumNetworksIds;
}
