<template>
    <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
        {{ getCityName() }} Market
    </div>
    <div class="w-10/12 bg-cyan-400 m-auto border-2 border-black py-2 px-4 cursor-pointer hover:bg-cyan-500" style="font-variant: small-caps;">
        <p>Back</p>
    </div>
    <div v-for="item in getCityItems()" :key="item.item">
        <div class="flex">
            <div class="grow">{{ item.displayName || getItemName(item.item) }}</div>
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