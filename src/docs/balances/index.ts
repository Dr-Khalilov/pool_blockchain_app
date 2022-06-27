import { getBalance } from '@src/docs/balances/getBalance';

export const balances = {
    paths: {
        '/eth-coins': {
            ...getBalance,
        },
    },
};
