import { cleanEnv, port } from 'envalid';

export const validateEnv = (): void => {
    cleanEnv(process.env, {
        PORT: port<number>(),
    });
};
