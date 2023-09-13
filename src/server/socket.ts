import { Server } from 'socket.io'
import { server } from './server'
import { IP_ADDRESS, VUE_PORT } from '../data/data';
import { USER_STATUS, User } from '../scripts/interface';
import { broadcastUsers, getUserByUsername, users } from './users';


export function socketFunc() {
    const io = new Server(server, {
        cors: {
            origin: [
                `https://localhost:${VUE_PORT}`,
                `https://${IP_ADDRESS}:${VUE_PORT}`
            ],
            methods: ["GET", "POST"],
            allowedHeaders: ['custom-header'],
            credentials: true
        }
    });

    io.on('connection', (socket) => {
        socket.on('joined', (message) => {
            const isLeader = users.length == 0 ? USER_STATUS.LEADER : USER_STATUS.BASIC;
            const currentSocket: User = {
                username: message,
                socketID: socket.id,
                status: isLeader
            };
            const user = getUserByUsername(message);
            if (user === undefined)
                users.push(currentSocket);
            else
                user.socketID = socket.id;
            io.emit('userState', broadcastUsers(socket.id));
        });
        socket.on('play', () => {
            io.emit('play');
        });
        socket.on('requestUserState', () => {
            socket.emit('userState', broadcastUsers(socket.id));
        })
    });
}