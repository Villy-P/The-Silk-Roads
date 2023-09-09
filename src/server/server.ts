import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const options = {
    key: fs.readFileSync('cert\\CA\\localhost\\localhost.decrypted.key', 'utf-8'),
    cert: fs.readFileSync('cert\\CA\\localhost\\localhost.crt', 'utf-8')
};

export const app = express();
export const server = https.createServer(options, app);

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
    res.send("Successfully verified server!");
});