export const getBalance = {
    get: {
        tags: ['Ethereum balance operations'],
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
            200: {
                description: 'OK',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Balance',
                        },
                    },
                },
            },
            400: {
                description: 'Bad Request Exception',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                        },
                    },
                },
            },
        },
    },
};
