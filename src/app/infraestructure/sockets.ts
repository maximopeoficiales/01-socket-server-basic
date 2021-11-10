import * as  socket from 'socket.io';
import { EmployeList } from '../domain/EmployeList';

export class Sockets {
    constructor(
        private io: socket.Server,
        private bandlist = new EmployeList()
    ) {
        this.socketEvents();
    }

    socketEvents(): void {
        this.io.on('connection', (socket) => {
            console.log(socket.id);
            socket.emit('current-bands', this.bandlist);


        });
    }
}