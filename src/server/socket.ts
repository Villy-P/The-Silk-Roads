import { Server } from 'socket.io'
import { server } from './server'
import { IP_ADDRESS, VUE_PORT } from '@/data/data';

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