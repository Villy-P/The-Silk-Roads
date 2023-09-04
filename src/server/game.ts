/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { SQLConnection } from "./database";

export interface Game extends RowDataPacket {
    id?: number;
    name: string;
    code: string;
}

export class GameRepository {
    public static readByID(id: number): Promise<Game | undefined> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<Game[]>(
                "SELECT * FROM game WHERE id = ?", [id],
                (err, res) => {
                    if (err) reject(err);
                    else resolve(res[0]);
                }
            );
        });
    }

    public static createGame(game: Game): Promise<Game> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<ResultSetHeader>(
                "INSERT INTO game (name, code) VALUES (?, ?)",
                [game.name, game.code],
                (err, res) => {
                    if (err) reject(err);
                    else GameRepository.readByID(res.insertId).then(game => resolve(game!)).catch(reject);
                }
            );
        });
    }

    public static getGameByCode(code: string): Promise<Game | undefined> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<Game[]>(
                  "SELECT * FROM game WHERE code = ?", [code],
                  (err, res) => {
                    if (err) reject(err);
                    else resolve(res[0]);
                  }
            );
        });
    }
}