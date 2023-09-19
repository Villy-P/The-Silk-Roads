import { CITIES } from "./city";

export function getCultureCard(city: CITIES) {
    switch (city) {
        case CITIES.BEIJING:
            return "Buddhism and Daoism flourished in China for centuries, but Islam also arrived in Tang China as trade increased with Arabs on the Silk Roads. Under the Mongols,  Muslims served as administrators, generals, and other leaders who were transferred to China from Persia and Central Asia. There are 70 mosques in Beijing alone, and there are about 25 million Muslims in China.<br>In the Middle Ages, Christianity also played an important role in China. Nestorian Christians arrived in Tang China in the 7th century, memorialized in the Xi'an Stele—a Tang monument that documents the presence of Christian communities in China. In the 13th century, numerous Christian missionaries and monks traveled to China, including  John of Montecorvino, sent by the pope to meet with Kublai Khan. He built the first Catholic Church in Beijing in 1305 and boasted thousands of converts. "
    }
    return null;
}

export function getCultureCardImages(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
            return {items:[]};
        case CITIES.BEIJING:
            return {items: [
                {
                    name: "Niujie Mosque in Beijing, the oldest mosque in the city",
                    src: '@/assets/culture/niujie_mosque.png'
                }, {
                    name: "The Cathedral of Immaculate Conception in Beijing",
                    src: '@/assets/culture/immaculate_conception_cathedral.png'
                }
            ]};
    }
}