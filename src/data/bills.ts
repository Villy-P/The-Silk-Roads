import { CITIES } from "./city";

export function canBuyBill(city: CITIES) {
    switch (city) {
        case CITIES.BRUGES:
        case CITIES.VENICE:
            return true;
    }
    return false;
}

export const bill = `{} is also a major financial center thanks to new banking and credit practices. You may now exchange your bills for silver or gold or get a loan (credit) of up to 20 silver coins (15 gold) if you are in need of money (but don’t stay in debt!)`