/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Server } from 'socket.io'
import { server, serverCode } from './server'
import { IP_ADDRESS, VUE_PORT } from '../data/data';
import { USER_STATUS, User } from '../scripts/interface';
import { broadcastUsers, getUserByUsername, users } from './users';
import { getMerchantBaseExports, getMerchantBaseImports } from '../data/merchant';
import { GAME_STATE, TRADING_STATE } from '../scripts/state';
import { getRandomValueThenDelete } from '../scripts/util';

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
                silver: 8,
                gold: 5,
                state: GAME_STATE.OPENING,
                cityInnovations: [],
                cultureCards: [],
                journal: [],
                goldDebt: 0,
                silverDebt: 0,
                hasMarketTransactions: false,
                hasPaidCityTax: false,
                showDemandDebt: false,
                isMainTrader: false,
                tradingStage: TRADING_STATE.WAITING,
                hasWon: false,
            };
            const user = getUserByUsername(message);
            if (user === undefined)
                users.push(currentSocket);
            else
                user.socketID = socket.id;
            io.emit('userState', broadcastUsers());
        });
        socket.on('play', () => {
            let nums = [0, 1, 2, 3, 4, 5];
            let id = 0;
            for (const user of users) {
                if (user.status === USER_STATUS.LEADER)
                    continue;
                user.merchantType = getRandomValueThenDelete(nums);
                user.items = getMerchantBaseExports(user.merchantType!);
                user.imports = getMerchantBaseImports(user.merchantType!);
                if (id == 6) {
                    id = 0;
                    nums = [0, 1, 2, 3, 4, 5];
                }
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
        socket.on("demandDebt", (user) => {
            io.emit("demandDebt", user);
        });
        socket.on("requestTrade", (sender, reciever) => {
            io.emit("requestTrade", sender, reciever);
        });
        socket.on("cancelRequestTrade", (sender, reciever) => {
            io.emit("cancelRequestTrade", sender, reciever);
        });
        socket.on("refuseTrade", (sender, reciever) => {
            io.emit("refuseTrade", sender, reciever);
        });
        socket.on("beginTrade", (sender, reciever) => {
            io.emit("beginTrade", sender, reciever);
        });
        socket.on("endTrade", (sender, reciever) => {
            io.emit("endTrade", sender, reciever);
        });
        socket.on("sendTrade", (trade, reciever) => {
            io.emit("sendTrade", trade, reciever);
        });
        socket.on("acceptTrade", (reciever) => {
            io.emit("acceptTrade", reciever);
        });
        socket.on("countertrade", (reciever) => {
            io.emit("countertrade", reciever);
        });
    });
}