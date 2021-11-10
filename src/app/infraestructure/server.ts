import * as express from 'express';
import * as http from 'http';
import * as  socket from 'socket.io';
import * as  path from 'path';
import { Sockets } from './sockets';
import { config } from '../../config';

export class Server {
    private server: http.Server;
    private io: socket.Server;
    constructor(
        private app: express.Express = express.default(),
        private port: number = parseInt(config.port.toString())
    ) {
        this.server = http.createServer(this.app);
        // config sockets
        this.io = new socket.Server(this.server, {
            // configurations
        });

    }

    configSockets() {
        new Sockets(this.io);
    }

    middlewares() {
        this.app.use(express.static(path.join(__dirname, '../../../public')));
    }

    execute() {
        this.middlewares();
        this.configSockets();

        this.server.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);

        })
    }

}