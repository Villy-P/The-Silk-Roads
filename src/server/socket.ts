import { Server } from 'socket.io'
import { server, serverCode } from './server'
import { IP_ADDRESS, VUE_PORT } from '../data/data';
import { USER_STATUS, User } from '../scripts/interface';
import { broadcastUsers, getUserByUsername, users } from './users';
import { getMerchantBaseExports, getMerchantBaseImports } from '../data/merchant';


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
                status: isLeader,
                serverCode: serverCode,
                merchantType: undefined,
                imports: [],
                items: [],
                silver: 0,
                gold: 0,
            };
            const user = getUserByUsername(message);
            if (user === undefined)
                users.push(currentSocket);
            else
                user.socketID = socket.id;
            io.emit('userState', broadcastUsers());
            socket.emit('user', JSON.stringify({user: getUserByUsername(message)}));
        });
        socket.on('play', (msg) => {
            let id = 0;
            for (const user of users) {
                if (user.status === USER_STATUS.LEADER)
                    continue;
                user.merchantType = id++;
                user.items = getMerchantBaseExports(user.merchantType);
                user.imports = getMerchantBaseImports(user.merchantType);
                if (id == 6)
                    id = 0;
            }
            io.emit('play', broadcastUsers());
            socket.emit('user', JSON.stringify({user: getUserByUsername(msg)}));
        });
        socket.on('requestUserState', (msg) => {
            socket.emit('userState', broadcastUsers());
            socket.emit('user', JSON.stringify({user: getUserByUsername(msg)}));
        })
    });
}