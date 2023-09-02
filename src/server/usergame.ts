import { RowDataPacket } from "mysql2";

export interface UserGame extends RowDataPacket {
    id: number;
    userid: number;
    gameid: number;
    isleader: boolean;
}