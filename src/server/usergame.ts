/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Game, GameRepository } from "./game";
import { User, UserRepository } from "./user";
import { SQLConnection } from "./database";
import { Express } from "express";
import crypto from 'crypto';
import ip from 'ip';

export interface UserGame extends RowDataPacket {
    id?: number;
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
                [user.id, game.id, true],
                (err, res) => {
                    if (err) reject(err);
                    else UserGameRepository.readByID(res.insertId).then(user_game => resolve(user_game!)).catch(reject)
                }
            );
        });
    }
}

export default function userGameFunc(silkRoads: Express) {
    silkRoads.get("/startNewGame/:gamename", async (req, res) => {
        const gamename = req.params.gamename!;
        const game: Game = await GameRepository.createGame({
            code: crypto.randomBytes(3).toString("hex"),
            name: gamename,
            constructor: { name: "RowDataPacket" }
        });
        const user: User = await UserRepository.createUser({
            name: "New User",
            ip: ip.address(),
            constructor: { name: "RowDataPacket" }
        });
        await UserGameRepository.startNewGame(game, user);
        res.send(JSON.stringify({game: game, user: user, isleader: true}));
    });
}