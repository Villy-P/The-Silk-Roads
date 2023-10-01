<template>
    <div class="w-11/12 border-2 border-black flex m-auto">
        <p class="w-1/2 p-2">Exports (Things you have)</p>
        <div class="w-0.5 bg-black"></div>
        <p class="w-1/2 p-2">Imports (Things you need)</p>
    </div>
    <div class="w-11/12 border-2 border-t-0 border-black flex m-auto">
        <div class="h-full w-1/2 text-left pl-2 py-2">
            <div v-for="item in store.state.user?.items" :key="item" class="flex gap-2 items-center">
                <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                <p>{{ getItemName(item) }}</p>
            </div>
        </div>
        <div class="w-0.5 bg-black"></div>
        <div class="h-full w-1/2 text-left pl-2 py-2">
            <div v-for="item in store.state.user?.imports" :key="item" class="flex gap-2 items-center">
                <img :src="require(`@/assets/items/${getItemAsset(item)}`)" class="w-6 h-6">
                <p class="pr-3">{{ getItemName(item) }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ITEMS, getItemName, getItemAsset } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class InventoryPage extends Vue {
        store = useStore(key);

        getItemName(i: ITEMS) {
            return getItemName(i);
        }

        getItemAsset(i: ITEMS) {
            return getItemAsset(i);
        }
    }
</script>