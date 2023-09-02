/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';

dotenv.config();

import socketFunc from './socket';
import userGameFunc from './usergame';
import SQLFunc from './database';

SQLFunc();

const silkRoads = express();

silkRoads.use(cors());
silkRoads.use(session({
    secret: process.env.EXPRESS_SECRET!,
    resave: false,
    saveUninitialized: true
}));
userGameFunc(silkRoads);

silkRoads.get('/', (req, res) => {
    res.send('wow')
});

const server = http.createServer(silkRoads);

socketFunc(server);

server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
});