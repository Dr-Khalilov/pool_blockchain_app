import 'dotenv/config';

const {
    env: { PORT },
} = process;

export const servers = {
    servers: [
        {
            url: `http://localhost:${PORT}/api`,
            description: 'Local server',
        },
        {
            url: 'https://pool-blockchain-app.herokuapp.com/api/',
            description: 'Prod server',
        },
    ],
};
