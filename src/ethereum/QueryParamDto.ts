import { IsEnum, IsEthereumAddress, IsNotEmpty } from 'class-validator';
import { EthereumIds } from '../common/enums/EthereumIds';

export class QueryParamDto {
    @IsEthereumAddress({ message: 'Enter a valid ethereum address' })
    @IsNotEmpty({ message: 'Parameter address cannot be an empty' })
    readonly address: string;

    @IsEnum(EthereumIds, {
        message: 'Parameter network must be a valid network',
    })
    @IsNotEmpty({ message: 'Parameter network cannot be an empty' })
    readonly network: EthereumIds;
}
