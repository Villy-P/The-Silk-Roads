<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        {{ getCityName() }} Market
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500" style="font-variant: small-caps;">
        <p>Back</p>
    </div>
    <div class="flex w-10/12 pt-10">
        <div class="w-1/3 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer" :class="buying ? 'bg-cyan-500' : ''" @click="buying = true">
            <p>Buy</p>
        </div>
        <div class="w-1/3 bg-cyan-400 border-2 border-black py-2 px-4 cursor-pointer" :class="!buying ? 'bg-cyan-500' : ''" @click="buying = false">
            <p>Sell</p>
        </div>
    </div>
    <div class="w-10/12 m-auto pt-10">
        <div class="flex border-2 border-black pl-2 justify-center items-center h-10">
            <div class="grow px-2 py-2 border-r-black border-r-2">Name</div>
            <div class="text-center w-8"><img src="../assets/items/silver.jpg"></div>
            <div class="w-0.5 bg-black h-full"></div>
            <div class="text-center w-8"><img src="../assets/items/gold.jpg"></div>
        </div>
        <div v-for="item in getCityItems()" :key="item.item">
            <div class="flex border-2 border-black pl-2 justify-center items-center h-10">
                <div class="grow px-2 py-2">{{ item.displayName || getItemName(item.item) }}</div>
                <div class="w-5 h-5 bg-black flex items-center justify-center rounded-full mr-1 tooltip-container" v-if="store.state.user?.imports.includes(item.item) && buying">
                    <p class="text-white select-none">!</p>
                    <div class="tooltip-text tooltip-left">You need this item!</div>
                </div>
                <div class="w-0.5 bg-black h-full"></div>
                <div class="text-center w-8 tooltip-container cursor-pointer" style="line-height: 36px;" :class="getItemStyle(item, true)">
                    <p>{{ item.silver }}</p>
                    <div class="tooltip-text tooltip-left">{{ getItemTooltip(item, true) }}</div>
                </div>
                <div class="w-0.5 bg-black h-full"></div>
                <div class="text-center w-8 tooltip-container h-full cursor-pointer" style="line-height: 36px;" :class="getItemStyle(item, false)">
                    <p>{{ item.gold }}</p>
                    <div class="tooltip-text tooltip-left">{{ getItemTooltip(item, false) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityName, getTradingItems, TradingItem } from '@/data/city';
    import { ITEMS, getItemName } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MarketView extends Vue {
        store = useStore(key);

        buying = true;

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityItems() {
            return getTradingItems(this.store.state.user!.currentCity!).items;
        }

        getItemName(i: ITEMS) {
            return getItemName(i);
        }

        getItemStyle(i: TradingItem, silver: boolean) {
            if (!this.buying)
                return this.store.state.user!.items.includes(i.item) ? 'bg-white' : 'bg-red-500';
            if (silver && this.buying)
                return this.store.state.user!.silver < i.silver ? 'bg-red-500' : 'bg-white';
            if (!silver && this.buying)
                return this.store.state.user!.gold < i.gold ? 'bg-red-500' : 'bg-white';
        }

        getItemTooltip(i: TradingItem, silver: boolean) {
            if (!this.buying)
                return this.store.state.user!.items.includes(i.item) ? 'Sell this item' : 'You don\'t have this item';
            if (silver && this.buying)
                return this.store.state.user!.silver < i.silver ? 'You don\' have enough silver' : 'Buy this item';
            if (!silver && this.buying)
                return this.store.state.user!.gold < i.gold ? 'You don\' have enough gold' : 'Buy this item';
        }
    }
</script>