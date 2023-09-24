import { CITIES } from "@/data/city";
import { ITEMS } from "@/data/items";
import { MERCHANT } from "@/data/merchant";
import { GAME_STATE } from "./state";

export enum USER_STATUS {
    LEADER,
    BASIC
}

export interface User {
    socketID: string;
    username: string;
    serverCode: string; 
    status: USER_STATUS;
    merchantType?: MERCHANT;
    items: ITEMS[];
    imports: ITEMS[];
    gold: number;
    silver: number;
    currentCity?: CITIES;
    state: GAME_STATE;
    cityInnovations: CITIES[];
    cultureCards: CITIES[];
    journal: string[];
}

export interface Point {
    x: number;
    y: number;
}