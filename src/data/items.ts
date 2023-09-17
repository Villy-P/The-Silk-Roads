export enum ITEMS {
    TEXTS,
    COMPASS,
    PRINTING,
    GUNPOWDER,
    ASTROLABE,
    PAPER_MAKING,
    TEA,
    FURS,
    SILK,
    GOLD,
    RICE,
    WINE,
    SALT,
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
    PERFUME,
    PORCELAIN,
    GLASSWARE,
    BANK_NOTES,
    WOOL_CLOTH,
    FINE_CLOTHS,
    PERSIAN_RUG,
    COTTON_CLOTH,
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
            return "gold.jpg";
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
            return "silver.jpg";
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

export function isInnovationCard(card: ITEMS) {
    switch (card) {
        case ITEMS.PRINTING:
        case ITEMS.GUNPOWDER:
        case ITEMS.COMPASS:
        case ITEMS.PAPER_MAKING:
        case ITEMS.ASTROLABE:
        case ITEMS.TEXTS:
            return true;
    }
    return false;
}


export function getInnovationDescription(innovation: ITEMS) {
    switch (innovation) {
        case ITEMS.PRINTING:
            return "Printing technology made its way to both the Middle East and Europe. Rashid al-Din marveled at the possibilities of this technology: \n “[W]hen any book was desired, a copy was made by a skillful calligrapher on tablets and carefully corrected by proof-readers... Under this system he had copies made, lent them to friends, and urged them to transcribe them and return the originals. He had Arabic translations made of those works he composed in Persian, and Persian translations of works composed in Arabic. When the translations had been prepared, he deposited them in the library.” Marco Polo also documented the technology in his book.";
        case ITEMS.GUNPOWDER:
            return "By this point, gunpowder was being used to make early forms of firearms and cannons. Muslims acquired gunpowder from China, and several Muslim scholars wrote gunpowder recipes. The earliest records and recipes for gunpowder in Europe appear not long after they appeared in the Islamic world. Gunpowder became its own industry that was improved upon in order to create new weaponry.";
        case ITEMS.COMPASS:
            return "Using his advances in astronomy, the Chinese developed the magnetic needle compass, a far more accurate compass. The needle was reduced in size and attached to a fixed stem (rather than floating in water). In some cases it was put in a small protective case with a glass top, making it suitable for sea travel. The compass made its way west, reaching the Middle East and Europe around 1300.";
        case ITEMS.PAPER_MAKING:
            return "Paper was invented in Han China around the first century CE and reached the Islamic world around the 8th century. It started to replace parchment soon after, and Muslims created paper mills that spread across the Muslim world to Spain. However, papermaking would not reach much of Europe until the 14th century.";
        case ITEMS.ASTROLABE:
            return "The astrolabe was invented in ancient Greece, but during the Islamic golden age, Muslim astronomers improved the astrolave, which can be used to determine latitude and triangulate a position, thus making it a critical instrument for navigators, especially sailors. ";
        case ITEMS.TEXTS:
            return "The Crusades helped introduce many scholarly works (many from the Translation Movement) to Europe, sparking a thirst for more texts on mathematics, science, medicine, astronomy and philosophy. The spread of papermaking and printing enhanced the availability of texts.";
    }
}