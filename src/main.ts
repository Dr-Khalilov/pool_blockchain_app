import { createServer } from 'http';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const {
    env: { PORT },
} = process;

const runExpressApp = async (port: number | string): Promise<void> => {
    try {
        createServer(app).listen(Number(port) ?? 3001, () =>
            console.info(
                '\x1b[1m',
                '\x1b[32m',
                `Express App started on http://localhost:${port}`,
            ),
        );
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

void runExpressApp(PORT);
