import { getBalance } from './getBalance';

export const balances = {
    paths: {
        '/eth-coins': {
            ...getBalance,
        },
    },
};
