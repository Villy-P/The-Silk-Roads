<template>
    <div class="flex flex-col h-screen w-full overflow-clip">
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
                <div class="select-none tooltip-container h-full flex items-center cursor-pointer">
                    <img src="../assets/economic.png" class="w-10">
                    <div class="tooltip-text tooltip-bottom">Inventory</div>
                </div>
                <div class="select-none tooltip-container h-full flex items-center">
                    <p>{{ store.state.user?.imports.length }}</p>
                    <div class="tooltip-text tooltip-bottom">Imports</div>
                </div>
            </div>
        </div>
        <div class="flex w-full" style="height: calc(100% - 56px);">
            <img src="../assets/world.jpg" class="object-cover w-2/3">
            <div class="bg-white w-1/3 border-l-2 border-l-black overflow-y-auto">
                <div class="text-center py-3 text-3xl" style="font-variant: small-caps;">
                    Welcome To {{ getCityName() }}
                </div>
                <div class="w-11/12 m-auto indent-10" v-html="getCityDescription()"></div>
                <div v-if="getCityInnovationCard()">
                    <div class="w-11/12 m-auto text-center py-5">{{ getInnovationCardSpecialText() }}</div>
                    <div class="w-full flex h-fit m-auto items-center">
                        <div class="h-full w-1/12 flex items-center cursor-pointer" @click="changeInnovationCard(-1)">
                            <img src="../assets/icon/leftarrow.svg">
                        </div>
                        <div class="rounded-xl w-10/12 mx-3 border-2 border-black h-fit">
                            <div class="flex gap-2 items-center w-fit m-auto p-2">
                                <img :src="require(`@/assets/items/${getItemAsset()}`)" class="w-6 h-6">
                                <p>{{ getInnovationCardName() }}</p>
                            </div>
                            <div class="p-3 indent-8 overflow-auto h-fit">{{ getInnovationDescription() }}</div>
                            <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer">Select</div>
                        </div>
                        <div class="h-full w-1/12 flex items-center cursor-pointer" @click="changeInnovationCard(1)">
                            <img src="../assets/icon/rightarrow.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
    import { getCityDescription, getCityInnovationCard, getCityName } from '@/data/city';
    import { INNOVATIONS, getInnovationCardName, getInnovationCardSpecialText, getInnovationDescription, getInnovationImageSrc } from '@/data/innovation';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MainView extends Vue {
        store = useStore(key);

        currentInnovation = INNOVATIONS.PRINTING;

        getCityName() {
            return getCityName(this.store.state.user!.currentCity!);
        }

        getCityDescription() {
            return getCityDescription(this.store.state.user!.currentCity!);
        }

        getInnovationCardSpecialText() {
            return getInnovationCardSpecialText(this.store.state.user!.currentCity!);
        }

        getCityInnovationCard() {
            return getCityInnovationCard(this.store.state.user!.currentCity!);
        }

        getInnovationCardName() {
            return getInnovationCardName(this.currentInnovation);
        }

        getItemAsset() {
            return getInnovationImageSrc(this.currentInnovation);
        }

        getInnovationDescription() {
            return getInnovationDescription(this.currentInnovation);
        }

        changeInnovationCard(amount: number) {
            this.currentInnovation += amount;
            if (this.currentInnovation < 0)
                this.currentInnovation = INNOVATIONS.TEXTS;
            if (this.currentInnovation > INNOVATIONS.TEXTS)
                this.currentInnovation = INNOVATIONS.PRINTING;
        }
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>