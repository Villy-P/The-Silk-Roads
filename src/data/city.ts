import { ITEMS } from "./items";

export enum CITIES {
    BAGHDAD,
    BEIJING,
    BRUGES,
    CALICUT,
    CONSTANTINOPLE,
    DUNHUANG,
    KASHGAR,
    SAMARKAND,
    TABRIZ,
    VENICE
}

export function getCityName(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Baghdad";
        case CITIES.BEIJING:
            return "Beijing";
        case CITIES.BRUGES:
            return "Bruges";
        case CITIES.CALICUT:
            return "Calicut";
        case CITIES.CONSTANTINOPLE:
            return "Constantinople";
        case CITIES.DUNHUANG:
            return "Dunhuang";
        case CITIES.KASHGAR:
            return "Kashgar";
        case CITIES.SAMARKAND:
            return "Samarkand";
        case CITIES.TABRIZ:
            return "Tabriz";
        case CITIES.VENICE:
            return "Venice";
    }
}

export function getCityDescription(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Despite being sacked and destroyed by the Mongols in 1258, Baghdad continued to be an important hub on the Silk Roads, connected to both overland and maritime trade routes. Under Mongol ruler Hulegu Khan, the city regained its renown as an intellectual and cultural center. Polymath Nasir al-Din al-Tusi was able to save about 40,000 manuscripts from the House of Wisdom, and intellectual and cultural exchanges continued alongside commercial ones. Because Baghdad is connected to so many trade routes, there are many items from which to choose, and Baghdad seems to have more imported goods for resale than the origin countries from which those goods came.";
        case CITIES.BEIJING:
            return "When Marco Polo visited Beijing, he claimed that<br><b>“In every suburb there are many fine hostels which provide lodging for merchants coming from different parts; a particular hostel is assigned to every nation. . . . Merchants and others come here on business in great numbers, both because it is the Khan's residence and because it affords a profitable market...That is why the volume and value of the imports and of the internal trade exceed those of any other city in the world. It is a fact that every day more than 1,000 cart-loads of silk is woven here. All the treasures that come from India - precious stones, pearls, sugar, cotton, gold, ivory and other rarities- are brought here. So too are the choicest products of Cathay [China] itself and every other province.”</b><br>You consult your Merchant Handbook, written by Italian Francesco Pegolotti. His book is the go to for merchants who need to know about the goods and exchanges in major Silk Road cities. In Beijing <br><b>“Cathay (China) is a province which contained a multitude of cities and towns. Among others there is one in particular, that is to say the capital city, to which is a great resort of merchants, and in which there is a vast amount of trade; and this city is called Cambalec (Beijing). And the said city has a circuit of one hundred miles, and is all full of people and houses and of dwellers in the said city...Whatever silver the merchants may carry with them as far as Cathay the lord of Cathay will take from them and put into his treasury in exchange for paper money...and with this money you can readily buy silk and all other merchandise that you have a desire to buy. And I assure you that all the peoples and populations who are subject to his rule are perfectly willing to accept these papers as payment, since wherever they go they pay in the same currency, whether for goods of pearls or precious stones or gold or silver. With these pieces of paper you can buy anything and pay for anything…”</b>";
    }
}

export function getCityImages(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return {items: []};
        case CITIES.BEIJING:
            return {items: [
                {
                    name: "Dening Hall Temple",
                    src: 'dening_hall_temple.png'
                }, {
                    name: "Arch Bridges Of Taicang, built by the Yuan Dynasty",
                    src: 'arch_bridges_of_taicang.png'
                }
            ]};
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

export function getTradingItems(city: CITIES): TradingItems | undefined {
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
            ]};
        case CITIES.BEIJING:
            return {items: [
                {
                    item: ITEMS.SILK,
                    silver: 7,
                    gold: 5
                }, {
                    item: ITEMS.PORCELAIN,
                    silver: 10,
                    gold: 8
                }, {
                    item: ITEMS.SPICES,
                    silver: 12,
                    gold: 10
                }, {
                    item: ITEMS.TEA,
                    silver: 3,
                    gold: 1
                }, {
                    item: ITEMS.PERFUME,
                    silver: 4,
                    gold: 2,
                    displayName: "Musk (Perfume)"
                },  
            ]}
    }
}

export function getCityInnovationCard(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
        case CITIES.BEIJING:
            return true
    }
}