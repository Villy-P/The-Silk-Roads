/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const silkRoads = express();

silkRoads.use(session({
    secret: process.env.EXPRESS_SECRET!,
    resave: false,
    saveUninitialized: true
}));

import { SQLConnection, DATABASE_NAME } from './database';

SQLConnection.connect((err) => {
    if (err)
        throw err;
    console.log("Connected to database " + DATABASE_NAME);
});

silkRoads.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Listening on port ${process.env.EXPRESS_PORT}`);
});