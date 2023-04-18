import { App } from './App';
import { EthereumController } from './ethereum/EthereumController';
import { validateEnv } from './app/validateEnv';
import { configuration } from './config/configuration';
import { ErrorHandler } from './common/middlewares/ErrorHandler';

const main = async (): Promise<void> => {
    validateEnv(configuration);
    const controllers = [new EthereumController()];
    const app = new App(controllers);
    await app.listen();
};

void main();
ErrorHandler.initializeUnhandledException();
