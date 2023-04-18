import { configuration } from 'src/config/configuration';

export const basicInfo = {
    openapi: '3.0.3',
    info: {
        title: 'Ethereum define balance API',
        version: '1.0.0',
        description: 'An ethereum balance documentation API',
        contact: {
            name: 'Umar Khalilov',
            email: 'ERMASTER100@gmail.com',
            url: 'https://umar-khalilov.github.io/',
        },
        basePath: '/',
        host: configuration.SERVER_URL
            ? configuration.SERVER_URL
            : `http://localhost:${configuration.SERVER_PORT}/api`,
        schemes: ['http', 'https'],
    },
};
