import { cleanEnv, port, str } from 'envalid';

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        PORT: port<number>(),
        INFURA_URL_RPC: str<string>(),
    });
};
