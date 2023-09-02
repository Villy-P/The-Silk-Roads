import SQL from 'mysql2';

export const DATABASE_NAME = process.env.SQL_NAME;

export const SQLConnection = SQL.createConnection({
    port: process.env.SQL_PORT,
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: DATABASE_NAME
});

SQLConnection.connect((err: SQL.QueryError | null) => {
    if (err)
        throw err;
    console.log("Connected to database " + DATABASE_NAME);
});