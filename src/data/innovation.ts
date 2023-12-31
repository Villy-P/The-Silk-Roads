import { CITIES } from "./city";

export function getInnovationCardSpecialText(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return "Because Baghdad remains an intellectual center, you can also choose an innovation card to take back to your homeland.";
        case CITIES.BEIJING:
            return "You also encounter some novel technologies while in China and decide to secretly add descriptions to your journal to take back with you."
        case CITIES.SAMARKAND:
            return "Next, if you have not yet visited the Tash-Rabat Caravanserai, head there for some rest, and grab an innovation card on your way there.";
    }
}