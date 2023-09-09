import { IP_ADDRESS, SERVER_PORT } from '@/data/data';
import io from 'socket.io-client'

export const clientSocket = io(`https://${IP_ADDRESS}:${SERVER_PORT}/`, {
    withCredentials: true,
    extraHeaders: {
        'custom-header': "abcd"
    }
});

export default function socketSetup() {
    clientSocket.on('joined', (message: string) => {
        const msg = JSON.parse(message);
    });
}