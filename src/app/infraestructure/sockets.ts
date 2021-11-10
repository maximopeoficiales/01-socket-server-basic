import * as  socket from 'socket.io';

export class Sockets {
    constructor(
        private io: socket.Server
    ) {
        this.socketEvents();
    }

    socketEvents(): void {
        this.io.on('connection', (socket) => {
            console.log(socket.id);

            socket.emit('message', { message: 'Bienvenido a la aplicacion', fecha: new Date() });

            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit("message-from-server", data);
            });

        });
    }
}