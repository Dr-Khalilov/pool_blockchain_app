import {
    IsEthereumAddress,
    IsNotEmpty,
    IsUppercase,
    Length,
} from 'class-validator';

export class QueryParamDto {
    @IsEthereumAddress({ message: 'Enter a valid ethereum address' })
    @IsNotEmpty({ message: 'Parameter address cannot be an empty' })
    readonly address: string;

    @Length(3, 10, {
        message:
            'The network parameter cannot be shorter than 3 and longer than 10 characters',
    })
    @IsUppercase({ message: 'Parameter network must be an uppercase' })
    @IsNotEmpty({ message: 'Parameter network cannot be an empty' })
    readonly network: string;
}
