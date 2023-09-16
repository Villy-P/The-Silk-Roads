import { CITIES } from "./city";

enum INNOVATIONS {
    PRINTING,
    GUNPOWDER,
    COMPASS,
    PAPERMAKING,
    ASTROLABE,
    TEXTS
}

export function getInnovationCardSpecialText(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Because Baghdad remains an intellectual center, you can also choose an innovation card to take back to your homeland.";
        case CITIES.BEIJING:
            return "You also encounter some novel technologies while in China and decide to secretly add descriptions to your journal to take back with you."
    }
}

export function getInnovationDescription(innovation: INNOVATIONS) {
    switch (innovation) {
        case INNOVATIONS.PRINTING:
            return "Printing technology made its way to both the Middle East and Europe. Rashid al-Din marveled at the possibilities of this technology: \n “[W]hen any book was desired, a copy was made by a skillful calligrapher on tablets and carefully corrected by proof-readers...Under this system he had copies made, lent them to friends, and urged them to transcribe them and return the originals. He had Arabic translations made of those works he composed in Persian, and Persian translations of works composed in Arabic. When the translations had been prepared, he deposited them in the library.” Marco Polo also documented the technology in his book.";
        case INNOVATIONS.GUNPOWDER:
            return "By this point, gunpowder was being used to make early forms of firearms and cannons. Muslims acquired gunpowder from China, and several Muslim scholars wrote gunpowder recipes. The earliest records and recipes for gunpowder in Europe appear not long after they appeared in the Islamic world. Gunpowder became its own industry that was improved upon in order to create new weaponry.";
        case INNOVATIONS.COMPASS:
            return "Using his advances in astronomy, the Chinese developed the magnetic needle compass, a far more accurate compass. The needle was reduced in size and attached to a fixed stem (rather than floating in water). In some cases it was put in a small protective case with a glass top, making it suitable for sea travel. The compass made its way west, reaching the Middle East and Europe around 1300.";
        case INNOVATIONS.PAPERMAKING:
            return "Paper was invented in Han China around the first century CE and reached the Islamic world around the 8th century. It started to replace parchment soon after, and Muslims created paper mills that spread across the Muslim world to Spain. However, papermaking would not reach much of Europe until the 14th century.";
        case INNOVATIONS.ASTROLABE:
            return "The astrolabe was invented in ancient Greece, but during the Islamic golden age, Muslim astronomers improved the astrolave, which can be used to determine latitude and triangulate a position, thus making it a critical instrument for navigators, especially sailors. ";
        case INNOVATIONS.TEXTS:
            return "The Crusades helped introduce many scholarly works (many from the Translation Movement) to Europe, sparking a thirst for more texts on mathematics, science, medicine, astronomy and philosophy. The spread of papermaking and printing enhanced the availability of texts.";
    }
}

export function getInnovationImageSrc(innovation: INNOVATIONS): string {
    switch (innovation) {
        case INNOVATIONS.PRINTING:
            return "printing.png";
        case INNOVATIONS.GUNPOWDER:
            return "gunpowder.png";
        case INNOVATIONS.COMPASS:
            return "compass.png";
        case INNOVATIONS.PAPERMAKING:
            return "paper.png";
        case INNOVATIONS.ASTROLABE:
            return "astrolabe.png";
        case INNOVATIONS.TEXTS:
            return "texts.jpeg";
    }
}