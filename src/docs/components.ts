export const components = {
    components: {
        schemas: {
            Balance: {
                type: 'object',
                properties: {
                    amount: {
                        type: 'string',
                        description: 'Amount ethers',
                        example: '0.19485010971289717',
                    },
                    unitName: {
                        type: 'string',
                        description: 'Unit name',
                        example: 'ETH',
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
                example: 'ETH',
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        description: 'Error message',
                        example: 'Bad Request',
                    },
                    status: {
                        type: 'number',
                        description: 'Error status code',
                        example: 'Invalid parameters',
                    },
                },
            },
        },
    },
};
