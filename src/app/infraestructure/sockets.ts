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
            socket.emit('current-employes', this.bandlist.getEmployes());

            socket.on('vote_employe', (id: string) => {
                this.bandlist.increaseVote(id);
                this.io.emit('current-employes', this.bandlist.getEmployes());
            });
        });
    }
}