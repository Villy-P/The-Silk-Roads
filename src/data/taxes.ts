import { CITIES } from "./city";

export function getTaxAmount(city: CITIES) {
    switch (city) {
        case CITIES.CONSTANTINOPLE:
            return {
                silver: 4,
                gold: 2
            };
    }
    return null;
}

export function getTaxText(city: CITIES) {
    switch (city) {
        case CITIES.CONSTANTINOPLE:
            return "Constantinople derives a lot of revenue from its tax on trade, so you must pay 4 silver coins or 2 gold.";
    }
    return null;
}