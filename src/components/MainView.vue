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
                <div class="flex flex-wrap items-center jusitfy-center w-full text-center gap-3 py-2">
                    <div class="w-8/12 m-auto tooltip-container" v-for="image in getCityImages()?.items" :key="image.name">
                        <img :alt="image.name" :src="require(`@/assets/cities/${image.src}`)">
                        <div class="tooltip-text tooltip-top">{{ image.name }}</div>
                    </div>
                </div>
                <div v-if="getCityInnovationCard() && !store.state.user?.cityInnovations.includes(store.state.user!.currentCity!)">
                    <div class="w-11/12 m-auto text-center py-5">{{ getInnovationCardSpecialText() }}</div>
                    <div class="w-full flex h-fit m-auto items-center">
                        <div class="h-full w-1/12 flex items-center cursor-pointer" @click="changeInnovationCard(-1)">
                            <img src="../assets/icon/leftarrow.svg">
                        </div>
                        <div class="rounded-xl relative w-10/12 mx-3 border-2 border-black h-fit">
                            <div class="citywelcome-warning tooltip-container tooltip-container-abs" v-if="store.state.user?.imports.includes(currentInnovation)">
                                <p>!</p>
                                <div class="tooltip-text tooltip-left">You need this item</div>
                            </div>
                            <div class="flex gap-2 items-center w-fit m-auto p-2">
                                <img :src="require(`@/assets/items/${getItemAsset()}`)" class="w-6 h-6">
                                <p>{{ getInnovationCardName() }}</p>
                            </div>
                            <div class="p-3 indent-8 overflow-auto h-fit">{{ getInnovationDescription() }}</div>
                            <div class="m-auto px-2 py-1 mb-2 border-2 border-black w-fit bg-blue-400 cursor-pointer" @click="selectInnovation">
                                Select this Innovation
                            </div>
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
    import { getCityDescription, getCityImages, getCityInnovationCard, getCityName } from '@/data/city';
    import { getInnovationCardSpecialText } from '@/data/innovation';
    import { ITEMS, getItemAsset, getItemName, getInnovationDescription } from '@/data/items';
    import { key } from '@/store/store';
    import { Vue } from 'vue-class-component';
    import { useStore } from 'vuex';

    export default class MainView extends Vue {
        store = useStore(key);

        currentInnovation = ITEMS.TEXTS;

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
            return getItemName(this.currentInnovation);
        }

        getItemAsset() {
            return getItemAsset(this.currentInnovation);
        }

        getInnovationDescription() {
            return getInnovationDescription(this.currentInnovation);
        }

        changeInnovationCard(amount: number) {
            this.currentInnovation += amount;
            if (this.currentInnovation < 0)
                this.currentInnovation = ITEMS.PAPER_MAKING;
            if (this.currentInnovation > ITEMS.PAPER_MAKING)
                this.currentInnovation = ITEMS.TEXTS;
        }

        getCityImages() {
            return getCityImages(this.store.state.user!.currentCity!);
        }

        selectInnovation() {
            this.store.state.user?.items.push(this.currentInnovation);
            this.store.state.user?.cityInnovations.push(this.store.state.user!.currentCity!);
            this.store.state.socket?.emit('updateUser', this.store.state.user);
        }
    }
</script>

<style lang="scss" src="../styles/tooltip.scss"></style>
<style lang="scss" src="../styles/citywelcome.scss"></style>