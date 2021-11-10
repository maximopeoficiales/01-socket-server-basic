import dotenv from 'dotenv';
dotenv.config();
import { Server } from "./app/infraestructure/server";

const server = new Server();
server.execute();