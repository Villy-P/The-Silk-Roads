export enum USER_STATUS {
    LEADER,
    BASIC
}

export interface User {
    socketID: string;
    username: string;
    status: USER_STATUS;
}