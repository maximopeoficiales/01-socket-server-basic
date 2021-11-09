import * as express from 'express';
import * as http from 'http';
import * as  socket from 'socket.io';
import * as  path from 'path';


// const app = express.default();
// app.use(express.static(__dirname + '/../public'));
// const server = http.createServer(app);
// const io = new socket.Server(server);

// io emite un evento a todos los clientes
// 
// server.listen(3000, () => {
//     console.log("Server corriendo en puerto :8080");

// });

export class Server {
    private app: express.Express;
    private port: number;
    private server: http.Server;
    private io: socket.Server;

    constructor() {
        this.app = express.default();
        this.port = 3000;
        // 
        this.server = http.createServer(this.app);
        // config sockets
        this.io = new socket.Server(this.server, {
            // configurations
        });

    }

    configSockets() {
        this.io.on('connection', (socket) => {
            console.log("Cliente conectado");
            console.log(socket.id);

            console.log("Cliente conectado");
            console.log(socket.id);

            socket.emit('message', { message: 'Bienvenido a la aplicacion', fecha: new Date() });
            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit("message-from-server", data);
            });

        });
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