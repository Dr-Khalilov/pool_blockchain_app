import { createServer } from 'http';
import dotenv from 'dotenv';
import { App } from './App';

dotenv.config();

const {
    env: { PORT },
} = process;

const bootstrap = async (port: number): Promise<void> => {
    try {
        createServer(new App().app).listen(port ?? 3001, () =>
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

void bootstrap(+PORT);
