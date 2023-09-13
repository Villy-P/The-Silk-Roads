import { ITEMS } from "./items";

export enum MERCHANT {
    ARAB,
    CHINESE,
    HANSEATIC_LEAGUE,
    INDIAN,
    PERSIAN,
    VENETIAN
}

export function  getMerchantBaseExports(m: MERCHANT) {
    switch (m) {
        case MERCHANT.ARAB:
            return [
                ITEMS.SILK,
                ITEMS.PORCELAIN,
                ITEMS.GUNPOWDER,
                ITEMS.PAPER,
                ITEMS.SPICES,
                ITEMS.TEA,
                ITEMS.RICE,
                ITEMS.COMPASS,
                ITEMS.PEARLS,
                ITEMS.PRECIOUS_STONES,
                ITEMS.PAPER_MAKING,
                ITEMS.BANK_NOTES,
                ITEMS.ASTROLABE
            ]
        case MERCHANT.CHINESE:
            return [
                ITEMS.SILK,
                ITEMS.PORCELAIN,
                ITEMS.GUNPOWDER,
                ITEMS.PAPER,
                ITEMS.SPICES,
                ITEMS.TEA,
                ITEMS.RICE,
                ITEMS.COMPASS,
                ITEMS.PEARLS,
                ITEMS.PRECIOUS_STONES,
                ITEMS.PAPER_MAKING,
                ITEMS.BANK_NOTES
            ]
        case MERCHANT.HANSEATIC_LEAGUE:
            return [
                ITEMS.WOOL_CLOTH,
                ITEMS.SILVER,
                ITEMS.FURS,
                ITEMS.COTTON_TEXTILES
            ]
        case MERCHANT.INDIAN:
            return [
                ITEMS.SILK,
                ITEMS.COTTON_CLOTH,
                ITEMS.PAPER,
                ITEMS.SPICES,
                ITEMS.PEARLS,
                ITEMS.IVORY,
                ITEMS.PRECIOUS_STONES
            ]
        case MERCHANT.PERSIAN:
            return [
                ITEMS.HORSES,
                ITEMS.PERSIAN_RUG,
                ITEMS.SUGAR,
                ITEMS.GLASSWARE,
                ITEMS.WEAPONS,
                ITEMS.LEATHER_GOODS,
                ITEMS.TRANSLATED_TEXT,
                ITEMS.ASTROLABE,
                ITEMS.PAPER_MAKING
            ]
        case MERCHANT.VENETIAN:
            return [
                ITEMS.BYZANTINE_SILK,
                ITEMS.LINEN,
                ITEMS.WOOL_CLOTH,
                ITEMS.SILVER,
                ITEMS.WINE,
                ITEMS.EGYPTIAN_CLOTH,
                ITEMS.SUGAR
            ]
    }
}

export function getMerchantBaseImports(m: MERCHANT) {
    switch (m) {
        case MERCHANT.ARAB:
            return [
                ITEMS.SILVER,
                ITEMS.HORSES,
                ITEMS.LINEN,
                ITEMS.FINE_CLOTHS,
                ITEMS.CAMELS,
                ITEMS.PERSIAN_RUG
            ]
        case MERCHANT.CHINESE:
            return [
                ITEMS.SILVER,
                ITEMS.HORSES,
                ITEMS.LINEN,
                ITEMS.FINE_CLOTHS,
                ITEMS.CAMELS,
                ITEMS.PERSIAN_RUG,
                ITEMS.ASTROLABE
            ]
        case MERCHANT.HANSEATIC_LEAGUE:
            return [
                ITEMS.PORCELAIN,
                ITEMS.SILK,
                ITEMS.PRECIOUS_STONES,
                ITEMS.GUNPOWDER,
                ITEMS.SPICES,
                ITEMS.SUGAR,
                ITEMS.GOLD,
                ITEMS.PAPER,
                ITEMS.COMPASS,
                ITEMS.PRINTING,
                ITEMS.PAPER_MAKING,
                ITEMS.TEXTS,
                ITEMS.ASTROLABE
            ]
        case MERCHANT.INDIAN:
            return [
                ITEMS.SILVER,
                ITEMS.PORCELAIN,
                ITEMS.CAMELS,
                ITEMS.PERSIAN_RUG,
                ITEMS.FURS,
                ITEMS.SILK,
                ITEMS.ASTROLABE,
                ITEMS.PAPER_MAKING
            ]
        case MERCHANT.PERSIAN:
            return [
                ITEMS.SILK,
                ITEMS.PORCELAIN,
                ITEMS.SILVER,
                ITEMS.GOLD,
                ITEMS.GUNPOWDER
            ]
        case MERCHANT.VENETIAN:
            return [
                ITEMS.SPICES,
                ITEMS.SILK,
                ITEMS.PORCELAIN,
                ITEMS.SILVER,
                ITEMS.GOLD,
                ITEMS.PAPER_MAKING,
                ITEMS.PERSIAN_RUG,
                ITEMS.LEATHER_GOODS,
                ITEMS.PERFUME,
                ITEMS.GUNPOWDER,
                ITEMS.COMPASS,
                ITEMS.TEXTS,
                ITEMS.ASTROLABE,
            ]
    }
}

export function getMerchantDescription(m: MERCHANT) {
    switch (m) {
        case MERCHANT.ARAB:
            return "Although the Islamic world has fragmented and experienced turmoil amid the Mongol invasions, trade and exchange has benefited from Mongol policies. Arabs continue their centuries-long importance in overland and maritime trade, serving as intermediaries and middlemen in the trade between east and west. Greater safety combined with banknotes that can be exchanged for coin currencies has expanded trade.";
        case MERCHANT.CHINESE:
            return "Under previous dynasties, merchants held a low social status in China, but the Mongols value and encourage trade, so you have flourished under the rule of Kublai Khan. Greater safety combined with banknotes that can be exchanged for coin currencies has expanded trade.";
        case MERCHANT.HANSEATIC_LEAGUE:
            return "Northern Europe isn't exactly a trading powerhouse, but news of the riches of the east have sparked interest in trade and travel, and the Hanseatic League dominates trade in northern Europe. The guild is actually a confederation of guilds and trade towns in Central and Northern Europe. The League (also called the Hansa) essentially has a monopoly over trade from Portugal in the west to England in the north, Russia in the east and Venice in the south. Merchants of the Hansa bring eastern goods to the rest of Europe. The trade fairs of Northern Europe have provided a market for expanding trade, and Northern Europe has a few goods of its own to offer to the east.";
        case MERCHANT.INDIAN:
            return "While we typically associate India with the Indian Ocean trade, India was an important link in the Silk Road trade as well. India was drawn into a wider network of cross-cultural and economic exchange that helped India develop some of the best medieval economies, especially since it served as a connecting point between China and the Middle East.";
        case MERCHANT.PERSIAN:
            return "The invasions of the Mongols were devastating, but luckily you benefit from their favorable attitudes toward trade and their building programs in the cities that bring constant flows of caravans of traders. You also act as an important middleman between the Mediterranean and Asia.";
        case MERCHANT.VENETIAN:
            return "Ever since the Crusades, Venetian merchants have been controlling trade in the Mediterranean and growing wealthy acting as middlemen between Europe and the east. Because you provide this important trade link, much of your wealth comes from the additional taxes you charge on items you sell in Europe";
    }
}