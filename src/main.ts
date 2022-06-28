import 'dotenv/config';
import { validateEnv } from '@src/utils/validateEnv';
import { EthereumController } from '@src/ethereum/EthereumController';
import { App } from '@src/App';

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
