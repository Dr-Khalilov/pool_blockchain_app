import { join } from 'node:path';
import { config } from 'dotenv';

const result = config({
    path: join(__dirname, '..', '..', '.env'),
});

if (result.error) {
    throw result.error;
}

const {
    parsed: { NODE_ENV, SERVER_PORT, SERVER_URL },
} = result;

export const configuration = Object.freeze({
    NODE_ENV: NODE_ENV,
    SERVER_PORT: parseInt(SERVER_PORT, 10),
    SERVER_URL: SERVER_URL,
});
