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
        case CITIES.BRUGES:
            return "Waves of European travelers have set out across the Silk Roads to see for themselves the great wealth of China and the Mongol khanates, and Europe’s commerce and mercantile economy are growing. Bruges’ trade grew due to its involvement with the Hanseatic League, but in the 13th century it established trade ties with Genoa and then Venice, providing access to the Mediterranean trade and its luxury goods. Bruges became known for its wool manufactures and its stock exchange (perhaps the first in the world). Bruges became the prime hub of international trade in north-western Europe.";
        case CITIES.CALICUT:
            return "Calicut (aka Kerala) is a cosmopolitan city of the Malabar Coast of India under control of the Hindu Vijayanagara Empire. It is part of the maritime Silk Road network, and its thriving trade attracts merchants from China, Southeast Asia, Persia, Arabia, East Africa, and other parts of India flock here. Ibn Battuta marveled at the huge Chinese junk ships that brought China’s finest goods here, and Marco Polo noted that this kingdom had “a great quantity of pepper, and ginger, and cinnamon, and of nuts of India. The ships that come from the east [Asia] bring…cloths of silk and gold, and sendels; also gold and silver, cloves, and other fine spices for which there is a demand here, and exchange them for the products of these countries.” Ships can easily access this port from the Red Sea region (Aden, Mecca, East Africa), and goods from here are sold as far away as Venice.";
        case CITIES.CONSTANTINOPLE:
            return `Although the Byzantine Empire is no longer at its height, Constantinople remains an important trade city. Ever since the Fourth Crusade, Venetians have been in economic control of the city and dominate its markets. Ibn Battuta described its merchant activity:<br><b>"It is a busy city, and merchants come to it from every country by sea or land, and there is none like it in the world except Bagdad, the great city of Islam. From every part of the empire of Greece tribute is brought here every year, and they fill strongholds with garments of silk, purple, and gold. Like unto these storehouses and this wealth, there is nothing in the whole world to be found. It is said that the tribute of the city amounts every year to 20,000 gold pieces, derived both from the rents of shops and markets, and from the tribute of merchants who enter by sea or land. The Greek inhabitants are very rich in gold and precious stones, and they go clothed in garments of silk with gold embroidery, and they ride horses, and look like princes. Indeed, the land is very rich in all cloth stuffs, and in bread, meat, and wine....Wealth like that of Constantinople is not to be found in the whole world. Here also are men learned in all the books of the Greeks, and they eat and drink every man under his vine and his fig-tree.”</b><br>The Grand Bazaar (pictured below) is the center of trade, although it would not be constructed until after the Ottoman conquest of 1453.`;
        case CITIES.DUNHUANG: 
            return "Dunhuang is a desert oasis at the edge of the Taklamakan Desert, Dunhuang was one of the first trading cities encountered by merchants arriving in China from the west. The name Dunhuang, meaning \"Blazing Beacon\", refers to the beacons lit to warn of attacks by marauding nomadic tribes. The Mongols rebuilt the city after conquering it, and it is an entrepot of various groups—many Buddhist monks, but also Nestorian Christians and Sogdians from Central Asia. Most impressive, however, are the Mogao Caves, the “Caves of a Thousand Buddhas.” And although they are Buddhist shrines, the caves also represent hundreds of years of syncretism, absorbing cultural elements from Central and Western Asia and Europe. Among the 2,000 sculptures and 45,000 square meters of frescos one can find manuscripts written in numerous languages, Greek style columns and decorative geometric patterns from Persia. A collection of 40,000 scrolls include texts written in Chinese, Tibetan, Sanskrit, Khotanese, Uighur, Sogdian, and Hebrew—just some of the languages of the traders and pilgrims of the Silk Roads. Some scrolls were transcribed using woodblock printing from China, demonstrating its spread across the Silk Roads. ";
        case CITIES.KASHGAR:
            return "Kashgar, in the westernmost region of China, has been a major trade outpost between China, the Middle East, and Europe for over 2,000 years, making it one of the oldest continuously inhabited cities in the world. According to Marco Polo, Kashgar (which he calls Cascar)<br><b>“is a region lying between north-east and east, and constituted a kingdom in former days, but now it is subject to the Great Kaan. The people worship Mahommet (Muhammad). There are a good number of towns and villages, but the greatest and finest is Cascar itself. The inhabitants live by trade and handicrafts; they have beautiful gardens and vineyards, and fine estates, and grow a great deal of cotton. From this country many merchants go forth about the world on trading journeys...There are in the country many Nestorian Christians, who have churches of their own.”</b><br>Kashgar has its own bazaar called the Ivan Bazaar that sells cotton and silk textiles, leatherwear and pottery and is still known as one of the largest markets in the region. It is also known for its livestock marketplace. Below is an image of Kashgar’s bazaar."
        case CITIES.SAMARKAND:
            return "Spanish Ambassador Ruy Gonzalez de Clavijo notes that “distance to Samarqand Timur has established relays of horses kept ready at command...These government studs are stationed both in those desert or uninhabited regions along the route, and in places where there is a settled population, further for this service there have been built caravanserais with hostelries (inns) supplied with provisions...The post-houses have been built at intervals of a day's journey apart, or sometimes of half a day's Journey.” Thus, you reach Samarkand safely and well rested.<br>After the Mongol conquests, Samarkand was rebuilt into “one of the greatest and finest of cities, and most perfect of them in beauty.” A traveler from Spain fills you in on the trade in Samarkand.<br><b>“This land of Samarkand is not only rich in food stuffs but also in manufactures, such as silk...Further they make special fur linings for silk garments, and manufacture things in gold and blue and dyed tints...From India there are brought to Samarkand the most costly of spices, such as nutmegs and cloves and mace with cinnamon and ginger...with many other kinds that are never to be found in the markets of Alexandria [Egypt]…<br>From Russia and Tartary [Central Asia] come leathers and linens, from Cathay [China] silk stuffs that are the finest in the whole world…[and] rubies and diamonds, also pearls. The goods that are imported to Samarkand from Cathay indeed are of the richest and most precious of all those brought thither from foreign parts, for the craftsmen of Cathay are reputed to be the most skilful by far beyond those of any other nation…What’s more, the Khan brought together the best skilled men and master craftsmen and brought them here…”</b><br>Ibn Battuta claimed Samarkand was “one of the greatest and finest of cities, and most perfect of them in beauty. Under the Turko-Mongol ruler Timur (Tamerlane), the city became one of the centers of the Timurid Renaissance. As Ambassador Clavijo attested “trade has always been fostered by Timur with the view of making his capital the noblest of cities: and during all his conquests wheresoever he came he carried off the best men of the population to people Samarqand, bringing thither together the master-craftsmen of all nations.” Thus there are plenty of trade goods from which to choose. Its diversity also contributes to its vast trade markets: “Of the nations brought here together there were to be seen Turks, Arabs and Moors of diverse sects, with Christians who were Greeks and Armenians, Catholics, Jacobites and Nestorians, besides those [Indian] folk who baptize with fire in the forehead, who are indeed Christians but of a faith that is peculiar to their nation.”"
        case CITIES.TABRIZ: 
            return "Tabriz is one of the most important Silk Road Cities. Located in present day Iran, the inhabitants of Tabriz had been wise enough to surrender to the Mongols as their army advanced. Tabriz became the capital of the conquering army. This city is a central location along the Silk Road with colonies of people from Venice, Genoa, and other European countries as well as Armenians, Arabs, and even Chinese traders. Merchants, craftsmen and artisans are very well treated by the Mongols, and the city has grown to four times its previous size. There are also several Christian churches. The Mongol ruler Ghazan constructed the largest bazaar (market) in hundreds of miles and an extensive system of caravanserai to provide traveling merchants with accommodations, information, and resources. Standardized silver coins minted here are accepted from India and South China to the Mediterranean. This international city is one of the greatest centers of learning and culture during the 14th century after the Mongol invasion. There are educational buildings, caravanserai, and new walls erected by Ghazan Khan.<br><b>“From Tabriz the Mongols established relays of horses kept ready at command so that messengers may ride on missions night and day...each year great caravans of camels with merchandise arrive here from Lesser India [i.e., Afghanistan and other territories between Persia and India] who bring with them all kinds of spices. Here too are imported the best sorts of the lesser spices that are not to be found in the Syrian markets, such namely as cloves, nutmegs, cinnamon, manna, mace and the rest. These are prime spices that never reach the markets of Alexandria…” --Ibn Battuta</b><br>And where might one find all these goods? At the Bazaar of Tabriz, one of the oldest bazaars (markets) in the Middle East.<br>Some of your knowledge about the bazaar comes from Marco Polo’s visit here: <b>“a great city surrounded by beautiful and pleasant gardens. It is excellently situated so the goods brought here come from many regions. Latin merchants especially Genevis (Genoese, from Genoa, Italy) go there to buy the goods that come from foreign lands.”</b>"
    }
}

export function getCityImages(city: CITIES) {
    switch (city) {
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
        case CITIES.BRUGES:
            return {items: [
                {
                    name: "Brudges Canal",
                    src: 'bruges_canal.png'
                }
            ]};
        case CITIES.CONSTANTINOPLE:
            return {items: [
                {
                    name: "Grand Bazaar",
                    src: 'grand_bazaar_1.png'
                }, {
                    name: "Grand Bazaar",
                    src: 'grand_bazaar_2.png'
                }
            ]};
        case CITIES.DUNHUANG:
            return {items: [
                {
                    name: "Cave 45 of the Mogoa Crottoes",
                    src: "cave45.png"
                }
            ]};
        case CITIES.KASHGAR:
            return {items: [
                {
                    name: "Kashgar Bazaar",
                    src: "kashgar_bazaar.png"
                }
            ]};
        case CITIES.SAMARKAND:
            return {items: [
                {
                    name: "Timurs's Bibi-Khanym Friday Mosque",
                    src: "friday_mosque.png"
                }
            ]};
        case CITIES.TABRIZ:
            return {items: [
                {
                    name: "Bazaar of Tabriz",
                    src: "tabriz_1.png"
                }, {
                    name: "Bazaar of Tabriz",
                    src: "tabriz_2.png"
                }, {
                    name: "Bazaar of Tabriz",
                    src: "tabriz_3.png"
                }, 
            ]};
    }
    return {items: []};
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
        case CITIES.BRUGES:
            return {items: [
                {
                    item: ITEMS.SPICES,
                    silver: 15,
                    gold: 12,
                    displayName: "Spices from Asia"
                }, {
                    item: ITEMS.SILK,
                    silver: 12,
                    gold: 10,
                    displayName: "Silk from China & Italy"
                }, {
                    item: ITEMS.SUGAR,
                    silver: 10,
                    gold: 8,
                    displayName: "Sugar from the Mediterranean"
                }, {
                    item: ITEMS.SILVER,
                    silver: 10,
                    gold: 8,
                }, {
                    item: ITEMS.GOLD,
                    silver: 10,
                    gold: 8
                }, {
                    item: ITEMS.FURS,
                    silver: 5,
                    gold: 3
                },
            ]};
        case CITIES.CALICUT:
            return {items: [
                {
                    item: ITEMS.SILK,
                    silver: 7,
                    gold: 5,
                }, {
                    item: ITEMS.PORCELAIN,
                    silver: 10,
                    gold: 8,
                }, {
                    item: ITEMS.SPICES,
                    silver: 12,
                    gold: 10,
                }, {
                    item: ITEMS.FINE_CLOTHS,
                    silver: 3,
                    gold: 1,
                }, {
                    item: ITEMS.HORSES,
                    silver: 7,
                    gold: 5,
                    displayName: "Persian Horses"
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 5,
                    gold: 3,
                }, 
            ]};
        case CITIES.CONSTANTINOPLE:
            return {items: [
                {
                    item: ITEMS.BYZANTINE_SILK,
                    silver: 6,
                    gold: 3,
                    displayName: "Embroidered Byzantine Silk"
                }, {
                    item: ITEMS.WINE,
                    silver: 3,
                    gold: 1,
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 5,
                    gold: 3,
                }, {
                    item: ITEMS.COTTON_CLOTH,
                    silver: 3,
                    gold: 1,
                }, {
                    item: ITEMS.PERFUME,
                    silver: 3,
                    gold: 1,
                }, 
            ]};
        case CITIES.DUNHUANG:
            return {items: [
                {
                    item: ITEMS.SILK,
                    silver: 7,
                    gold: 5
                }, {
                    item: ITEMS.COTTON_CLOTH,
                    silver: 3,
                    gold: 2
                }, {
                    item: ITEMS.WOOL_CLOTH,
                    silver: 3,
                    gold: 2
                }, {
                    item: ITEMS.TEA,
                    silver: 2,
                    gold: 1
                }, {
                    item: ITEMS.FURS,
                    silver: 3,
                    gold: 1
                }, {
                    item: ITEMS.PERFUME,
                    silver: 5,
                    gold: 3
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 5,
                    gold: 3,
                    displayName: "Jade Jewelry & Precious Stones"
                }, 
            ]};
        case CITIES.KASHGAR: 
            return { items: [
                {
                    item: ITEMS.COTTON_TEXTILES,
                    silver: 3,
                    gold: 2
                }, {
                    item: ITEMS.TEA,
                    silver: 2,
                    gold: 1
                }, {
                    item: ITEMS.LEATHER_GOODS,
                    silver: 3,
                    gold: 1
                }, {
                    item: ITEMS.HORSES,
                    silver: 7,
                    gold: 5
                }, {
                    item: ITEMS.CAMELS,
                    silver: 5,
                    gold: 3
                }, 
            ]};
        case CITIES.SAMARKAND:
            return { items: [
                {
                    item: ITEMS.SPICES,
                    silver: 12,
                    gold: 10,
                    displayName: "Spices from India"
                }, {
                    item: ITEMS.SILK,
                    silver: 8,
                    gold: 6,
                    displayName: "Chinese Silks"
                }, {
                    item: ITEMS.PERFUME,
                    silver: 5,
                    gold: 3,
                    displayName: "Chinese Musk (Perfume)"
                }, {
                    item: ITEMS.LINEN,
                    silver: 3,
                    gold: 1,
                    displayName: "Russian Linens"
                }, {
                    item: ITEMS.LEATHER_GOODS,
                    silver: 3,
                    gold: 1
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 7,
                    gold: 5
                }, {
                    item: ITEMS.GLASSWARE,
                    silver: 4,
                    gold: 2
                }, 
            ]};
        case CITIES.TABRIZ:
            return { items: [
                {
                    item: ITEMS.SPICES,
                    silver: 10,
                    gold: 8,
                }, {
                    item: ITEMS.SILK,
                    silver: 7,
                    gold: 5,
                }, {
                    item: ITEMS.PERSIAN_RUG,
                    silver: 5,
                    gold: 3,
                }, {
                    item: ITEMS.RICE,
                    silver: 2,
                    gold: 1,
                }, {
                    item: ITEMS.WOOL_CLOTH,
                    silver: 3,
                    gold: 2,
                }, {
                    item: ITEMS.PRECIOUS_STONES,
                    silver: 5,
                    gold: 3,
                }, {
                    item: ITEMS.PERFUME,
                    silver: 3,
                    gold: 2,
                }, 
            ]};
    }
}

export function getCityInnovationCard(city: CITIES) {
    switch (city) {
        case CITIES.BAGHDAD:
        case CITIES.BEIJING:
            return true
    }
    return false;
}