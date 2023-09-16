<template>
    <div class="h-14 flex border-b-black border-b-2">
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
            <img src="../assets/economic.png" class="w-10">
            <div class="select-none tooltip-container h-full flex items-center">
                <p>{{ store.state.user?.imports.length }}</p>
                <div class="tooltip-text tooltip-bottom">Imports</div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MainView extends Vue {
        store = useStore(key);
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>