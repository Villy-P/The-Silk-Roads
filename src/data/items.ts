export enum ITEMS {
    TEA,
    FURS,
    SILK,
    GOLD,
    RICE,
    WINE,
    SALT,
    TEXTS,
    PAPER,
    LINEN,
    IVORY,
    SUGAR,
    SPICES,
    CAMELS,
    PEARLS,
    SILVER,
    HORSES,
    WEAPONS,
    COMPASS,
    PERFUME,
    PRINTING,
    PORCELAIN,
    GLASSWARE,
    GUNPOWDER,
    ASTROLABE,
    BANK_NOTES,
    WOOL_CLOTH,
    FINE_CLOTHS,
    PERSIAN_RUG,
    COTTON_CLOTH,
    PAPER_MAKING,
    LEATHER_GOODS,
    BYZANTINE_SILK,
    EGYPTIAN_CLOTH,
    PRECIOUS_STONES,
    COTTON_TEXTILES,
    TRANSLATED_TEXT,
}

export function getItemName(item: ITEMS): string {
    switch (item) {
        case ITEMS.TEA:
            return "Tea";
        case ITEMS.FURS:
            return "Fur";
        case ITEMS.SILK:
            return "Silk";
        case ITEMS.GOLD:
            return "Gold";
        case ITEMS.RICE:
            return "Rice";
        case ITEMS.SALT:
            return "Salt";
        case ITEMS.WINE:
            return "Wine";
        case ITEMS.TEXTS:
            return "Texts";
        case ITEMS.PAPER:
            return "Paper";
        case ITEMS.LINEN:
            return "Linen";
        case ITEMS.IVORY:
            return "Ivory";
        case ITEMS.SUGAR:
            return "Sugar";
        case ITEMS.SPICES:
            return "Spices";
        case ITEMS.CAMELS:
            return "Camels";
        case ITEMS.PEARLS:
            return "Pearls";
        case ITEMS.SILVER:
            return "Silver";
        case ITEMS.HORSES:
            return "Horses";
        case ITEMS.WEAPONS:
            return "Weapons";
        case ITEMS.COMPASS:
            return "Compass";
        case ITEMS.PERFUME:
            return "Perfume";
        case ITEMS.PRINTING:
            return "Printing";
        case ITEMS.PORCELAIN:
            return "Porcelain";
        case ITEMS.GLASSWARE:
            return "Glassware";
        case ITEMS.GUNPOWDER:
            return "Gunpowder";
        case ITEMS.ASTROLABE:
            return "Astrolabe";
        case ITEMS.BANK_NOTES:
            return "Bank Notes";
        case ITEMS.WOOL_CLOTH:
            return "Wool Cloth";
        case ITEMS.FINE_CLOTHS:
            return "Fine Cloths";
        case ITEMS.PERSIAN_RUG:
            return "Persian Rug";
        case ITEMS.COTTON_CLOTH:
            return "Cotton CLoth";
        case ITEMS.PAPER_MAKING:
            return "Paper Making";
        case ITEMS.LEATHER_GOODS:
            return "Leather Goods";
        case ITEMS.BYZANTINE_SILK:
            return "Byzantine Silk";
        case ITEMS.EGYPTIAN_CLOTH:
            return "Egyptian Cloth";
        case ITEMS.PRECIOUS_STONES:
            return "Precious Stones";
        case ITEMS.COTTON_TEXTILES:
            return "Cotton Textiles";
        case ITEMS.TRANSLATED_TEXT:
            return "Translated Text";
    }
}

export function getItemAsset(item: ITEMS) {
    switch (item) {
        case ITEMS.TEA:
            return "tea.png";
        case ITEMS.FURS:
            return "fur.png";
        case ITEMS.SILK:
            return "silk.png";
        case ITEMS.GOLD:
            return "gold.jpeg";
        case ITEMS.RICE:
            return "rice.jpeg";
        case ITEMS.WINE:
            return "wine.png";
        case ITEMS.SALT:
            return "salt.jpg";
        case ITEMS.TEXTS:
            return "texts.jpeg";
        case ITEMS.PAPER:
            return "paper.png";
        case ITEMS.LINEN:
            return "linen.png";
        case ITEMS.IVORY:
            return "ivory.png";
        case ITEMS.SUGAR:
            return "sugar.jpeg";
        case ITEMS.SPICES:
            return "spices.png";
        case ITEMS.CAMELS:
            return "camel.png";
        case ITEMS.PEARLS:
            return "pearl.jpeg";
        case ITEMS.SILVER:
            return "silver.png";
        case ITEMS.HORSES:
            return "horse.png";
        case ITEMS.WEAPONS:
            return "weapon.png";
        case ITEMS.COMPASS:
            return "compass.png";
        case ITEMS.PERFUME:
            return "perfume.png";
        case ITEMS.PRINTING:
            return "printing.png";
        case ITEMS.PORCELAIN:
            return "porcelain.png";
        case ITEMS.GLASSWARE:
            return "glassware.png";
        case ITEMS.GUNPOWDER:
            return "gunpowder.png";
        case ITEMS.ASTROLABE:
            return "astrolabe.png";
        case ITEMS.BANK_NOTES:
            return "banknote.jpeg";
        case ITEMS.WOOL_CLOTH:
            return "woolcloth.png";
        case ITEMS.FINE_CLOTHS:
            return "silk.png";
        case ITEMS.PERSIAN_RUG:
            return "rug.jpeg";
        case ITEMS.COTTON_CLOTH:
            return "cottoncloth.jpeg";
        case ITEMS.PAPER_MAKING:
            return "papermaking.jpeg";
        case ITEMS.LEATHER_GOODS:
            return "leather.png";
        case ITEMS.BYZANTINE_SILK:
            return "silk.png";
        case ITEMS.EGYPTIAN_CLOTH:
            return "cottoncloth.jpeg";
        case ITEMS.PRECIOUS_STONES:
            return "preciousgem.png";
        case ITEMS.COTTON_TEXTILES:
            return "cottoncloth.jpeg";
        case ITEMS.TRANSLATED_TEXT:
            return "texts.jpeg";
    }
}