import { CITIES } from "./city";

export function getTaxAmount(city: CITIES) {
    switch (city) {
        case CITIES.CONSTANTINOPLE:
            return {
                silver: 4,
                gold: 2
            };
        case CITIES.SAMARKAND:
            return {
                silver: 2,
                gold: 1
            }
    }
    return null;
}

export function getTaxText(city: CITIES) {
    switch (city) {
        case CITIES.CONSTANTINOPLE:
            return "Constantinople derives a lot of revenue from its tax on trade, so you must pay 4 silver coins or 2 gold.";
        case CITIES.SAMARKAND:
            return "The ruler Timur also charges customs duties on all trade in Samarkand. You must leave an additional gold coin or 2 silver coins";
    }
    return null;
}