import { User } from "@/scripts/interface";
import { app } from "./server";

const users: User[] = [];

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
