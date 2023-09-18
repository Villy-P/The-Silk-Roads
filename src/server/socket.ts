import { Server } from 'socket.io'
import { server, serverCode } from './server'
import { IP_ADDRESS, VUE_PORT } from '../data/data';
import { USER_STATUS, User } from '../scripts/interface';
import { broadcastUsers, getUserByUsername, users } from './users';
import { getMerchantBaseExports, getMerchantBaseImports } from '../data/merchant';
import { GAME_STATE } from '../scripts/state';

export function socketFunc() {
    const io = new Server(server, {
        cors: {
            origin: [
                `https://localhost:${VUE_PORT}`,
                `https://${IP_ADDRESS}:${VUE_PORT}`
            ],
            methods: ["GET", "POST"],
            allowedHeaders: ['my-custom-header'],
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
                state: GAME_STATE.OPENING,
                cityInnovations: []
            };
            const user = getUserByUsername(message);
            if (user === undefined)
                users.push(currentSocket);
            else
                user.socketID = socket.id;
            io.emit('userState', broadcastUsers());
        });
        socket.on('play', () => {
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
        });
        socket.on('requestUserState', () => {
            socket.emit('userState', broadcastUsers());
        });
        socket.on('updateUser', (user) => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].username == user.username) {
                    users[i] = user;
                    break;
                }
            }
            io.emit('userState', broadcastUsers());
        });
    });
}