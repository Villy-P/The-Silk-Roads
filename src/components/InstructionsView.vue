<template>
    <h1 class="px-10 font-bold text-5xl">The Silk Roads - Instructions</h1>
    <h1 class="h1">Silver and Gold</h1>
    <p class="p">Silver and Gold are the base currencies used within the game. They can be used at all cities to buy items, or to trade with other players. Each merchant starts off with 8 silver and 5 gold. Gold can be obtained by selling/trading exports, or using bank notes at certain cities.</p>
    <h1 class="h1">Exports and Imports</h1>
    <p class="p">Exports are the items that you have. You gain these by trading with other players, or by buying them from markets in cities. You can also sell these at markets or to other players. Imports are the items that you need. Getting all possible imports wins the game for you. You can buy these from markets, or from other players. Both of these can be seen in the top left corner, next to the money symbol, next to the gold and silver.</p>
    <h1 class="h1">Innovation Cards</h1>
    <p class="p">In certain cities, you may come across an innovation card. These act as regular items. You can collect them, and if one of them is in your imports list, you are one step closer to victory. You can also sell these cards. You may only get one innovation card per city you visit. If you come across a innovation card that you need (in your imports list), it will have a symbol showing you that you need it.</p>
    <h1 class="h1">Culture Cards</h1>
    <p class="p">Some cities will have culture cards that you can collect. They contain various info on the culture within that city, but serve no purpose other than that. You can view them all by pressing the culture icon in the very top right.</p>
    <h1 class="h1">Journal</h1>
    <p class="p">To view previous moves, you can view your journal in the top right. This will track things like entering cities, buying/trading things, collecting culture cards, etc.</p>
    <h1 class="h1">Markets</h1>
    <p class="p">In each city, there is a market. In those markets is where you can purchase or sell certain goods. You can buy and sell goods at the same price, however some cities may have better deals than others. During each city visit, you can only buy/sell one product (If you leave and return, then you can still buy/sell again). If you currently need an item, a warning sign will appear next to that item showing that you can collect it.</p>
    <h1 class="h1">World Map</h1>
    <p class="p">The World Map on the left shows all cities that you can move to. A yellow map tack shows you where you currently are. You can move the map by dragging/scrolling</p>
    <h1 class="h1">Bills and Debt</h1>
    <p class="p">If you are in need of silver/gold, and you have a bank note in your inventory, you may trade them at certain cities for a loan of 20 silver or 10 gold. You instantly get this money, however you are now "in debt" and must pay this back to the lender. In order to do this you may click on the debt tab in the top right corner. The lender may demand the debt back at any time. If you are in need of a bank note, go to the debt tab and take one out.</p>
    <h1 class="h1">Trading</h1>
    <p class="p">In any city, you may trade with all other players in that city. Whenever trading, items in the give column are what you will be paying, and items in the recieve column is what you will be getting. The first row is the actual things you will be trading, and the second row is for the things that you can add to the trade.</p>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class InstructionsView extends Vue {
        store = useStore(key);
    }
</script>

<style lang="scss">
    .h1 {
        @apply text-lg font-bold px-10 py-5
    }

    .p {
        @apply px-10
    }
</style>