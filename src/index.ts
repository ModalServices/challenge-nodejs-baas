import './Utils/module-alias';
import  Server  from './server';
import * as dotenv from 'dotenv';

dotenv.config();

const server = new Server;

server.middleware();

server.setupServer();

