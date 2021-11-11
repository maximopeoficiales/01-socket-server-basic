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
            console.log("Cliente conectado", socket.id);
            socket.emit('current-employes', this.bandlist.getEmployes());

            socket.on('vote_employe', (id: string) => {
                this.bandlist.increaseVote(id);
                this.io.emit('current-employes', this.bandlist.getEmployes());
            });
            socket.on('delete_employe', (id: string) => {

                this.bandlist.removeEmploye(id);
                this.io.emit('current-employes', this.bandlist.getEmployes());
            });

            socket.on('update_name_employe', (data: { name: string, id: string }) => {
                this.bandlist.updateEmploye(data.id, data.name);
                this.io.emit('current-employes', this.bandlist.getEmployes());
            });

            socket.on('add_employe', (data: { name: string, occupation: string }) => {
                this.bandlist.addEmploye(data.name, data.occupation);

                this.io.emit('current-employes', this.bandlist.getEmployes());
            });
        });
    }
}