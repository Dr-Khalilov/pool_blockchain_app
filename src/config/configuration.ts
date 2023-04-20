import { join } from 'node:path';
import { config as configDotenv } from 'dotenv';

const envFile = configDotenv({
    path: join(__dirname, '..', '..', '.env'),
});

if (envFile.error) {
    throw envFile.error;
}

const {
    parsed: { NODE_ENV, SERVER_PORT, SERVER_URL },
} = envFile;

export const configuration = Object.freeze({
    NODE_ENV: NODE_ENV,
    SERVER_PORT: parseInt(SERVER_PORT, 10),
    SERVER_URL: SERVER_URL,
});
