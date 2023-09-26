<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        {{ getCityName() }} Market
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500" style="font-variant: small-caps;">
        <p>Back</p>
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
                <div class="grow px-2 py-2 border-r-black border-r-2">{{ item.displayName || getItemName(item.item) }}</div>
                <div class="text-center w-8 tooltip-container cursor-pointer" style="line-height: 36px;" :class="store.state.user!.silver < item.silver ? 'bg-red-500' : 'bg-white'">
                    <p>{{ item.silver }}</p>
                    <div class="tooltip-text tooltip-left">{{ store.state.user!.silver < item.silver ? 'You can\'t buy this' : 'Buy This Item' }}</div>
                </div>
                <div class="w-0.5 bg-black h-full"></div>
                <div class="text-center w-8 tooltip-container h-full cursor-pointer" style="line-height: 36px;" :class="store.state.user!.gold < item.gold ? 'bg-red-500' : 'bg-white'">
                    <p>{{ item.gold }}</p>
                    <div class="tooltip-text tooltip-left">{{ store.state.user!.gold < item.gold ? 'You can\'t buy this' : 'Buy This Item' }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityName, getTradingItems } from '@/data/city';
    import { ITEMS, getItemName } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MarketView extends Vue {
        store = useStore(key);

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityItems() {
            return getTradingItems(this.store.state.user!.currentCity!).items;
        }

        getItemName(i: ITEMS) {
            return getItemName(i);
        }
    }
</script>