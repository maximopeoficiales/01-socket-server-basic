import * as express from 'express';
import * as http from 'http';
import * as  socket from 'socket.io';


const app = express.default();
app.use(express.static(__dirname + '/../public'));
const server = http.createServer(app);
const io = new socket.Server(server);

io.on('connection', (socket) => {
    console.log("CLiente conectado");
    console.log(socket.id);
    socket.emit('message', { message: 'Bienvenido a la aplicacion', fecha: new Date() });
    socket.on('message-to-server', (data) => {
        console.log(data);
        io.emit("message-from-server", data);
    });

});
server.listen(3000, () => {
    console.log("Server corriendo en puerto :8080");

});