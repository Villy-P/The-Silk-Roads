<template>
    <div class="flex flex-col h-screen w-full">
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
        <div class="grow flex w-full">
            <img src="../assets/world.jpg" class="object-cover w-2/3">
            <div class="bg-white w-1/3 h-full border-l-2 border-l-black">
                <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
                    Welcome To {{ getCityName() }}
                </div>
                <div class="w-11/12 m-auto indent-10" v-html="getCityDescription()"></div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityDescription, getCityName } from '@/data/city';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MainView extends Vue {
        store = useStore(key);

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityDescription() {
            return getCityDescription(this.store.state.user!.currentCity!);
        }
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>