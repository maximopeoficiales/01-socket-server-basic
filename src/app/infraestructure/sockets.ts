import * as  socket from 'socket.io';
import { BandList } from '../domain/BandList';

export class Sockets {
    constructor(
        private io: socket.Server,
        private bandlist = new BandList()
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