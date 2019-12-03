import routes from './routes';

export default function (reactor) {
    routes(reactor.route, reactor);
}