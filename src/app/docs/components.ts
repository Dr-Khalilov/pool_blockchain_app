import { HttpStatusCodes } from '../../common/utils/httpStatusCodes';
import { EthereumIds } from '../../common/enums/EthereumIds';

export const components = {
    components: {
        schemas: {
            Balance: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        properties: {
                            amount: {
                                type: 'string',
                                description: 'Amount ethers',
                                example: '0.19485010971289717',
                            },
                            currency: {
                                type: 'string',
                                description: 'Currency name',
                                example: 'ETH',
                            },
                        },
                    },
                },
            },
            address: {
                type: 'string',
                description: 'An ethereum address',
                example: '0xe2211d98f0f89a9c5b61e39fc80fde9056d8e2c0',
            },
            network: {
                type: 'string',
                description: 'An available networks',
                enum: [
                    EthereumIds.ETH,
                    EthereumIds.ARBITRUM,
                    EthereumIds.OPTIMISM,
                    EthereumIds.GNOSIS,
                ],
                default: EthereumIds.ETH,
                example: EthereumIds.ETH,
                required: true,
            },
            BadRequestException: {
                type: 'object',
                properties: {
                    status: {
                        type: 'integer',
                        description: 'Error status code',
                        example: HttpStatusCodes.BAD_REQUEST,
                    },
                    message: {
                        type: 'string',
                        description: 'Error message',
                        example: 'Bad Request',
                    },
                    errors: {
                        type: 'array',
                        description: 'Errors',
                        example: [''],
                    },
                },
            },
            PathNotFoundException: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        description: 'Error message',
                        example: 'The requested path: *** not found',
                    },
                    status: {
                        type: 'integer',
                        description: 'Error status code',
                        example: HttpStatusCodes.NOT_FOUND,
                    },
                },
            },
        },
    },
};
