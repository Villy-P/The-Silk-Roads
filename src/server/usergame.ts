/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Game } from "./game";
import { User } from "./user";
import { SQLConnection } from "./database";

export interface UserGame extends RowDataPacket {
    id: number;
    userid: number;
    gameid: number;
    isleader: boolean;
}

export class UserGameRepository {
    public static readByID(id: number): Promise<UserGame | undefined> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<UserGame[]>(
                "SELECT * FROM user_game WHERE id = ?", [id],
                (err, res) => {
                    if (err) reject(err);
                    else resolve(res[0]);
                }
            );
        });
    }

    public static startNewGame(game: Game, user: User): Promise<UserGame> {
        return new Promise((resolve, reject) => {
            SQLConnection.query<ResultSetHeader>(
                "INSERT INTO user_game (userid, gameid, isleader) VALUES (?,?,?)",
                [game.id, user.id, true],
                (err, res) => {
                    if (err) reject(err);
                    else UserGameRepository.readByID(res.insertId).then(user_game => resolve(user_game!)).catch(reject)
                }
            );
        });
    }
}