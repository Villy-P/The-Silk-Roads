import { ITEMS } from "./items";

enum CITIES {
    BAGHDAD
}

export function getCityName(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Baghdad";
    }
}

export function getCityDescription(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Despite being sacked and destroyed by the Mongols in 1258, Baghdad continued to be an important hub on the Silk Roads, connected to both overland and maritime trade routes. Under Mongol ruler Hulegu Khan, the city regained its renown as an intellectual and cultural center. Polymath Nasir al-Din al-Tusi was able to save about 40,000 manuscripts from the House of Wisdom, and intellectual and cultural exchanges continued alongside commercial ones. Because Baghdad is connected to so many trade routes, there are many items from which to choose, and Baghdad seems to have more imported goods for resale than the origin countries from which those goods came.";
    }
}

interface TradingItem {
    item: ITEMS,
    silver: number,
    gold: number,
    displayName?: string
}

interface TradingItems {
    items: TradingItem[]
}

export function getTradingItems(city: CITIES): TradingItems {
    switch (city) {
        case CITIES.BAGHDAD:
            return { items: [
                {
                    item: ITEMS.PORCELAIN,
                    silver: 10,
                    gold: 7,
                }, {
                    item: ITEMS.SPICES,
                    silver: 12,
                    gold: 10,
                }, {
                    item: ITEMS.SUGAR,
                    silver: 10,
                    gold: 7,
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 7,
                    gold: 5,
                    displayName: "Diamonds & Precious Stones"
                }, {
                    item: ITEMS.LINEN,
                    silver: 5,
                    gold: 3,
                }, {
                    item: ITEMS.HORSES,
                    silver: 8,
                    gold: 6,
                }, {
                    item: ITEMS.WOOL_CLOTH,
                    silver: 5,
                    gold: 3,
                }, {
                    item: ITEMS.PERFUME,
                    silver: 3,
                    gold: 1,
                }, {
                    item: ITEMS.IVORY,
                    silver: 4,
                    gold: 2,
                    displayName: "Ivory from Africa & India"
                }, {
                    item: ITEMS.PAPER,
                    silver: 3,
                    gold: 1,
                }, {
                    item: ITEMS.SILVER,
                    silver: 8,
                    gold: 6,
                }, {
                    item: ITEMS.GOLD,
                    silver: 8,
                    gold: 6
                }, {
                    item: ITEMS.SALT,
                    silver: 10,
                    gold: 8,
                }, {
                    item: ITEMS.PERSIAN_RUG,
                    silver: 6,
                    gold: 4,
                },
            ]}
    }
}

export function getCityInnovationCard(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return true
    }
}