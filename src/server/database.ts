/* eslint-disable @typescript-eslint/no-non-null-assertion */
import SQL from 'mysql2';

export const DATABASE_NAME = process.env.SQL_NAME!;

export const SQLConnection = SQL.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD!,
    port: parseInt(process.env.SQL_PORT!),
    database: DATABASE_NAME
});

export default function SQLFunc() {
    SQLConnection.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to database " + DATABASE_NAME);
    });
}