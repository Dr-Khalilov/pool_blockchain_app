import 'dotenv/config';
import { App } from './App';
import { EthereumController } from './ethereum/ethereum.controller';
import { validateEnv } from './utils/validateEnv';

const bootstrap = async (port: number): Promise<void> => {
    try {
        validateEnv();
        const controllers = [new EthereumController()];
        const app = new App(controllers, port);
        app.listen();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

void bootstrap(Number(process.env.PORT));
