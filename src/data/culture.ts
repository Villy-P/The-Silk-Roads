import { CITIES } from "./city";

export function getCultureCard(city: CITIES) {
    switch (city) {
        case CITIES.BEIJING:
            return "Buddhism and Daoism flourished in China for centuries, but Islam also arrived in Tang China as trade increased with Arabs on the Silk Roads. Under the Mongols,  Muslims served as administrators, generals, and other leaders who were transferred to China from Persia and Central Asia. There are 70 mosques in Beijing alone, and there are about 25 million Muslims in China.<br>In the Middle Ages, Christianity also played an important role in China. Nestorian Christians arrived in Tang China in the 7th century, memorialized in the Xi'an Stele—a Tang monument that documents the presence of Christian communities in China. In the 13th century, numerous Christian missionaries and monks traveled to China, including  John of Montecorvino, sent by the pope to meet with Kublai Khan. He built the first Catholic Church in Beijing in 1305 and boasted thousands of converts. "
        case CITIES.CALICUT:
            return "The Vijayanagara kings are also very culturally tolerant, and at this time the Bhakti (devotion) movement is growing popular in India. The Bhakti movement emphasizes a personal relationship with and devotion to a particular Hindu deity (such as Shiva or Vishnu). Devotional practices could include singing hymns of praise to the deity, writing devotional poems, or taking a pilgrimage to a sacred site associated with the deity. While in Calicut, you see the Virupaksha Temple (below), built by a Vijayanagara emperor and devoted to Lord Virupaksha, a local form of Shiva.";
    }
    return null;
}

export function getCultureCardImages(city: CITIES) {
    switch (city) {
        case CITIES.BEIJING:
            return {items: [
                {
                    name: "Niujie Mosque in Beijing, the oldest mosque in the city",
                    src: 'niujie_mosque.png'
                }, {
                    name: "The Cathedral of Immaculate Conception in Beijing",
                    src: 'immaculate_conception_cathedral.png'
                }
            ]};
        case CITIES.CALICUT:
            return {items: [
                {
                    name: "Virupaksha Temple",
                    src: 'virupaksha_temple.png'
                }
            ]};
    }
    return {items:[]};
}