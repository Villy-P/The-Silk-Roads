<template>
    <div class="h-14 flex border-b-black border-b-2 w-full">
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/silver.jpg" class="w-10">
            <div class="select-none">{{ store.state.user?.silver }}</div>
            <div class="tooltip-text tooltip-bottom">Silver</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container">
            <img src="../assets/items/gold.jpg" class="w-10">
            <div class="select-none">{{ store.state.user?.gold }}</div>
            <div class="tooltip-text tooltip-bottom">Gold</div>
        </div>
        <div class="flex items-center justify-center w-fit pl-5">
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ store.state.user?.items.length }}</p>
                <div class="tooltip-text tooltip-bottom">Items</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center cursor-pointer">
                <img src="../assets/economic.png" class="w-10" @click="store.state.showInventory = true">
                <div class="tooltip-text tooltip-bottom">Inventory</div>
            </div>
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ store.state.user?.imports.length }}</p>
                <div class="tooltip-text tooltip-bottom">Imports</div>
            </div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container ml-auto float-right text-right pr-3 cursor-pointer" @click="store.state.showJournal = true">
            <img src="../assets/icon/journal.png" class="w-10">
            <div class="tooltip-text tooltip-left">Journal</div>
        </div>
        <div class="flex items-center justify-center w-fit tooltip-container float-right text-right pr-3 cursor-pointer" @click="store.state.showCultureCards = true">
            <img src="../assets/icon/culture.png" class="w-10">
            <div class="tooltip-text tooltip-left">Culture Cards</div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class NavBar extends Vue {
        store = useStore(key);
    }
</script>