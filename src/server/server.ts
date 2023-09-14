import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { IP_ADDRESS, SERVER_PORT, VUE_PORT } from '../data/data';
import { userFunc } from './users';
import { socketFunc } from './socket';
import crypto from 'crypto'

const options = {
    key: fs.readFileSync('cert\\CA\\localhost\\localhost.decrypted.key', 'utf-8'),
    cert: fs.readFileSync('cert\\CA\\localhost\\localhost.crt', 'utf-8')
};

export const app = express();
export const server = https.createServer(options, app);
export const serverCode = crypto.randomBytes(50).toString('hex');

app.use(cors({ origin: `https://${IP_ADDRESS}:${VUE_PORT}`, credentials: true }));

socketFunc();

app.get('/', (req, res) => {
    res.send("Successfully verified server!");
});

userFunc();

server.listen(SERVER_PORT, () => {
    console.log("Express server listening on port " + SERVER_PORT);
});