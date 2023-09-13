import { User } from "@/scripts/interface";
import { app } from "./server";

export const users: User[] = [];

export function userFunc() {
    app.get("/usernameexists/:username", (req, res) => {
        const username = req.params.username;
        for (const user of users) {
            if (user.username == username) {
                res.send(true);
                return;
            }
        }
        res.send(false);
    });
}

export function getUserByUsername(username: string): User | undefined {
    return users.find((i) => i.username === username);
}

export function getUserBySocketID(id: string): User | undefined {
    return users.find((i) => i.socketID === id);
}

export function broadcastUsers(socketID: string): string {
    return JSON.stringify({users: users, user: getUserBySocketID(socketID)});
}