import { ITEMS } from "./items";

enum MERCHANT {
    ARAB,
    CHINESE,
    HANSEATIC_LEAGUE
}

function getMerchantBaseExports(m: MERCHANT) {
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
    }
}

function getMerchantBaseImports(m: MERCHANT) {
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
    }
}

function getMerchantDescription(m: MERCHANT) {
    switch (m) {
        case MERCHANT.ARAB:
            return "Although the Islamic world has fragmented and experienced turmoil amid the Mongol invasions, trade and exchange has benefited from Mongol policies. Arabs continue their centuries-long importance in overland and maritime trade, serving as intermediaries and middlemen in the trade between east and west. Greater safety combined with banknotes that can be exchanged for coin currencies has expanded trade.";
        case MERCHANT.CHINESE:
            return "Under previous dynasties, merchants held a low social status in China, but the Mongols value and encourage trade, so you have flourished under the rule of Kublai Khan. Greater safety combined with banknotes that can be exchanged for coin currencies has expanded trade.";
        case MERCHANT.HANSEATIC_LEAGUE:
            return "Northern Europe isn’t exactly a trading powerhouse, but news of the riches of the east have sparked interest in trade and travel, and the Hanseatic League dominates trade in northern Europe. The guild is actually a confederation of guilds and trade towns in Central and Northern Europe. The League (also called the Hansa) essentially has a monopoly over trade from Portugal in the west to England in the north, Russia in the east and Venice in the south. Merchants of the Hansa bring eastern goods to the rest of Europe. The trade fairs of Northern Europe have provided a market for expanding trade, and Northern Europe has a few goods of its own to offer to the east.";
    }
}