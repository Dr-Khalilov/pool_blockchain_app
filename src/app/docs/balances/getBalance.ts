import { HttpStatusCodes } from 'src/common/utils/httpStatusCodes';
import { ListTags } from '../listTags';

export const getBalance = {
    get: {
        tags: [ListTags.BALANCE],
        summary: 'Get balance by address and network',
        description: 'Get balance for ethereum wallet',
        operationId: 'getBalance',
        parameters: [
            {
                name: 'address',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/address',
                },
                required: true,
                description: 'A balance for the address',
            },
            {
                name: 'network',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/network',
                },
                required: true,
                description: 'A network id',
            },
        ],
        responses: {
            [HttpStatusCodes.OK]: {
                description: 'A balance data',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Balance',
                        },
                    },
                },
            },
            [HttpStatusCodes.BAD_REQUEST]: {
                description: 'Bad Request Exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/BadRequestException',
                        },
                    },
                },
            },
            [HttpStatusCodes.NOT_FOUND]: {
                description: 'Path exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/PathNotFoundException',
                        },
                    },
                },
            },
        },
    },
};
