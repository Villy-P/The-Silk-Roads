import { Game, User } from "./sql";

export let currentGame: null | Game = null;
export let currentUser: null | User = null;

export function setCurrent(game: Game, user: User): void {
    currentGame = game;
    currentUser = user;
}