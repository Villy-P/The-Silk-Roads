/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';

import socketFunc from './socket';

dotenv.config();

const silkRoads = express();

silkRoads.use(cors());
silkRoads.use(session({
    secret: process.env.EXPRESS_SECRET!,
    resave: false,
    saveUninitialized: true
}));

silkRoads.get('/', (req, res) => {
    res.send('wow')
})

const server = http.createServer(silkRoads);

socketFunc(server);

import { SQLConnection, DATABASE_NAME } from './database';

SQLConnection.connect((err) => {
    if (err)
        throw err;
    console.log("Connected to database " + DATABASE_NAME);
});

server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
});