import { Game, User } from "./sql";

export let currentGame: null | Game = null;
export let currentUser: null | User = null;
export let isLeader = false;

export function setCurrent(game: Game, user: User, isleader: boolean): void {
    currentGame = game;
    currentUser = user;
    isLeader = isleader;
}