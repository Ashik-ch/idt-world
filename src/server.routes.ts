import { routes } from './app/app.routes';

export default {
    routes,
    getPrerenderParams: {
        'inbound/:state': async () => [
            { state: 'kerala' },
            { state: 'karnataka' },
            { state: 'tamil-nadu' },
            { state: 'goa' },
        ],
    },
};
