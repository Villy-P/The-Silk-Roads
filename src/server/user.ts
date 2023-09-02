/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { SQLConnection } from "./database";

export interface User extends RowDataPacket {
    id: number;
    name: string;
}

export class UserRepository {
    public static readByID(id: number): Promise<User | undefined> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<User[]>(
                "SELECT * FROM user WHERE id = ?", [id],
                (err, res) => {
                    if (err) reject(err);
                    else resolve(res[0]);
                }
            );
        });
    }

    public static createUser(user: User): Promise<User> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<ResultSetHeader>(
                "INSERT INTO user (name) VALUES (?)",
                [user.name],
                (err, res) => {
                    if (err) reject(err);
                    else UserRepository.readByID(res.insertId).then(user => resolve(user!)).catch(reject);
                }
            );
        });
    }
}