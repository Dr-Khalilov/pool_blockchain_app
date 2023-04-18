import { getBalance } from './balances/getBalance';

export const paths = {
    paths: {
        '/eth-coins': {
            ...getBalance,
        },
    },
};
