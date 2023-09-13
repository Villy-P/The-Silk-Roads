import { ITEMS } from "@/data/items";
import { MERCHANT } from "@/data/merchant";

export enum USER_STATUS {
    LEADER,
    BASIC
}

export interface User {
    socketID: string;
    username: string;
    status: USER_STATUS;
    merchantType: MERCHANT | undefined;
    items: ITEMS[];
    imports: ITEMS[];
}