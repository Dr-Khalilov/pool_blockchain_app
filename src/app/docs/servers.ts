import { configuration } from 'src/config/configuration';

export const servers = {
    servers: [
        {
            url: configuration.SERVER_URL
                ? configuration.SERVER_URL
                : `http://localhost:${configuration.SERVER_PORT}/api`,
            description: 'Local server',
        },
    ],
};
