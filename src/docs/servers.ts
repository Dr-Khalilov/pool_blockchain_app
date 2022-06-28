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
    ],
};
